if(document.getElementsByTagName("head")[0]){         
	var fc_cssNode = document.createElement('link');
	fc_cssNode.type = 'text/css';
	fc_cssNode.rel = 'stylesheet';
	fc_cssNode.href = FCChatConfig.dir + 'css/fcchat.css';
	fc_cssNode.media = 'screen';
	document.getElementsByTagName("head")[0].appendChild(fc_cssNode);
	var fc_style = document.createElement('style');
	fc_style.type = 'text/css';
	document.getElementsByTagName("head")[0].appendChild(fc_style);
	if (fc_style.styleSheet) {
		fc_style.styleSheet.cssText = FCChatConfig.dynamicStyles;
	} else {
		var fc_tt1 = document.createTextNode(FCChatConfig.dynamicStyles);
		fc_style.appendChild(fc_tt1);
	}
}else{
	document.write("<link rel='stylesheet' href='" + FCChatConfig.dir + "css/fcchat.css' type='text/css'>");
	document.write("<style>"+FCChatConfig.dynamicStyles+"</style>");
}
if(FCChatConfig.show_flags){
	document.write("<div><div id='fc_geo_locator' style=''><script type='text/javascript' src='http://www.seocentro.com/geo/geocc.pl'></script>hello</div></div>");
	}
document.write("<div id='fc_install'><div id='fc_domain' style='display: none;'>none</div>");

jGo.scripts.importClass('jGo.DefaultWindow.pack.js', 'static', this,
		null,null,1);

//General mobile browser
jGo.mobile_list=/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i;
jGo.mobile = (jGo.mobile_list.test(navigator.userAgent.toLowerCase()));

//iphone/iPod mods
jGo.istuff=/iphone|ipad|ipod/i;
jGo.iphone = (jGo.istuff.test(navigator.userAgent.toLowerCase()));

jGo.toolbar_left=0;
jGo.toolbar_top=0;

if(jGo.mobile&&FCChatConfig.toolbar_banner_mode){
	jGo.$(document.body).prepend(jGo.$(document.createElement('div')).attr('id','fc_banner').css({'height':FCChatConfig.toobar_banner_height+'px'}).html("&nbsp;"));
	FCChatConfig.toolbar_position="topleft";
	FCChatConfig.toolbar_mode=2;
	jGo.toolbar_left=FCChatConfig.toolbar_banner_left_offset;
	jGo.toolbar_top=FCChatConfig.toolbar_banner_top_offset;
}

document.write("<div class='jGo_myapp'><div id='jGo_win0' class='jGo_app jGo_myapp'></div><div id='jGo_win1' class='jGo_app jGo_myapp'></div><div id='jGo_win2' class='jGo_app jGo_myapp'></div><div id='jGo_win3' class='jGo_app jGo_myapp'></div><div id='jGo_win4' class='jGo_app jGo_myapp'></div><div id='jGo_win5' class='jGo_app jGo_myapp'></div><div id='jGo_win6' class='jGo_app jGo_myapp'></div><div id='jGo_win7' class='jGo_app jGo_myapp'></div><div id='jGo_win8' class='jGo_app jGo_myapp'></div><div id='jGo_win9' class='jGo_app jGo_myapp'></div></div>");
//Initialization
jGo.scripts.onLoad('jGo.DefaultWindow.pack.js');
document.write("<div id='fc_fla' style='position:absolute; top: 0px; left:-9px;border:0px solid #aaaaaa'><div  id='fc_flaToggle'>");
document.write('</div><div id="fc_sounds">' +
'</div></div>');
document.write("</div><div id='fc_hideContent'>");

jGo.browser.init();
if(FCChatConfig.preload_images || (jGo.browser.browser=='Explorer' && (jGo.browser.version=='5' || jGo.browser.version=='6'))){
document.write("<DIV style='display:none'><IMG SRC='" + FCChatConfig.dir +"current_skin/trans.gif'><IMG SRC='" + FCChatConfig.dir +"closewindow.gif'><IMG SRC='" + FCChatConfig.dir +"current_skin/chatelems1.gif'><IMG SRC='" + FCChatConfig.dir +"current_skin/rmarrow.gif'><IMG SRC='" + FCChatConfig.dir +"current_skin/maxwin.gif'><IMG SRC='" + FCChatConfig.dir +"current_skin/minwin.gif'><IMG SRC='" + FCChatConfig.dir +"current_skin/removebutton.gif'><IMG SRC='" + FCChatConfig.dir +"current_skin/Video.gif'><IMG SRC='" + FCChatConfig.dir +"images/avatars/fastcat_0.jpg'></DIV>");
}