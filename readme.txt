=== Plugin Name ===

Contributors: rdbeach
Donate link: http://www.fastcatsoftware.com
Tags: chat, instant messaging, widget
Requires at least: 2.7
Tested up to: 3.4
Stable tag: 3.3.0.2

An interface for real time chat, video conferencing, instant messaging, and more.

== Description ==

FCChat connects your web site users with chat, video conferencing, instant messaging and more. 

MOST RECENT FEATURES

Version 3.3.0. updates the chat display in mobile environments.

Version 3.2.0 adds a nickname prompt for guest users. Avatar integration has been updated.


The video chat now supports Flash player 11's h264 streaming capability. This represents a significant enhancement, in terms of video resolution and bandwidth usage. There are now 2 different layouts available for the chat window: Chatcenter and MsgCenter. The new MsgCenter layout is for those of you wish to use the Instant Messanger feature exclusively. 


UPGRADE NOTICE

When you upgrade to a new version, any customizations you made to the chat files will be erased. In order to save those changes, do the following:

1. Make backup copies of any files that you have altered. You may wish to make backups of the following folders: (fcchat/config, fcchat/languages, fcchat/styles, fcchat/html/config). Place them in a safe place where they will not be deleted. 
1. Next install the new version. 
1. Finally, manually copy the changes you made to the old files into the current version's files. Do not replace the new files with the old files, as the structure of the new files may have changed; but instead, use the wordpress file editor to make the changes line by line.

After upgrading, make sure you clear your browser cache and refresh the page.

FEATURE LIST:

Real time text chat

Video Chat: 1 on 1 video chat and video conferencing (6 Simulaneous Cams)

Full Page Mode: Launch Chat into a separate tab

Public rooms/Private Rooms

Instant messaging/Private Chat

Facebook Connect

Post Youtube videos (thumbnail with link) simply by entering the url of the video.

Upload images

User profiles

Country Flags

Collaborative whiteboard

Coloaborative document

Doodlepad

Transliteration

Two player games

Customized buttons with content dialog boxes in the chat toolbar.

Split-screen Mode: Show the chat side by side with your site

Language translation feature 

Assign titles to users

Customizable smileys/avatars

Customizable sounds

Customizable language templates

Customizable style templates

Administration/moderation panel

Web based file editor 


SERVICE ACTIVATION - SERVICES HOSTED BY FASTCATSOFTWARE.COM

In order to use this widget, you will need to sign up for a subscription to the chat service on www.fastcatsoftware.com. Follow the "Installation" tab for more specific instructions. This is a paid service, however, you will receive a free trial when you sign up. Subscriptions start at only 20 cents per month. You may view all our subscription plans here: http://www.fastcatsoftware.com/chat/activation.aspx

SERVICES PROVIDED

When you install the FCChat Widget, you will only be installing the chat client on your site. Your chat server (meaning your chat data) will be hosted at www.fastcatsoftware.com, on our servers.



== Installation ==

