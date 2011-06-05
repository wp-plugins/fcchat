/*
 * LANGUAGE TEMPLATE
 *
 * FCChat supports any language which uses the latin alphabet. It does not have full support
 * for other alphabets at this time. In some instances,  space is limited, so be brief with 
 * your descriptions and/or use abbreviations (button text, for example). Some text options
 * have a width parameter associated with them which specifies the width, in pixels, of the
 * corresponding text element. This is used to establish the correct spacing between 
 * elements.
 * 
 * In this file comments are preceded by double slashes ie.
 *      //THIS IS A COMMENT
 *      
 * Only edit text that appears between double quotes, ie.
 * 
 *      guest:"MAKE YOUR CHANGES HERE",
 *      
 * DO not change any other elements of this file.
 * 
 * Please note: administrative functions are still in English only.
 * 
 * To use this template, edit FCChat/config/config.js as follows:
 * 
 *  //language
 *    language_template:"english.js",
 * 
 * If you create a decent translation to a new language. Please email us the template at 
 * support@fastcatsoftware.com
 */

FCChatConfig.txt={
		
	//guest login may contain letters,numbers and underscores only, 10 chars max
	guest:"guest",
	chat_alert:"Chat",
	online:"online",
	
	//Buttons
	on:"On",
	off:"Off",
	open_chat:"Open Chat",
	help:"Help",
	
	close:"Close",
	close_width:52,
	
	options:"Options",
	options_width:61,
	
	send_to_room:"Send to Room",
	send_private:"Send Private",
	send_buttons_width:97,
	
	//Section Headings
	chat_room:"Chat Room",
	chat_room_width:61,
    
    back:"Back to chat",
    
	private_chat:"Private Chat",
	private_chat_width:68,
	
	whos_online:"Who's Online",
	chat_room_members:"Chat Room Members",
	private_group:"Private Group",
	
	//Tooltips
	clear:"Clear",
	room_alerts_on:"Room Alerts On",
	room_alerts_off:"Room Alerts Off",
	delete_all:"Delete All",
	filter:"Filter Conversations",
	bold:"Bold Text",
	italic:"Italic Text",
	underline:"Underline Text",
	insert_image:"Insert Image Tag",
	upload:"Upload Images",
	upload_disabled:"Upload Images Disabled",
	avatars:"Create Avatar",
	avatars_disabled:"Create Avatar Disabled",
	video:"Video Chat",
	video_disabled:"Video Chat Disabled",
	webcam:"Webcam",
	change_avatar:"Change Avatar",
	
	//Textbox inserts
	type_msg:"Type Message Here!",
	image_name:"image name",
	bold_insert:"=b=",
	italic_insert:"=i=",
	underline_insert:"=u=",
	
	//Room Members Panel
	room:"Room",
	change_room:"Change",
	
	//User Dialog
	user_dialog_width:340,
	sign_in:"Sign in",
	sign_out:"Sign out",
	mod:"Mod",
	profile:"Profile",
	_change_avatar:"Change Avatar",
	status:"Status",
	add_private:"Add to private group",
	block:"Block",
	its_me:"*Hey, it's me! ",
	blocked:"*This user has blocked you.",
	offline:"*This user is offline.",
	close_user:"Close",
	retrieving:"Retrieving...(to private chat)",
	
	//Sign in Dialog
	name:"Name",
	password:"Password",
	enter:"Enter",
	cancel:"Cancel",
	_sign_in:"Please enter your desired screen name and password.",
	invalid_chars:"Screen names and passwords must contain 3-15 characters each. Only letters, numbers, and underscores are allowed.",
	no_guest:"Screen names may not begin with 'guest'",
	invalid_name:"The screen name you entered is invalid. Please choose a different screen name.",
	in_use:"The screen name you entered is already in use. Please provide the correct password or choose a different screen name.",
	
	//Options Dialog
	room_list:"Room List",
	create_new_room:"Create New Room",
	display_timestamp:"Display Timestamp:",
	yes:"yes",
	no:"no",
	mode:"Mode:",
	window:"window",
	_split_screen:"split-screen",
	sounds:"Sounds",
	_sounds:"Sounds:",
	sounds_on:"on",
	sounds_off:"off",
	room_message_alert:"Room Message Alert",
	private_message_alert:"Private Message Alert",
	enter_room_alert:"Enter Room Alert",
	leaving_room_alert:"Leaving Room Alert",
	font_size:"Font Size",
	font_color:"Font Color",
	
	//must match color_values in the current style
	color_names:["default","black","blue","red","purple","green","yellow","orange","white"], 
	
	block_list:"Block List",
	av:"(a/v)",
	rm_edit:"edit",
	rm_delete:"delete",
	rm_clear:"clear",
	
	//Room Password Dialog
	room_password_msg:"This room is password protected.",
	room_password:"Password",
	room_enter:"Enter",
	room_cancel:"Cancel",
	room_password_chars:"Room passwords must contain 3-15 characters each. Only letters, numbers, and underscores are allowed.",
	room_password_invalid:"The password is incorrect. Please try again",
	rooms_unavailable:"Sorry, the maximum number of rooms has been reached.",
	
	//Alert Dialog
	alert_panel_width:260,
	alert_panel_connection_lost_msg:"<font style='color:red;font-weight:700'>Connection lost...</font> <a href='javascript:fc_chat.reqRecon()'>Reconnect</a> <a href='javascript:fc_chat.closeChat()'>Close</a>",
	signing_off_msg:"Signing Off...",
	room_closed_msg:"<font style='color:red;font-weight:700'>Sorry, the room has closed...</font><br><center><a href='javascript:fc_chat.reqRecon()'>Reconnect</a> <a href='javascript:fc_chat.closeChat()'>Close</a></center>",
	alert_login_msg:"To enter, please <b>Login</b> first. <a href='javascript:fc_chat.closeChat()'>Close</a>",
	
	//Widget Msgs
	session_msg:"<b>Connecting, please wait...</b>",
	auto_logout_msg:"You have successfully logged out",
	off_msg:"<b>&nbsp;Chat is off.&nbsp;&nbsp;</b>",
	pause_msg:"<b>Chat Paused... <a href='javascript:fc_chat.unPause()'>Resume</a></b>",
	connection_lost_msg:"<font style='color:red;font-weight:700'>Connection lost...</font> <a href='javascript:fc_chat.reqRecon()'>Reconnect</a>",
	connection_failed:"Connection failed. Trying again. Attempt",
	giving_up:"Sorry, could not connect. Giving up.",
	
	//Chat Rooms
	welcome_msg:"Welcome!!! Your screen name is",
	guest_msg:"To sign in, click on your screen name in the side bar.",
	chatting_in:"You are currently chatting in: ",
	function_links:"<a href='javascript:void' onClick='fc_chat.show_hide_options(333,425);return false'>See Room List</a>",
	prev_50:"Prev",
	previous:"Previous",
	next:"Next",
	system:"SYSTEM",
	sent_to:"to",
	archive:"Archive Page",
	current_chat:"Current Chat",
	auto_clear:"Autoclear. Room message limit exceded.",
	comment_deleted:"**Comment Erased**",
	loading_chat_msg:"<b><font style='margin-left:10px;font-size:12pt;'>&nbsp;Loading Chat...Please wait...</font></b>",
	loading_page_msg:"<b><font style='margin-left:10px;font-size:12pt;'>&nbsp;Loading Page...Please wait...</font></b>",
	loading_room_msg:"<b><font style='margin-left:10px;font-size:12pt;'>&nbsp;Loading Room...Please wait...</font>",
	
	//Account types
	_mod:"mod",
	_admin:"admin",
	
	//user state
	typing:"typing",
	idle:"idle",
	
	//Room Alerts
	left_room:" has left the room.",
	entered_room:" has entered the room.",
	disabled_room_msg:"You must be a member to enter this room.",
	
	//Send chat msgs
	user_offline_msg:"Unable to send this message. The user is offline.",
	chat_too_big_before:"Message is too big (",
	chat_too_big_after:" chars max).",
	no_msg:"Please enter a message!",
	
	//Split screen mode
	split_screen:"Split-screen mode is not currently enabled.",
	
	//Remove from block list
	remove:"Remove",
		
	//Dates and times
	before_min:"",
	before_mins:"",
	after_min:" minute ago",
	after_mins:" minutes ago",
	before_hour:"",
	before_hours:"",
	after_hour:" hour ago",
	after_hours:" hours ago",
	before_day:"",
	before_days:"",
	after_day:" day ago",
	after_days:" days ago",
	just_now:"just now",
	am:"AM",
	pm:"PM",
	
	//Application Windows
	chat_window:"Chat Window",
	video_pool_window:"FCChat Video",
	video_expand_window:"FCChat Video",
	minimize:"minimize",
	maximize:"maximize",
	restore:"restore",
	close_window:"close",
	
	//Other Status Msgs
	please_wait:"Please wait",
	loading_msg:"<b>Connecting, please wait...</b>",
	link_not_ready:"Not Ready... You may use the chat-box, located in the sidebar, to enter the chat rooms.",
	error_msg:"Sorry...An Error Occurred. Please Refresh",
	
	//Upload page
	up_title:"Share Images",
	up_invalid_user:"Invalid User! Please Try again.",
	up_may_not_contain:"Image Name may not contain [[ or ]]. Please Try again.",
	up_bad_file_type:"Bad Filetype! Please Try again.",
	up_exceded_size:"You have exceeded the size limit for image files! Please Try again.",
	up_full:"The image file repository is full! Please Try again.",
	up_not_valid:"Please enter a valid file.",
	up_unsuccessful:"Upload Unsuccessful! Try again",
	up_no_image:"No image selected. Please Try again.",
	up_success:"Uploaded Successfully!",
	up_step1:"Step 1:",
	up_step2:"Step 2",
	up_copy:"In order to use this image in your chat messages, simply copy and paste the following...",
	up_into:"...into the chat box below.",
	up_upload:" Upload the image that you would like to use in your chat messages.",
	up_upload_button:"Upload Image",
	up_upload_types:"(jpg, gif,and png only. Maximum size:",
	up_please_note:"Please Note:",
	up_max_images:"You may include a maximum of three images in any single chat message.",
	up_back:"Back",
	up_finish:"Finish",
	
	//Avatar page
	av_upload:"Upload Avatar",
	av_select:"Select Avatar",
	av_wait:"Please Wait...",
	av_success:"You have successfully uploaded a new avatar!",
	av_width:"The width and height of the images can be no larger than ",
	av_and:"px and",
	av_respectively:"px, respectively. Please try again.",
	av_one:"Option One:",
	av_two:"Option Two:",
	av_three:"Option Three:",
	av_four:"Option Four:",
	av_upload_new:"Upload a new avatar. The maximum width and height for avatars is",
	av_px:"px",
	av_use_your:"Use your",
	av_avatar:"avatar",
	av_submit_button:"Submit",
	av_gravatar_ex:"Link to gravatar Image.<br>(ie http://www.gravatar.com/avatar/1234.png)",
	av_forum_avatar:"Use your current forum avatar",
	av_use_current:"Use my current avatar",
	av_gallery:"Select an avatar from the gallery below",
	av_you_have:"You have",
	av_use_gallery:"successfully selected an avatar from the gallery!",
	av_use_forum:"elected to use your current forum avatar!",
	av_use_gravatar:"elected to use your Gravatar avatar!",
	
	//Profile page
	pr_profile:"User Profile",
	pr_loading:"Loading...",
	pr_sorry:"Sorry, no profile yet.",
	pr_no_guest:"Sorry, profiles are not available for guest accounts",
	pr_sign_in:"Please sign in to create a profile",
	pr_name:"Name",
	pr_age:"Age",
	pr_male:"Male",
	pr_female:"Female",
	pr_gender:"Gender",
	pr_location:"Location",
	pr_about_me:"About Me",
	pr_chars:"chars",
	pr_save:"Save Profile",
	pr_saving:"Saving...",
	pr_saved:"Saved",
	pr_return:"Return to chat",
		
	//Video
	cam_video_loading:"Video Chat Loading...This may take a few seconds.",
	cam_locked:"Sorry, you may not open the video chat from this room. To use the video chat, you must be in a room which has (a/v) next to it.",
	cam_private_room:"This user is chatting in the private room: ",
	cam_member:". You must be a member of this room in order to view their webcam.",
	cam_capacity:"Sorry, the video chat has reached its capacity. Try again later.",
	cam_on:"Turn on camera",
	cam_off:"Turn off camera",
	cam_audio:"Broadcast audio",
	cam_mute:"Mute me",
	cam_loading:"Loading",
	cam_no_cam:"No Cam Found",
	cam_start:"Start Your Cam",
	cam_waiting:"Waiting for Signal",
	cam_con_lost:"Connection Lost",
	cam_busy:"Server Busy",
	cam_expand:"Expand",
	
	//Administration
	ad_censor:"Censor",
	ad_stat_report_before:"Status Report for",
	ad_stat_report_after:":",
	ad_all_rooms_block:"This user has been blocked by the administrator from chatting in all rooms.",
	ad_private_block:"This user been blocked by the administrator from using the private chat.",
	ad_private_msg_block:"This user has been blocked from sending private messages for approx.",
	ad_mins:"mins.",
	ad_current_room_block:"This user has been blocked by the administrator from chatting in the current room.",
	ad_good_standing:"This user is in good standing.",
	ad_current_room_none:"Current room: none.",
	ad_room:"Current room:",
	ad_time_online:"Time Online:",
	ad_idle_time_one:"Idle time: less than one minute.",
	ad_idle:"Idle time:"

};