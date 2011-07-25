/*
 * WIDGET STYLE TEMPLATE
 *
 * This file controls aspects of FCChat's layout and appearance.
 * 
 * In this file comments are preceded by double slashes ie.
 *      //THIS IS A COMMENT
 *      
 * Refer to the product manual for info regarding how to effectively make changes to the
 * style template:
 * 
 * http://www.fastcatsoftware.com/chat/manual.htmk
 * 
 * To use this template, edit FCChat/config/config.js as follows:
 * 
 *  //STYLE
 *	widget_style_template:"widget_fixed_top_left.js",
 * 
 * If you create a decent style template. Please email us the template at 
 * support@fastcatsoftware.com
 */

FCChatConfig.styles.chat_toolbox={
	absolute_positioning:false,
	fixed:true,
	fixed_pos:"top-left",
	top:0,
	left:310,
	width:377,
	height:32,
	css:"border:1px solid #aaaaaa;background-color:white;"+
	" border-radius: 4px;" +
	"-moz-border-radius: 4px;" +
	" -webkit-border-radius: 4px;",
	buttons:{
		default_css:"border:1px solid #444444; padding:4px 8px; font:12px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
		states:{
			link_css:"color:black",
			hover_css:"color:purple",
			disabled_css:"color:gray;border:1px solid gray"
		},
		open_chat_button:{
			top:3,
			left:260
		},
		on_off_button:{
			top:3,
			left:339
		}
	},
	alert_box:{
		top:3,
		left:4,
		width:250,
		height:23,
		expand_on_rollover:{
			width:250,
			height:75,
			shift_page_down:0,
			shift_page_right:0
		},
		css:"border:1px solid #aaaaaa;background-color:#eeeeee;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px",
		text:{
			message_text_css:"font-family:arial;font-size:8pt;color:black",
			screen_name_css:"font-family:arial;font-size:10pt;color:green;font-weight:700"
		}
	},
	new_message_alert:{
		top:16,
		left:20,
		css:"font-family:arial;font-size:12px;font-weight:bold;color:gray;"
	},
	login_panel:{
		top:35,
		left:295
	}
};
