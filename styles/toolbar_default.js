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

jGo.toolbar.style={
		height:30,
		css:"-webkit-box-shadow:0px 0px 12px 2px rgba(0,0,0,0.5);box-shadow:0px 0px 12px 2px rgba(0,0,0,0.5);background-color:gray;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
		text:"color:white;font-size:10pt;font-family:arial",
		dialog_box:{
			css:"-webkit-box-shadow:0px 0px 12px 2px rgba(0,0,0,0.5);box-shadow:0px 0px 12px 2px rgba(0,0,0,0.5);border:2px solid gray;background-color:#eeeeee;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius:3px;",
			title_box_css:"top:0px;left:0px;height:40px;background-color:gray;",
			list_divider_css:"border-bottom:1px solid #dddddd",
			text:{
				css:"font-family:arial;font-size:12px;color:#444444",
				title_css:"font-weight:bold;color:white",
				link_css:"color:lightblue",
				screen_name_css:"font-family:arial;font-size:10pt;color:green;font-weight:700;text-decoration:none",
				user_info_css:"color:#888888",
				offline_css:"font-style:italic;color:green"
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
					height:"150px",
					"-webkit-box-shadow": "2px 2px 2px 2px rgba(0,0,0,0.5)",
					"box-shadow": "2px 2px 2px 2px rgba(0,0,0,0.5)",
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
						css:"color:#444444;font-stretch:wider;font-size:10px;font-weight:bold;text-decoration:none"
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
					"-webkit-box-shadow": "2px 2px 2px 2px rgba(0,0,0,0.5)",
					"box-shadow": "2px 2px 2px 2px rgba(0,0,0,0.5)",
					"background-color":"#eeeeee",
					border:"1px solid silver"
				},
				menu_item:{
					css:"padding:9px;font:10pt arial;",
					hide_icon:{
						css:"color:#444444;font-stretch:wider;font-size:10px;font-weight:bold;text-decoration:none"
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
					"-webkit-box-shadow": "2px 2px 2px 2px rgba(0,0,0,0.5)",
					"box-shadow": "2px 2px 2px 2px rgba(0,0,0,0.5)",
					"background-color":"#eeeeee",
					border:"1px solid silver"
				},
				menu_item:{
					css:"padding:9px;font:10pt arial;",
					set_notice:{
						css:"color:green;font-weight:bold;font-style:italic"
					},
					hide_icon:{
						css:"color:#444444;font-stretch:wider;font-size:10px;font-weight:bold;text-decoration:none"
					}
				}
			}
		},
		divider_css:"top:2px;width:1px;height:26px;background-color:lightgray;",
		icons_16px:{
			top:7
		},
		icon_tray:{
			width:35,
			minimize_icon:{
				top:6,
				offset:35,
				css:"color:white;font-stretch:wider;font-size:10px;font-weight:bold;text-decoration:none"
			},
			restore:{
				width:75
			},
			hide_icon:{
				top:6,
				offset:15,
				css:"color:white;font-stretch:wider;font-size:10px;font-weight:bold;text-decoration:none"
			}
		}
	};