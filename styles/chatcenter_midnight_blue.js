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
 *	window_style_template:"window_default.js",
 * 
 * If you create a decent style template. Please email us the template at 
 * support@fastcatsoftware.com
 */

(function(){
	

FCChatConfig.styles={
	chat_window:{
		frame:{
			logo:"fastcatlogo.gif",
			color:"#5f5f5f",
			title_css:"font-size:12px;font-weight:bold;color:white;",
			opacity:.90
		},
		main_panel:{
			height:568,
			background_image:"", //"tc2.gif",
			background_color:"#555555",
			border:"1px solid #aaaaaa",
			opacity:1,
			send_to_room_button:{
				default_css:"border:1px solid #666666; border-top:1px solid #797979;padding:2px 67px; font:10px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
				single_button_css:"padding:5px 45px;font:14px arial;font-weight:bold;",
				states:{
					link_css:"color:white",
					hover_css:"color:lightblue",
					disabled_css:"color:#bbbbbb;border:1px solid #666666"
				}
			},
			send_private_button:{
				default_css:"border:1px solid #666666; border-top:1px solid #797979;padding:2px 66px; font:10px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
				single_button_css:"padding:5px 45px;font:14px arial;font-weight:bold;",
				states:{
					link_css:"color:white",
					hover_css:"color:lightblue",
					disabled_css:"color:#bbbbbb;border:1px solid #666666"
				}
			},
			other_buttons:{
				default_css:"border:1px solid #666666; border-top:1px solid #797979;padding:2px 8px; font:12px arial;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
				states:{
					link_css:"color:white",
					hover_css:"color:lightblue",
					disabled_css:"color:#bbbbbb;border:1px solid #666666"
				}
			},
			widgets:{
				border:{
					link_css:"border:1px solid #666666",
					hover_css:"border:1px solid lightblue"
				},
				text_icon_css:"background-color:gray",
				more_icon_css:"color:white;font-stretch:wider;font-size:10px;font-weight:bold;text-decoration:none"
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
					border:"2px solid #666666",
					css:{opacity:.5},
					infobox:{
						border:"4px solid silver",
						triangle_color:"silver"
					}
				},
				private_chat_panel:{
					background_image:"chat_window_background.jpg",
					msgcenter_background_image:"chat_window_background.jpg",
					background_color:"#000000",
					border:"2px solid #666666",
					css:{opacity:.5}
				},
				user_icon:{
					online_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:#54FD74;border:1px solid white",
					offline_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:transparent;border:1px solid #aaaaaa",
					busy_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:yellow;border:1px solid white",
					blocked_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:#FF8380;border:1px solid white"
				},
				font:{
					family:"arial",
					size:9,
					timestamp_size:8,
					weight:500,
					color:{
						default_text_color:"white",
						timestamp_color:"#4cF66c",
						link_color:"white",
						censored_color:"red",
						offline_css:"color:#4cF66c"
					},
					screen_name_states:{
						online:{
							link_css:"color:#33ffff;",
							visited_css:"color:#FDF5E6;",
							hover_css:"color:#FFFF00;",
							blocked:{
								link_css:"color:#FFB6C1;",
								visited_css:"color:red;",
								hover_css:"color:#cc0000;"
							}
						},
						offline:{
							link_css:"color:#33ffff;text-decoration:none;",
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
				background_color:"#B7D0EC",
				border:"2px solid #96a3b1",
				opacity:.5,
				screen_name_dividers:{
					background_color:"transparent",
					hover_color:"#b3b3b3",
					border:"1px solid #768391"
				},
				room_display_panel:{
					background_color:"transparent",
					divider:"0px solid gray",
					text_css:"font-family:arial;font-size:8pt;font-weight:500;color:white;"
				},
				private_group_panel:{
					selected_user:{
						background_color:"#96a3b1",
						arrow:{
							color:"green",
							hover_color:"red"
						}
					}
				},
				user_icon:{
					online_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:#54FD74;border:1px solid white",
					offline_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:transparent;border:1px solid#aaaaaa",
					busy_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:yellow;border:1px solid white",
					blocked_css:"-moz-border-radius: 4px;-webkit-border-radius: 4px;border-radius:4px;background-color:#FF8380;border:1px solid white"
				},	
				profile_star:{
					css:"font-size:16px;font-family:courier;font-weight:bold;color:yellow;"
				},
				font:{
					family:"arial",
					size:8,
					weight:500,
					style:{
						user_info_css:"color:#eeeeee",
						mod_css:"color:#eeeeee",
						title_css:"color:#eeeeee"
					},
					screen_name_states:{
						online:{
							link_css:"color:#fff;text-decoration:none;",
							visited_css:"color:#FDF5E6;text-decoration:none;",
							hover_css:"color:#FFFF00;text-decoration:none;",
							blocked:{
								link_css:"color:#FFB6C1;text-decoration:none;",
								visited_css:"color:red;text-decoration:none;",
								hover_css:"color:#cc0000;text-decoration:none;"
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
				width_offset:-1,
				height:30,
				css:"font-size:9pt;font-family:arial;color:black;background-color:#aaaaaa;border:1px solid silver;"
			},
			send_to_panel:{
				css:"background-color:#d3d3d3;padding-top:1px;padding-bottom:0px;border:1px solid gray;box-shadow: 0px 5px 9px #bbbbbb inset;-moz-box-shadow: 0px 5px 9px #bbbbbb inset;-webkit-box-shadow: 0px 5px 9px #bbbbbb inset;",
				text_css:"font:12px arial;color:#444444",
				remove_button_css:"padding:0px 4px 0px 4px;color: red; font-size: 8pt; font-weight: bold; font-stretch:wider;text-decoration: none;text-align:top;text-decoration:none"
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
				infobox:{
					font_css:"color:white;font-size:12px;text-decoration:none",
					border:"4px solid silver",
					triangle_color:"silver"
				},
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
			tools_panel:{
				border:"1px solid #444444",
				background_color:"gray",
				smileys:{
					width:250,
					height:200
				},
				icons:{
					width:250,
					height:25
				}
			},
			chatrooms_panel:{
				selected_color:"lightblue",
				hover_color:"#888888",
				background_color:"transparent",
				horizontal_rule:"font-weight:bold;font-size:16px;border-bottom:2px solid silver;",
				separator:"1px solid #999999;",
				room_name_font_css:"font-size:14px;font-weight:bold;color:white;",
				font_css:"color:white;font-family:arial;font-weight:normal;font-size:12px;",
				count_font_css:"font-size:14px;color:cyan;font-weight:bold;",
				disabled_room_name_font_css:"font-size:12px;font-weight:bold;color:#dddddd;",
				exit_room_link_disabled_css:"color:#eeeeee;",
				room_passwords:{
					font:{
						textfield_description_css:"font-family:arial;font-size:12px;color:lightblue;font-style:italic;font-weight:bold;"
					},
					textfield_css:"color:black;background-color:#dddddd;border:0px;padding:5px;color:#444444"
				}
			},
			info_panel:{
				background_color:"transparent",
				font_css:"color:white",
				user_info_css:"color:#eeeeee;",
				screen_name_css:"font-family:arial;font-size:10pt;color:cyan;font-weight:700;text-decoration:none;",
				list_divider_css:"border-bottom:1px solid #999999;"
			},
			login_panel:{
				box_shadow:"0px 0px 12px 2px rgba(0,0,0,0.5)",
				background_color:"#eeeeee",
				border:"2px solid #666666",
				font:{
					textfield_description_css:{"font-family":"arial","font-size":"10pt",color:"black","font-style":"italic","font-weight":"bold"},
					smalltext_css:{"margin-right":"10px","font-family":"arial","font-size":"8pt",color:"black"}
				},
				textfield_css:"background-color:#dddddd !important;color:#444444 !important;width:120px !important;height:18px !important;"
			},
			edit_room_panel:{
				font:{
					title_css:"font-style:italic;font-weight:bold;margin-right:10px;font-family:arial;font-size:14px;color:lightblue;",
					textfield_description_css:"font-family:arial;font-size:12px;color:lightblue;font-style:italic;font-weight:bold;",
					smalltext_css:"font-style:italic;font-weight:bold;margin-right:10px;font-family:arial;font-size:10px;color:darkgray;"
				},
				textfield_css:"color:black;background-color:#dddddd;border:0px;padding:5px;color:#444444"
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

function applyQuickStyles(){
	var c = FCChatConfig.quickstyling;
	if(window["fcchat_domain"]&&c[window["fcchat_domain"]]){
			c = c[window["fcchat_domain"]];
	}else{
			c = c.alldomains;
	}
	c=c.application_window;
	var s = "FCChatConfig.styles.chat_window.frame";
	var x = jGo.util.mergeOption;
	if(c.frame_color!="")jGo.util.setOption(s+".color",c.frame_color);
	x(s+".title_css",c.title_css);
	
};
applyQuickStyles();

}());
