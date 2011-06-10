/*
 * STYLE TEMPLATE
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
 *	style_template:"default.js",
 * 
 * If you create a decent style template. Please email us the template at 
 * support@fastcatsoftware.com
 */

FCChatConfig.styles={
	chat_toolbox:{
		absolute_positioning:false,
		top:0,
		left:310,
		width:200,
		height:90,
		css:"border:0px solid #aaaaaa;color:transparent;",
		buttons:{
			default_css:"border:1px solid #000000; padding:4px 8px; font:12px arial;",
			states:{
				link_css:"color:black",
				hover_css:"color:purple",
				disabled_css:"color:gray;border:1px solid gray"
			},
			open_chat_button:{
				top:3,
				left:3
			},
			on_off_button:{
				top:3,
				left:83
			}
		},
		alert_box:{
			top:31,
			left:2,
			width:190,
			height:46,
			expand_on_rollover:{
				width:190,
				height:75,
				shift_page_down:0,
				shift_page_right:0
			},
			css:"border:1px solid #000000;background-color:#eeeeee",
			text:{
				message_text_css:"font-family:arial;font-size:8pt;color:black",
				screen_name_css:"font-family:arial;font-size:10pt;color:green;font-weight:700"
			}
		},
		new_message_alert:{
			top:80,
			left:3,
			css:"font-family:arial;font-size:12px;font-weight:bold;color:gray;"
		},
		login_panel:{
			top:32,
			left:3
		}
	},
	chat_window:{
		frame:{
			logo:"fastcatlogo.gif",
			background_color:"gray",
			opacity:.75
		},
		main_panel:{
			height:568,
			background_image:"", //"tc2.gif",
			background_color:"#555555",
			border:"1px solid #aaaaaa",
			opacity:.85,
			send_to_room_button:{
				default_css:"border:1px solid silver; padding:2px 8px; font:10px arial;",
				states:{
					link_css:"color:white",
					hover_css:"color:lightblue",
					disabled_css:"color:#bbbbbb;border:1px solid #bbbbbb"
				}
			},
			send_private_button:{
				default_css:"border:1px solid silver; padding:2px 12px 2px 11px; font:10px arial;",
				states:{
					link_css:"color:white",
					hover_css:"color:lightblue",
					disabled_css:"color:#bbbbbb;border:1px solid #bbbbbb"
				}
			},
			other_buttons:{
				default_css:"border:1px solid silver; padding:2px 8px; font:12px arial;",
				states:{
					link_css:"color:white",
					hover_css:"color:lightblue",
					disabled_css:"color:#bbbbbb;border:1px solid #bbbbbb"
				}
			},
			widgets:{
				border:{
					link_css:"border:1px solid #666666",
					hover_css:"border:1px solid lightblue"
				}
			},
			text:{
				font:{
					family:"arial",
					color:"lightblue",
					size:12,
					weight:700
				}
			},
			links:{
				css:"font-family:arial;font-size:12px;font-weight:700;color:#ccffff;text-decoration:none;"
			},
			chat_panels:{
				chat_room_panel:{
					background_image:"chat_window_background.jpg",
					background_color:"#000000",
					border:"1px solid silver",
					opacity:.5
				},
				private_chat_panel:{
					background_image:"private_chat_background.jpg",
					background_color:"#000000",
					border:"1px solid silver",
					opacity:.5
				},
				user_icon:{
					online_css:"background-color:#54FD74;border:1px solid white",
					offline_css:"background-color:transparent;border:1px solid #aaaaaa",
					blocked_css:"background-color:#FF8380;border:1px solid white"
				},
				font:{
					family:"arial",
					size:8,
					weight:600,
					color:{
						default_text_color:"white",
						timestamp_color:"#4cF66c",
						link_color:"white",
						censored_color:"red"
					},
					screen_name_states:{
						online:{
							link_css:"color:#fff;",
							visited_css:"color:#FDF5E6;",
							hover_css:"color:#FFFF00;",
							blocked:{
								link_css:"color:#FFB6C1;",
								visited_css:"color:red;",
								hover_css:"color:#cc0000;"
							}
						},
						offline:{
							link_css:"color:white;text-decoration:none;",
							visited_css:"color:#B0E0E6;text-decoration:none;",
							hover_css:"color:#ADD8E6;text-decoration:none;",
							blocked:{
								link_css:"color:#FFB6C1;text-decoration:none;",
								visited_css:"color:red;text-decoration:none;",
								hover_css:"color:#cc0000;text-decoration:none;"
							}
						}
					}
				}
			},
			side_panels:{
				background_color:"lightgreen",
				border:"1px solid silver",
				opacity:.5,
				screen_name_dividers:{
					background_color:"transparent",
					hover_color:"#b3b3b3",
					border:"1px solid #cccccc"
				},
				room_display_panel:{
					background_color:"transparent",
					divider_color:"silver",
					text_css:"font-family:arial;font-size:7pt;font-weight:500;color:white;",
					change_room_link_css:"font-family:arial;font-size:7pt;font-weight:500;color:#ccffff;"
				},
				private_group_panel:{
					selected_user:{
						background_color:"#999966",
						arrow:{
							color:"green",
							hover_color:"red"
						}
					}
				},
				user_icon:{
					online_css:"background-color:#54FD74;border:1px solid white",
					offline_css:"background-color:transparent;border:1px solid#aaaaaa",
					blocked_css:"background-color:#FF8380;border:1px solid white"
				},	
				font:{
					family:"arial",
					size:8,
					weight:500,
					color:{
						typing_color:"#eeeeee",
						idle_color:"#eeeeee",
						mod_color:"#eeeeee",
						title_color:"#eeeeee"
					},
					screen_name_states:{
						online:{
							link_css:"color:#fff;",
							visited_css:"color:#FDF5E6;",
							hover_css:"color:#FFFF00;",
							blocked:{
								link_css:"color:#FFB6C1;",
								visited_css:"color:red;",
								hover_css:"color:#cc0000;"
							}
						},
						offline:{
							link_css:"color:white;text-decoration:none;",
							visited_css:"color:#B0E0E6;text-decoration:none;",
							hover_css:"color:#ADD8E6;text-decoration:none;",
							blocked:{
								link_css:"color:#FFB6C1;text-decoration:none;",
								visited_css:"color:red;text-decoration:none;",
								hover_css:"color:#cc0000;text-decoration:none;"
							}
						}
					}
				}
			},
			send_chat_panel:{
				width:417,
				height:32,
				css:"font-size:9pt;font-family:arial;color:black;background-color:#aaaaaa;border:1px solid silver;"
			},
			user_pop_up_panel:{
				border:"1px solid silver",
				background_color:"#444444",
				opacity:.8,
				font:{
					screen_name_css:"font-weight:bold;font-size:9pt;color:lightblue;font-style:italic;",
					links_css:"font-family:arial;font-size:9pt;color:white;",
					functions_css:"font-family:arial;color:lightblue;font-size:9pt;",
					smalltext_css:"font-family:arial;color:white;font-size:7pt;"
				},
				dividing_line:"1px solid gray",
				widgets:{
					border:{
						link_css:"border:1px solid #666666",
						hover_css:"border:1px solid lightblue"
					}
				},
				send_chat_panel:{
					css:"font-size:9pt;font-family:arial;color:black;background-color:#aaaaaa;border:1px solid silver;"
				},
				send_private_button:{
					default_css:"border:1px solid silver; padding:2px 12px 2px 11px; font:10px arial;",
					states:{
						link_css:"color:white",
						hover_css:"color:lightblue",
						disabled_css:"color:#bbbbbb;border:1px solid #bbbbbb;"
					}
				}
			},
			options_panel:{
				outer_border:"1px solid #444444",
				inner_border:"1px solid silver",
				background_color:"gray",
				panel_font_css: "color:lightblue;font-family:arial;font-weight:bold;font-style:italic;font-size:12px",
				functions:{
					font_css:"color:white;font-size:12px;text-decoration:none",
					border:"1px solid silver"
				},
				selectors:{
					border:"3px solid silver",
					background_color:"#aaaaaa",
					hover_color:"#b0b0b0",
					selected_color:"#aaaa77",
					font_css:"color:#333333;font-family:arial;font-weight:normal;font-size:10px",
					separator:"1px solid silver"
				},
				room_selector:{
					room_name_font_css:"font-size:12px;font-weight:bold;color:white;",
					disabled_room_name_font_css:"font-size:12px;font-weight:bold;color:#dddddd;"
				},
				font_size_selector:{
					smallest:6,
					largest:16
				},
				color_selector:{
					color_values:["#fff","black","blue","red","purple","green","yellow","orange","white"]
				},
				remove_block_button:{
					default_css:"border:1px solid silver; padding:2px 12px 2px 11px; font:10px arial;",
					states:{
						link_css:"color:white",
						hover_css:"color:lightblue",
						disabled_css:"color:#bbbbbb;border:1px solid #bbbbbb;"
					}
				}
			},
			smileys_panel:{
				border:"1px solid #444444",
				background_color:"gray",
				width:250,
				height:200
			},
			login_panel:{
				background_color:"#444444",
				border:"1px solid silver",
				font:{
					textfield_description_css:"font-family:arial;font-size:8pt;color:darkgray;font-style:italic;font-weight:bold;",
					smalltext_css:"margin-right:10px;font-family:arial;font-size:8pt;color:white;"
				},
				textfield_css:"background-color:#dddddd;"
			},
			room_password_panel:{
				background_color:"#444444",
				border:"3px solid silver",
				font:{
					textfield_description_css:"font-family:arial;font-size:8pt;color:darkgray;font-style:italic;font-weight:bold;",
					smalltext_css:"font-style:italic;margin-right:10px;font-family:arial;font-size:8pt;color:white;"
				},
				textfield_css:"background-color:#dddddd;"
			},
			alert_panel:{
				background_color:"#dddddd",
				border:"1px solid black",
				font:{
					text_css:"margin-right:10px;font-family:arial;font-size:9pt;color:black;"
				}
			}
		}
	},
	split_screen:{
		background_color:"#555555"
	}
};
