<?php
/**
*
* @FCChat configuration proxy for joomla
* @copyright (c) 2009- Robert Beach (fastcatsoftware.com)
*
* Use this file to establish a proxy between fcchat and joomla.
*
*/


// Set flag that this is a parent file
define( '_JEXEC', 1 );
// no direct access
defined( '_JEXEC' ) or die( 'Restricted access' );
define( 'DS', DIRECTORY_SEPARATOR );
define('JPATH_BASE', dirname(__FILE__) .DS. '..' .DS. '..' .DS. '..' .DS. '..');
require_once ( JPATH_BASE .DS.'includes'.DS.'defines.php' );
require_once ( JPATH_BASE .DS.'includes'.DS.'framework.php' );
require_once( dirname(__FILE__).DS. '..'.DS.'..'.DS.'fcchat-config.php' );
JDEBUG ? $_PROFILER->mark( 'afterLoad' ) : null;

/**
 * CREATE THE APPLICATION
 *
 * NOTE :
 */
$mainframe =& JFactory::getApplication('site');
$mainframe->initialise();

jimport( 'joomla.application.module.helper' );
jimport( 'joomla.html.parameter' );

    function get_fcchat_widget_options($params) {
  	return fcchat_array_merge(fcchat_widget_options(),$params);
    }

    function fcchat_array_merge($Arr1, $params)
    {
  	foreach($Arr1 as $key => $Value)
  	{
      		//Compatible with previous versions
      		if($key=='chat_id'){
			if($params->get('chatid')&&$Arr1['chat_id']['value']==''){
      				$Arr1['chat_id']['value'] = $params->get('chatid');
			}
      		}
      		if($params->get($key))
      		$Arr1[$key]['value'] = $params->get($key);
  	}
  	return$Arr1;
    }

	//$module = &JModuleHelper::getModule('fcchat');
	$db = JFactory::getDBO();
	$query = "
  	SELECT params
    	FROM ".$db->nameQuote('#__modules')."
    	WHERE ".$db->nameQuote('module')." = ".$db->quote('mod_fcchat').";
  	";
	$db->setQuery($query);
	$result = $db->loadResult();
	$params = new JRegistry();
	$params->loadString($result); 
	$options = get_fcchat_widget_options($params);
	$plugin_url = JURI::base() . '../';
	$javascript = 'if(!window["FCChatConfig"]){window["FCChatConfig"] = {}}(function(){var a = window["FCChatConfig"];a.delay_import=false;';
	foreach($options as $key => $value){
		if($key=='custom_buttons'||$key=='templates'||$key=='quickstyling'||$key=='chatbox'){
				$javascript .= 'a.' . $key . '=' . '{' . $options[$key]['value'] . '};';
		}else if($options[$key]['type']!='hidden'&&$options[$key]['type']!='comment'&&$key!='template_overrides'){
			if($options[$key]['quote']=='1'||($options[$key]['quote']=='2'&&$options[$key]['value']!='true'&&$options[$key]['value']!='false')){
				$javascript .= 'a.' . $key . '=' . '"' . $options[$key]['value'] . '";';
			}else{
				if($options[$key]['value']==''){
					$options[$key]['value']='""';
				}
				$javascript .= 'a.' . $key . '=' . str_replace("window['fc_chat_path']",'"' . $plugin_url . '"',$options[$key]['value']) . ';';
			}
		}
	}
	$javascript .= '})();';
	echo $javascript;


?>