
/*
 * WP Search menu item
 */

//WP Search style template
jGo.toolbar.style.wp_search={
	menu_item:{
		width:32,
		button:{
			left:7
		}
	},
	dialog_box:{
		width:250,
		height:113,
		css:jGo.toolbar.style.dialog_box.css,
		title_box_css:jGo.toolbar.style.dialog_box.title_box_css,
		info_box_css:"top:40px;left:0px;height:73px;",
		text:jGo.toolbar.style.dialog_box.text
	}
};

//WP Search functions
jGo.toolbar.wp_search = {};

(function () {
	var action_url = "./";
	var jQ = jGo.$;
	var z_b = FCChatConfig.zindex_base;
	var basedir = FCChatConfig.dir;
	var rendered=0;
	var config =jGo.toolbar.style.wp_search;
	
	function EN(value) {
        var n = parseInt(value);
        return(n == null || isNaN(n) ? 0: n);
    };
   
	jGo.toolbar.wp_search.create = function()    {return create_menu_item();};
	jGo.toolbar.wp_search.create_dialogs = function()    {return create_dialog();};
	jGo.toolbar.wp_search.append_dialogs = function()    {return append_dialog();};
	jGo.toolbar.wp_search.tgl_dialog = function()    {return tgl_dialog();};
	
	var create_menu_item = function(){
	  return"<div class='fc_wp_search_button' style='position: absolute;width:"+config.menu_item.width+"px;top:"+ (jGo.toolbar.style.icons_16px.top+fc_chat.get_ie_offset()) + "px; left: "+config.menu_item.button.left+"px;'>" +
			"<div class='fc_abbtn' ><a title='"+fc_chat.textSetter(600,'Search')+"' href='javascript:jGo.toolbar.wp_search.tgl_dialog()' ><img src='"+basedir+"current_skin/wp_search.png'>&nbsp;</a></div></div>";
	};
	var create_dialog = function(){
		  dialog= "<div class='jGo_app jGo_myapp jGo_dialog' id='fc_wp_search_dialog' style='position:absolute;display: none;visibility: visible;"+config.dialog_box.css+";text-align:left;height:"+config.dialog_box.height+"px;width:"+config.dialog_box.width+"px;top: 113px; left:210px; z-index:" + (z_b + 104) + ";overflow:hidden;'>" +
			"<div id='fc_wp_search_dialog_title' style='position:absolute;width:"+config.dialog_box.width+"px;"+config.dialog_box.title_box_css+";overflow:hidden'><div style='padding:4px;'><span style='"+config.dialog_box.text.title_css+"'>"+fc_chat.textSetter(600,'Search Site')+"</span>&nbsp;&nbsp;&nbsp;<a style='"+config.dialog_box.text.link_css+"' href='javascript:jGo.toolbar.wp_search.tgl_dialog()'>"+fc_chat.textSetter(600,'Close')+"</a></div></div>" +
			"<div  id='fc_view_wp_search_dialog' style='position:absolute;width:"+config.dialog_box.width+"px;"+config.dialog_box.info_box_css+";overflow:auto'></div></div>";
			return dialog;
	};
	var render_dialog_content = function(){
		var content="<div style='padding-left:20px;overflow:auto;"+config.dialog_box.text.css+";line-height:120%'><br>" +
		"<li style='list-style-type: none' class='widget-container widget_search' id='search-2'><form action='"+action_url+"' id='searchform' method='get' role='search'><div><label for='s' class='screen-reader-text'> </label><input type='text' id='s' name='s' value='Enter Search'/><input type='submit' value='Search' id='searchsubmit'/></div></form></li></div>";
		jQ("#fc_view_wp_search_dialog").html(content);
	};
	var append_dialog = function(){
		document.body.appendChild(jQ("#fc_wp_search_dialog")[0]);
	};
	var tgl_dialog = function(){
		if(jQ("#fc_wp_search_dialog").css("display")!="none"){
			jQ("div.jGo_dialog").css("display","none");
		}else{
			jQ("div.jGo_dialog").css("display","none");
			fc_chat.close_boxes();
			position_dialog();
			if(rendered==0){
				render_dialog_content();
				rendered=1;
			}
			jQ("#fc_wp_search_dialog").css("display","block");
		}
	};
	var position_dialog = function(){
		var elem = (fc_chat.getexp6()?"#fc_toolbar_inner":"#fc_toolbar");
		var pos = (fc_chat.getexp6()?"absolute":"fixed");
		var basepos = Math.max(3,EN(jQ(elem).css("left"))+EN(jQ("#fc_wp_search_toolbar_item").css("left")));
		var subtract = Math.min(0,fc_chat.getToolbarWidth()-EN(jQ("#fc_wp_search_toolbar_item").css("left"))-(config.dialog_box.width+3));
		jQ("#fc_wp_search_dialog").css({
			position:pos,
			top:(EN(jQ(elem).css("top"))-(FCChatConfig.toolbar_position.substr(0,1)=='t'?-jGo.toolbar.style.height-4:7+config.dialog_box.height))+'px',
			left:basepos+(basepos+subtract>3?subtract:0)+"px"});
	};

})();

//Class Initialization
if(jGo.scripts)jGo.scripts.onLoad('wp_search.js');