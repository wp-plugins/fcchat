<?php
//Default configuration for the chat

function fcchat_widget_options() {
  	return array(
		"title"=>array("value"=>"Chat","type"=>"text","quote"=>"1","sz"=>"20","desc"=>"Chat Widget Title"),
		"cmntcon"=>array("value"=>"","type"=>"comment","desc"=>"CONNECTION INFO"),
		"chat_id"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"20","desc"=>"The Chat ID you received on activation."),
		"host"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"20","desc"=>"The host value you received on activation."),
		"cmntgreet"=>array("value"=>"","type"=>"comment","desc"=>"BASIC GREETINGS"),
		"startText"=>array("value"=>"To begin chatting, press the <b>Open Button. </b>","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"Text displayed by the widget when it starts up."),
		"loginText"=>array("value"=>"Please login using your site account.","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"Text displayed by the login panel when user integration is enabled."),
		"autoGreet"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"A message that is displayed when a user opens the ChatCenter window."),
		"cmntlang"=>array("value"=>"","type"=>"comment","desc"=>"LANGUAGE (templates located in the fcchat/languages/ folder)"),
		"language_template"=>array("value"=>"english.js","type"=>"text","quote"=>"1","sz"=>"30","desc"=>"The current language. Make sure the language file exists before changing."),
		"cmntstyle"=>array("value"=>"","type"=>"comment","desc"=>"STYLES (templates located in the fcchat/styles folder)"),
		"widget_style_template"=>array("value"=>"widget_default_sidebar.js","type"=>"text","quote"=>"1","sz"=>"30","desc"=>"The current widget style. Make sure the style file exists before changing."),
		"toolbar_style_template"=>array("value"=>"toolbar_default.js","type"=>"text","quote"=>"1","sz"=>"30","desc"=>"The current toolbar style. Make sure the style file exists before changing."),
		"chatcenter_style_template"=>array("value"=>"chatcenter_light_gray.js","type"=>"text","quote"=>"1","sz"=>"30","desc"=>"The current style for the ChatCenter window. Make sure the style file exists before changing."),
		"cmntover"=>array("value"=>"","type"=>"comment","desc"=>"TEMPLATE OVERRIDES"),
		"template_overrides"=>array("value"=>"","type"=>"textarea","desc"=>"You may use the following area to make changes to the style and language templates. <br><br>You may also customize your templates by editing the template files directly. However, when you do so, your changes will be lost when you upgrade the chat to a new version. (Unless, of course, you make backup copies of the templates before upgrading, and then transfer your changes manually to the new templates when the upgrade is complete). <br><br>In contrast, when you use the Template Overrides section provided below to customize your templates, the changes will carry over when you upgrade the chat.<br><br>
To effectively use template overrides, you will need to read this tutorial: <a href='http://www.fastcatsoftware.com/wp3.3/?p=7'>How to customize your chat with the template overrides function</a>."),
		"cmntemb"=>array("value"=>"","type"=>"comment","desc"=>"EMBEDDED WIDGET OPTIONS (options for the widget box that appears in the sidebar)"),
		"absolute_positioning"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Position the widget at a fixed location on the page? If yes, you must set the page coordinates in the widget style template file. (see above)"),
		"control_visible"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Do you want to display the sidebar widget?"),
		"control_padding"=>array("value"=>"0px","type"=>"text","quote"=>"1","sz"=>"20","desc"=>"Puts some spacing around your widget. In 'px' (pixels)."),
		"cmntool"=>array("value"=>"","type"=>"comment","desc"=>"TOOLBAR OPTIONS (options for the fixed toolbar)"),
		"toolbar_mode"=>array("value"=>"2","type"=>"radio2","ops"=>array(array("value"=>"0","desc"=>"Hidden"),array("value"=>"1","desc"=>"Visible for message alerts only"),array("value"=>"2","desc"=>"Always visible")), "quote"=>"0","desc"=>""),
		"toolbar_default_display"=>array("value"=>"1","type"=>"radio2","ops"=>array(array("value"=>"0","desc"=>"Minimized"),array("value"=>"1","desc"=>"Normal")), "quote"=>"0","desc"=>""),
		"toolbar_position"=>array("value"=>"bottomright","type"=>"radio2","ops"=>array(array("value"=>"bottomright","desc"=>"Bottom right"),array("value"=>"bottomleft","desc"=>"Bottom left"),array("value"=>"topright","desc"=>"Top right"),array("value"=>"topleft","desc"=>"Top left")), "quote"=>"1","desc"=>""),
		"toolbar_items"=>array("value"=>"['friendscenter','social_media']","type"=>"text","quote"=>"0","sz"=>"80","desc"=>"A list of items to place in the toolbar. The list MUST include 'friendscenter'. Refer to product manual for available items. Place brackets around the list. Each item must be in single quotes."),
		"cmntmob"=>array("value"=>"","type"=>"comment","desc"=>"MOBILE BROWSER OPTIONS"),
		"toolbar_banner_mode"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Run floating toolbar in banner mode for mobile apps."),
		"toolbar_banner_height"=>array("value"=>"35","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Height of the banner."),
		"toolbar_banner_left_offset"=>array("value"=>"50","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Placement of the toolbar with respect to the left edge of the banner."),
		"toolbar_banner_top_offset"=>array("value"=>"0","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Placement of the banner with respect to the top of the page."),
		"toolbar_mobile_hidden"=>array("value"=>"/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i","type"=>"text","quote"=>"0","sz"=>"100","desc"=>"Hide floating toolbar for these mobile apps (support for fixed positioned elements is spotty in mobile apps). This directive is ignored if toolbar_banner_mode is set to true, above.The format below uses the syntax of regular expressions."),
		"cmntpromo"=>array("value"=>"","type"=>"comment","desc"=>"USER PROMPT"),
		"prompt_user"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Prompt user to sign in to the chat when they first come to your site."),
		"cmntboxes"=>array("value"=>"","type"=>"comment","desc"=>"ONLINE, NEW MESSAGES, AND FRIENDS DIALOGS"),
		"alignment"=>array("value"=>"left","type"=>"radio2","ops"=>array(array("value"=>"left","desc"=>"Left alignment of widget dialogs. For when the widget is in the right sidebar"),array("value"=>"right","desc"=>"Right alignment of widget dialogs. For when the widget is in the left sidebar")), "quote"=>"1","desc"=>""),
		"cmntchat"=>array("value"=>"","type"=>"comment","desc"=>"CHAT ROOM PARAMS"),
		"open_in_room"=>array("value"=>"0","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Default room index. (0-50)"),
		"room_message_limit"=>array("value"=>"300","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Maximum number of room messages allowed before the room will auto-adjust."),
		"min_room_messages"=>array("value"=>"50","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The number of messages left in the room after an auto-adjust."),
		"max_chat_size"=>array("value"=>"2000","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The maximum size of a single chat message."),
		"cmntfb"=>array("value"=>"","type"=>"comment","desc"=>"FACEBOOK CONNECT"),
		"facebook_connect"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow Facebook connect."),
		"fb_connection_url"=>array("value"=>"http://chat.fastcatsoftware.com:8080","type"=>"text","quote"=>"1","sz"=>"60","desc"=>"The default Facebook connection url."),
		"cmntinteg"=>array("value"=>"","type"=>"comment","desc"=>"USER ACCOUNT INTEGRATION"),
		"forum_proxy"=>array("value"=>"","type"=>"text","quote"=>"0","sz"=>"80","desc"=>"Proxy file for user integration. Refer to the installation guide for info on how to set up user integration."),
		"cmntwmodes"=>array("value"=>"","type"=>"comment","desc"=>"CHATCENTER WINDOW MODES"),
		"popup_window_on_open"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Launch the ChatCenter into a browser popup window when a user clicks, 'Open ChatCenter'."),
		"popup_window_from_menu"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow user to launch Chatcenter into a browser popup window from the Settings Menu."),
		"allow_split_screen_mode"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow split screen mode."),
		"cmntwsz"=>array("value"=>"","type"=>"comment","desc"=>"CHATCENTER WINDOW SIZE"),
		"window_height_offset"=>array("value"=>"-105","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The height offset of the ChatCenter window relative the default height."),
		"chat_room_height_offset"=>array("value"=>"75","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The height offset of the chat room panel relative the default height."),
		"cmntenv"=>array("value"=>"","type"=>"comment","desc"=>"ENVIRONMENTAL SETTINGS"),
		"default_on"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"The chat is enabled by default?"),
		"auto_connect"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"The chat will automatically connect new users as guests."),
		"require_login"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Guests are required to login to gain access to the ChatCenter."),
		"no_chat_history"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Do not show chat history pages."),
		"showTyping"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Display the word 'typing' when a user is typing a message."),
		"display_timestamp"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Show the date and time of new chat messages by default."),
		"sounds_on"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Use sound effects by default."),
		"new_chat_alert_sound"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Alert users when a new chat room message arrives."),
		"cmntcnt"=>array("value"=>"","type"=>"comment","desc"=>"COUNTRY FLAGS"),
		"show_country_flags"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>""),
		"ipinfodb_api_key"=>array("value"=>"","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"Get your free api key from http://ipinfodb.com/register.php."),
		"cmntprof"=>array("value"=>"","type"=>"comment","desc"=>"PROFILES"),
		"useProfiles"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>""),
		"prof_subdir"=>array("value"=>"(window['fc_chat_path'] || '/FCChat/') + 'html/Profile.html?u='","type"=>"text","quote"=>"0","sz"=>"80","desc"=>""),
		"cmntimav"=>array("value"=>"","type"=>"comment","desc"=>"IMAGES / AVATARS"),
		"upload_images_enabled"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Allow uploading of images."),
		"allow_crossdomain_images"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow users to post links to images from a different domain."),
		"current_domain"=>array("value"=>"fastcatsoftware.com","type"=>"text","quote"=>"1","sz"=>"80","desc"=>"The current domain."),
		"use_avatars"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow users to choose an avatar"),
		"import_default_avatar"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"When user integration is enabled, the users site account avatar will be used. (if possible)."),
		"script_type"=>array("value"=>"php","type"=>"radio2","ops"=>array(array("value"=>"php","desc"=>"PHP"),array("value"=>"asp","desc"=>"ASP")),"quote"=>"1","desc"=>""),
		"avatars_dir"=>array("value"=>"(window['fc_chat_path'] || '/FCChat/') + 'html/images/avatars/'","type"=>"text","quote"=>"0","sz"=>"80","desc"=>"The directory in which avatars are placed."),
		"images_dir"=>array("value"=>"(window['fc_chat_path'] || '/FCChat/') + 'html/images/'","type"=>"text","quote"=>"0","sz"=>"80","desc"=>"The directory in which uploaded images are placed."),
		"smileys_dir"=>array("value"=>"(window['fc_chat_path'] || '/FCChat/') + 'html/images/smileys/'","type"=>"text","quote"=>"0","sz"=>"80","desc"=>"The directory in which smileys are placed."),
		"avatar_sz"=>array("value"=>"26","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The default height of avatars."),
		"show_avatar_in_chats"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Display user's avatar in chat messages."),
		"cmntgame"=>array("value"=>"","type"=>"comment","desc"=>"GAMES"),
		"allow_games"=>array("value"=>"true","type"=>"radio","quote"=>"0","desc"=>"Allow games."),
		"game_ids"=>array("value"=>"[2,1,256,325,86,6,254,1822,607,1723,225,4,1607,102,327,274,3,26,6346,562,1840,557,29,255,272,2227,5286,567,15,1658,64,3177,330,329,273,11,1661,12]","type"=>"text","quote"=>"0","sz"=>"180","desc"=>"A comma separated list of game IDs. List must be enclosed in square brackets. Game IDS should match game names in language template file"),
		"cmntsml"=>array("value"=>"","type"=>"comment","desc"=>"SMILEY LIST"),
		"smileys"=>array("value"=>"[['sm1.gif', ':-)','18',],['sm2.gif',':-)0','24'],['sm3.gif',':-)1','15'],['sm4.gif',':-)2','20'],['sm5.gif',':-)3','16'],['sm6.gif',':-)4','18'],['sm7.gif',':-)5','26'],['sm8.gif',':-)6','23'],['sm9.gif',':-)7','23'],['sm10.gif',':-)8','28'],['sm11.gif',':-)9','22'],['sm12.gif',':-)10','36'],['sm13.gif',':-)11','30'],['sm14.gif',':-)12','15'],['sm15.gif',':-)13','18'],['sm16.gif',':-)14','21'],['sm17.gif',':-)15','28'],['sm18.gif',':-)16','15']]","type"=>"text","quote"=>"0","sz"=>"180","desc"=>"Smiley list. Refer to product manual for instructions on how to correctly format this list."),
		"cmntvid"=>array("value"=>"","type"=>"comment","desc"=>"VIDEO"),
		"video_enabled"=>array("value"=>"false","type"=>"radio","quote"=>"0","desc"=>"Enable video."),
		"video_access_level"=>array("value"=>"3","type"=>"radio2","ops"=>array(array("value"=>"0","desc"=>"None"),array("value"=>"1","desc"=>"Private only"),array("value"=>"2","desc"=>"Public only"),array("value"=>"3","desc"=>"Private and Public")),"quote"=>"0","desc"=>""),
		"max_video_streams"=>array("value"=>"30","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"The maximum number of simultaneous video streams."),
		"capture_width"=>array("value"=>"160","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Camera capture width."),
		"capture_height"=>array("value"=>"120","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Camera capture height."),
		"fps"=>array("value"=>"8","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Frames per second."),
		"quality"=>array("value"=>"95","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"Camera quality setting."),
		"video_window1_color"=>array("value"=>"darkOliveGreen","type"=>"text","quote"=>"1","sz"=>"50","desc"=>"Window color for the cam pool window."),
		"video_window2_color"=>array("value"=>"darkOliveGreen","type"=>"text","quote"=>"1","sz"=>"50","desc"=>"Window color for the single cam expandable window."),
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
		"zindex_base"=>array("value"=>"20477","type"=>"text","quote"=>"0","sz"=>"20","desc"=>"z-index base.")
	);
}

?>