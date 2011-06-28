/*
 * LANGUAGE TEMPLATE
 *
 * FCChat supports any language which uses the Latin alphabet. It does not have full support
 * for other alphabets at this time. 
 * 
 * To use this template, edit FCChat/config/config.js as follows:
 * 
 *  //language
 *    language_template:"english.js",
 *    
 * READ THIS BEFORE EDITING THIS TEMPLATE:
 * 
 * In some instances,  space is limited, so be brief with your descriptions and/or use 
 * abbreviations (button text, for example). Some text options have a width parameter 
 * associated with them, which specifies the width, in pixels, of the corresponding 
 * text element. This is used to establish the correct spacing between elements.
 * 
 * In this file comments are preceded by double slashes ie.
 *      //THIS IS A COMMENT
 *      
 * Only edit text that appears between double quotes, ie.
 * 
 *      t1: "MAKE YOUR CHANGES HERE",
 *      
 * DO not change any other elements of this file.
 * 
 * Please note: administrative functions are still in English only.
 * 
 * If you create a decent translation to a new language. Please email us the template at 
 * support@fastcatsoftware.com
 */

FCChatConfig.txt={

	//guest login may contain letters,numbers and underscores only, 10 chars max
	t1: "guest",
	t2: "Chat",
	t3: "online",
	
	//Buttons
	t4: "On",
	t5: "Off",
	t6: "Open Chat",
	t7: "Help",
	t8: "Close",
	close_width: 51,
	t9: "Options",
	options_width: 61,
	t10: "Send to Room",
	t11: "Send Private",
	send_buttons_width: 95,
	
	//Section Headings
	t12: "Chat Room",
	chat_room_width: 61,
    t13: "Back to chat",
	t14: "Private Chat",
	private_chat_width: 68,
	t15: "Who's Online",
	t16: "Chat Room Members",
	t17: "Private Group",
	
	//Tooltips
	t18: "Clear",
	t19: "Room Alerts On",
	t20: "Room Alerts Off",
	t21: "Delete All",
	t22: "Filter Conversations",
	t23: "Bold Text",
	t24: "Italic Text",
	t25: "Underline Text",
	t26: "Insert Image Tag",
	t27: "Upload Images",
	t28: "Upload Images Disabled",
	t29: "Create Avatar",
	t30: "Create Avatar Disabled",
	t31: "Video Chat",
	t32: "Video Chat Disabled",
	t33: "Webcam",
	t34: "Change Avatar",
	
	//Textbox inserts
	t35: "Type Message Here!",
	t36: "image name",
	t37: "=b=",
	t38: "=i=",
	t39: "=u=",
	
	//Room Members Panel
	t40: "Room",
	t41: "Change",
	
	//User Dialog
	user_dialog_width: 340,
	t43: "Sign in",
	t44: "Sign out",
	t45: "Mod",
	t46: "Profile",
	t47: "Change Avatar",
	t48: "Status",
	t49: "Add to private group",
	t50: "Block",
	t51: "*Hey, it's me! ",
	t52: "*This user has blocked you.",
	t53: "*This user is offline.",
	t54: "Close",
	t55: "Retrieving...(to private chat)",
	
	//Sign in Dialog
	t56: "Name",
	t57: "Password",
	t58: "Enter",
	t59: "Cancel",
	t60: "Please enter your desired screen name and password.",
	t61: "Screen names and passwords must contain 3-15 characters each. Only letters, numbers, and underscores are allowed.",
	t62: "Screen names may not begin with 'guest'",
	t63: "The screen name you entered is invalid. Please choose a different screen name.",
	t64: "The screen name you entered is already in use. Please provide the correct password or choose a different screen name.",
	
	//Options Dialog
	t65: "Room List",
	t66: "Create New Room",
	t67: "Display Timestamp:",
	t68: "yes",
	t69: "no",
	t70: "Mode:",
	t71: "window",
	t72: "split-screen",
	t73: "Sounds",
	t74: "Sounds:",
	t75: "on",
	t76: "off",
	t77: "Room Message Alert",
	t78: "Private Message Alert",
	t79: "Enter Room Alert",
	t80: "Leaving Room Alert",
	t81: "Font Size",
	t82: "Font Color",
	
	t255:"Translator",
	t256:"Translate incoming chats to: ",
	
	//Language Names: must match language_codes in the current style
	t257: ["translator off","Arabic","Bulgarian","Catalan","Chinese Simplified","Chinese Traditional","Czech","Danish","Dutch","English","Estonian","Finnish","French","German","Greek","Haitian Creole","Hebrew","Hungarian","Indonesian","Italian","Japanese","Korean","Latvian","Lithuanian","Norwegian","Polish","Portuguese","Romanian","Russian","Slovak","Slovenian","Spanish","Swedish","Thai","Turkish","Ukrainian","Vietnamese"],
	
	//Color Names: must match color_values in the current style
	t83: ["default","black","blue","red","purple","green","yellow","orange","white"], 
	
	t84: "Block List",
	t85: "(a/v)",
	t86: "edit",
	t87: "delete",
	t88: "clear",
	
	//Room Password Dialog
	t89: "This room is password protected.",
	t90: "Password",
	t91: "Enter",
	t92: "Cancel",
	t93: "Room passwords must contain 3-15 characters each. Only letters, numbers, and underscores are allowed.",
	t94: "The password is incorrect. Please try again",
	t95: "Sorry, the maximum number of rooms has been reached.",
	
	//Alert Dialog
	alert_dialog_width: 260,
	t96: "<font style='color:red;font-weight:700'>Connection lost...</font> <a href='javascript:fc_chat.reqRecon()'>Reconnect</a> <a href='javascript:fc_chat.closeChat()'>Close</a>",
	t97: "Signing Off...",
	t98: "<font style='color:red;font-weight:700'>Sorry, the room has closed...</font><br><center><a href='javascript:fc_chat.reqRecon()'>Reconnect</a> <a href='javascript:fc_chat.closeChat()'>Close</a></center>",
	t99: "To enter, please <b>Login</b> first. <a href='javascript:fc_chat.closeChat()'>Close</a>",
	
	//Widget Msgs
	t100: "<b>Connecting, please wait...</b>",
	t101: "You have successfully logged out",
	t102: "<b>&nbsp;Chat is off.&nbsp;&nbsp;</b>",
	t103: "<b>Chat Paused... <a href='javascript:fc_chat.unPause()'>Resume</a></b>",
	t104: "<font style='color:red;font-weight:700'>Connection lost...</font> <a href='javascript:fc_chat.reqRecon()'>Reconnect</a>",
	t105: "Connection failed. Trying again. Attempt",
	t106: "Sorry, could not connect. Giving up.",
	t254: "New message...Roll over to expand.",
	
	//Chat Rooms
	t107: "Welcome!!! Your screen name is",
	t108: "To sign in, click on your screen name in the side bar.",
	t109: "You are currently chatting in: ",
	t110: "<a href='javascript:void' onClick='fc_chat.show_hide_options(333,425);return false'>See Room List</a>",
	t111: "Prev",
	t112: "Previous",
	t113: "Next",
	t114: "SYSTEM",
	t115: "to",
	t116: "Archive Page",
	t117: "Current Chat",
	t118: "Autoclear. Room message limit exceded.",
	t119: "**Comment Erased**",
	t120: "<b><font style='margin-left:10px;font-size:12pt;'>&nbsp;Loading Chat...Please wait...</font></b>",
	t121: "<b><font style='margin-left:10px;font-size:12pt;'>&nbsp;Loading Page...Please wait...</font></b>",
	t122: "<b><font style='margin-left:10px;font-size:12pt;'>&nbsp;Loading Room...Please wait...</font></b>",
	
	//Account types
	t123: "mod",
	t124: "admin",
	
	//user state
	t125: "typing",
	t126: "idle",
	
	//Room Alerts
	t127: " has left the room.",
	t128: " has entered the room.",
	t129: "You must be a member to enter this room.",
	
	//Send chat msgs
	t130: "Unable to send this message. The user is offline.",
	t131: "Message is too big (",
	t132: " chars max).",
	t133: "Please enter a message!",
	
	//Split screen mode
	t134: "Split-screen mode is not currently enabled.",
	
	//Remove from block list
	t135: "Remove",
		
	//Dates and times
	
	//before minutes (singular/plural)
	t136: "",
	t137: "",
	//after minutes (singular/plural)
	t138: " minute ago",
	t139: " minutes ago",
	//before hours (singular/plural)
	t140: "",
	t141: "",
	//after hours (singular/plural)
	t142: " hour ago",
	t143: " hours ago",
	//before days (singular/plural)
	t144: "",
	t145: "",
	//after days (singular/plural)
	t146: " day ago",
	t147: " days ago",
	t148: "just now",
	t149: "AM",
	t150: "PM",
	
	//Application Windows
	t151: "Chat Window",
	t152: "FCChat Video",
	t153: "FCChat Video",
	t154: "minimize",
	t155: "maximize",
	t156: "restore",
	t157: "close",
	
	//Other Status Msgs
	t158: "Please wait",
	t159: "<b>Connecting, please wait...</b>",
	t160: "Not Ready... You may use the chat-box, located in the sidebar, to enter the chat rooms.",
	t161: "Sorry...An Error Occurred. Please Refresh",
	
	//Upload page
	t162: "Share Images",
	t163: "Invalid User! Please Try again.",
	t164: "Image Name may not contain [[ or ]]. Please Try again.",
	t165: "Bad Filetype! Please Try again.",
	t166: "You have exceeded the size limit for image files! Please Try again.",
	t167: "The image file repository is full! Please Try again.",
	t168: "Please enter a valid file.",
	t169: "Upload Unsuccessful! Try again",
	t170: "No image selected. Please Try again.",
	t171: "Uploaded Successfully!",
	t172: "Step 1:",
	t173: "Step 2:",
	t174: "In order to use this image in your chat messages, simply copy and paste the following...",
	t175: "...into the chat box below.",
	t176: " Upload the image that you would like to use in your chat messages.",
	t177: "Upload Image",
	t178: "(jpg, gif,and png only. Maximum size:",
	t179: "Please Note:",
	t180: "You may include a maximum of three images in any single chat message.",
	t181: "Back",
	t182: "Finish",
	
	//Avatar page
	t183: "Upload Avatar",
	t184: "Select Avatar",
	t185: "Please Wait...",
	t186: "You have successfully uploaded a new avatar!",
	t187: "The width and height of the images can be no larger than ",
	t188: "px and",
	t189: "px, respectively. Please try again.",
	t190: "Option One:",
	t191: "Option Two:",
	t192: "Option Three:",
	t193: "Option Four:",
	t194: "Upload a new avatar. The maximum width and height for avatars is",
	t195: "px",
	t196: "Use your",
	t197: "avatar",
	t198: "Submit",
	t199: "Link to gravatar Image.<br>(ie http://www.gravatar.com/avatar/1234.png)",
	t200: "Use your current forum avatar",
	t201: "Use my current avatar",
	t202: "Select an avatar from the gallery below",
	t203: "You have",
	t204: "successfully selected an avatar from the gallery!",
	t205: "elected to use your current forum avatar!",
	t206: "elected to use your Gravatar avatar!",
	
	//Profile page
	t207: "User Profile",
	t208: "Loading...",
	t209: "Sorry, no profile yet.",
	t210: "Sorry, profiles are not available for guest accounts",
	t211: "Please sign in to create a profile",
	t212: "Name",
	t213: "Age",
	t214: "Male",
	t215: "Female",
	t216: "Gender",
	t217: "Location",
	t218: "About Me",
	t219: "chars",
	t220: "Save Profile",
	t221: "Saving...",
	t222: "Saved",
	t223: "Return to chat",
		
	//Video
	t224: "Video Chat Loading...This may take a few seconds.",
	t225: "Sorry, you may not open the video chat from this room. To use the video chat, you must be in a room which has (a/v) next to it.",
	t226: "This user is chatting in the private room: ",
	t227: ". You must be a member of this room in order to view their webcam.",
	t228: "Sorry, the video chat has reached its capacity. Try again later.",
	t229: "Turn on camera",
	t230: "Turn off camera",
	t231: "Broadcast audio",
	t232: "Mute",
	t233: "Loading",
	t234: "No Cam Found",
	t235: "Start Your Cam",
	t236: "Waiting for Signal",
	t237: "Connection Lost",
	t238: "Server Busy",
	t239: "Expand",
	
	//Administration
	t240: "Censor",
	//before name
	t241: "Status Report for",
	//after name
	t242: ":",
	t243: "This user has been blocked by the administrator from chatting in all rooms.",
	t244: "This user been blocked by the administrator from using the private chat.",
	t245: "This user has been blocked from sending private messages for approx.",
	t246: "mins.",
	t247: "This user has been blocked by the administrator from chatting in the current room.",
	t248: "This user is in good standing.",
	t249: "Current room: none.",
	t250: "Current room:",
	t251: "Time Online:",
	t252: "Idle time: less than one minute.",
	t253: "Idle time:"

};