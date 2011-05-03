<?php
/**
*
* @FCChat proxy for PHPBB Configuration file
* @copyright (c) 2009- Robert Beach (fastcatsoftware.com)
*
*/

define('HASH_SEED', '1234');

/**
* @ignore
*/
define('IN_PHPBB', true);
$phpbb_root_path = (defined('PHPBB_ROOT_PATH')) ? PHPBB_ROOT_PATH : './../../';
$phpEx = substr(strrchr(__FILE__, '.'), 1);
include($phpbb_root_path . 'common.' . $phpEx);

$user_id='';
$session_id='';

/*
if (isset($_COOKIE[$config['cookie_name'] . "_u"])){
	echo "1";
	$user_id = $_COOKIE[$config['cookie_name'] . "_u"];
}
*/

if (isset($_COOKIE[$config['cookie_name'] . "_sid"])){
	$session_id = $_COOKIE[$config['cookie_name'] . "_sid"];
}
if (isset($_GET['sid'])){
	$session_id = $_GET['sid'];
}

$request = ( isset($_POST['f']) ) ? (int) $_POST['f'] : 0;

if($request==0){
	$sql = "Select user_id, username, (unix_timestamp(now())-session_time<(" . $config['session_length'] . " + 60)) as online from " . SESSIONS_TABLE . " left join " . USERS_TABLE . " on session_user_id=user_id where session_id='" . $session_id . "'";
	$result = $db->sql_query($sql);
	$row = $db->sql_fetchrow($result);
	$db->sql_freeresult($result);
	if($row['online']!='1'||$row['user_id']=='1'){
		echo "<fcchatresponse><fcchatresponse>";
	}else{
		$t1 = time();
		$name_length = strlen($row['username']);
		if($name_length<10){
			$name_length = '00' . $name_length;
		}else if($name_length<100){
			$name_length = '0' . $name_length;
		}
		$hash = md5($t1 . $session_id . HASH_SEED);
		echo "<fcchatresponse>" . $row['user_id'] . '&' . $session_id . '&' . $name_length . $row['username'] . $hash . $t1 . "<fcchatresponse>";
	}
}else{
	$sql = "Select user_avatar from " . SESSIONS_TABLE . " left join " . USERS_TABLE . " on session_user_id=user_id  where session_id='" . $session_id . "'";
	$result = $db->sql_query($sql);
	$row = $db->sql_fetchrow($result);
	$db->sql_freeresult($result);
	if($row['user_avatar']==''){
		echo "<fcchatresponse>0<fcchatresponse>";
	}else{
		echo "<fcchatresponse>/" . $php_root_path . "download/file.php?avatar=" . $row['user_avatar'] . "<fcchatresponse>";
	}		
}

?>