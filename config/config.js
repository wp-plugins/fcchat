/*
 * IMPORTANT-READ THIS: In all config variables
 * EXCEPT smileys you must escape any double quotes
 * with a backslash. ie, "hello" must be encoded as \"hello\"
 */

var FCChatConfig = {
		
	//CONNECTION
	chat_id:"",
	host:"",
	port:443,
	policy_port:443,
	
	//VERSION
	version:"2.2.9",
	subversion:"0",
	jQuery_stable:"1.6.4",

	//BASIC GREETINGS
	startText:"To begin chatting, press the <b>Open Button.&nbsp;</b>",
	loginText:"Please login using your site account.",
	autoGreet:"",
	
	//LANGUAGE (templates located in the languages folder)
	language_template:"english.js",
	
	//STYLES (templates located in the styles folder)
	widget_style_template:"widget_default_sidebar.js",
	toolbar_style_template:"toolbar_default.js",
	chatcenter_style_template:"chatcenter_default.js",
	
	//Embedded control box
	absolute_positioning:false,
	control_visible:true,
	control_padding:"0px",
	
	//Floating toolbar
	toolbar_mode:2,   // 2 = always visible | 1 = visible for message alerts only | 0 = hidden
	toolbar_default_display:0, //1 = normal | 0 = minimized
	toolbar_position:"bottomright",  //Choices are "topleft" "topright" "bottomleft" and "bottomright"
	toolbar_items:["friendscenter","social_media"], //List MUST include "friendscenter"
	
	//Hide floating toolbar for these mobile apps (support for fixed positioned elements is spotty in mobile apps)
	//The format below uses the syntax of regular expressions
	toolbar_mobile_hidden:/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i,

	//Online, New messages and Friends boxes
	alignment:"left", //"left" or "right"
	
	//CHAT ROOM PARAMS
	open_in_room:0,    //room index (0-50)
	room_message_limit:300,
	min_room_messages:50,
	max_chat_size:2000,
	
	//PROXY
	forum_proxy:"",
	
	//ChatCenter window modes
	popup_window_on_open:false, //Default in-browser window
	popup_window_from_menu:true,
	allow_split_screen_mode:true,
	
	//ChatCenter window size
	window_height_offset:-85,
	chat_room_height_offset:75,
	
	//ENVIRONMENTAL
	default_on:true,
	auto_connect:true,
	require_login:false,
	no_chat_history:false,
	showTyping:true,
	display_timestamp:false,
	sounds_on:true,
	
	//COUNTRY FLAGS
	show_country_flags:true,
	//get your free api key from http://ipinfodb.com/register.php
	ipinfodb_api_key:"",
	
	//PROFILES
	
	useProfiles:true,
	prof_subdir:(window["fc_chat_path"] || "/FCChat/") + "html/Profile.html?u=",
	
	//IMAGES AVATARS SMILEYS
	
	upload_images_enabled:false,
	allow_crossdomain_images:true,
	current_domain:"fastcatsoftware.com", //set this to your domain
	use_avatars:true,
	import_default_avatar:true,
	script_type:"php",
	avatars_dir:(window["fc_chat_path"] || "/FCChat/") + "html/images/avatars/",
	images_dir:(window["fc_chat_path"] || "/FCChat/") + "html/images/",
	smileys_dir:(window["fc_chat_path"] || "/FCChat/") + "html/images/smileys/",
	avatar_sz:26,
	show_avatar_in_chats:true,
	
	//GAMES
	allow_games:true,
	//GAME ID'S should match game names in language file
	game_ids:[2,1,256,325,86,6,254,1822,607,1723,225,4,1607,102,327,274,3,26,6346,562,1840,557,29,255,272,2227,5286,567,15,1658,64,3177,330,329,273,11,1661,12],
	
	//SMILEYS
	/* 
	 * IMPORTANT-READ THIS: In smileys, You 
	 * must escape any single quotes with three backslashes.
	 * ie, a wink emoticon '-) must be encoded as \\\'-)
	 */
	smileys:[['sm1.gif', ':-)','18',],['sm2.gif',':-)0','24'],['sm3.gif',':-)1','15'],['sm4.gif',':-)2','20'],['sm5.gif',':-)3','16'],['sm6.gif',':-)4','18'],['sm7.gif',':-)5','26'],['sm8.gif',':-)6','23'],['sm9.gif',':-)7','23'],['sm10.gif',':-)8','28'],['sm11.gif',':-)9','22'],['sm12.gif',':-)10','36'],['sm13.gif',':-)11','30'],['sm14.gif',':-)12','15'],['sm15.gif',':-)13','18'],['sm16.gif',':-)14','21'],['sm17.gif',':-)15','28'],['sm18.gif',':-)16','15']],
	
	//VIDEO
	video_enabled:false,
	video_access_level:3, //0 none , 1 private only , public only , 3 both public and private
	max_video_streams:30,
	capture_width:160,
	capture_height:120,
	fps:8,
	quality:95,
	video_window1_color:"darkOliveGreen",
	video_window2_color:"darkOliveGreen",
	show_a_v_icon:false,
	
	//TRANSLATOR
	trans_enabled:true,
	trans_default_on:false,
	trans_default_language_code:"en",
	trans_url:"http://api.microsofttranslator.com/V2/Ajax.svc/",
    trans_appid:"4690BC25149C7E7E98E4A356B8C807D6A7132424",
    
    //TRANSLITERATION
    transliteration_enabled:true,
	
	//COOKIES
	cookie_expires:1, //0 - end of session //1 - never
	user_cookie:"fc_UID", 
	session_cookie:"fc_ChatToken",
	mod_cookie:"fc_ChatToken",
	data_cookie:"fc_data",
	
	//MISC
	help_link:"http://www.fastcatsoftware.com/chat/manual2.2.html",
	pin_windows:true,
	pinned_by_default:true,
	preload_images:false,
	noshow:false,
	flashEnabled:"test",
	websocketEnabled:"test",
	userbox_mode:0,
	zindex_base:20477,
	domain:null,
	dir: window["fc_chat_path"] || "/FCChat/",
	alt_dir: window["fc_chat_path"] || "/FCChat/",
	
	//TEST MENU NOT IMPLEMENTED
	use_menus:false,
	menus:{
		position:{
			left:null,
			top:null,
			offsetLeft:0,
			offsetTop:0
		},
		css:{
			width:"200px",
			height:"150px",
			"box-shadow": "2px 2px 2px 2px rgba(0,0,0,0.5)",
			"background-color":"#eeeeee",
			//padding:"10px",
			font:"10pt arial",
			color:"black",
			border:"1px solid silver"
		}
	},
	
	//LOADING PHRASES
	load_standalone_bsc:(!window["jGo"]||jGo.scripts.loadState('jGo.DefaultWindow.init.min.js') == 'not.loaded'?"<script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.DefaultWindow.init.min.js'></" +
		"script>":"") +
	    "<script>" +
			"(function() {" +
				"var s = document.createElement('script');" +
	  			"s.src = '" + (window["fc_chat_path"] || "/FCChat/") + "js/fcchat.standalone.min.js';" +
	  			"s.async = true;" +
	  			"var e = document.getElementsByTagName('script')[0];" +
	  			"e.parentNode.insertBefore(s, e);" +
			"})();</" +
		"script>",
	load_integrated_bsc:"",
	load_standalone:(!window["jGo"]||jGo.scripts.loadState('jGo.DefaultWindow.init.min.js') == 'not.loaded'?"<script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.DefaultWindow.init.min.js'></" +
		"script>":"") +
		"<script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "js/fcchat.standalone.min.js'></" +
		"script>",
	load_integrated:""
};
