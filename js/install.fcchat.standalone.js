fcchat.prototype = jGo.UI;
var fc_chat= new fcchat();

fc_chat.inSession=1;
fc_chat.uid='-1';

//var n;
if(!FCChatConfig.default_on){
	if(jGo.cookie.getCookie("fc_tglChat")!='1'){
		jGo.cookie.setCookie("fc_tglChat",'0',null,'/',FCChatConfig.domain);
	}
}
if(jGo.cookie.getCookie("fc_data")==null||jGo.cookie.getCookie("fc_data").split('&').length!=12){
	fc_chat.init_cdata();
}
var fc_sc=jGo.cookie.getCookie(FCChatConfig.user_cookie);if((fc_sc!=null)&&(fc_sc!="")&&(fc_sc!="0")){fc_chat.uid=fc_sc}

if (fc_chat.uid=='-1' || fc_chat.uid==-1){
	fc_chat.inSession=0;
	if(!FCChatConfig.auto_connect){
		FCChatConfig.txt.t100=FCChatConfig.startText;
	}
}
jGo.cookie.setCookie(FCChatConfig.user_cookie,fc_chat.uid,null,'/',FCChatConfig.domain);
if (!document.all){
 document.addEventListener( "mousemove", fc_chat.mtrack, true );
}else{
 document.attachEvent( "onmousemove", fc_chat.mtrack );
}
fc_chat.InitDragDrop();
fc_chat.browser=fc_chat.BrowserDetectBrowser();
fc_chat.version=fc_chat.BrowserDetectVersion();
if(fc_chat.browser=='Explorer' && (fc_chat.version=='5' || fc_chat.version=='6')){
	fc_chat.setExp6();
}
if(fc_chat.browser!='Explorer' && fc_chat.browser!='Opera'){
	fc_chat.setMoz();
}
if(fc_chat.browser=='Safari'||fc_chat.browser=='Mozilla'){
	fc_chat.setWebkit();
}
if(fc_chat.browser=='Netscape'){fc_chat.setInterval(120);fc_chat.setOffset(35);}

if(fc_chat.browser=='Opera'){fc_chat.setOffset(20);}

if(fc_chat.browser=='Firefox'){
	fc_chat.setOffset(25);
	fc_chat.setFF((fc_chat.version-0)>3,fc_chat.version=='3.6')
}

if (jGo.cookie.getCookie("fc_browser")==null || jGo.cookie.getCookie("fc_browser")==""){
	jGo.cookie.setCookie("fc_browser",fc_chat.browser,null,"/",FCChatConfig.domain);
}

function addLoadListener(fn)
{
 if (typeof window.addEventListener != 'undefined')
 {
   window.addEventListener('load', fn, false);
 }
 else if (typeof document.addEventListener != 'undefined')
 {
   document.addEventListener('load', fn, false);
 }
 else if (typeof window.attachEvent != 'undefined')
 {
   window.attachEvent('onload', fn);
 }
 else
 {
   var oldfn = window.onload;
   if (typeof window.onload != 'function')
   {
     window.onload = fn;
   }
   else
   {
     window.onload = function()
     {
       oldfn();
       fn();
     };
   }
 }
}
addLoadListener(fc_chat.loader);
jQuery(window).unload(function() {
	if(fc_chat.getPause()==1){
		jGo.cookie.setCookie("fc_pauseChat", "0", null, "/", FCChatConfig.domain);
	}
});
if (top==self){
	if(FCChatConfig.styles.chat_toolbox.absolute_positioning&&!FCChatConfig.noshow){fc_chat.writeBox()}
	if(jGo.cookie.getCookie('fc_tglChat')=='0'){fc_chat.setTgl(0);fc_chat.obtn=fc_chat.textSetter(4);FCChatConfig.txt.t100=fc_chat.textSetter(102);}
	if(jGo.cookie.getCookie('fc_pauseChat')=='1'){FCChatConfig.txt.t100=fc_chat.textSetter(103);}
}