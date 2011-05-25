<?php
/**
*
* @FCChat proxy for simple machines forum 
* @copyright (c) 2009- Robert Beach (fastcatsoftware.com)
*
* Use this file to establish a proxy between fcchat and smf default user authentification protocol.
*
*/

$forum_version = 'SMF 1.1.13';

// Get everything started up...
define('SMF', 1);
@set_magic_quotes_runtime(0);
error_reporting(E_ALL);
$time_start = microtime();

// Make sure some things simply do not exist.
foreach (array('db_character_set') as $variable)
	if (isset($GLOBALS[$variable]))
		unset($GLOBALS[$variable]);

// Load the settings...
require_once(dirname(__FILE__) . '/../../Settings.php');

// And important includes.
require_once($sourcedir . '/QueryString.php');
require_once($sourcedir . '/Subs.php');
require_once($sourcedir . '/Errors.php');
require_once($sourcedir . '/Load.php');
require_once($sourcedir . '/Security.php');

// Using an old version of PHP?
if (@version_compare(PHP_VERSION, '4.2.3') != 1)
	require_once($sourcedir . '/Subs-Compat.php');

// If $maintenance is set specifically to 2, then we're upgrading or something.
if (!empty($maintenance) && $maintenance == 2)
	db_fatal_error();

// Connect to the MySQL database.
if (empty($db_persist))
	$db_connection = @mysql_connect($db_server, $db_user, $db_passwd);
else
	$db_connection = @mysql_pconnect($db_server, $db_user, $db_passwd);

// Show an error if the connection couldn't be made.
if (!$db_connection || !@mysql_select_db($db_name, $db_connection))
	db_fatal_error();

// Load the settings from the settings table, and perform operations like optimizing.
//reloadSettings();
// Clean the request variables, add slashes, etc.
cleanRequest();
//$context = array();

// Seed the random generator?
if (empty($modSettings['rand_seed']) || mt_rand(1, 250) == 69)
	smf_seed_generator();

// Start the session. (assuming it hasn't already been.)
//loadSession();

// What function shall we execute? (done like this for memory's sake.)
call_user_func(smf_main());

// Call obExit specially; we're coming from the main area ;).
obExit(null, null, true);

// The main controlling function.
function smf_main()
{
	global $ID_MEMBER, $modSettings, $settings, $user_info, $board, $topic, $maintenance, $sourcedir;

	// Special case: session keep-alive.
	if (isset($_GET['action']) && $_GET['action'] == 'keepalive')
		die;

	// Load the user's cookie (or set as guest) and load their settings.
	loadUserSettings();
     	define('HASH_SEED', '1234');

	$user_id='';
	$session_id='';

	$request = ( isset($_POST['f']) ) ? (int) $_POST['f'] : 0;

	if($request==0){
		if ( 0 == $ID_MEMBER) {
    			// Not logged in.
	 		echo "<fcchatresponse><fcchatresponse>";
		} else {
    			// Logged in.
			$t1 = time();
			$name_length = strlen($user_info['username']);
			if($name_length<10){
				$name_length = '00' . $name_length;
			}else if($name_length<100){
				$name_length = '0' . $name_length;
			}
			$session_id = md5($user_info['passwd']);
			$hash = md5($t1 . $session_id . HASH_SEED);
			echo "<fcchatresponse>" . $ID_MEMBER . '&' . $session_id . '&' . $name_length . $user_info['username'] . $hash . $t1 . "<fcchatresponse>";

		}
	}else{
		echo "<fcchatresponse>0<fcchatresponse>";		
	}
}

?>