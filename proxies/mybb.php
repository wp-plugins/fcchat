<?php
/**
 * MyBB 1.6
 * Copyright 2010 MyBB Group, All Rights Reserved
 *
 * Website: http://mybb.com
 * License: http://mybb.com/about/license
 *
 * $Id: index.php 5765 2012-03-27 09:52:45Z Tomm $
 */

define("IN_MYBB", 1);
define('THIS_SCRIPT', 'index.php');
require_once(dirname(__FILE__) . '/../../global.php');

define('SECRET_KEY', 'OqO,X<rU_&=F;V}f39< bh,+&Qlr>:20=V6a^FkQ9N!<Uwp|y}]}<!5(|W|N4E>8');
define('USERNAMES_ENCODED', true);
define('RETURN_AVATAR', true);

$user_id='';
$password='';

$request = ( isset($_POST['f']) ) ? (int) $_POST['f'] : 0;

if($request==0){
	if ( 0 == $mybb->user['uid']) {
    		// Not logged in.
		echo "<fcchatresponse><fcchatresponse>";
	} else {
    		// Logged in.
		$t1 = time();
		if(USERNAMES_ENCODED){
			$username = htmlspecialchars_decode($mybb->user['username']);
		}
		$name_length = strlen($username);
		if($name_length<10){
			$name_length = '00' . $name_length;
		}else if($name_length<100){
			$name_length = '0' . $name_length;
		}
		$password = md5('smf' . $mybb->user['uid'] . SECRET_KEY);
		$signature = md5($t1 . $password . SECRET_KEY);
		echo "<fcchatresponse>" . 'mbb' . $mybb->user['uid'] . '&' . $password . '&' . $name_length . $username . $signature . $t1 . "<fcchatresponse>";

		//Grab the avatar
		if(RETURN_AVATAR){
			if (!empty($mybb->user['avatar'])){
				echo "<fcchatresponse2>/" . $mybb->user['avatar'] . "<fcchatresponse2>";
			}else{
				echo "<fcchatresponse2><fcchatresponse2>";
			}
		}
	}
}else{
	if (!empty($mybb->user['avatar'])){
		echo "<fcchatresponse>/" . $mybb->user['avatar'] . "<fcchatresponse>";		
	}else{
		echo "<fcchatresponse>0<fcchatresponse>";
	}		
}
?>