1. Old-school: upload the `FCChat` folder to the `/wp-content/plugins/` directory via FTP.  Hipster: Add the FCChat Widget via the WordPress Plugins menu.
1. Activate the Plugin
1. Add the Widget to the desired sidebar in the WordPress Widgets menu.
1. Open the `FCChat Widget' options dialog by clicking on the widget once added to the sidebar.
1. Follow the Steps listed in the dialog in order to activate the chat service. This will include signing up for a subscription to the service on www.fastcatsoftware.com.
1. Rate the plugin and verify that it works at wordpress.org.
1. Leave a comment regarding bugs, feature request, cocktail recipes at http://www.fastcatsoftware.com




When you upgrade to a new version, any customizations you made to the chat will be erased. In order to save those changes, do the following:

1. Make backup copies of any files that you have altered. You may wish to make backups of the following folders: (fcchat/config, fcchat/languages, fcchat/styles, fcchat/html/config). Place them in a safe place where they will not be deleted. 
1. Next uninstall the old version and install the current version. 
1. Finally, manually copy the changes you made to the old files into the current version's files. Do not replace the new files with the old files, as the structure of the new files may have changed; but instead, use the wordpress file editor to make the changes line by line.

Also, when you upgrade to a new version, it is NOT required that you obtain a new chat ID.


== Frequently Asked Questions ==

= Where is the demo? =

Here:

http://www.fastcatsoftware.com/wp3.3/

= How do I use/configure/administrate FCChat? =

Here are some places to look for information:

http://www.fastcatsoftware.com/chat/userguide/Index.html

http://www.fastcatsoftware.com/chat/Manual3.html

= How do I contact you if I have questions? =

Our email address:

support@fastcatsoftware.com

== Screenshots ==

1. Here, in screenshot-1.png an expansive view of the available `FCChat Widget` control panel hs been provided for your viewing pleasure.

2. screenshot-2.png catches the `FCChat Widget` in some hot on-page action.  Take care, number 7, your scene is next.

3. default.png shows what the chat looks like when you open it up. What a thing of beauty.

3. blue_silver.png The new blue silver style.

== Changelog ==

= 2.1 =

Version 2.1 of FCChat is the first version available as a wordpress plugin.

= 2.1.1 =

Fixed a bug in which modification of Javascript's Array.prototype by an external script caused chat window to crash.
Login panel is now appended to the document when autoLogin is false. This should prevent it from being hidden under
surrounding elements.
Added rounded borders to the login panel and alert panel.

= 2.1.2 =

Updated the user authentification system. Fixed a bug in which the 'Open Chat' and 'Off' buttons were malfunctioning when the 'default_on' option was set to false.

= 2.1.3 =

Fixed a bug that occurred using IE8. In split screen mode, A javascript error was preventing the scroll bar from scrolling.
Disabled the 'Read/Refresh Config File' button in the adminstration panel, which was not functioning properly. This bug will be fixed in a future version.

= 2.1.4 =

New features added: 1) Split the autoLogin configuration variable into two variables (auto_connect and require_login). When auto_connect is set to true, the chat will establish an anonymous (guest) connection to the server. When require_login is set to true, the user must enter a screen name and password before entry into the chat. 2) Added the ability to reconnect to the chat after the connection is broken, without requiring a page refresh. 3) Added a pause mode which allows the user to keep the chat open on one page, while browsing other pages withing the site in a separate tab or window.

= 2.1.5 =

Critical Bug Fix: A bug was fixed that was preventing users from signing in while the chat window was open.

= 2.1.6 =

Bug Fix: A bug was fixed that was preventing the logo from showing up in the left hand corner of the window on linix based systems. User profiles introduced. Room descriptions introduced. Compatibility with iPhone/iPod/iPad introduced. FCChat (with the exception of the video chat) no longer requires Flash, and is now fully compatable with browsers using the HTML5.0 websocket protocol. The options panel layout was upgraded in order to prepare it for future expansion.

= 2.1.7 =

Upgraded the widget to be more compatable with Wordpress theming.

= 2.1.8 =

Added sound effects. Rooms are now created/edited/deleted through the administration panel. Added "Change password" function in administration panel. Added "Promote to Administrator" function in administration panel. Added titles that can be assigned to user accounts.

= 2.1.9 =

Fixed a bug in the sound system that was preventing sounds from loading properly in ie. Fixed a bug in which defered scripts were causing failure to load on certain sites. Made the transition from the window mode to the split-screen mode more efficient.

= 2.1.10 =

Changed the name of the required script 'jGo/js/jgo.cookie.min.js' to 'jgo/js/jgo.c.min.js'. Some hosting environments were blocking the loading of the file due to the fact that the keyword 'cookie', in the filename, was being misinterpreted as a security threat. Upgraded the videochat container, making it compatable with the wordpress environment. Added the option of opening the chat window through a text link. Resolved a cross domain incompatablity issue that arose when sites were accessed without the full domain name: ie. http://yahoo.com instead of http://www.yahoo.com.

= 2.1.11 =

Fixed a bug in the administration panel that was preventing some configuration variables from being set properly. Added the ability to link the chat directly to wordpress user accounts.

= 2.1.11.1 =

Improved compatability with IE9

= 2.1.11.2 =

Fixed a bug which was causing the video chat window to open in the wrong location while in split-screen mode.

= 2.1.12 =

Added support for additional languages. Removed the style template from the config file, and created separate folders for language and style templates. Added a text prompt to the chat message box.

= 2.1.12.1 =

Fixed a small bug with the after_days text variable.

= 2.1.12.2 =

Fixed a small bug with the error_msg text variable.

= 2.1.13 =

Reorganized the language template. Fixed a bug which was preventing ie9 from loading the chat in integrated mode. Fixed a bug in which the profile page was receiving a 403 error on some sites.

= 2.1.13.1 =

Added the file editor to the administration panel. Made small changes to the default style.

= 2.1.13.2 =

Added the Spanish language template. This is a machine translation so will need a little touch up. Fixed a few minor bugs related to the presentation of alternate languages.

= 2.1.13.3 =

Some site were rejecting the path variable in the url to import.config.php. Created a patch for this

= 2.1.14 =

Added the language translation feature. Fixed text input so that non latin alphebets can now be represented in the chat.

= 2.1.14.1 =

Changed the names of the style templates. default.js -> default_header.js, wp_default -> default_sidebar.js, blue_silver.js -> blue_silver_header.js, wp_blue_silver.js -> blue_silver_sidebar.js

= 2.1.14.2 =

Changed the structure of the loading mechanism to make it more efficient.  Fixed a small bug with the timestamp display.

= 2.1.15 =

Added pop-out mode. The chat can now be launched into a browser pop-up window.

= 2.1.15.1 =

Changed the launch from link function so that it can launch the chat into a pop up window .

= 2.1.15.2 =

Fixed an issue with an extra script tag being inserted in the page and showing up in the html.

= 2.1.15.3 =

Fixed an issue with the window ordering.

= 2.1.16 =

Upgraded the video chat to 3.0. Delivers higher resolution video with the same bandwidth.

Introduced Fixed Mode: The chat widget can now be fixed to the browser window like a toolbar.

Split the style template files into two categories: widget templates and window templates. This makes it easier to mix and match.

= 2.1.17 =

The chat window can now be resized from the bottom. The chat is also resizable in the split screen mode.

= 2.1.17.1 =

Changed the file languages/spanish.js to the utf-8 format.

= 2.2 =

Introduces the SiteCenter toolbar interface, with a focus on user to user interaction. Whiteboard interface provided by Dabbleboard.com. Friends list added.

= 2.2.1 =

Fixed a bug with the whiteboard api interface. Added the Doodlepad. Added the ability to insert a URL of an image between the image tags.

Files Modified:
languages/english.js
languages/spanish.js

= 2.2.2 =

Added transliteration service. Changed the look of some of the icons. Added support for cookie sessions that do not expire.

Files Modified:
config/config.js
languages/english.js
languages/spanish.js
html/config/php_config.php
html/config/asp_config.asp
styles/chatcenter_default.js
styles/chatcenter_blue_silver.js

= 2.2.2.1 =

Bug Fix. A bug was fixed that occurred when the video chat windows were opened and close multiple times, causing the window to become detached from the frame.

= 2.2.3 =

Collaborative document feature introduced. windows can now be pinned or unpined from a fixed position on the browser screen.

Files Modified:
config/config.js
languages/english.js
languages/spanish.js
styles/chatcenter_blue_silver.js

= 2.2.4 =

Private video chat feature introduced. A bug was fixed which was causing the chat to freeze when you changed rooms with your video icon showing. Presentation of the loading state of the floating toolbar was changed, adding a yellow/green status light.

= 2.2.5 =

Two player games added.

Files Modified:
config/config.js
languages/english.js
languages/spanish.js
styles/widget_default_header.js
styles/widget_default_sidebar.js

= 2.2.5.1 =

Bug fixed: Changing users did not clear the friends list properly.
Bug fixed: "Ghost friends" were being added to some users accounts.
Bug fixed: Sending messages on enter was sporadically not working in ie9.
Added: A prompt to change your nickname, when viewing the online list and new messages dialog.

Files Modified:
config/config.js
languages/english.js
languages/spanish.js
styles/widget_default_header.js
styles/widget_default_sidebar.js
styles/chatcenter_default.js
styles/chatcenter_blue_silver.js

= 2.2.5.2 =

Added: an optional social media menu item for the toolbar, which allows your site visitors to share your site on Facebook, Twitter, etc.

Files Modified:
config/config.js
languages/english.js
languages/spanish.js
styles/widget_default_header.js
styles/widget_default_sidebar.js


= 2.2.5.3 =

Critical bug fix: The message alert box componenent was not being linked properly to the chat, causing problems with the administration panel and the forum integrated version of the chat.

= 2.2.5.4 =

Added a config variable "toolbar_mobile_hidden" which can be used to hide the floating toolbar in selected mobile platforms. The reason for this is that fixed positioning of page elements has spotty support in mobile apps.


= 2.2.6 =

The chat server was upgraded to allow easier integration of wp user accounts. Avatars may now be chosen without opening the ChatCenter.

= 2.2.6.1 =

Bug Fix: In the adminstration panel, the 'Update Select Server Configuration Variables' section was not working properly, due to an error introduced in the last update.
Bug Fix: A minor problem with the login reconnection mechanism was resolved.

= 2.2.6.2 =

Bug Fix: A syntax problem with the style templates was generating an error in ie6, preventing the chat from being displayed.

= 2.2.7 =

Country Flags and guest aliases added.

= 2.2.7.1 =

Bug Fix: A bug was fixed which was preventing the addition of CMS adminstrators

= 2.2.7.2 =

Bug Fix: A bug was fixed in which parseint was being used with the wrong radix, resulting in incorrect username length determination. A syntax error ws corrected relating to the usage of the variable use_avatar.

= 2.2.7.3 =

Bug Fix: A bug was fixed in html/Avatars.php in which a get variable was not checked for undefined values.

= 2.2.8 =

New styling, there are now three style templates to choose from for the ChatCenter.

= 2.2.8.1 =

Bug Fix: A bug was fixed that was preventing the friends list from being displayed.

Files Modified:
config/config.js
languages/english.js
languages/spanish.js
styles/widget_default_header.js
styles/widget_default_sidebar.js
styles/chatcenter_default.js
styles/chatcenter_blue_gray.js
styles/toolbar_default.js

= 2.2.8.2 =

Bug Fix: A bug was fixed that was preventing the floating toolbar dialog boxes from opening properly in Chrome.

= 2.2.9 =

A new drop-down menu system was introduced. The style of the toolbar was modified a bit.

Files Modified:
config/config.js
languages/english.js
languages/spanish.js
styles/widget_default_header.js
styles/widget_default_sidebar.js
styles/chatcenter_default.js
styles/chatcenter_light_gray.js
styles/chatcenter_blue_gray.js
styles/toolbar_default.js

= 2.2.10 =
Facebook Connect - Allows users to log in with their Facebook accounts.
New search menu items for the toolbar.
Banner Mode for mobile apps.
Fixed a few minor issues with the administration panel.
Added support for Joomla user integration

= 2.2.11 =
Promo - this feature introduces new users to the chat, and prompts them to create a chat name. 
Signature-users may write a signature statement which appears below their name.
A new sound was created for chatroom messages.
The style template chatcenter_default.js has been renamed to chatcenter_midnight_blue.js
Critical bug fix: In ie6, the opening of the change name dialog was causing a page reload.

= 2.2.12 =
User List Function. To disable, set show_user_list:false, in the config file.
You may now send messages to offline users.
Files Modified:
config/config.js
languages/english.js
languages/spanish.js
styles/widget_default_header.js
styles/widget_default_sidebar.js
styles/chatcenter_midnight_blue.js
styles/chatcenter_light_gray.js
styles/chatcenter_blue_gray.js
styles/toolbar_default.js

= 2.2.12.1 =
The client configuration has been moved to Settings->FCChat Settings, which you may access from your wordpress administration. No more having to manually edit the config.js file!
Files Modified:
config/config.js

= 2.2.13 =
new style templates for sites with darker backgrounds. Style templates found in the fcchat/styles/ folder.

= 2.2.13.1-7 =
Fixed security issue with fcchat/html/uploads.php file.

= 2.3 =
Updated the video chat to support h264 streaming. Added a new layout - "MsgCenter" which features instant messaging only.

= 2.3.1 =
Corrected an issue that manifested itself when the configuration variable prompt_user was set to false.

= 2.3.1.1-4 =
Corrected an issue that manifested itself when the configuration variable require_login was set to true, and popup_window_on_open was set to true. User could not sign in.

= 2.3.1.5 =
Corrected an issue with table css not being properly shielded. Also, an issue with avatar heights was corrected.

= 3.0.1 =
Corrected an issue with the textarea tags in ie.
Added the ability to post YouTube videos (thumbnail with link) simply by entering the url of the video.

= 3.0.2 =
Corrected an issue with the updating mechanism.

= 3.0.3 =
Corrected multiple issues with the video chat.

= 3.1 =
Corrected multiple issues with the video chat. Added the ability to quickly add customized buttons to the chat toolbar. Add a like button, a twitter button, a recent news button, top articles, etc. 

= 3.1.1 =
Corrected an issue with the quickstyling. Added disabled and hidden rooms that can be enabled on select pages. 

= 3.1.2 =
Corrected an issue with the access to locked rooms. The first room in the room list can now be password protected. 

= 3.1.3 =
Corrected an issue that was freezing the chat when "Open full chat" was pressed.

= 3.1.4 =
Corrected an issue that with the processing of non latin alphabets.

= 3.1.5 =
Addressed several issues involiving UTF-8 compatibility. Resolved an issue in which a bug in ie9 was causing scrollbars in the administration panel to scroll back to the top automatically.

= 3.1.6 =
Addressed a problem with user integration, which was preventing the assignment of a default administrative account.

= 3.2 =
Adds a nickname prompt for guest users. Avatar integration has been updated.

= 3.2.1 =
Corrects a critical error in 3.2.

= 3.2.2 =
Corrects a bug that appeared when the require_login variable was set to true.

= 3.3.0 =
Version 3.3.0. updates the chat display in mobile environments.

= 3.3.0.1 =
Transferred the collaborative document widget to in house servers.

= 3.3.0.2 =
Corrects a bug in which the chat toolbar was displaying incorrectly when minimized in the "topleft" or "bottomleft" configuration.

== Upgrade Notice ==

= 2.x - 3.x =

*Requires that you obtain a new chat ID if you are upgrading from a version prior to 2.1.8.

To upgrade from any previous version to the current version, first, make backup copies of the 2 configuration files in your old installation (fcchat/config/config.js, fcchat/html/config/config.php) and place them in a safe place where they will not be deleted. Next uninstall the old version and install the current version. Finally, copy your old configuration setting manually to the current version's configuration files. Of course, if you made no alterations to the config files in your previous installation, you may just simply install the new version. Refresh your browser's cache and cookies after upgrading to insure that the browser is displaying the new installation correctly.
