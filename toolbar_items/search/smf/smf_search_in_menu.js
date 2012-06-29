
/*
 * SMF Search menu item
 */


jGo.fcchat_toolbar.smf_search_in_menu = {};

//SMF Search style template
jGo.fcchat_toolbar.smf_search_in_menu.style={
	menu_item:{
		width:128,
		padding:{
			left:10,
			top:3
		},
		text_input_css:"position:absolute;top:3px;left:5px;height:12px;font-size:9px;background-color:lightgray;width:90px;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius:3px;",
		button_css:"position:absolute;top:4px;left:105px"
	}
};

(function () {
	var action_url = "./index.php?action=search2";
	var jQ = jGo.$;
	var z_b = FCChatConfig.zindex_base;
	var basedir = FCChatConfig.dir;
	var rendered=0;
	var config =jGo.fcchat_toolbar.smf_search_in_menu.style;
	
	function EN(value) {
        var n = parseInt(value);
        return(n == null || isNaN(n) ? 0: n);
    };
   
	jGo.fcchat_toolbar.smf_search_in_menu.create = function()    {return create_menu_item();};
	jGo.fcchat_toolbar.smf_search_in_menu.create_dialogs = function()    {return create_dialog();};
	jGo.fcchat_toolbar.smf_search_in_menu.append_dialogs = function(content)    {return append_dialog(content);};
	jGo.fcchat_toolbar.smf_search_in_menu.tgl_dialog = function()    {return tgl_dialog();};
	
	var create_menu_item = function(){
	  return"<div class='jGo_app jGo_myapp fc_smf_search_in_menu_item' style='position: absolute;width:"+config.menu_item.width+"px;top:"+config.menu_item.padding.top+"px; left: "+config.menu_item.padding.left+"px;'>" +
		"<form  method='post' action='"+action_url+"'>"+
				"<input  style='"+config.menu_item.text_input_css+"' type='text' onblur='if(this.value==\"\")this.value=\""+fc_chat.textSetter(359,'search')+"...\";' onclick='if(this.value==\""+fc_chat.textSetter(359,'search')+"...\")this.value=\"\";' value='"+fc_chat.textSetter(359,'search')+"...' title='"+fc_chat.textSetter(359,'search')+"' maxlength='128' id='keywords' name='search'/>&nbsp;"+
			"</form>"+
		"</div>";
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
if(jGo.scripts)jGo.scripts.onLoad('smf_search_in_menu.js');