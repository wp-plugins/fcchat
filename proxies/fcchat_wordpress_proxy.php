<?php
/**
*
* @FCChat proxy for wordpress 
* @copyright (c) 2009- Robert Beach (fastcatsoftware.com)
*
* Use this file to establish a proxy between fcchat and wordpress' default user authentification protocol.
*
*/

define('HASH_SEED', '1234');


/** Make sure that the WordPress bootstrap has run before continuing. */
require( dirname(__FILE__) . '/../../../../wp-load.php' );


$user_id='';
$session_id='';


$request = ( isset($_POST['f']) ) ? (int) $_POST['f'] : 0;

if($request==0){
	$current_user = wp_get_current_user();
	if ( 0 == $current_user->ID ) {
    		// Not logged in.
	 	echo "<fcchatresponse><fcchatresponse>";
	} else {
    		// Logged in.
		$t1 = time();
		$name_length = strlen($current_user->display_name);
		if($name_length<10){
			$name_length = '00' . $name_length;
		}else if($name_length<100){
			$name_length = '0' . $name_length;
		}
		$session_id = md5($current_user->user_pass);
		$hash = md5($t1 . $session_id . HASH_SEED);
		echo "<fcchatresponse>" . $current_user->ID . '&' . $session_id . '&' . $name_length . $current_user->display_name . $hash . $t1 . "<fcchatresponse>";

	}
}else{
	echo "<fcchatresponse>0<fcchatresponse>";		
}

?>