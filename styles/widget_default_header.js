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
		width:580,
		height:35,
		css:"-webkit-box-shadow:0px 0px 12px 2px rgba(0,0,0,0.5);box-shadow:0px 0px 12px 2px rgba(0,0,0,0.5);border:2px solid gray;background-color:#eeeeee;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius:3px;",
		topband:{
			css:"display: block;background-color:gray;text-align:left;width:190px;height:35px; top: 0px; left:0px;"
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
				left:127
			}
		},
		info_box:{
			top:5,
			left:193,
			width:390,
			height:25,
			css:"background-color:transparent",
			linebreak:"",
			text:{
				css:"font-family:arial;font-size:9pt;color:#444444",
				alert_css:"font-family:arial;font-size:9pt;color:green;font-weight:bold",
				link_css:"text-decoration:none;font-family:arial;font-size:9pt;color:blue",
				info_css:"color:green"
			}
		}
    },
	toolbar_item:{
		text:{
			css:"font-family:arial;font-size:8pt;font-weight:bold;color:white",
			alert_css:"font-family:arial;font-size:8pt;font-weight:bold;color:pink",
			link_css:"font-family:arial;font-size:8pt;font-weight:bold;color:white",
			info_css:"color:lightgreen"
		},
		buttons:{
			default_css:"font-size:10px;font-weight:bold;font-family:arial;text-decoration:none",
			states:{
				link_css:"color:white",
				hover_css:"color:yellow",
				disabled_css:"color:lightgray;"
			}
		},
		chatcenter_layout:{
			width:550,
			info_box:{
				css:"width:360px;height:30px;left:10px;top:0px;",
				padding_top:8
			},
			open_chat_button:{
				top:7,
				left:405
			},
			off_button:{
				top:7,
				left:500
			},
			status:{
				css:"top:13px;left:378px;"
			},
			divider:{
				css:"top:2px;left:395px;width:1px;height:26px;background-color:lightgray;"
			}
		},
		msgcenter_layout:{
			width:450,
			info_box:{
				css:"width:260px;height:30px;left:10px;top:0px;",
				padding_top:8
			},
			open_chat_button:{
				top:7,
				left:305
			},
			off_button:{
				top:7,
				left:400
			},
			status:{
				css:"top:13px;left:278px;"
			},
			divider:{
				css:"top:2px;left:295px;width:1px;height:26px;background-color:lightgray"
			}
		}
	},
	online_box:{
		top:43,
		left:240,
		toolbar_offset:3,
		width:230,
		height:343,
		css:jGo.fcchat_toolbar.style.dialog_box.css,
		title_box_css:jGo.fcchat_toolbar.style.dialog_box.title_box_css,
		greeting_box_css:"top:40px;left:0px;height:53px;background-color:#dddddd;",
		list_box_css:"top:93px;left:0px;height:180px;",
		list_divider_css:jGo.fcchat_toolbar.style.dialog_box.list_divider_css,
		info_box_css:"top:273px;left:0px;height:70px;background-color:#dddddd;",
		text:jGo.fcchat_toolbar.style.dialog_box.text
	},
	new_messages_box:{
		top:null,
		left:null,
		toolbar_offset:3,
		width:230,
		height:343,
		css:jGo.fcchat_toolbar.style.dialog_box.css,
		title_box_css:jGo.fcchat_toolbar.style.dialog_box.title_box_css,
		greeting_box_css:"top:40px;left:0px;height:53px;background-color:#dddddd;",
		view_msg_box_css:"top:93px;left:0px;height:180px;",
		send_msg_box_css:"top:273px;left:0px;height:70px;background-color:#dddddd;",
		input_css:"height:18px !important;background-color:white !important;border:1px solid silver !important;margin-left:2px !important;color:#44444 !important;",
		text:jGo.fcchat_toolbar.style.dialog_box.text
	},
	friends_box:{
		top:43,
		left:240,
		toolbar_offset:3,
		width:230,
		height:343,
		css:jGo.fcchat_toolbar.style.dialog_box.css,
		title_box_css:jGo.fcchat_toolbar.style.dialog_box.title_box_css,
		list_box_css:"top:40px;left:0px;height:233px;",
		list_divider_css:jGo.fcchat_toolbar.style.dialog_box.list_divider_css,
		info_box_css:"top:273px;left:0px;height:70px;background-color:#dddddd;",
		text:jGo.fcchat_toolbar.style.dialog_box.text
	},
	login_panel:{
		top:40,
		left:5,
		box_shadow:"0px 0px 12px 2px rgba(0,0,0,0.5)",
		background_color:"#eeeeee",
		border:"2px solid gray",
		font:{
			textfield_description_css:{"font-family":"arial","font-size":"10pt",color:"black","font-style":"italic","font-weight":"bold"},
			smalltext_css:{"margin-right":"10px","font-family":"arial","font-size":"8pt",color:"black"}
		},
		textfield_css:"background-color:#dddddd !important;color:#444444 !important;width:120px !important;height:18px !important;"
	}
};
