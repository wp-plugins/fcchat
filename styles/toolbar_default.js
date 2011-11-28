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
		height:20,
		css:"background-color:gray;-moz-border-radius: 2px;-webkit-border-radius: 2px;border-radius:2px;",
		dialog_box:{
			css:"border:2px solid gray;background-color:#eeeeee;-moz-border-radius: 3px;-webkit-border-radius: 3px;border-radius:3px;",
			title_box_css:"top:0px;left:0px;height:40px;background-color:gray;",
			text:{
				css:"font-family:arial;font-size:12px;color:#444444",
				title_css:"font-weight:bold;color:white",
				link_css:"color:lightblue",
				screen_name_css:"font-family:arial;font-size:10pt;color:green;font-weight:700"
			}
		},
		divider_css:"top:2px;width:1px;height:16px;background-color:lightgray;",
		icons_16px:{
			top:2
		},
		icon_tray:{
			width:35,
			minimize_icon:{
				top:2,
				offset:35,
				css:"color:white;font-stretch:wider;font-size:10px;font-weight:bold;text-decoration:none"
			},
			restore:{
				width:75
			},
			hide_icon:{
				top:2,
				offset:15,
				css:"color:white;font-stretch:wider;font-size:10px;font-weight:bold;text-decoration:none"
			}
		}
	};