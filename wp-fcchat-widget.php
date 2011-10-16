<?php
/*
Plugin Name: FCChat Widget
Plugin URI: http://www.fastcatsoftware.com
Description: Add full featured chat to the sidebar.
Version: 2.2.3
Author: Fastcat Software
Author URI: http://www.fastcatsoftware.com
License: GPL2
*/

/*  Copyright 2010 Fastcat Software (www.fastcatsoftware.com)

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

//widgit scripts

function add_header_script(){
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
                echo '<script type="text/javascript">document.write("</div>" + (FCChatConfig.forum_proxy==""?FCChatConfig.load_standalone:FCChatConfig.load_integrated));</script>';    
        }
}

// Inserts scripts into page
add_action( 'wp_print_scripts', 'add_header_script' );
add_action('wp_footer','add_footer_script');

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

//the widget
function fcchat_widget_init() {
        
        if ( !function_exists('register_sidebar_widget') )
                return;
                        
        function sanitizer($name) {
		$name = strtolower($name); // all lowercase
		$name = preg_replace('/[^a-z0-9 ]/','', $name); // nothing but a-z 0-9 and spaces
		$name = preg_replace('/\s+/','-', $name); // spaces become hyphens
		return $name;
        }
                
        // Options and default values for this widget
        function fcchat_widget_options() {
                 return array(
			'title' => 'Chat',
			'host' => '',
			'chatid' => ''
		);
        }

	  //Echo widget to sidebar
        function fcchat_widget($args) {
  		extract($args);
		$options = array_merge(fcchat_widget_options(), get_option('fcchat_widget'));
		$plugin_url = trailingslashit( get_bloginfo('wpurl') ).PLUGINDIR.'/'. dirname( plugin_basename(__FILE__) );
  		echo $before_widget;
  		echo $before_title . $options['title'] . $after_title;
  		echo '<div id="fc_package"><script type="text/javascript" src="'.$plugin_url.'/js/install.prep.js"></script><script type="text/javascript" >FCChatConfig.chat_id="'. $options['chatid'] . '";FCChatConfig.host="'. $options['host'] . '";</script></div><script type="text/javascript" src="'.$plugin_url.'/js/embed.js"></script>';
  		echo $after_widget;
	  }
                
        //widget control form
        function fcchat_widget_control() {
                if(($options = get_option('fcchat_widget')) === FALSE) $options = array();
                $options = array_merge(fcchat_widget_options(), $options);
		unset($options[0]); //returned by get_option(), but we don't need it

		// If user is submitting custom option values for this widget
		if ( $_POST['fcchat-submit'] ) {
                        // Remember to sanitize and format use input appropriately.
                        foreach($options as $key => $value){
				$options[$key] = strip_tags(stripslashes($_POST['fcchat-'.sanitizer($key)]));
			}
                        
                        // Save changes
			update_option('fcchat_widget', $options);
		}
        
                //Go to activation page
		echo '<p style="text-align:left"><b>Step 1:</b> <a href="http://www.fastcatsoftware.com/chat/wp-activation.aspx" TARGET="_blank" >Click here to activate your chat</a></p>';
		   
		//Upgrade notice 
		echo '<p style="text-align:left"><b>Upgrade notice:</b>Upgrading to version 2.2.3 from a version prior to 2.1.8 requires that you obtain a new chat ID from the link above.</p>';
		    echo '<p style="text-align:left"><b>Step 2:</b> Enter your activation info below, and press save.</p>';
		
		//Title                
		echo '<p style="text-align:left"><label for="fcchat-title">Title: <input style="width: 200px;" id="fcchat-title" name="fcchat-title" type="text" value="'.$options['title'].'" /></label></p>';
                                        
                //Host
                 echo '<p style="text-align:left"><label for="fcchat-host">Host: <br/><input id="fcchat-host" name="fcchat-host" type="text" value="'.$options['host'].'" /></label></p>';
                
                //Chat ID
                echo '<p style="text-align:left"><label for="fcchat-chatid">Chat ID: <br/><input id="fcchat-chatid" name="fcchat-chatid" type="text" value="'.$options['chatid'].'" /></label></p>';
                
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

?>