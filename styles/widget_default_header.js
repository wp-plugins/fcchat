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
		width:470,
		height:35,
		css:"border:2px solid gray;background-color:#eeeeee;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius:3px;",
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
			width:280,
			height:25,
			css:"background-color:transparent",
			linebreak:"",
			text:{
				css:"font-family:arial;font-size:9pt;color:#444444",
				alert_css:"font-family:arial;font-size:9pt;color:green;font-weight:bold",
				link_css:"text-decoration:none;font-family:arial;font-size:9pt;color:blue"
			}
		}
    },
	toolbar:{
		width:460,
		height:20,
		css:"background-color:gray;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
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
		},
		minimize_icon:{
			top:2,
			left:430,
			css:"color:white;font-stretch:wider;font-size:10px;font-weight:bold;text-decoration:none"
		},
		hide_icon:{
			top:2,
			left:447,
			css:"color:white;font-stretch:wider;font-size:10px;font-weight:bold;text-decoration:none"
		},
		minimized:{
			width:110
		}
	},
	online_box:{
		top:43,
		left:240,
		toolbar_offset:3,
		width:200,
		height:275,
		css:"border:2px solid gray;background-color:#eeeeee;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius:3px;",
		title_box_css:"top:0px;left:0px;height:40px;background-color:gray;",
		greeting_box_css:"top:40px;left:0px;height:35px;",
		list_box_css:"top:75px;left:0px;height:130px;",
		info_box_css:"top:205px;left:0px;height:70px;background-color:#dddddd;",
		plus_css:"color:green;text-decoration:none;font-size:20px;font-weight:900;",
		text:{
			css:"font-family:arial;font-size:12px;color:#444444",
			title_css:"font-weight:bold;color:white",
			link_css:"color:lightblue",
			screen_name_css:"font-family:arial;font-size:10pt;color:green;font-weight:700"
		}
	},
	new_messages_box:{
		top:43,
		left:240,
		toolbar_offset:3,
		width:200,
		height:275,
		css:"border:2px solid gray;background-color:#eeeeee;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius:3px;",
		title_box_css:"top:0px;left:0px;height:40px;background-color:gray;",
		greeting_box_css:"top:40px;left:0px;height:35px;",
		view_msg_box_css:"top:75px;left:0px;height:130px;",
		send_msg_box_css:"top:205px;left:0px;height:70px;background-color:#dddddd;",
		plus_css:"color:green;text-decoration:none;font-size:20px;font-weight:900;",
		text:{
			css:"font-family:arial;font-size:12px;color:#444444",
			title_css:"font-weight:bold;color:white",
			link_css:"color:lightblue",
			screen_name_css:"font-family:arial;font-size:10pt;color:green;font-weight:700"
		}
	},
	friends_box:{
		top:null,
		left:null,
		width:200,
		height:275,
		css:"border:2px solid gray;background-color:#eeeeee;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius:3px;",
		title_box_css:"top:0px;left:0px;height:40px;background-color:gray;",
		list_box_css:"top:40px;left:0px;height:165px;",
		info_box_css:"top:205px;left:0px;height:70px;background-color:#dddddd;",
		minus_css:"color:red;text-decoration:none;font-size:28px;font-weight:900;",
		text:{
			css:"font-family:arial;font-size:12px;color:#444444",
			title_css:"font-weight:bold;color:white",
			link_css:"color:lightblue",
			screen_name_css:"font-family:arial;font-size:10pt;color:green;font-weight:700"
		}
	},
	login_panel:{
		top:40,
		left:5,
		background_color:"gray",
		border:"1px solid gray",
		font:{
			textfield_description_css:{"font-family":"arial","font-size":"8pt",color:"white","font-style":"italic","font-weight":"bold"},
			smalltext_css:{"margin-right":"10px","font-family":"arial","font-size":"8pt",color:"white"}
		},
		textfield_css:{"background-color":"#dddddd"}
	}
};
