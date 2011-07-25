/*
 * WINDOW STYLE TEMPLATE
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
 *	window_style_template:"window_blue_silver.js",
 * 
 * If you create a decent style template. Please email us the template at 
 * support@fastcatsoftware.com
 */

FCChatConfig.styles={
	chat_window:{
		frame:{
			logo:"fastcatlogo.gif",
			background_color:"#849EB9",
			opacity:.90
		},
		main_panel:{
			height:568,
			background_image:"", //"tc2.gif",
			background_color:"silver",
			border:"1px solid #aaaaaa",
			opacity:.95,
			send_to_room_button:{
				default_css:"border:1px solid white; padding:2px 8px; font:10px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
				states:{
					link_css:"color:#264673",
					hover_css:"color:white",
					disabled_css:"color:#aaaaaa;border:1px solid #dfdfdf"
				}
			},
			send_private_button:{
				default_css:"border:1px solid white; padding:2px 12px 2px 11px; font:10px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
				states:{
					link_css:"color:#264673",
					hover_css:"color:white",
					disabled_css:"color:#aaaaaa;border:1px solid #dfdfdf"
				}
			},
			other_buttons:{
				default_css:"border:1px solid white; padding:2px 8px; font:12px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
				states:{
					link_css:"color:#264673",
					hover_css:"color:white",
					disabled_css:"color:#aaaaaa;border:1px solid #dfdfdf"
				}
			},
			widgets:{
				border:{
					link_css:"border:1px solid #999999",
					hover_css:"border:1px solid lightblue"
				}
			},
			text:{
				font:{
					family:"arial",
					color:"#444444",
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
					border:"1px solid #777777",
					opacity:.5
				},
				private_chat_panel:{
					background_image:"private_chat_background.jpg",
					background_color:"#000000",
					border:"1px solid #777777",
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
				background_color:"#E9EEF5",
				border:"1px solid #a0a0a0",
				opacity:.5,
				screen_name_dividers:{
					background_color:"transparent",
					hover_color:"#D9DEE5",
					border:"1px solid #cccccc"
				},
				room_display_panel:{
					background_color:"transparent",
					divider_color:"#c0c0d0",
					text_css:"font-family:arial;font-size:7pt;font-weight:500;color:#204096;",
					change_room_link_css:"font-family:arial;font-size:7pt;font-weight:500;color:#214399;"
				},
				private_group_panel:{
					selected_user:{
						background_color:"#CACFF5",
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
				profile_star:{
					css:"font-size:21px;color:yellow;"
				},
				font:{
					family:"arial",
					size:8,
					weight:500,
					color:{
						typing_color:"#888888",
						idle_color:"#888888",
						mod_color:"#777777",
						title_color:"#294975"
					},
					screen_name_states:{
						online:{
							link_css:"color:#444444;",
							visited_css:"color:#FDF5E6;",
							hover_css:"color:#FFFF00;",
							blocked:{
								link_css:"color:#CC0000;",
								visited_css:"color:red;",
								hover_css:"color:#DF96A1;"
							}
						},
						offline:{
							link_css:"color:#444444;text-decoration:none;",
							visited_css:"color:#B0E0E6;text-decoration:none;",
							hover_css:"color:#ADD8E6;text-decoration:none;",
							blocked:{
								link_css:"color:#CC0000;text-decoration:none;",
								visited_css:"color:red;text-decoration:none;",
								hover_css:"color:#DF96A1;text-decoration:none;"
							}
						}
					}
				}
			},
			send_chat_panel:{
				width:417,
				height:32,
				css:"font-size:9pt;font-family:arial;color:black;background-color:#dddddd;border:1px solid #aaaaaa;"
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
				//the corresponding language names are in the language template
				translation_selector:{
					css:"margin-left:20px;border:4px solid lightblue;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;",
					language_codes:["_off","ar","bg","ca","zh-CHS","zh-CHT","cs","da","nl","en","et","fi","fr","de","el","ht","he","hu","id","it","ja","ko","lv","lt","no","pl","pt","ro","ru","sk","sl","es","sv","th","tr","uk","vi"]
				},
				font_size_selector:{
					smallest:6,
					largest:16
				},
				//the corresponding color names are in the language template
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
