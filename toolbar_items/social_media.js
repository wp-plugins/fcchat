
/*
 * Social media menu item
 */

//Social media style template
jGo.toolbar.style.social_media={
	//media controls which sites are listed and their order of appearance.
	//Each site represented in media must have corresponding sitecode entry below.
	media:["facebook","twitter","google","stumbleupon","linkedin","digg"], 
	menu_item:{
		width:52,
		button:{
			left:10
		}
	},
	dialog_box:{
		width:200,
		height:275,
		css:jGo.toolbar.style.dialog_box.css,
		title_box_css:jGo.toolbar.style.dialog_box.title_box_css,
		info_box_css:"top:40px;left:0px;height:235px;",
		text:jGo.toolbar.style.dialog_box.text,
	}
};

//Social media functions
jGo.toolbar.social_media = {};

(function () {
	
	var jQ = jGo.$;
	var z_b = FCChatConfig.zindex_base;
	var basedir = FCChatConfig.dir;
	var rendered=0;
	var sitecode={};
	var config =jGo.toolbar.style.social_media;
	var media = config.media;
	var url = encodeURIComponent(window.location.href);
	
	//Facebook
    sitecode.facebook = function(pos){
    	return "<div style='position:absolute;top:3px;left:10px'><b>Facebook</b></div>" +
    	"<iframe onload='this.style.visibility=\"visible\";' src='//www.facebook.com/plugins/like.php?href="+url+"&amp;send=false&amp;layout=button_count&amp;width=130&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21'" +
		"scrolling='no' frameborder='0' style='position:absolute;top:0px;left:70px;border:none; visibility:hidden; overflow:hidden; width:130px; height:21px;' allowTransparency='true'></iframe>";
    };
	//Twitter
    sitecode.twitter = function(pos){
    	return "<div style='position:absolute;top:3px;left:10px'><b>Twitter</b></div>" +
		"<iframe onload='this.style.visibility=\"visible\";' title='Twitter For Websites: Tweet Button' style='position:absolute;visibility:hidden;width:130px;top:0px;left:60px;height: 20px;' class='twitter-share-button' data-count='horizontal' src='https://platform.twitter.com/widgets/tweet_button.html?id=twitter_tweet_button_0&amp;lang=en&amp;related=twitterapi&amp;text=Tweet%20Button' allowtransparency='true' scrolling='no' frameborder='0'></iframe>";
    };
	//Google +1
    sitecode.google = function(pos){
    	return "<div style='position:absolute;top:3px;left:10px'><b>Google</b></div>" +
    			"<div style='position:absolute;top:2px;left:60px;overflow:hidden; width:130px; height:25px;'>"+
    			"<script type='text/javascript' src='https://apis.google.com/js/plusone.js'></script>"+
    			"<g:plusone size='small' annotation='inline' width='130'></g:plusone>"+
				"</div>";

    };
	//StumbleUpon
    sitecode.stumbleupon = function(pos){
    	return "<div style='position:absolute;top:3px;left:10px'><b>StumbleUpon</b></div>" +
    	"<iframe onload='this.style.visibility=\"visible\";' src='"+basedir+"html/su.html?url="+url+"'" +
		"scrolling='no' frameborder='0' style='position:absolute;visibility:hidden;top:-7px;left:85px;border:none; overflow:hidden; width:115px; height:25px;' allowTransparency='true'></iframe>";
    };
	//LinkedIn
    sitecode.linkedin = function(pos){
    	return "<div style='position:absolute;top:3px;left:10px'><b>LinkedIn</b></div>" +
    	"<iframe onload='this.style.visibility=\"visible\";' src='"+basedir+"html/linkedin.html?url="+url+"'" +
		"scrolling='no' frameborder='0' style='position:absolute;visibility:hidden;top:-7px;left:60px;border:none; overflow:hidden; width:130px; height:30px;' allowTransparency='true'></iframe>";
    };
	//Digg
    sitecode.digg = function(pos){
    	return "<div style='position:absolute;top:3px;left:10px'><b>Digg this</b></div>" +
    	"<iframe onload='this.style.visibility=\"visible\";' src='"+basedir+"html/digg.html?url="+url+"'" +
		"scrolling='no' frameborder='0' style='position:absolute;visibility:hidden;top:-7px;left:65px;border:none; overflow:hidden; width:130px; height:30px;' allowTransparency='true'></iframe>";
    };
	
	function EN(value) {
        var n = parseInt(value);
        return(n == null || isNaN(n) ? 0: n);
    };
   
	jGo.toolbar.social_media.create = function()    {return create_menu_item();};
	jGo.toolbar.social_media.create_dialogs = function()    {return create_dialog();};
	jGo.toolbar.social_media.append_dialogs = function()    {return append_dialog();};
	jGo.toolbar.social_media.tgl_dialog = function()    {return tgl_dialog();};
	
	var create_menu_item = function(){
	  return"<div class='fc_share_button' style='position: absolute;width:"+config.menu_item.width+"px;top:"+ (jGo.toolbar.style.icons_16px.top+fc_chat.get_ie_offset()) + "px; left: "+config.menu_item.button.left+"px;'>" +
			"<div class='fc_abbtn' ><a title='"+fc_chat.textSetter(343,'Share')+"' href='javascript:jGo.toolbar.social_media.tgl_dialog()' ><img src='"+basedir+"current_skin/twitter.png'><img src='"+basedir+"current_skin/facebook.png'>&nbsp;</a></div></div>";
	};
	var create_dialog = function(){
		  dialog= "<div class='jGo_app jGo_myapp jGo_dialog' id='fc_social_media_dialog' style='position:absolute;display: none;visibility: visible;"+config.dialog_box.css+";text-align:left;height:"+config.dialog_box.height+"px;width:"+config.dialog_box.width+"px;top: 113px; left:210px; z-index:" + (z_b + 104) + ";overflow:hidden;'>" +
			"<div id='fc_social_media_dialog_title' style='position:absolute;width:"+config.dialog_box.width+"px;"+config.dialog_box.title_box_css+";overflow:hidden'><div style='padding:4px;'><span style='"+config.dialog_box.text.title_css+"'>Share</span>&nbsp;&nbsp;&nbsp;<a style='"+config.dialog_box.text.link_css+"' href='javascript:jGo.toolbar.social_media.tgl_dialog()'>Close</a></div></div>" +
			"<div  id='fc_view_social_media_dialog' style='position:absolute;width:"+config.dialog_box.width+"px;"+config.dialog_box.info_box_css+";overflow:auto'></div></div>";
			return dialog;
	};
	var render_dialog_content = function(){
		var content="<div style='padding:3px;overflow:auto;"+config.dialog_box.text.css+";line-height:120%'>&nbsp;"+fc_chat.textSetter(344,'Share this site with others')+":<br>";
		var n=1;
		for (var site in media) {
        	if(media.hasOwnProperty(site)){
        		content+="<div style='position:absolute;top:"+(n*30)+"px;left:0px;width:200px;height:30px'>" + sitecode[media[site]]() + "</div>";
        		n++;
        	}
        }
		jQ("#fc_view_social_media_dialog").html(content);
	};
	var append_dialog = function(){
		document.body.appendChild(jQ("#fc_social_media_dialog")[0]);
	};
	var tgl_dialog = function(){
		if(jQ("#fc_social_media_dialog").css("display")!="none"){
			jQ("div.jGo_dialog").css("display","none");
		}else{
			jQ("div.jGo_dialog").css("display","none");
			fc_chat.close_boxes();
			position_dialog();
			if(rendered==0){
				render_dialog_content();
				rendered=1;
			}
			jQ("#fc_social_media_dialog").css("display","block");
		}
	};
	var position_dialog = function(){
		var elem = (fc_chat.getexp6()?"#fc_toolbar_inner":"#fc_toolbar");
		var pos = (fc_chat.getexp6()?"absolute":"fixed");
		var basepos = Math.max(3,EN(jQ(elem).css("left"))+EN(jQ("#fc_social_media_toolbar_item").css("left")));
		var subtract = Math.min(0,fc_chat.getToolbarWidth()-EN(jQ("#fc_social_media_toolbar_item").css("left"))-(config.dialog_box.width+3));
		jQ("#fc_social_media_dialog").css({
			position:pos,
			top:(EN(jQ(elem).css("top"))-(FCChatConfig.toolbar_position.substr(0,1)=='t'?-jGo.toolbar.style.height-4:7+275))+'px',
			left:basepos+(basepos+subtract>3?subtract:0)+"px"});
	};

})();

//Class Initialization
if(jGo.scripts)jGo.scripts.onLoad('social_media.js');