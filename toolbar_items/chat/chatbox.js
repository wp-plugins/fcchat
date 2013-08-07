/*
 * Chatbox menu item
 */

jGo.fcchat_toolbar.chatbox = {};

//Chatbox style template
jGo.fcchat_toolbar.chatbox.style={
	menu_item:{
		width:180,
		icon: FCChatConfig.dir + "current_skin/bubblechat.png",
		icon_css:"",
		text:FCChatConfig.styles.widget.toolbar_item.text,
		buttons:FCChatConfig.styles.widget.toolbar_item.buttons,
		padding_left:10,
		padding_top:FCChatConfig.styles.widget.toolbar_item.chatcenter_layout.info_box.padding_top
	},
	dialog_box:{
		width:(jGo.mobile?300:FCChatConfig.chatbox.dialog_width),
		height:343,
		css:jGo.fcchat_toolbar.style.dialog_box.css,
		title_box_css:jGo.fcchat_toolbar.style.dialog_box.title_box_css,
		userlist_box_css:"top:40px;left:0px;height:40px;border-top:1px solid #cccccc;border-bottom:1px dotted #444444;",
		tab_cover_css:"top: 52px;left:"+(jGo.mobile?245:FCChatConfig.chatbox.dialog_width-70)+"px;width:70px;height:60px;",
		up_tab_css:"top: 72px;left:"+(jGo.mobile?265:FCChatConfig.chatbox.dialog_width-50)+"px",
		down_tab_css:"top: 85px;left:"+(jGo.mobile?265:FCChatConfig.chatbox.dialog_width-50)+"px",
		view_msg_box_css:"top:82px;left:0px;height:200px;padding-top:4px;",
		send_msg_box_css:"top:286px;left:0px;height:57px;border-top:1px dotted #444444;",
		input_css:"height:18px !important;background-color:white !important;border:1px solid silver !important;color:#44444 !important;",
		text:jGo.fcchat_toolbar.style.dialog_box.text
	},
	infobox_menu:{
		position:{
			left:null,
			top:null,
			offsetLeft:-60,
			offsetTop:30
		},
		css:{
			width:"250px",
			height:"250px",
			"-webkit-box-shadow": "1px 1px 3px 1px rgba(0,0,0,0.3)",
			"box-shadow": "0px 0px 3px 1px rgba(0,0,0,0.3)",
			"background-color":jGo.util.getCSSProp("jGo.fcchat_toolbar.style.dialog_box.css","background-color"),
			border:"1px solid gray"
		},
		menu_item:{
			max_title_length:300,
			hide_icon:{
				css:"color:#444444;font-stretch:wider;font-size:16px;font-weight:bold;text-decoration:none"
			}
		}
	}
};

