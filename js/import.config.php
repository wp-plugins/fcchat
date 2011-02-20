<?php
	/* Modified version of import.config.js for wordpress
	*/
	$chars = array(">", "<");
?>
//Path to FCPlayer Folder (must end in a backslash)' .
var fc_chat_path = "<?php echo str_replace($chars, "", $_GET['path']); ?>/";
if(!window["FCChatConfig"]){
	document.write("<script type='text/javascript' src='" + fc_chat_path + "config/config.js'></script>");
}