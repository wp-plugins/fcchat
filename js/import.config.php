<?php
	/* Modified version of import.config.js for wordpress
	*/
?>
//Path to FCPlayer Folder (must end in a backslash)' .
var fc_chat_path = "<?php echo $_GET['path']; ?>/";
if(!window["FCChatConfig"]){
	document.write("<script type='text/javascript' src='" + fc_chat_path + "config/config.js'></script>");
}