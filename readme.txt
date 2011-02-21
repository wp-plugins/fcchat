=== Plugin Name ===

Contributors: rdbeach
Donate link: http://www.fastcatsoftware.com
Tags: chat, instant messaging, widget
Requires at least: 2.7
Tested up to: 3.0.1
Stable tag: 2.1.8

FCChat displays a highly customizable, full featured, real time chat in the sidebar.

== Description ==

FCChat displays a highly customizable, full featured, real time chat in the sidebar. This version of FCChat has been modified for use with wordpress.

FEATURES INCLUDE:

Real time text chat

Video Chat (Premium Subscription Required)

Public rooms/Private Rooms

Instant messaging/Private Chat

Upload Images

User profiles

Assign Titles to users

Customizable smileys/avatars

Customizable sounds

Customizable style template

Administration/moderation panel


A one time $0.99 fee (payable through Paypal) is required to activate the chat service. After that, you may use the basic service for as long as you wish free of monthly charge. The basic service includes all of the above features except the video chat. The basic service is limited to 10 simulaneous connections to the chat server, which is more than sufficient for a small personal site. If you are in any way dissatisfied with the service, you may request a refund within 60 days of purchase.



IMPORTANT: Those of you who are upgrading from a previous version must obtain a new chat ID in order to use version 2.1.8.  In addition, after upgrading, you must clear your browser cache and cookies or the chat may not connect properly.

== Installation ==

1. Old-school: upload the `FCChat` folder to the `/wp-content/plugins/` directory via FTP.  Hipster: Add the FCChat Widget via the WordPress Plugins menu.
1. Activate the Plugin
1. Add the Widget to the desired sidebar in the WordPress Widgets menu.
1. Open the `FCChat Widget' options dialog by clicking on the widget once added to the sidebar.
1. Follow the Steps listed in the dialog in order to activate the chat service.
1. Rate the plugin and verify that it works at wordpress.org.
1. Leave a comment regarding bugs, feature request, cocktail recipes at http://www.fastcatsoftware.com

== Frequently Asked Questions ==

= How do I use/configure/administrate FCChat? =

Here are some places to look for information:

http://fastcatsoftware.com/chat/userguide/Index.html

http://fastcatsoftware.com/chat/Manual.html

== Screenshots ==

1. Here, in screenshot-1.png an expansive view of the available `FCChat Widget` control panel hs been provided for your viewing pleasure.
2. screenshot-2.png catches the `FCChat Widget` in some hot on-page action.  Take care, number 7, your scene is next.

3. screenshot-3.png shows what the chat looks like when you open it up. What a thing of beauty.

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


== Upgrade Notice ==

= 2.1.8 =

*Version 2.1.8 requires that you obtain a new chat ID.

To upgrade from any previous version to the current version, first, make backup copies of the 3 configuration files in your old installation (fcchat/config/config.js, fcchat/html/config/config.php, fcchat/html/config/config.asp) and place them in a safe place where they will not be deleted. Next uninstall the old version and install the current version. Finally, copy your old configuration setting manually to the current version's configuration files. Of course, if you made no alterations to the config files in your previous installation, you may just simply install the new version. Refresh your browser's cache and cookies after upgrading to insure that the browser is displaying the new installation correctly.
