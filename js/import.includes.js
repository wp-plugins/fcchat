jGo.scripts.importClass('jGo.browser.min.js', 'static', this,
			null);
if(FCChatConfig.use_menus){
jGo.scripts.importClass('jGo.DefaultMenu.js', 'static', this,
		null);
}
jGo.toolbar = {};
document.write("<script language='JavaScript' src='" + FCChatConfig.dir + "languages/" + FCChatConfig.language_template + "'></script>");
document.write("<script language='JavaScript' src='" + FCChatConfig.dir + "styles/" + FCChatConfig.toolbar_style_template + "'></script>");
document.write("<script language='JavaScript' src='" + FCChatConfig.dir + "styles/" + FCChatConfig.chatcenter_style_template + "'></script>");
document.write("<script language='JavaScript' src='" + FCChatConfig.dir + "styles/" + FCChatConfig.widget_style_template + "'></script>");
for(var i = 0;i<FCChatConfig.toolbar_items.length;i++){
	if(FCChatConfig.toolbar_items[i]!="friendscenter"){
		document.write("<script language='JavaScript' src='" + FCChatConfig.dir + "toolbar_items/"+FCChatConfig.toolbar_items[i]+".js'></script>");
	}
}

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
			jGo.$("span.fc_chat_link_msg").remove();
			fc_chat.open_chat_box(null,1,mode);
		}else{
			alert(fc_chat.textSetter(160));
		}
	}catch(e){
		alert(fc_chat.textSetter(160));
	}
};

jGo.domIsReady = false;
jGo.loadCalled = false;

jGo.$(document).ready(function() {
  jGo.domIsReady = true;
  if(window.fc_chat&&window.fc_chat.initialized){
    setTimeout("fc_chat.loader()",250);
    jGo.loadCalled = true;
  }
});
jGo.$(window).unload(function() {
	if(window.fc_chat&&fc_chat.getPause()==1){
		var date = new Date();
    	date.setTime(date.getTime()+(365*24*60*60*1000));
		jGo.cookie.setCookie("fc_pauseChat", "0", (FCChatConfig.cookie_expires==0?null:date), "/", FCChatConfig.domain);
	}
});
jGo.country_code='';
if(FCChatConfig.show_country_flags){
	jGo.$.post(FCChatConfig.dir+'proxies/getloc.php',{c1:FCChatConfig.ipinfodb_api_key,c2:FCChatConfig.data_cookie}, function(data) {
		data=data.split("<getloc>");
	  if(data.length>1){
		  jGo.country_code=data[1];
		  if(window.fc_chat&&window.fc_chat.initialized){
			  window.fc_chat.put_c(data[1],13);
		  }
	  }
	});
};