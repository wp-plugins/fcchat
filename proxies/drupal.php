<?php
/**
*
* @FCChat proxy for drupal 
* @copyright (c) 2009- Robert Beach (fastcatsoftware.com)
*
* Use this file to establish a proxy between fcchat and drupal's default user authentification protocol.
*
* Module must be placed in /sites/all/modules or sites/your-site-folder/modules in order for this to work.
*
*/

define('HASH_SEED', '1234');

chdir('../../../../../');
require('./includes/bootstrap.inc');
if (!isset($base_url)) {
    $fc_base_root = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') ? 'https' : 'http';
    $base_url = $fc_base_root .= '://' . $_SERVER['HTTP_HOST'];
    if ($dir = trim(dirname(mb_substr($_SERVER['SCRIPT_NAME'],0,(strripos($_SERVER['SCRIPT_NAME'],'sites')+4))), '\,/')) {
      $base_url .= "/$dir";
    }
  }
drupal_bootstrap(DRUPAL_BOOTSTRAP_SESSION);

//echo 'sessionid='.session_id(); // just to see what my session ID is to manually compare to my browser's cookie session ID.

$user_id='';
$session_id='';


$request = ( isset($_POST['f']) ) ? (int) $_POST['f'] : 0;

if($request==0){
	$current_user = $user;
	if ( 0 == $current_user->uid ) {
    		// Not logged in.
	 	echo "<fcchatresponse><fcchatresponse>";
	} else {
    		// Logged in.
		$t1 = time();
		$name_length = strlen($current_user->name);
		if($name_length<10){
			$name_length = '00' . $name_length;
		}else if($name_length<100){
			$name_length = '0' . $name_length;
		}
		$session_id = md5($current_user->pass);
		$hash = md5($t1 . $session_id . HASH_SEED);
		echo "<fcchatresponse>" . $current_user->uid . '&' . $session_id . '&' . $name_length . $current_user->name . $hash . $t1 . "<fcchatresponse>";

	}
}else{
	echo "<fcchatresponse>0<fcchatresponse>";		
}

?>
