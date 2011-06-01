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
	version:"2.1.12",
	subversion:"wp",

	//BASIC GREETINGS
	startText:"To begin chatting, press the <b>Open Button.&nbsp;</b>",
	readyText:"<b><font style='color:green'>YOURDOMAIN Chat</font>...</b>",
	autoGreet:"",
	
	//LANGUAGE
	language_template:"english.js",
	
	//STYLE
	style_template:"wp_default.js",
	
	//CHAT ROOM PARAMS
	open_in_room:0,    //room index (0-50)
	room_message_limit:300,
	min_room_messages:50,
	max_chat_size:2000,
	
	//PROXY
	forum_proxy:"",
	
	//ENVIRONMENTAL
	default_on:true,
	auto_connect:true,
	require_login:false,
	no_chat_history:false,
	showTyping:true,
	display_timestamp:false,
	sounds_on:true,
	show_online_count:true,
	allow_split_screen_mode:true,
	allow_web:true,
	preload_images:false,
	noshow:false,
	flashEnabled:'test',
	websocketEnabled:'test',
	userbox_mode:0,
	zindex_base:0,
	domain:null,
	dir: window["fc_chat_path"] || "/FCChat/",
	alt_dir: window["fc_chat_path"] || "/FCChat/",
	
	
	//PROFILES
	
	useProfiles:true,
	prof_subdir:(window["fc_chat_path"] || "/FCChat/") + "html/Profile.html?u=",
	
	//IMAGES AVATARS SMILEYS
	
	use_images:false,
	use_avatars:false,
	script_type:"php",
	avatars_dir:(window["fc_chat_path"] || "/FCChat/") + "html/images/avatars/",
	images_dir:(window["fc_chat_path"] || "/FCChat/") + "html/images/",
	smileys_dir:(window["fc_chat_path"] || "/FCChat/") + "html/images/smileys/",
	avatar_sz:35,
	show_avatar_in_chats:true,
	
	//SMILEYS
	/* 
	 * IMPORTANT-READ THIS: In smileys, You 
	 * must escape any single quotes with three backslashes.
	 * ie, a wink emoticon '-) must be encoded as \\\'-)
	 */
	smileys:[['sm1.gif', ':-)','18',],['sm2.gif',':-)0','24'],['sm3.gif',':-)1','15'],['sm4.gif',':-)2','20'],['sm5.gif',':-)3','16'],['sm6.gif',':-)4','18'],['sm7.gif',':-)5','26'],['sm8.gif',':-)6','23'],['sm9.gif',':-)7','23'],['sm10.gif',':-)8','28'],['sm11.gif',':-)9','22'],['sm12.gif',':-)10','36'],['sm13.gif',':-)11','30'],['sm14.gif',':-)12','15'],['sm15.gif',':-)13','18'],['sm16.gif',':-)14','21'],['sm17.gif',':-)15','28'],['sm18.gif',':-)16','15']],
	
	//VIDEO
	video_enabled:false,
	max_video_streams:30,
	capture_width:120,
	capture_height:90,
	fps:8,
	quality:85,
	video_window1_color:"darkOliveGreen",
	video_window2_color:"darkOliveGreen",
	show_a_v_icon:false,
	
	//COOKIES
	user_cookie:"fc_UID", 
	session_cookie:"fc_ChatToken",
	timestamp_cookie:"fc_timestamp",
	mod_cookie:"fc_ChatToken",
	
	//LOADING PHRASES
	load_standalone_bsc:(!window["jGo"]||jGo.scripts.loadState('jGo.DefaultWindow.init.min.js') == 'not.loaded'?"<script defer='defer' type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.DefaultWindow.init.min.js'></script>":"") +
	"<script defer='defer' type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.c.min.js'></" +
	"script><script defer='defer' type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.MD5.min.js'></" +
	"script><script defer='defer' type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "js/fcchat.standalone.min.js'></" +
	"script><script defer='defer' type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "js/install.fcchat.standalone.js'></" + 
	"script>",
	load_integrated_bsc:"<script defer='defer' type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") +
	"jGo/js/jGo.DefaultWindow.init.min.js'></" +
	"script><script defer='defer' type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.c.min.js'></" +
	"script><script defer='defer' type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.MD5.min.js'></" +
	"script><script defer='defer' type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "js/fcchat.integrated.min.js'></" +
	"script><script defer='defer' type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "js/install.fcchat.integrated.js'></" + 
	"script>",
	load_standalone:(!window["jGo"]||jGo.scripts.loadState('jGo.DefaultWindow.init.min.js') == 'not.loaded'?"<script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.DefaultWindow.init.min.js'></script>":"") +
	"<script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.c.min.js'></" +
	"script><script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.MD5.min.js'></" +
	"script><script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "js/fcchat.standalone.min.js'></" +
	"script><script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "js/install.fcchat.standalone.js'></" + 
	"script>",
	load_integrated:"<script  type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") +
	"jGo/js/jGo.DefaultWindow.init.min.js'></" +
	"script><script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.c.min.js'></" +
	"script><script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "jGo/js/jGo.MD5.min.js'></" +
	"script><script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "js/fcchat.integrated.min.js'></" +
	"script><script type='text/javascript' src='" + (window["fc_chat_path"] || "/FCChat/") + "js/install.fcchat.integrated.js'></" + 
	"script>"
	
};
