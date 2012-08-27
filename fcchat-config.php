<?php
//Default configuration for the chat

function fcchat_widget_options() {
  	return array(
		"title"=>array("value"=>"Chat","type"=>"text","quote"=>"1","sz"=>"20","desc"=>"Chat Widget Title"),
		"cmntcon"=>array("value"=>"","type"=>"comment","desc"=>"CONNECTION INFO"),
		"chat_id"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"20","desc"=>"The Chat ID you received on activation."),
		"host"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"20","desc"=>"The host value you received on activation."),
		
		"cmntgreet"=>array("value"=>"","type"=>"comment","desc"=>"BRANDING"),
		
		"small_logo"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"A 16x16 (approx) logo for your site. Insert the full path to the image file. ie. http://www.mysite.com/image.png"),
		"big_logo"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"A 80x80 (approx) logo for your site.  Insert the full path to the image file. ie. http://www.mysite.com/image.png"),
		"widget_title"=>array("value"=>"ChatCenter","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"The title displayed on the embedded widget."),
		"branding_bar_title"=>array("value"=>"Yourdomain Chat","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"Title displayed on the branding bar. Add the branding bar to the toolbar by inserting 'fullpage:logo' into <strong>toolbar_items</strong> field below"),
		"branding_bar_width"=>array("value"=>"140","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Width of the branding bar."),
		"startText"=>array("value"=>"Click here to join our chat.","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"Text displayed by the widget when it starts up."),
		"loginText"=>array("value"=>"Please sign in to join our chat.","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"Text displayed by the login panel when user integration is enabled."),
		"autoGreet"=>array("value"=>"Wellcome!! ","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"A message that is displayed when a user opens the ChatCenter window."),
		"full_page_loading"=>array("value"=>"Yourdomain chat will load momentarily.","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"Text displayed when the full page chat is loading."),
		"full_page_login"=>array("value"=>"Welcome to Yourdomain chat. Sign in to enter.","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"Text displayed if the full page chat requires signin."),
		
		"cmntperm"=>array("value"=>"","type"=>"comment","desc"=>"PERMISSIONS"),
		"require_login"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Guests are required to login to gain access to the chat."),
		"guests_can_chat"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"If no, guests may not send chats in the rooms (they can still observe)."),
		"guests_can_video_chat"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow guest accounts to use the video chat."),
		"videoconerence_only_in_designated_rooms"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Videoconferencing can be accessed only in rooms designated for video chat."),
		
		"cmntcms"=>array("value"=>"","type"=>"comment","desc"=>"USER ACCOUNT INTEGRATION"),
		"user_integration_bridge"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"Sets up user integration. Refer to the User Guide for info on how to set up user integration."),
		
		"cmntboxes"=>array("value"=>"","type"=>"comment","desc"=>"ONLINE, NEW MESSAGES, AND FRIENDS DIALOGS"),
		"alignment"=>array("value"=>"auto","type"=>"radio2","ops"=>array(array("value"=>"left","desc"=>"Left alignment of widget dialogs. For when the widget is in the right sidebar"),array("value"=>"right","desc"=>"Right alignment of widget dialogs. For when the widget is in the left sidebar"),array("value"=>"auto","desc"=>"Automatically detect alignment")), "quote"=>"1","desc"=>""),
		
		"cmntlang"=>array("value"=>"","type"=>"comment","desc"=>"LANGUAGE TEMPLATE"),
		"language_template"=>array("value"=>"english.js","type"=>"text","quote"=>"1","sz"=>"30","desc"=>"Templates located in the <strong>fcchat/languages/</strong> folder. Make sure the language file exists before editing."),
		
		"cmntstyle"=>array("value"=>"","type"=>"comment","desc"=>"STYLE TEMPLATES"),
		"templates"=>array(
"value"=>"alldomains:{
	widget:'widget_default_sidebar.js',
	toolbar:'toolbar_default.js',
	application_window:'chatcenter_light_gray.js'
}","type"=>"textarea","desc"=>"Templates located in the <strong>fcchat/styles/</strong> folder. There are three templates. One for the embedded widget, one for the toolbar, and one for the application window. It is recommended that you copy the original contents of this field and save them to a safe location. That way, you can restore the contents of this field if you make a mistake."),

		"cmntstyling"=>array("value"=>"","type"=>"comment","desc"=>"QUICK STYLING"),
		"quickstyling"=>array(
"value"=>"alldomains:{
	widget:{
		background_css:'',
		width_prop_offsets:'0:0:0', /*title : buttons : info box*/
		height_offset:0, 
		text_top_offset:0, 
		height_prop_offsets:'0:0:0', /*title : buttons : info box*/
		width_offset:0, 
		logo_top_offset:0,
		logo_left_offset:0,
		logo_css:'',
		title_css:'',
		full_page_button_css:'',
		off_button_css:'',
		infobox_css:'',
		base_font_css:'',
		title_font_css:'',
		alert_css:'',
		link_css:'',
		link_hover_css:'',
		link_disabled_css:'',
		info_css:''
	},
	toolbar:{
		background_css:'',
		divider_css:'',
		width_prop_offsets:'0:0:0', /*info box : buttons : minimized*/
		text_top_offset:0, 
		base_font_css:'',
		alert_css:'',
		link_css:'',
		link_hover_css:'',
		link_disabled_css:'',
		info_css:''
	},
	dialog:{
		border_css:'',
		title_background_css:'',
		title_css:'',
		link_css:''
	},
	application_window:{
		frame_color:'',
		title_css:''
	},
	full_page_css_obj:{
	}
}","type"=>"textarea","desc"=>"Read the quickstyling tutorial in the User Guide before editing. It is strongly recommended that you copy the original contents of this field and save them to a safe location. That way, you can restore the contents of this field if you make a mistake."),
		
		"cmntover"=>array("value"=>"","type"=>"comment","desc"=>"TEMPLATE OVERRIDES"),
		"template_overrides"=>array("value"=>"","type"=>"textarea","desc"=>"You may use the following area to make changes to the style and language templates. <br><br>You may also customize your templates by editing the template files directly. However, when you do so, your changes will be lost when you upgrade the chat to a new version. (Unless, of course, you make backup copies of the templates before upgrading, and then transfer your changes manually to the new templates when the upgrade is complete). <br><br>In contrast, when you use the Template Overrides section provided below to customize your templates, the changes will carry over when you upgrade the chat.<br><br>
To effectively use template overrides, you will need to read this tutorial: <a target=_blank href='http://www.fastcatsoftware.com/wp3.3/?p=7'>How to customize your chat with the template overrides function</a>."),
		
		"cmntemb"=>array("value"=>"","type"=>"comment","desc"=>"EMBEDDED WIDGET OPTIONS (options for the widget box that appears in the sidebar)"),
		"absolute_positioning"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Position the widget at a fixed location on the page? If yes, you must set the page coordinates in the widget style template file, either directly or by using <strong>template_overrides</strong> above."),
		"control_visible"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Do you want to display the sidebar widget?"),
		"control_padding"=>array("value"=>"0px","type"=>"text","quote"=>"1","sz"=>"20","desc"=>"Puts some spacing around your widget. In 'px' (pixels)."),
		
		"cmntool"=>array("value"=>"","type"=>"comment","desc"=>"TOOLBAR OPTIONS (options for the fixed toolbar)"),
		"toolbar_mode"=>array("value"=>"2","type"=>"radio2","ops"=>array(array("value"=>"0","desc"=>"Hidden"),array("value"=>"1","desc"=>"Visible for message alerts only"),array("value"=>"2","desc"=>"Always visible")), "quote"=>"0","desc"=>""),
		"toolbar_default_display"=>array("value"=>"1","type"=>"radio2","ops"=>array(array("value"=>"0","desc"=>"Minimized"),array("value"=>"1","desc"=>"Normal")), "quote"=>"0","desc"=>""),
		"toolbar_position"=>array("value"=>"bottomright","type"=>"radio2","ops"=>array(array("value"=>"bottomright","desc"=>"Bottom right"),array("value"=>"bottomleft","desc"=>"Bottom left"),array("value"=>"topright","desc"=>"Top right"),array("value"=>"topleft","desc"=>"Top left")), "quote"=>"1","desc"=>""),
		"toolbar_items"=>array("value"=>"['friendscenter','social_media']","type"=>"text","quote"=>"0","sz"=>"80","desc"=>"A list of items to place in the toolbar. The list MUST include 'friendscenter'. Refer to the User Guide or Product Manual for available items. Place brackets around the list. Each item must be in single quotes."),
		"custom_buttons"=>array("value"=>"","type"=>"textarea","desc"=>"Allows you to add your own customized buttons to the toolbar. Read the tutorial in the User Guide on adding custom buttons before editing this field."),
		
		"cmntmob"=>array("value"=>"","type"=>"comment","desc"=>"MOBILE BROWSER OPTIONS"),
		"toolbar_banner_mode"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Run floating toolbar in banner mode for mobile apps."),
		"toolbar_banner_height"=>array("value"=>"35","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Height of the banner."),
		"toolbar_banner_left_offset"=>array("value"=>"50","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Placement of the toolbar with respect to the left edge of the banner."),
		"toolbar_banner_top_offset"=>array("value"=>"0","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Placement of the banner with respect to the top of the page."),
		"toolbar_mobile_hidden"=>array("value"=>"/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i","type"=>"text","quote"=>"0","sz"=>"100","desc"=>"Hide floating toolbar for these mobile apps (support for fixed positioned elements is spotty in mobile apps). This directive is ignored if toolbar_banner_mode is set to true, above.The format below uses the syntax of regular expressions."),
		
		"cmntwmodes"=>array("value"=>"","type"=>"comment","desc"=>"CHATCENTER WINDOW MODES"),
		"chatcenter_layout"=>array("value"=>"0","type"=>"radio2","ops"=>array(array("value"=>"0","desc"=>"Chat rooms and messages"),array("value"=>"1","desc"=>"Messages only")), "quote"=>"0","desc"=>""),
		"open_chatcenter_in_new_tab"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Launch the ChatCenter into a new tab when a user tries to open it."),
		"allow_split_screen_mode"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow split screen mode."),
		
		"cmntwsz"=>array("value"=>"","type"=>"comment","desc"=>"CHATCENTER WINDOW SIZE"),
		"window_width"=>array("value"=>"853","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The width of the ChatCenter window."),
		"window_height_offset"=>array("value"=>"-160","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The height offset of the ChatCenter window relative the default height."),
		"chat_room_height_offset"=>array("value"=>"105","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The height offset of the chat room panel relative the default height."),
		
		"cmntchat"=>array("value"=>"","type"=>"comment","desc"=>"CHAT ROOM PARAMS"),
		"room_message_limit"=>array("value"=>"300","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Maximum number of room messages allowed before the room will auto-adjust."),
		"min_room_messages"=>array("value"=>"50","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The number of messages left in the room after an auto-adjust."),
		"max_chat_size"=>array("value"=>"2000","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The maximum size of a single chat message."),
		
		"cmntfpu"=>array("value"=>"","type"=>"comment","desc"=>"FULL PAGE URL"),
		"full_page_url"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"Changes the location of the full page chat. Read the tutorial in the User Guide on changing the location of the chat page before editing."),
		
		"cmntenv"=>array("value"=>"","type"=>"comment","desc"=>"ENVIRONMENTAL SETTINGS"),
		"default_on"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"The chat is enabled by default?"),
		"set_tab"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Set the browser tab as an alert when new chats arrive."),
		"no_chat_history"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Do not show chat history pages."),
		"showTyping"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Display the word 'typing' when a user is typing a message."),
		"display_timestamp"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Show the date and time of new chat messages by default."),
		"sounds_on"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Use sound effects by default."),
		
		"cmntpromo"=>array("value"=>"","type"=>"comment","desc"=>"USER PROMPT"),
		"prompt_user"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Prompt user to sign in to the chat when they first come to your site."),
		
		"cmntfb"=>array("value"=>"","type"=>"comment","desc"=>"FACEBOOK CONNECT"),
		"facebook_connect"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow Facebook connect."),
		"fb_connection_url"=>array("value"=>"http://chat.fastcatsoftware.com:8080","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"The default Facebook connection url."),
		
		"cmntcnt"=>array("value"=>"","type"=>"comment","desc"=>"COUNTRY FLAGS"),
		"show_country_flags"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>""),
		"ipinfodb_api_key"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"Get your free api key from http://ipinfodb.com/register.php."),
		
		"cmntprof"=>array("value"=>"","type"=>"comment","desc"=>"PROFILES"),
		"import_profiles"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"URL of the profile page. Read the tutorial in the User Guide on importing profiles before editing."),
		
		"cmntimav"=>array("value"=>"","type"=>"comment","desc"=>"IMAGES / AVATARS"),
		"upload_images_enabled"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Allow uploading of images."),
		"allow_crossdomain_images"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow users to post links to images from a different domain."),
		"current_domain"=>array("value"=>"fastcatsoftware.com","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"The current domain."),
		"import_default_avatar"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"When user integration is enabled, the users site account avatar will be used. (if possible)."),
		"script_type"=>array("value"=>"php","type"=>"radio2","ops"=>array(array("value"=>"php","desc"=>"PHP"),array("value"=>"asp","desc"=>"ASP")),"quote"=>"1","desc"=>""),
		"avatars_dir"=>array("value"=>"","type"=>"text","quote"=>"0","sz"=>"80","desc"=>"The directory in which avatars are placed."),
		"images_dir"=>array("value"=>"","type"=>"text","quote"=>"0","sz"=>"80","desc"=>"The directory in which uploaded images are placed."),
		"smileys_dir"=>array("value"=>"","type"=>"text","quote"=>"0","sz"=>"80","desc"=>"The directory in which smileys are placed."),
		"avatar_sz"=>array("value"=>"18","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The default height of avatars."),
		"show_avatar_in_chats"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Display user's avatar in chat messages."),
		
		"cmntgame"=>array("value"=>"","type"=>"comment","desc"=>"GAMES"),
		"allow_games"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow games."),
		"game_ids"=>array("value"=>"[2,1,256,325,86,6,254,1822,607,1723,225,4,1607,102,327,274,3,26,6346,562,1840,557,29,255,272,2227,5286,567,15,1658,64,3177,330,329,273,11,1661,12]","type"=>"text","quote"=>"0","sz"=>"180","desc"=>"A comma separated list of game IDs. List must be enclosed in square brackets. Game IDS should match game names in language template file"),
		
		"cmntsml"=>array("value"=>"","type"=>"comment","desc"=>"SMILEY LIST"),
		"smileys"=>array("value"=>"[['sm1.gif', ':-)','18',],['sm2.gif',':-)0','24'],['sm3.gif',':-)1','15'],['sm4.gif',':-)2','20'],['sm5.gif',':-)3','16'],['sm6.gif',':-)4','18'],['sm7.gif',':-)5','26'],['sm8.gif',':-)6','23'],['sm9.gif',':-)7','23'],['sm10.gif',':-)8','28'],['sm11.gif',':-)9','22'],['sm12.gif',':-)10','36'],['sm13.gif',':-)11','30'],['sm14.gif',':-)12','15'],['sm15.gif',':-)13','18'],['sm16.gif',':-)14','21'],['sm17.gif',':-)15','28'],['sm18.gif',':-)16','15']]","type"=>"text","quote"=>"0","sz"=>"180","desc"=>"Smiley list. Refer to product manual for instructions on how to correctly format this list."),
		
		"cmntvid"=>array("value"=>"","type"=>"comment","desc"=>"VIDEO"),
		"video_enabled"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Enable video."),
		"video_access_level"=>array("value"=>"3","type"=>"radio2","ops"=>array(array("value"=>"0","desc"=>"None"),array("value"=>"1","desc"=>"Private only"),array("value"=>"2","desc"=>"Public only"),array("value"=>"3","desc"=>"Private and Public")),"quote"=>"0","desc"=>""),
		"max_video_streams"=>array("value"=>"100","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The maximum number of simultaneous video streams."),
		"capture_width"=>array("value"=>"160","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Camera capture width."),
		"capture_height"=>array("value"=>"120","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Camera capture height."),
		"hd_capture_width"=>array("value"=>"320","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"HD Camera capture width."),
		"hd_capture_height"=>array("value"=>"240","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"HD Camera capture height."),
		"fps"=>array("value"=>"8","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Frames per second."),
		"quality"=>array("value"=>"95","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Camera quality setting."),
		"show_a_v_icon"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Show an icon in the room list that indicates that a particular room supports video chat."),
		
		"cmnttrans"=>array("value"=>"","type"=>"comment","desc"=>"TRANSLATOR"),
		"trans_enabled"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Enable the translator."),
		"trans_default_on"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Translator activated by default."),
		"trans_default_language_code"=>array("value"=>"en","type"=>"text","quote"=>"1","sz"=>"20","desc"=>"Language code for the default language."),
		"trans_url"=>array("value"=>"http://api.microsofttranslator.com/V2/Ajax.svc/","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"URL for the translator."),
		"trans_appid"=>array("value"=>"4690BC25149C7E7E98E4A356B8C807D6A7132424","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"Application id for the translator."),
		
		"cmnttranslit"=>array("value"=>"","type"=>"comment","desc"=>"TRANSLITERATION"),
		"transliteration_enabled"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Enable the transliterator."),
		
		"cmntcook"=>array("value"=>"","type"=>"comment","desc"=>"COOKIES"),
		"cookie_expires"=>array("value"=>"1","type"=>"radio2","ops"=>array(array("value"=>"0","desc"=>"End of session"),array("value"=>"1","desc"=>"Never")),"quote"=>"0","desc"=>""),
		"user_cookie"=>array("value"=>"fc_UID","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"User cookie name."),
		"session_cookie"=>array("value"=>"fc_ChatToken","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"Session cookie name."),
		"mod_cookie"=>array("value"=>"fc_ChatToken","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"Moderation cookie name."),
		"data_cookie"=>array("value"=>"fc_data","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"Data cookie name."),
		
		"cmntmisc"=>array("value"=>"","type"=>"comment","desc"=>"MISC"),
		"allow_links"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow links in chats."),
		"help_link"=>array("value"=>"http://www.fastcatsoftware.com/chat/manual2.2.html","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"Help link."),
		"show_help_button"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Show help button."),
		"show_user_list"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Show user list."),
		"show_settings_on_open"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Show settings menu when a user first opens the ChatCenter window."),
		"pin_windows"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Pin windows."),
		"pinned_by_default"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Windows are pinned by default."),
		"preload_images"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Preload images."),
		"noshow"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Hide the chat."),
		"flashEnabled"=>array("value"=>"test","type"=>"radio2","ops"=>array(array("value"=>"test","desc"=>"Automatically detect"),array("value"=>"true","desc"=>"Enabled"),array("value"=>"false","desc"=>"Disabled")),"quote"=>"2","desc"=>"Flash Enabled."),
		"websocketEnabled"=>array("value"=>"test","type"=>"radio2","ops"=>array(array("value"=>"test","desc"=>"Automatically detect"),array("value"=>"true","desc"=>"Enabled"),array("value"=>"false","desc"=>"Disabled")),"quote"=>"2","desc"=>"Websockets Enabled."),
		"userbox_mode"=>array("value"=>"0","type"=>"radio2","ops"=>array(array("value"=>"0","desc"=>"Click to open user dialog"),array("value"=>"1","desc"=>"Hover to open user dialog")),"quote"=>"0","desc"=>"User dialog box mode."),
		"zindex_base"=>array("value"=>"20477","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"z-index base."),
		"updates"=>array("value"=>"","type"=>"hidden")
	);
}

?>