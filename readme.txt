=== Plugin Name ===

Contributors: rdbeach
Donate link: http://www.fastcatsoftware.com
Tags: chat, instant messaging, widget
Requires at least: 2.7
Tested up to: 3.2
Stable tag: 2.2.2

An interface for real time chat, video conferencing, instant messaging, and more.

== Description ==

FCChat connects your web site users with chat, video conferencing, instant messaging and more. 

NEW FEATURES

Version 2.2.x comes with FriendsCenter, an optional floating toolbar component intended for better user interaction. The instant messaging capability has been enhanced with new-messages and friends-list dialogs. New collaborative whiteboard, transliteration, and doodlepad feature introduced. The 2.2.x series will be focused on providing greater user to user interaction. Collaborative documents and games will be coming in future updates. The video chat has recently been upgraded, providing for higher resolution video at a lower bandwidth. In addition, you may now open the chatcenter directly into a separate window, so the the connection is maintained through page changes.

UPGRADING

When you upgrade to a new version, any customizations you made to the chat will be erased. In order to save those changes, do the following:

1. Make backup copies of any files that you have altered. You may wish to make backups of the following folders: (fcchat/config, fcchat/languages, fcchat/styles, fcchat/html/config). Place them in a safe place where they will not be deleted. 
1. Next install the new version. 
1. Finally, manually copy the changes you made to the old files into the current version's files. Do not replace the new files with the old files, as the structure of the new files may have changed; but instead, use the wordpress file editor to make the changes line by line.

*As of version 2.2, the changelog will list the configuration files that have changed since the previous version. If the config file has not changed from your current version to the new version, you may simply replace the updated version with the old file.

FEATURE LIST:

Real time text chat

Video Chat/Video Conferencing (6 Simulaneous Cams)

Pop-out Mode: Launch Chat into a separate window

Public rooms/Private Rooms

Instant messaging/Private Chat

Upload images

User profiles

Collaborative whiteboard

Doodlepad

Transliteration

Split-screen Mode: Show the chat side by side with your site



Language translation feature 

Assign titles to users

Customizable smileys/avatars

Customizable sounds

Customizable language templates

Customizable style templates

Administration/moderation panel

Web based file editor 


Service activation -- Service activation comes with a 3 day free trial period. If you wish to continue the service, there is a small monthly fee.


== Installation ==

1. Old-school: upload the `FCChat` folder to the `/wp-content/plugins/` directory via FTP.  Hipster: Add the FCChat Widget via the WordPress Plugins menu.
1. Activate the Plugin
1. Add the Widget to the desired sidebar in the WordPress Widgets menu.
1. Open the `FCChat Widget' options dialog by clicking on the widget once added to the sidebar.
1. Follow the Steps listed in the dialog in order to activate the chat service.
1. Rate the plugin and verify that it works at wordpress.org.
1. Leave a comment regarding bugs, feature request, cocktail recipes at http://www.fastcatsoftware.com




= Upgrading from a previous version (This applies to version 2.1.12 and later)=

When you upgrade to a new version, any customizations you made to the chat will be erased. In order to save those changes, do the following:

1. Make backup copies of any files that you have altered. You may wish to make backups of the following folders: (fcchat/config, fcchat/languages, fcchat/styles, fcchat/html/config). Place them in a safe place where they will not be deleted. 
1. Next uninstall the old version and install the current version. 
1. Finally, manually copy the changes you made to the old files into the current version's files. Do not replace the new files with the old files, as the structure of the new files may have changed; but instead, use the wordpress file editor to make the changes line by line.

Also, when you upgrade to a new version, it is NOT required that you obtain a new chat ID.


== Frequently Asked Questions ==

= Where is the demo? =

Here:

http://www.fastcatsoftware.com/wordpress

= How do I use/configure/administrate FCChat? =

Here are some places to look for information:

http://www.fastcatsoftware.com/chat/userguide/Index.html

http://www.fastcatsoftware.com/chat/Manual.html

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

== Upgrade Notice ==

= 2.2.x =

*Version 2.2.x requires that you obtain a new chat ID if you are upgrading from a version prior to 2.1.8.

To upgrade from any previous version to the current version, first, make backup copies of the 2 configuration files in your old installation (fcchat/config/config.js, fcchat/html/config/config.php) and place them in a safe place where they will not be deleted. Next uninstall the old version and install the current version. Finally, copy your old configuration setting manually to the current version's configuration files. Of course, if you made no alterations to the config files in your previous installation, you may just simply install the new version. Refresh your browser's cache and cookies after upgrading to insure that the browser is displaying the new installation correctly.
