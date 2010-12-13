=== Plugin Name ===

Contributors: rdbeach
Donate link: http://www.fastcatsoftware.com
Tags: chat, instant messaging, widget
Requires at least: 2.7
Tested up to: 3.0.1
Stable tag: 2.1.3

FCChat displays a highly customizable, full featured, real time chat in the sidebar.

== Description ==

FCChat displays a highly customizable, full featured, real time chat in the sidebar. This version of FCChat has been modified for use with wordpress.

== Installation ==

1. Old-school: upload the `FCChat` folder to the `/wp-content/plugins/` directory via FTP.  Hipster: Add the FCChat Widget via the WordPress Plugins menu.
1. Activate the Plugin
1. Add the Widget to the desired sidebar in the WordPress Widgets menu.
1. Configure the `FCChat Widget' options.
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

== Upgrade Notice ==

= 2.1.3 =

To upgrade from any previous version to the current version, first, make backup copies of the 3 configuration files in your old installation (fcchat/config/config.js, fcchat/html/config/config.php, fcchat/html/config/config.asp). Next uninstall the old version and install the current version. Finally, copy your old configuration setting manually to the current version.
