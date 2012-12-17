<?php
$FCCHAT_BASE_URL="http://YOURDOMAIN.COM/FCChat/";
?>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html>
<head>
<meta name="viewport" content="width=500, initial-scale=.8, user-scalable=no">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script>
var fc_chat_path = "";
var fcchat_domain="fullpage";

</script>
<!-- Begin Fastcat Header Insert -->
<script type="text/javascript" src="<?php echo $FCCHAT_BASE_URL;?>js/import.google.loader.js"></script>
<script type="text/javascript" src="<?php echo $FCCHAT_BASE_URL;?>js/import.config.js"></script>


<script type="text/javascript">
//Proxy config
if(FCChatConfig['proxy_type']){
document.write("<script type='text/javascript' src='<?php echo $FCCHAT_BASE_URL;?>proxies/" + FCChatConfig['proxy_type'] + "_config_proxy.php'></" + "script>");
}
</script>
<script type="text/javascript" src="<?php echo $FCCHAT_BASE_URL;?>js/import.libs.js"></script>

<script type="text/javascript">
//toolbar items
FCChatConfig.toolbar_items=["fullpage:logo","friendscenter","fullpage:spacer"];

//General mobile browser
var mobile_list=/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i;
var mobile = (mobile_list.test(navigator.userAgent.toLowerCase()));
if(mobile){
	FCChatConfig.toolbar_banner_mode=true;
}
</script>
<script type="text/javascript" src="<?php echo $FCCHAT_BASE_URL;?>js/import.includes.js"></script>
<script type="text/javascript">

//Proxy template adjustments
if(FCChatConfig['proxy_type']){
document.write("<script type='text/javascript' src='<?php echo $FCCHAT_BASE_URL;?>proxies/" + FCChatConfig['proxy_type'] + "_template_proxy.php'></" + "script>");
}
</script>
<script type="text/javascript">
<!--
function getQuerystring(key, default_){
	if (default_== null){
    	default_= null;
	}
	var search = unescape(location.search);
	if (search == ""){
    	return default_;
	}
	search = search.substr(1);
	var params = search.split("&");
	for (var i = 0; i < params.length; i++){
    	var pairs = params[i].split("=");
    	if(pairs[0] == key){
        		return pairs[1];
    	}
	}
	return default_;
}
var fcchat_room_transfer = getQuerystring("rmid");

document.documentElement.style.overflow= 'hidden';

FCChatConfig.default_on=true;
FCChatConfig.window_height_offset=0;
FCChatConfig.chat_room_height_offset=0;
FCChatConfig.absolute_positioning=true;
FCChatConfig.styles.widget.control.top=0;
FCChatConfig.styles.widget.control.left=0;
FCChatConfig.styles.widget.control.css="display:none;";
FCChatConfig.toolbar_mode=2;   
FCChatConfig.toolbar_default_display=1; 
FCChatConfig.toolbar_position="bottomright";  



//-->
</script>
</head>
<body style='background-color:#dddddd;font-family:arial;font-size:20px;font-weight:bold;'>
<script>
jGo.$(document.body).css(FCChatConfig.quickstyling.alldomains.full_page_css_obj);
</script>
<script type="text/javascript" src="<?php echo $FCCHAT_BASE_URL;?>js/install.prep.adv.js"></script>
<script type="text/javascript" src="<?php echo $FCCHAT_BASE_URL;?>js/embed.js"></script>
<div id='popup_box_header' style='position:absolute;'>
</div>
<script type="text/javascript">document.write((true?FCChatConfig.load_standalone_bsc:FCChatConfig.load_integrated_bsc));</script>
<script>

function clear_popup_header(){
	var v = jGo.$('#popup_box_header')[0];
	v.style.display="none";
}
function set_popup_header(top,txt){
	var v = jGo.$('#popup_box_header')[0];
	v.style.display="block";
	v.innerHTML=txt;
	jGo.$(v).css({"top": top + "px","left": ( jGo.$(window).width() - jGo.$(v).width() ) / 2+jGo.$(window).scrollLeft() + "px"});
}
set_popup_header((jGo.util.getInnerHeight())/2,(FCChatConfig.big_logo!=''?"<img align=absmiddle height=80px style='height:80px;width:80px;' src="+FCChatConfig.big_logo+">":"")+ " " + FCChatConfig.full_page_loading + "&nbsp;<img height='24px' onload='this.style.visibility=\"visible\";' style='visibility:hidden;width:24px;height:24px' ALIGN='absmiddle' src='<?php echo $FCCHAT_BASE_URL;?>current_skin/ajax-loader.gif'>");
</script>
</body></html>
