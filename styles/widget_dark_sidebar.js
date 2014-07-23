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
(function(){

	var widget_base_font = "font-family:arial;font-size:12px;color:#444444;";
	var mobile_scrolling = "-moz-overflow-scrolling: touch;-webkit-overflow-scrolling: touch;overflow-scrolling: touch;";

	FCChatConfig.styles.widget={
		control:{
			top:0, //for absolute positioning
			left:310, //"     "
			width:190,
			height:180,
			align_dialogs:true,
			css:"background-color:#cccccc;-moz-border-radius: 5px;-webkit-border-radius: 5px;border-radius:5px;",
			logo:{
				top:10,
				left:10,
				css:""
			},
			title_box:{
				top:7,
				left:30,
				width:160,
				height:27,
				css:"background-color:transparent;",
				text:{
					css:widget_base_font+";font-weight:bold;font-size:13px;color:#777777;"
				}
			},
			status:{
				css:""
			},
			buttons:{
				top:35,
				left:10,
				width:180,
				height:30,
				default_css:widget_base_font+";text-decoration:none;",
				states:{
					link_css:"color:rgb(22, 125, 200);",
					hover_css:"color:darkblue;",
					disabled_css:"color:#aaaaaa;"
				},
				full_page_button:{
					css:""
				},
				on_off_button:{
					css:"margin-left:40px;"
				}
			},
			info_box:{
				top:65,
				left:10,
				width:180,
				height:120,
				css:"background-color:transparent;",
				linebreak:"<br>",
				text:{
					css:widget_base_font,
					alert_css:widget_base_font+"font-weight:bold;color:green;",
					info_css:widget_base_font+"color:#444444;"
				}
			}	
	    },
		online_box:{
			top:0,
			left:0,
			toolbar_offset:3,
			width:(jGo.mobile?300:230),
			height:(jGo.mobile?348:343),
			css:jGo.fcchat_toolbar.style.dialog_box.css,
			title_box_css:jGo.fcchat_toolbar.style.dialog_box.title_box_css,
			greeting_box_css:"top:40px;left:0px;height:40px;border-top:1px solid #cccccc;border-bottom:1px dotted #444444;",
			greeting_box_link:jGo.fcchat_toolbar.style.dialog_box.text.secondary_link_css,
			list_box_css:"top:82px;left:0px;height:193px;"+mobile_scrolling,
			list_divider_css:jGo.fcchat_toolbar.style.dialog_box.list_divider_css,
			info_box_css:"top:275px;left:0px;height:67px;border-top:1px dotted #444444;",
			text:jGo.fcchat_toolbar.style.dialog_box.text
		},
		new_messages_box:{
			top:0,
			left:0,
			toolbar_offset:3,
			width:300,
			height:(jGo.mobile?348:343),
			css:jGo.fcchat_toolbar.style.dialog_box.css,
			title_box_css:jGo.fcchat_toolbar.style.dialog_box.title_box_css,
			greeting_box_css:"top:40px;left:0px;height:40px;border-top:1px solid #cccccc;border-bottom:1px dotted #444444;",
			greeting_box_link:jGo.fcchat_toolbar.style.dialog_box.text.secondary_link_css,
			view_msg_box_css:"top:82px;left:0px;height:193px;margin-top:4px;"+mobile_scrolling,
			send_msg_box_css:"top:275px;left:0px;height:67px;border-top:1px dotted #444444;",
			input_css:"height:18px !important;background-color:white !important;border:1px solid silver !important;margin-left:2px !important;color:#44444 !important;",
			text:jGo.fcchat_toolbar.style.dialog_box.text,
			msg_interrupt:{
				css:"background-color:#ededff;",
				respond_css:"font-size:8pt;color:#528DC4;text-decoration:none;",
				close_css:"color:gray;font-stretch:wider;font-size:8pt;font-weight:bold;text-decoration:none;"
			}
		},
		friends_box:{
			top:0,
			left:0,
			toolbar_offset:3,
			width:(jGo.mobile?300:230),
			height:(jGo.mobile?348:343),
			css:jGo.fcchat_toolbar.style.dialog_box.css,
			title_box_css:jGo.fcchat_toolbar.style.dialog_box.title_box_css,
			greeting_box_css:"top:40px;left:0px;height:40px;border-top:1px solid #cccccc;border-bottom:1px dotted #444444;",
			greeting_box_link:jGo.fcchat_toolbar.style.dialog_box.text.secondary_link_css,
			list_box_css:"top:82px;left:0px;height:193px;"+mobile_scrolling,
			list_divider_css:jGo.fcchat_toolbar.style.dialog_box.list_divider_css,
			info_box_css:"top:275px;left:0px;height:67px;border-top:1px dotted #444444;",
			text:jGo.fcchat_toolbar.style.dialog_box.text
		},
		chatrooms_box:{
			top:0,
			left:0,
			width:(jGo.mobile?300:400),
			height:(jGo.mobile?348:343),
			css:jGo.fcchat_toolbar.style.dialog_box.css,
			title_box_css:jGo.fcchat_toolbar.style.dialog_box.title_box_css,
			list_box_css:"top:93px;left:0px;height:180px;border-top:1px solid #cccccc;"+mobile_scrolling,
			text:jGo.fcchat_toolbar.style.dialog_box.text,
			selected_color:"lightblue",
			hover_color:"#dddddd",
			background_color:"transparent",
			separator:"1px solid #dddddd",
			room_name_font_css:"font-size:14px;font-weight:bold;color:#444444;",
			font_css:"color:#444444;font-family:arial;font-weight:normal;font-size:12px;",
			count_font_css:"font-size:14px;color:blue;font-weight:bold;",
			disabled_room_name_font_css:"font-size:14px;font-weight:bold;color:#8888aa;",
			room_passwords:{
				font:{
					textfield_description_css:"font-family:arial;font-size:12px;color:#darkgray;font-style:italic;font-weight:bold;"
				},
				textfield_css:"background-color:white;border:1px solid #444444;padding:5px;color:#444444"
			}
		},
		login_panel:{
			top:0,
			left:0,
			box_shadow:"0px 0px 12px 2px rgba(0,0,0,0.5)",
			background_color:"#eeeeee",
			border:"2px solid gray",
			font:{
				textfield_description_css:{"font-family":"arial","font-size":"10pt",color:"black","font-style":"italic","font-weight":"bold"},
				smalltext_css:{"margin-right":"10px","font-family":"arial","font-size":"10pt",color:"black"}
			},
			textfield_css:"background-color:#dddddd !important;color:#444444 !important;width:180px !important;height:18px !important;"
		}
	};
	/*Apply style overrides*/
	FCChatConfig.overrides.widget_overrides();
})();
