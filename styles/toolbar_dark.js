/*
 * TOOLBAR STYLE TEMPLATE
 *
 * This file controls aspects of FCChat's layout and appearance.
 * 
 * In this file comments are preceded by double slashes ie.
 *      //THIS IS A COMMENT
 *      
 * Refer to the product manual for info regarding how to effectively make changes to the
 * style template:
 * 
 * http://www.fastcatsoftware.com/chat/manual.html
 * 
 * To use this template, edit FCChat/config/config.js as follows:
 * 
 *  //STYLE
 *	toolbar_style_template:"toolbar_default.js",
 * 
 * If you create a decent style template. Please email us the template at 
 * support@fastcatsoftware.com
 */

(function(){
	var toolbar_base_font = "color:white;font-size:8pt;font-family:arial;font-weight:bold;";
	
jGo.fcchat_toolbar.style={
		height:35,
		border_height:1,
		css:"-webkit-box-shadow:0px 0px 12px 2px rgba(0,0,0,0.5);box-shadow:0px 0px 12px 2px rgba(0,0,0,0.5);background-color:#444444;border: 1px solid #eeeeee;-moz-border-radius: 4px;-webkit-border-radius: 2px;border-radius:4px;triangle-color:#444444;",
		banner_css:{"background-color":"#444444","border-bottom":"1px solid #fff","border-top":"1px solid #fff"},
		mobile_banner:{
			title:"color:green;",
			links:"background-color:darkblue;color:#fff;"
		},
		alt_css:"",
		text_size:"font-size:8pt",
		text:toolbar_base_font,
		logo_css:"font-size:16px;color:#ccc;font-weight:normal;",
		dialog_box:{
			css:"-webkit-transform: translate3d(0,0,0);-webkit-box-shadow:0px 0px 12px 2px rgba(0,0,0,0.5);box-shadow:0px 0px 12px 2px rgba(0,0,0,0.5);border:1px solid #eeeeee;background-color:#cccccc;",
			alt_css:"",
			title_box_css:"top:0px;left:0px;height:40px;background-color:#444444;",
			list_divider_css:"border-bottom:1px solid transparent;",
			select_user:{
				over_color:"#d3d3d3",
				off_color:"transparent",
				selected_color:"#dddddd"
			},
			text:{
				css:"font-family:arial;font-size:12px;color:#222222;",
				title_css:"font-weight:bold;color:white;",
				link_css:"color:lightblue;",
				disabled_css:"color:#dddddd;",
				secondary_link_css:"color:#528DC4;text-decoration:none;",
				screen_name_css:"font-family:arial;font-size:10pt;color:green;font-weight:700;text-decoration:none;",
				timestamp_css:"color:green;",
				info:"color:#666666;font-style:italic;",
				user_info_css:"color:#666666;",
				offline_css:"font-style:italic;color:green;"
			}
		},
		menus:{
			user_options:{
				position:{
					left:null,
					top:null,
					offsetLeft:0,
					offsetTop:0
				},
				css:{
					width:"200px",
					height:"230px",
					"-webkit-box-shadow": "2px 2px 2px 1px rgba(0,0,0,0.5)",
					"box-shadow": "2px 2px 2px 1px rgba(0,0,0,0.5)",
					"background-color":"#eeeeee",
					border:"1px solid silver"
				},
				menu_item:{
					dim:"width:200px;height:30px;",
					css:"padding:8px;font:10pt arial;font-weight:bold;",
					link_color:"#444444",
					link_css:"text-decoration:none",
					disabled_link_color:"#999999",
					hover_color:"#fff",
					hide_icon:{
						css:"color:#444444;font-stretch:wider;font-size:16px;font-weight:bold;text-decoration:none"
					}
				}
			},
			set_availability:{
				position:{
					left:null,
					top:null,
					offsetLeft:50,
					offsetTop:30
				},
				css:{
					width:"200px",
					height:"80px",
					"-webkit-box-shadow": "2px 2px 2px 1px rgba(0,0,0,0.5)",
					"box-shadow": "2px 2px 2px 1px rgba(0,0,0,0.5)",
					"background-color":"#eeeeee",
					border:"1px solid silver"
				},
				menu_item:{
					css:"padding:8px;font:10pt arial;",
					hide_icon:{
						css:"color:#444444;font-stretch:wider;font-size:16px;font-weight:bold;text-decoration:none"
					}
				}
			},
			mod_menu:{
				position:{
					left:null,
					top:null,
					offsetLeft:40,
					offsetTop:30
				},
				css:{
					width:"200px",
					height:"200px",
					"-webkit-box-shadow": "2px 2px 2px 1px rgba(0,0,0,0.5)",
					"box-shadow": "2px 2px 2px 1px rgba(0,0,0,0.5)",
					"background-color":"#eeeeee",
					border:"1px solid silver"
				},
				menu_item:{
					dim:"width:200px;height:30px;",
					css:"padding:8px;font:10pt arial;font-weight:bold;",
					link_color:"#444444",
					link_css:"text-decoration:none",
					disabled_link_color:"#999999",
					hover_color:"#fff",
					hide_icon:{
						css:"color:#444444;font-stretch:wider;font-size:16px;font-weight:bold;text-decoration:none"
					}
				}
			},
			set_signature:{
				position:{
					left:null,
					top:null,
					offsetLeft:50,
					offsetTop:30
				},
				css:{
					width:"200px",
					height:"85px",
					"-webkit-box-shadow": "2px 2px 2px 1px rgba(0,0,0,0.5)",
					"box-shadow": "2px 2px 2px 1px rgba(0,0,0,0.5)",
					"background-color":"#eeeeee",
					border:"1px solid silver"
				},
				menu_item:{
					css:"padding:9px;font:10pt arial;",
					set_notice:{
						css:"color:green;font-weight:bold;font-style:italic"
					},
					hide_icon:{
						css:"color:#444444;font-stretch:wider;font-size:16px;font-weight:bold;text-decoration:none"
					}
				}
			},
			set_nickname:{
				css:"font:10pt arial;width:300px;-webkit-box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.5);box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.5);background-color:#eeeeee;padding:15px;border:1px solid black;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
				menu_item:{
					link_css:"font:10pt arial;",
					input_css:"width:290px;",
					set_notice:{
						css:"color:green;font-weight:bold;font-style:italic"
					}
				}
			}
		},
		divider_css:"top:0px;width:1px;height:35px;background-color:#aaaaaa;",
		icons_16px:{
			top:10
		},
		icons_24px:{
			top:6
		},
		icon_tray:{
			width:35,
			minimize_icon:{
				top:10,
				offset:35,
				css:"color:white;font-stretch:wider;font-size:8pt;font-weight:bold;text-decoration:none;"
			},
			restore:{
				width:40
			},
			hide_icon:{
				top:10,
				offset:15,
				css:"color:white;font-stretch:wider;font-size:8pt;font-weight:bold;text-decoration:none;"
			}
		},
		toolbar_item:{
			text:{
				css:toolbar_base_font+"color:white;",
				alert_css:toolbar_base_font+"color:pink;",
				link_css:toolbar_base_font+"color:white;",
				info_css:toolbar_base_font+"color:#BFEFFF;"
			},
			buttons:{
				default_css:toolbar_base_font+"text-decoration:none;",
				states:{
					link_css:"color:white;",
					hover_css:"color:yellow;",
					disabled_css:"color:lightgray;"
				}
			},
			chatcenter_layout:{
				width:610,
				info_box:{
					width:420,
					css:"height:35px;left:10px;top:0px;",
					padding_top:11
				},
				open_chat_button:{
					top:10,
					left:465
				},
				off_button:{
					top:10,
					left:560
				},
				status:{
					top:15,
					left:438,
					css:""
				},
				divider:{
					top:0,
					left:455,
					css:"width:1px;height:35px;background-color:#aaaaaa;"
				}
			},
			msgcenter_layout:{
				width:490,
				info_box:{
					width:300,
					css:"height:30px;left:10px;top:0px;",
					padding_top:11
				},
				open_chat_button:{
					top:10,
					left:345
				},
				off_button:{
					top:10,
					left:440
				},
				status:{
					top:15,
					left:318,
					css:""
				},
				divider:{
					top:0,
					left:335,
					css:"width:1px;height:30px;background-color:#aaaaaa;"
				}
			}
		}
	};
/*Apply style overrides*/
FCChatConfig.overrides.toolbar_overrides();
}());