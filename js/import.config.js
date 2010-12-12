//Path to FCPlayer Folder (must end in a backslash)
//var fc_chat_path = "/FCChat/"; //Modified for wordpress
var fc_chat_path = document.URL.split("?")[0];
fc_chat_path=fc_chat_path.substr(0,fc_chat_path.length-13);
if(!window["FCChatConfig"]){
	document.write("<script type='text/javascript' src='" + fc_chat_path + "config/config.js'></script>");
}