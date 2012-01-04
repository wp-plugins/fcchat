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
 *	widget_style_template:"widget_default_sidebar.js",
 * 
 * If you create a decent style template. Please email us the template at 
 * support@fastcatsoftware.com
 */

FCChatConfig.styles.widget={
	control:{
		top:0, //for absolute positioning
		left:310, //"     "
		width:200,
		height:107,
		css:"box-shadow: 1px 1px 3px 2px #aaaaaa;border:2px solid gray;background-color:#eeeeee;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius:3px;",
		topband:{
			css:"display: block;background-color:gray;text-align:left;width:200px;height:35px; top: 0px; left:0px;"
		},
		buttons:{
			default_css:"border:1px solid #aaaaaa; padding:4px 8px; font:12px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
			states:{
				link_css:"color:#efefef",
				hover_css:"color:lightblue",
				disabled_css:"color:#dddddd;border:1px solid #aaaaaa"
			},
			open_chat_button:{
				top:5,
				left:5
			},
			on_off_button:{
				top:5,
				left:130
			}
		},
		info_box:{
			top:35,
			left:2,
			width:198,
			height:72,
			css:"background-color:transparent",
			linebreak:"<br>",
			text:{
				css:"font-family:arial;font-size:10pt;color:#444444",
				alert_css:"font-family:arial;font-size:10pt;color:green;font-weight:bold",
				link_css:"text-decoration:none;font-family:arial;font-size:10pt;color:blue"
			}
		}
    },
	toolbar_item:{
		width:420,
		text:{
			css:"font-family:arial;font-size:8pt;font-weight:bold;color:white",
			alert_css:"font-family:arial;font-size:8pt;font-weight:bold;color:pink",
			link_css:"font-family:arial;font-size:8pt;font-weight:bold;color:white"
		},
		buttons:{
			default_css:"font-size:10px;font-weight:bold;font-family:arial;text-decoration:none",
			states:{
				link_css:"color:white",
				hover_css:"color:yellow",
				disabled_css:"color:lightgray;"
			},
			open_chat_button:{
				top:2,
				left:295
			},
			off_button:{
				top:2,
				left:390
			}
		},
		info_box:{
			css:"width:250px;height:20px;left:10px;top:0px;"
		},
		status:{
			css:"top:8px;left:268px;"
		},
		divider:{
			css:"top:2px;left:285px;width:1px;height:16px;background-color:lightgray"
		}
	},
	online_box:{
		top:113,
		left:0,
		toolbar_offset:3,
		width:200,
		height:285,
		css:jGo.toolbar.style.dialog_box.css,
		title_box_css:jGo.toolbar.style.dialog_box.title_box_css,
		greeting_box_css:"top:40px;left:0px;height:40px;",
		list_box_css:"top:80px;left:0px;height:135px;",
		info_box_css:"top:215px;left:0px;height:70px;background-color:#dddddd;",
		plus_css:"color:green;text-decoration:none;font-size:20px;font-weight:900;",
		text:jGo.toolbar.style.dialog_box.text
	},
	new_messages_box:{
		top:113,
		left:0,
		toolbar_offset:3,
		width:200,
		height:285,
		css:jGo.toolbar.style.dialog_box.css,
		title_box_css:jGo.toolbar.style.dialog_box.title_box_css,
		greeting_box_css:"top:40px;left:0px;height:40px;",
		view_msg_box_css:"top:85px;left:0px;height:135px;",
		send_msg_box_css:"top:215px;left:0px;height:70px;background-color:#dddddd;",
		plus_css:"color:green;text-decoration:none;font-size:20px;font-weight:900;",
		text:jGo.toolbar.style.dialog_box.text
	},
	friends_box:{
		top:null,
		left:null,
		width:200,
		height:285,
		css:jGo.toolbar.style.dialog_box.css,
		title_box_css:jGo.toolbar.style.dialog_box.title_box_css,
		list_box_css:"top:40px;left:0px;height:165px;",
		info_box_css:"top:215px;left:0px;height:70px;background-color:#dddddd;",
		minus_css:"color:red;text-decoration:none;font-size:28px;font-weight:900;",
		text:jGo.toolbar.style.dialog_box.text
	},
	login_panel:{
		top:40,
		left:5,
		box_shadow:"1px 1px 3px 2px #aaaaaa",
		background_color:"#eeeeee",
		border:"2px solid gray",
		font:{
			textfield_description_css:{"font-family":"arial","font-size":"10pt",color:"black","font-style":"italic","font-weight":"bold"},
			smalltext_css:{"margin-right":"10px","font-family":"arial","font-size":"8pt",color:"black"}
		},
		textfield_css:{"background-color":"#dddddd"}
	}
};
