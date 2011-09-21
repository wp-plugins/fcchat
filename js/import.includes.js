jGo.scripts.importClass('jGo.browser.min.js', 'static', this,
			null);

document.write("<script language='JavaScript' src='" + FCChatConfig.dir + "languages/" + FCChatConfig.language_template + "'></script>");
document.write("<script language='JavaScript' src='" + FCChatConfig.dir + "styles/" + FCChatConfig.chatcenter_style_template + "'></script>");
document.write("<script language='JavaScript' src='" + FCChatConfig.dir + "styles/" + FCChatConfig.widget_style_template + "'></script>");

if(FCChatConfig.flashEnabled=='test'){
	FCChatConfig.flashEnabled=false;
	if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"])
	{
		FCChatConfig.flashEnabled = !(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin==null);
	}
	else if (document.all && (navigator.appVersion.indexOf("Mac")==-1))
	{
		eval ('try {var fcchat_xObj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if (fcchat_xObj) FCChatConfig.flashEnabled = true; fcchat_xObj = null; } catch (e) {}');
	}
}
if(FCChatConfig.websocketEnabled=='test'){
	FCChatConfig.websocketEnabled=false;
	if("WebSocket" in window){
		FCChatConfig.websocketEnabled=true;
	}
}

if(FCChatConfig.flashEnabled){
	document.write("<script type='text/javascript' src='" + FCChatConfig.dir + "js/flash.tag.min.js'></script>");
}else{
	document.write("<script type='text/javascript' src='" + FCChatConfig.dir + "js/fcchat.websocket.min.js'></script>");
}
document.write("<script type='text/javascript' src='" + FCChatConfig.dir + "js/jquery.sound.min.js'></script>");
document.write("<script language='JavaScript' src='" + FCChatConfig.dir + "js/css.vars.js'></script>");
document.write("<script language='JavaScript' src='" + FCChatConfig.dir + "js/page.init.js'></script>");

function fc_chat_load_from_link(elem,mode){
	try{
		if(window.fc_chat && fc_chat.try_connection(mode) =="1"){
			jQuery("span.fc_chat_link_msg").remove();
			fc_chat.open_chat_box(1,mode);
		}else{
			alert(fc_chat.textSetter(160));
		}
	}catch(e){
		alert(fc_chat.textSetter(160));
	}
};

jGo.domIsReady = false;
jGo.loadCalled = false;
jQuery(document).ready(function() {
  jGo.domIsReady = true;
  if(window.fc_chat&&window.fc_chat.initialized){
    setTimeout("fc_chat.loader()",250);
    jGo.loadCalled = true;
  }
});
jQuery(window).unload(function() {
	if(window.fc_chat&&fc_chat.getPause()==1){
		jGo.cookie.setCookie("fc_pauseChat", "0", null, "/", FCChatConfig.domain);
	}
});
