
/*
 * WP Search menu item
 */

//WP Search style template
jGo.toolbar.style.prompt={
	dialog_box:{
		width:300,
		height:85,
		bubble:{
			css:jGo.toolbar.style.css+";margin:12px;",
			triangle_color:jGo.util.extractFromCSSString("background-color",jGo.toolbar.style.css),
			text:jGo.toolbar.style.text,
			hide_icon:{
				css:jGo.toolbar.style.icon_tray.hide_icon.css+";font-size:14px;"
			}
		}
	}
};

//WP Search functions
jGo.toolbar.prompt = {};

(function () {
	var jQ = jGo.$;
	var z_b = jGo.config.max_z_index;
	var basedir = FCChatConfig.dir;
	var rendered=0;
	var config =jGo.toolbar.style.prompt;
	
	function EN(value) {
        var n = parseInt(value);
        return(n == null || isNaN(n) ? 0: n);
    };
   
	jGo.toolbar.prompt.create = function() {return create_menu_item();};
	jGo.toolbar.prompt.create_dialogs = function() {return create_dialog();};
	jGo.toolbar.prompt.render_promo = function(username) {return render_promo(username);};
	jGo.toolbar.prompt.append_dialogs = function() {return append_dialog();};
	jGo.toolbar.prompt.tgl_dialog = function() {return tgl_dialog();};
	
	var create_menu_item = function(){
	};
	var create_dialog = function(){
		  dialog= "<div class='jGo_app jGo_myapp jGo_dialog ' id='fc_prompt_dialog' style='display: none;visibility: visible;height:"+config.dialog_box.height+"px;width:"+config.dialog_box.width+"px;top: 113px; left:210px; z-index:" + (z_b) + ";overflow:hidden;'>" +
		  		  "<div class='fc-triangle-right"+(FCChatConfig.toolbar_position.substr(0,1)=='t'?' top':'')+"' style='"+config.dialog_box.bubble.css+"'>" +
		  		  "<div id='fc_prompt_content' style='"+config.dialog_box.bubble.text+"'></div>"+ 
		  		  "</div>"+
		  	      "</div>";
			return dialog;
	};
	var render_promo = function(username){
		var content="<div style='position:relative;top:0px;float:right;'><a style='"+config.dialog_box.bubble.hide_icon.css+"' HREF='javascript:void' onclick='fc_chat.promo_close();return false;'>x</a>&nbsp;&nbsp;</div>"+fc_chat.textSetter(364,'Hi, your chat name is ')+username+".<br><a style='color:white' href='javascript:fc_chat.promo_change_name()'>"+fc_chat.textSetter(365,'Create new name')+"</a>&nbsp;&nbsp;<a style='color:white' href='javascript:void()' onclick='fc_chat.promo_close();return false;'>"+fc_chat.textSetter(366,'No thanks')+"</a>";
		jQ("#fc_prompt_content").html(content);
	};
	var append_dialog = function(){
		document.body.appendChild(jQ("#fc_prompt_dialog")[0]);
	};
	var tgl_dialog = function(){
		fc_chat.tgl_dialog(jQ("#fc_prompt_dialog"),position_dialog,null,2000)
	};
	var position_dialog = function(){
		fc_chat.position_dialog(jQ("#fc_prompt_dialog"),fc_chat.getToolbarWidth(),config.dialog_box.width,config.dialog_box.height)
	};
})();

//Class Initialization
if(jGo.scripts)jGo.scripts.onLoad('prompt.js');