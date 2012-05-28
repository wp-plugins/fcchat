<?php
/*
Plugin Name: FCChat Widget
Plugin URI: http://www.fastcatsoftware.com
Description: Add full featured chat to the sidebar.
Version: 2.2.12.1
Author: Fastcat Software
Author URI: http://www.fastcatsoftware.com
License: GPL2
*/

/*  Copyright 2012 Fastcat Software (www.fastcatsoftware.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as 
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

include('wp-fcchat-config.php');

$options;
$plugin_url = trailingslashit( get_bloginfo('wpurl') ).PLUGINDIR.'/'. dirname( plugin_basename(__FILE__) ).'/';


function get_fcchat_widget_options() {
	if(($options = get_option('fcchat_widget')) === FALSE) $options = array();
  	return fcchat_array_merge(fcchat_widget_options(), $options);
}

function fcchat_array_merge($Arr1, $Arr2)
{
  foreach($Arr2 as $key => $Value)
  {
      //Compatible with previous versions
      if($key=='chatid'){
		if($Arr1['chat_id']['value']==''){
      			$Arr1['chat_id']['value'] = $Value;
		}
      }
      if(array_key_exists($key, $Arr1))
      $Arr1[$key]['value'] = $Value;
  }

  return $Arr1;

}

function sanitizer($name) {
	$name = strtolower($name); // all lowercase
	$name = preg_replace('/[^a-z0-9 ]/','', $name); // nothing but a-z 0-9 and spaces
	$name = preg_replace('/\s+/','-', $name); // spaces become hyphens
	return $name;
}

//folder array
function folder_array($path, $exclude = ".|..") {
    if(is_dir($path)){
        $dh = opendir($path);
        $exclude_array = explode("|", $exclude);
        $result = array();
        while(false !==($file = readdir($dh))) { 
            if( !in_array(strtolower($file), $exclude_array)){
	$result[] = $file;
            }
        }
        closedir($dh);
        return $result;
    }
}

//widget header js
function add_header_js(){
	global $options,$plugin_url;
        if (!is_admin()){
		$options = get_fcchat_widget_options();
		echo '<script type="text/javascript">if(!window["FCChatConfig"]){window["FCChatConfig"] = {}}(function(){var a = window["FCChatConfig"];';
		foreach($options as $key => $value){
			if($options[$key]['type']!='comment'){
				if($options[$key]['quote']=='1'||($options[$key]['quote']=='2'&&$options[$key]['value']!='true'&&$options[$key]['value']!='false')){
					echo 'a.' . $key . '=' . '"' . $options[$key]['value'] . '";';
				}else{
					if($options[$key]['value']==''){
						$options[$key]['value']='""';
					}
					echo 'a.' . $key . '=' . str_replace("window['fc_chat_path']",'"' . $plugin_url . '"',$options[$key]['value']) . ';';
				}
			}
		}
		echo '})();</script>';

        }
}


//widgit scripts
function add_header_scripts(){
        $plugin_url = trailingslashit( get_bloginfo('wpurl') ).PLUGINDIR.'/'. dirname( plugin_basename(__FILE__) );
        if (!is_admin()){
		    wp_register_script('fc-chat-import-google.loader', $plugin_url.'/js/import.google.loader.js');
                wp_enqueue_script('fc-chat-import-google.loader');
		    wp_register_script('fc-chat-import-config', $plugin_url.'/js/import.config.php?path='.str_ireplace(array(".","http"), array("||period||","||protocol||"), $plugin_url).'&t=1');
               wp_enqueue_script('fc-chat-import-config');
		    wp_register_script('fc-chat-import-libs', $plugin_url.'/js/import.libs.js');
                wp_enqueue_script('fc-chat-import-libs');
		    wp_register_script('fc-chat-import-includes', $plugin_url.'/js/import.includes.js');
                wp_enqueue_script('fc-chat-import-includes');
		     
        }
}

function add_footer_script(){
        $plugin_url = trailingslashit( get_bloginfo('wpurl') ).PLUGINDIR.'/'. dirname( plugin_basename(__FILE__) );
        if (!is_admin()){
                echo '<script type="text/javascript">document.write("</div>" + (true?FCChatConfig.load_standalone:FCChatConfig.load_integrated));</script>';    
        }
}

// Inserts scripts into page
add_action( 'wp_print_scripts', 'add_header_js' );
add_action('wp_enqueue_scripts', 'add_header_scripts');
add_action('wp_footer','add_footer_script');

//the widget
function fcchat_widget_init() {
        if ( !function_exists('register_sidebar_widget') )
                return;      

	//Echo widget to sidebar
        function fcchat_widget($args) {
		global $options;
  		extract($args);
		//$options = get_fcchat_widget_options();
		$plugin_url = trailingslashit( get_bloginfo('wpurl') ).PLUGINDIR.'/'. dirname( plugin_basename(__FILE__) );
  		echo $before_widget;
  		echo $before_title . $options['title']['value'] . $after_title;
  		echo '<div id="fc_package"><script type="text/javascript" src="'.$plugin_url.'/js/install.prep.js"></script><script type="text/javascript" ></script></div><script type="text/javascript" src="'.$plugin_url.'/js/embed.js"></script>';
  		echo $after_widget;
	}
                
        //widget control form
        function fcchat_widget_control() {
                $options = get_fcchat_widget_options();
		$options2 = array();
		//unset($options[0]); //returned by get_option(), but we don't need it

		// If user is submitting custom option values for this widget
		if ( $_POST['fcchat-submit'] ) {
                        // Remember to sanitize and format use input appropriately.
                        foreach($options as $key => $value){
				if(isset($_POST['fcchat-'.$key])){
					$options[$key]['value'] = str_replace('"', '&quot;', stripslashes($_POST['fcchat-'.$key]));
				}
				$options2[$key] = $options[$key]['value'];
			}
                        
                        // Save changes
			update_option('fcchat_widget', $options2);
		}
        
                //Go to activation page
		echo '<p style="text-align:left"><b>Step 1:</b> <a href="http://www.fastcatsoftware.com/chat/wp-activation.aspx" TARGET="_blank" >Click here to activate your chat</a></p>';
		   
		//Upgrade notice 
		echo '<p style="text-align:left"><b>Upgrade notice:</b> If you are upgrading from a previous version, please read the <a target=_blank href="http://www.fastcatsoftware.com/chat/userguide/upgrading2.2.12.asp">Upgrade Notice</a>.<br>Upgrading from a version prior to 2.1.8 requires that you obtain a new chat ID from the link above.</p>';
		    echo '<p style="text-align:left"><b>Step 2:</b> Enter your activation info below, and press save.</p>';
		
		//Title                
		echo '<p style="text-align:left"><label for="fcchat-title">Title: <input style="width: 200px;" id="fcchat-title" name="fcchat-title" type="text" value="'.$options['title']['value'].'" /></label></p>';
                                        
                //Host
                 echo '<p style="text-align:left"><label for="fcchat-host">Host: <br/><input id="fcchat-host" name="fcchat-host" type="text" value="'.$options['host']['value'].'" /></label></p>';
                
                //Chat ID
                echo '<p style="text-align:left"><label for="fcchat-chat_id">Chat ID: <br/><input id="fcchat-chat_id" name="fcchat-chat_id" type="text" value="'.$options['chat_id']['value'].'" /></label></p>';
                
		//Links
		echo '<p style="text-align:left">Here are some other helpful links:</p>';
		echo '<p style="text-align:left"><a href="http://www.fastcatsoftware.com/chat/userguide/Step6.asp" TARGET="_blank" >FCChat Configuration Topics</a></p>';
		echo '<p style="text-align:left"><a href="http://www.fastcatsoftware.com/chat/Manual.html" TARGET="_blank" >FCChat Manual</a></p>';
		echo '<p style="text-align:left">If you need assistance, or have any ideas on making this product better, please contact us at <a href="mailto:support@fastcatsoftware.com">support@fastcatsoftware.com</a></p>';

                // Submit
                echo '<input type="hidden" id="fcchat-submit" name="fcchat-submit" value="1" />';
        }
        // This registers our widget so it appears with the other available
        // widgets and can be dragged and dropped into any active sidebars.
        //register_sidebar_widget('FCChat Widget', 'fcchat_widget');
        wp_register_sidebar_widget( 'fcchat-widget', 'FCChat Widget', 'fcchat_widget');

        // This registers our optional widget control form.
        wp_register_widget_control('fcchat-widget', 'FCChat Widget', 'fcchat_widget_control');
}

// Run code later in case this loads prior to any required plugins.
add_action('plugins_loaded', 'fcchat_widget_init');

//Administration page

// mt_settings_page() displays the page content for the FCChat settings submenu
function fcchat_settings_page() {

    //must check that the user has the required capability 
    if (!current_user_can('manage_options'))
    {
      wp_die( __('You do not have sufficient permissions to access this page.') );
    }

    $options = get_fcchat_widget_options();
    $options2 = array();
    //unset($options[0]); //returned by get_option(), but we don't need it

	// If user is submitting custom option values for this widget
	if ( $_POST['fcchat-settings-submit'] && $_POST['fcchat-settings-submit']=='1') {
                  // Remember to sanitize and format use input appropriately.
                 foreach($options as $key => $value){
			if(isset($_POST['fcchat-'.$key])){
    				$options[$key]['value'] = str_replace('"', '&quot;', stripslashes($_POST['fcchat-'.$key]));	
			}
			$options2[$key] = $options[$key]['value'];
		}
                        
                // Save changes
		update_option('fcchat_widget', $options2)


        // Put an settings updated message on the screen

?>
<div class="updated"><p><strong><?php _e('Settings Saved.', 'menu-test' ); ?></strong></p></div>
<?php

    	}
	if ( $_POST['fcchat-settings-submit'] && $_POST['fcchat-settings-submit']=='2') {
                // Remember to sanitize and format use input appropriately.
		$options=fcchat_widget_options();
		if(($options3 = get_option('fcchat_widget')) === FALSE) $options3 = array();
		if(isset($options3['chatid'])){
			$options2['chat_id'] = $options3['chatid'];
		}
		if(isset($options3['chat_id'])){
			$options2['chat_id'] = $options3['chat_id'];
		}
		if(isset($options3['host'])){
			$options2['host'] = $options3['host'];
		}
                        
                // Save changes
		update_option('fcchat_widget', $options2);
		$options = get_fcchat_widget_options();

        // Put an settings updated message on the screen

?>
<div class="updated"><p><strong><?php _e('Settings Reset.', 'menu-test' ); ?></strong></p></div>
<?php

    	}
    // Now display the settings editing screen

    echo '<div class="wrap">';

    // header

    echo "<h2>" . __( 'FCChat Plugin Settings', 'menu-test' ) . "</h2>";

    // settings form
    
    ?>

<form name="form1" method="post" action="">
<input type="hidden" id="fcchat-settings-submit" name="fcchat-settings-submit" value="1" />

<?php
_e('This page is an HTML implemention of the FCChat configuration file (fcchat/config/config.js). For a complete description of the functions and usage of the variables below, refer to the FCChat manual. You can restore the settings to their default values by pressing the reset button below', 'menu-test' );
echo '<br /><br />';
foreach($options as $key => $value){
	if($options[$key]['type']=='comment'){
		echo '<br /><br /><div style="color:blue;font-weight:bold"><big>';
		_e($options[$key]['desc'], 'menu-test' ); 
		echo '</big></div><br>';
	}else if($options[$key]['type']=='text'){
		echo '<p>' . _e($options[$key]['desc'], 'menu-test' ); 
		echo '<b>' . $key . '</b>&nbsp; <input type="text" name="fcchat-' . $key . '" value="' . $options[$key]['value'] . '" size="' . $options[$key]['sz'] . '">';
		echo '</p><hr />';
	}else if($options[$key]['type']=='radio'){
		echo '<p><b>' . $key . '</b>&nbsp; ' . _e($options[$key]['desc'], 'menu-test' ); 
		echo '<input type="radio"  name="fcchat-' . $key . '" value="true" ' . ($options[$key]['value'] == "true"? 'checked="checked"':'') . ' /> Yes&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio"  name="fcchat-' . $key . '" value="false" ' . ($options[$key]['value'] == "false"? 'checked="checked"':'') . ' /> no ';
		echo '</p><hr />';
	}else{
		echo '<p><b>' . $key . '</b>&nbsp; ' . _e($options[$key]['desc'], 'menu-test' ); 
		foreach($options[$key]['ops'] as $op => $val){
			echo '<input type="radio"  name="fcchat-' . $key . '" value="' . $options[$key]['ops'][$op]['value'] . '" ' . ($options[$key]['value'] == $options[$key]['ops'][$op]['value']? 'checked="checked"':'') . ' /> ' . $options[$key]['ops'][$op]['desc'] . '&nbsp;&nbsp;&nbsp;';
		}
		echo '</p><hr />';
	}
}

?>

<p class="submit">
<input type="submit" name="Submit" class="button-primary" value="<?php esc_attr_e('Save Changes') ?>" />
<input type="submit" name="Reset" class="button-primary" onclick="if(confirm('<?php esc_attr_e('Are you sure you want to restore the settings to their default values?') ?>')){document.getElementById('fcchat-settings-submit').value='2'}else{return false};" value="<?php esc_attr_e('Reset Settings') ?>" />
</p>

</form>
</div>

<?php
 
}

add_action('admin_menu', 'fcchat_add_pages');

// action function for above hook
function fcchat_add_pages() {
    // Add a new submenu under Settings:
    add_options_page(__('FCChat Settings','menu-test'), __('FCChat Settings','menu-test'), 'manage_options', 'testsettings', 'fcchat_settings_page');
}

?>