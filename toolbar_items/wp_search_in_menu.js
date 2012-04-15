
/*
 * WP Search menu item
 */

//WP Search style template
jGo.toolbar.style.wp_search_in_menu={
	menu_item:{
		width:143,
		padding:{
			left:10,
			top:3
		},
		text_input_css:"position:absolute;top:3px;left:5px;height:12px;font-size:9px;background-color:lightgray;width:90px;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius:3px;",
		button_css:"position:absolute;top:4px;left:105px"
	}
};

//WP Search functions
jGo.toolbar.wp_search_in_menu = {};

(function () {
	var action_url = "./";
	var jQ = jGo.$;
	var z_b = FCChatConfig.zindex_base;
	var basedir = FCChatConfig.dir;
	var rendered=0;
	var config =jGo.toolbar.style.wp_search_in_menu;
	
	function EN(value) {
        var n = parseInt(value);
        return(n == null || isNaN(n) ? 0: n);
    };
   
	jGo.toolbar.wp_search_in_menu.create = function()    {return create_menu_item();};
	jGo.toolbar.wp_search_in_menu.create_dialogs = function()    {return create_dialog();};
	jGo.toolbar.wp_search_in_menu.append_dialogs = function()    {return append_dialog();};
	jGo.toolbar.wp_search_in_menu.tgl_dialog = function()    {return tgl_dialog();};
	
	var create_menu_item = function(){
	  return"<div class='jGo_app jGo_myapp fc_wp_search_in_menu_item' style='position: absolute;width:"+config.menu_item.width+"px;top:"+config.menu_item.padding.top+"px; left: "+config.menu_item.padding.left+"px;'>" +
		"<form action='"+action_url+"' method='get' role='search'><label for='s' class='screen-reader-text'> </label><input style='"+config.menu_item.text_input_css+"' type='text'  name='s' onfocus='if(this.value==\"search...\") this.value=\"\";' onblur='if(this.value==\"\") this.value=\"search...\";' value='search...' value='Enter Search'/>&nbsp;<input type='image' src='"+basedir+"current_skin/wp_search.png' style='"+config.menu_item.button_css+"' name='image' width='16' height='16'></form>"
		+ "</div>";
	};
	var create_dialog = function(){
	};
	var render_dialog_content = function(){
	};
	var append_dialog = function(){
	};
	var tgl_dialog = function(){
	};
	var position_dialog = function(){
	};

})();

//Class Initialization
if(jGo.scripts)jGo.scripts.onLoad('wp_search_in_menu.js');