(function(){var j=jGo.$;var l=jGo.config.max_z_index-100;var m;var o;var q=jGo.fcchat_toolbar.chatbox.style;var r="href='javascript:fc_chat.";var t=jGo.mobile;var u;var v="background-color:#aaaaaa";var w="float:right;margin-right:7px;"+q.dialog_box.text.link_css+";text-decoration:none;font-weight:bold;font-stretch:wider;";var x=q.dialog_box.text;var y=0;var z=0;var A;var B=0;function EN(a){var n=parseInt(a);return(n==null||isNaN(n)?0:n)};this.close_disc=function(){if(z){z=0;var a="00002z"+z;fc_chat.sendMsg(a,1)}};this.enable_disc=function(){j('div.fc_disc_button').html(I())};this.disable_disc=function(){j('div.fc_disc_button').html(J())};this.enable_disc_mobile=function(){j('span.fc_disc_button').html(K())};this.disable_disc_mobile=function(){j('span.fc_disc_button').html(L())};this.click_tab=function(e){if(t||e.target.getAttribute('id')=='fc_disc_up'&&B==1||e.target.getAttribute('id')=='fc_disc_down'&&B==0){var a=j('#fc_disc_userlist_wrapper');var b=j('#fc_page_chat_wrapper');var c=j('#fc_tab_cover');var d=j('#fc_disc_up');var f=j('#fc_disc_down');var g=a.height()+b.height()+2;var h=EN(a.css("top"));var i;if(B){a.css({height:"40px"});h=h+42;i=g-42;B=0}else{a.css({height:(g-42)+"px"});h=h+g-40;i=40;B=1}b.css({height:i+"px",top:h+"px"});c.css({top:(h-30)+"px"});d.css({top:(h-10)+"px"});f.css({top:(h+3)+"px"})}};this.reset_disc=function(){j("#fc_page_chat").html(C());j("#fc_disc_userlist").html("")};var C=function(){return"<div style='margin-bottom:2px' id='fc_disc_pghdr'><span style='"+x.info+"'>"+u(463,'Chat:')+"</span><span style='margin-left:10px;"+x.info+"' id='fc_disc_pg'></span></div>"+"<span id='fc_page_chat_loading' style='"+x.info+"'>"+u(120,'Loading Chat...Please Wait...')+"</span>"};var D=function(a,s,b,c){var d=a.createWidget('DefaultMenu',[s,F(),null,j(b),p=j(document.body),(fc_chat.getexp6()||(t)?0:1),t]);return d};var E=function(a){return'<a style="font-weight:bold;'+x.secondary_link_css+';text-decoration:none"'+'href="javascript:void" onclick="fc_chat.cDisc();return false">&laquo;&laquo; '+u(456,"More")+'</a>&nbsp;<span style="'+x.info+'">('+a+')</span>'};var F=function(){var a=u(464,'Not Specified');var b=document.title;if(b>q.infobox_menu.menu_item.max_title_length){b=b.substring(0,q.infobox_menu.menu_item.max_title_length)+'...'}if(!A.use_page_title||b==''){b=a}if(A.topic){b=A.topic}var c="<b>"+u(465,'Description')+":</b> "+a;if(A.desc){c=A.desc}return"<div style='padding:15px'>"+"<span style='"+x.info+"'><b>"+u(466,'Topic')+":</b> "+b+"<br><br>"+c+"</span></div>"};var G=function(){var a="00002z"+z;fc_chat.sendMsg(a,1)};var H=function(){return"<span class='fc_disc_count fc_info_text' style='"+q.menu_item.text.info_css+"'>("+fc_chat.discC+")</span>"};var I=function(){return"<a style='text-decoration:none;' href='javascript:jGo.fcchat_toolbar.chatbox.tgl_dialog()'>"+(q.menu_item.icon!=''?"<img style='display:block;position:absolute;top:"+(jGo.fcchat_toolbar.style.icons_16px.top)+"px; left: "+q.menu_item.padding_left+"px;width:16px;height:16px;"+q.menu_item.icon_css+"' src='"+q.menu_item.icon+"'>":"")+"<div id='jGo_disc_txt_inner' style='position:absolute;top:0px;left:"+(q.menu_item.icon!=''?31:10)+"px;width:"+(q.menu_item.width-(q.menu_item.icon!=''?28:7))+"px;padding-top:"+(q.menu_item.padding_top+fc_chat.get_ie_offset())+"px;"+jGo.fcchat_toolbar.style.text+";"+q.menu_item.buttons.states.link_css+";'>"+(A.button_text)+" "+H()+"</div>"+"</a>"};var J=function(){return"<a style='text-decoration:none;cursor:default;' href='javascript:void(0)'>"+(q.menu_item.icon!=''?"<img style='display:block;position:absolute;top:"+(jGo.fcchat_toolbar.style.icons_16px.top)+"px; left: "+q.menu_item.padding_left+"px;width:16px;height:16px;"+q.menu_item.icon_css+"' src='"+q.menu_item.icon+"'>":"")+"<div id='jGo_disc_txt_inner' style='position:absolute;top:0px;left:"+(q.menu_item.icon!=''?31:10)+"px;width:"+(q.menu_item.width-(q.menu_item.icon!=''?28:7))+"px;padding-top:"+(q.menu_item.padding_top+fc_chat.get_ie_offset())+"px;"+jGo.fcchat_toolbar.style.text+";"+q.menu_item.buttons.states.disabled_css+";'>"+(A.button_text)+" "+H()+"</div>"+"</a>"};var K=function(){return"<a style='text-decoration:none;' href='javascript:jGo.fcchat_toolbar.chatbox.tgl_dialog()'>"+(q.menu_item.icon!=''?"<img style='width:16px;height:16px;"+q.menu_item.icon_css+"' src='"+q.menu_item.icon+"'>":"")+"&nbsp;&nbsp;<span id='jGo_disc_txt_inner' style='"+jGo.fcchat_toolbar.style.text+";"+q.menu_item.buttons.states.link_css+";'>"+(A.button_text)+" "+H()+"</span>"+"</a>"};var L=function(){return"<a style='text-decoration:none;cursor:default;' href='javascript:void(0)'>"+(q.menu_item.icon!=''?"<img style='width:16px;height:16px;"+q.menu_item.icon_css+"' src='"+q.menu_item.icon+"'>":"")+"&nbsp;&nbsp;<span id='jGo_disc_txt_inner' style='"+jGo.fcchat_toolbar.style.text+";"+q.menu_item.buttons.states.disabled_css+";'>"+(A.button_text)+" "+H()+"</span>"+"</a>"};var M=function(a,k){jGo.hooks.addHook(a+'_close_dialogs','close_disc',this,'close_disc');jGo.hooks.addHook('fcchat_enable_toolbar_fn','enable_toolbar_disc',this,'enable_disc'+(k?'_mobile':''));jGo.hooks.addHook('fcchat_disable_toolbar_fn','disable_toolbar_disc',this,'disable_disc'+(k?'_mobile':''));jGo.hooks.addHook('fcchat_reset_vars','reset_disc_chat',this,'reset_disc');u=fc_chat.textSetter;m=FCChatConfig.dir;A=fc_chat.chat_params;q.menu_item.width=A.button_width;o=m+"current_skin/"};jGo.fcchat_toolbar.chatbox.create=function(a){M(a);return N()};jGo.fcchat_toolbar.chatbox.create_mobile_layout=function(a){M(a,1);return L()};jGo.fcchat_toolbar.chatbox.create_dialogs=function(){return O()};jGo.fcchat_toolbar.chatbox.append_dialogs=function(a){return Q(a)};jGo.fcchat_toolbar.chatbox.tgl_dialog=function(){return R()};jGo.fcchat_toolbar.chatbox.create_infobox=function(a,s,b,c){return D(a,s,b,c)};jGo.fcchat_toolbar.chatbox.set_more_msgs=function(a){return E(a)};var N=function(){return"<div class='fc_disc_button' style='position: absolute;width:"+q.menu_item.width+"px;top:0px;left:0px;'>"+J()+"</div>"};var O=function(){dialog="<div class='jGo_app jGo_myapp jGo_dialog' id='fc_page_discussion_dialog' style='position:absolute;display: none;visibility: visible;"+q.dialog_box.css+";text-align:left;height:"+q.dialog_box.height+"px;width:"+q.dialog_box.width+"px;top: 113px; left:210px; z-index:"+l+";overflow:hidden;'>"+"</div>";return dialog};var P=function(){if(y==0){var a="<div id='fc_page_disc_title' style='position:absolute;width:"+q.dialog_box.width+"px;"+q.dialog_box.title_box_css+";overflow:hidden'><div style='padding:7px;'><a style='"+w+"' href='javascript:jGo.fcchat_toolbar.chatbox.tgl_dialog()'>x</a><span style='"+q.dialog_box.text.title_css+"'>"+(A.title_text)+"</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+"<a style='"+q.dialog_box.text.link_css+"' HREF='javascript:void' onclick=\"return fc_chat.toggleMenu(this,"+fc_chat.uid+",'pg_info');\">"+u(467,'Info')+"</a>&nbsp;&nbsp;&nbsp;"+"<a style='"+q.dialog_box.text.link_css+"' "+r+"clr_disc()'>"+u(273,'Clear')+"</a></div></div>"+"<div id='fc_disc_userlist_wrapper' style='position:absolute;width:"+q.dialog_box.width+"px;"+q.dialog_box.userlist_box_css+";overflow:auto'><div id='fc_disc_userlist' style='padding:3px;overflow:auto;overflow-x:hidden;"+q.dialog_box.text.css+"'>"+"</div></div>"+"<div id='fc_tab_cover' style='position: absolute;"+q.dialog_box.tab_cover_css+";'></div>"+"<div id='fc_disc_up' class='fc_drag_disc' style='position: absolute;"+q.dialog_box.up_tab_css+";background-image: url("+o+"chatelems1.gif); background-repeat: no-repeat; FONT-SIZE: 1pt; width: 15px; height:7px; background-position: -99px -137px;cursor:pointer;'></div>"+"<div class='fc_d6' id='fc_page_chat_wrapper' style='position:absolute;width:"+q.dialog_box.width+"px;"+q.dialog_box.view_msg_box_css+"overflow:auto'><div id='fc_page_chat' style='padding:3px;overflow:auto;line-height:1'>"+C()+"</div></div>"+"<div id='fc_disc_down' class='fc_drag_disc' style='position: absolute;"+q.dialog_box.down_tab_css+";;background-image: url("+o+"chatelems1.gif); background-repeat: no-repeat; FONT-SIZE: 1pt; width: 15px; height:7px; background-position: -119px -137px;cursor:pointer;'></div>"+"<div id='fc_send_page_chat' style='position:absolute;width:"+q.dialog_box.width+"px;"+q.dialog_box.send_msg_box_css+";overflow:hidden'>"+"<div style='height:16px;padding:6px'>"+(A.topic_closed||A.lock_all_discussions?"<span style='font-wieght:bold;"+q.dialog_box.text.info+"'>"+u(468,'This chat topic is closed')+"</span>":"<a id='fc_bld' style='margin-left:1px' href=\"javascript:fc_chat.insertTags(\'"+u(37)+"\',\'"+u(37)+"\',\' "+u(23)+" \',4);\" border=0>"+"<img title='"+u(23)+"' style='"+v+"' id='fc_e_bld' src='"+o+"text_bold.png'>"+"</a>"+"<a id='fc_it' style='margin-left:1px' href=\"javascript:fc_chat.insertTags(\'"+u(38)+"\',\'"+u(38)+"\',\' "+u(24)+" \',4);\" border=0>"+"<img title='"+u(24)+"' style='"+v+"' id='fc_e_it' src='"+o+"text_italic.png'>"+"</a>"+"<a id='fc_uln' style='margin-left:1px' href=\"javascript:fc_chat.insertTags(\'"+u(39)+"\',\'"+u(39)+"\',\' "+u(25)+" \',4);\" border=0>"+"<img title='"+u(25)+"' style='"+v+"' id='fc_e_uln' src='"+o+"text_underline.png'>"+"</a>"+"<a id='fc_img' style='margin-left:2px' href=\"javascript:fc_chat.insertTags(\'[[\',\']]\',\'"+u(36)+"\',4);\" border=0>"+"<img title='"+u(26)+"' id='fc_e_img' src='"+o+"image_1.png'>"+"</a>"+"<a class='fc_tools_a' style='margin-left:2px' href=\"javascript:fc_chat.tgl_tools(0,"+FCChatConfig.styles.chat_window.main_panel.tools_panel.smileys.width+","+FCChatConfig.styles.chat_window.main_panel.tools_panel.smileys.height+",4)\">"+"<img id='fc_e_sml3' src='"+o+"emoticon_smile.png'>"+"</a>"+(FCChatConfig.transliteration_enabled?"<a  id='fc_trlit' style='margin-left:2px;' "+r+"open_trlit()'>"+"<img title='"+u(304,"Type in your language")+"' src='"+o+"google_transliteration.png'>"+"</a>":"")+"<a title='"+u(295,"doodlepad")+"' id='fc_note' style='margin-left:2px' "+r+"note(1)'>"+"<img src='"+o+"pencil.png'>"+"</a>"+"<a title='"+u(311,"Share a document")+"' id='fc_doc' style='margin-left:2px;' "+r+"doc(2)'>"+"<img src='"+o+"document.png'>"+"</a>"+" <input id='fc_sendpagechat' class='fc_input' onKeyPress='fc_chat.oKD(event)' onKeyDown='fc_chat.oKD2(event)' type=text style='"+q.dialog_box.input_css+";width:"+(q.dialog_box.width-(t?30:20))+"px !important'><br>")+"</div></div>";j("#fc_page_discussion_dialog").html(a);j('div.fc_drag_disc').bind('click',this.click_tab);if(t)j('input.fc_input').css('font-size','16px');y=1}};var Q=function(a){j(document.body).append(a)};var R=function(){if(!fc_chat.get('login_lock')&&!fc_chat.get('l')){z=jGo.fcchat_toolbar.control.toggle_dialog(j("#fc_page_discussion_dialog"),S,P,200);fc_chat.tgl_disc();G()}};var S=function(){jGo.fcchat_toolbar.control.position_dialog(j("#fc_page_discussion_dialog"),EN(j("#fc_chatbox_toolbar_item").css("left")),q.dialog_box.width,q.dialog_box.height)}})();if(jGo.scripts)jGo.scripts.onLoad('chatbox.js');