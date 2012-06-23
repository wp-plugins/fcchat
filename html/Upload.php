<?php

/** Make sure that the WordPress bootstrap has run before continuing. */
require( dirname(__FILE__) . '/../../../../wp-load.php' );

//include the configuration file
include('config/php_config.php');

//create a nonce
$nonce = wp_create_nonce( 'wp-fcchat-upload' );

//Used to "verify" image format (taken from wordpress image resize function)
function fcchat_image_check( $file, $max_w = 1, $max_h = 1, $crop = false, $suffix = null, $dest_path = null, $jpeg_quality = 90 ) {

    $image = wp_load_image( $file );
    if ( !is_resource( $image ) )
        return 1;

    $size = @getimagesize( $file );
    if ( !$size )
        return 2;
    list($orig_w, $orig_h, $orig_type) = $size;

    $dims = image_resize_dimensions($orig_w, $orig_h, $max_w, $max_h, $crop);
    if ( !$dims )
        return 3;
    list($dst_x, $dst_y, $src_x, $src_y, $dst_w, $dst_h, $src_w, $src_h) = $dims;

    $newimage = wp_imagecreatetruecolor( $dst_w, $dst_h );

    imagecopyresampled( $newimage, $image, $dst_x, $dst_y, $src_x, $src_y, $dst_w, $dst_h, $src_w, $src_h);

    // convert from full colors to index colors, like original PNG.
    if ( IMAGETYPE_PNG == $orig_type && function_exists('imageistruecolor') && !imageistruecolor( $image ) )
        imagetruecolortopalette( $newimage, false, imagecolorstotal( $image ) );

    // we don't need the original in memory anymore
    imagedestroy( $image );

    // $suffix will be appended to the destination filename, just before the extension
    if ( !$suffix )
        $suffix = "{$dst_w}x{$dst_h}";

    /*
    $info = pathinfo($file);
    $dir = $info['dirname'];
    $ext = $info['extension'];
    $name = wp_basename($file, ".$ext");

    if ( !is_null($dest_path) and $_dest_path = realpath($dest_path) )
        $dir = $_dest_path;
    $destfilename = "{$dir}/{$name}-{$suffix}.{$ext}";
    */
    ob_start();
    if ( IMAGETYPE_GIF == $orig_type ) {
        if ( !imagegif( $newimage) ){
	    ob_end_clean();
            return 4;}
    } elseif ( IMAGETYPE_PNG == $orig_type ) {
        if ( !imagepng( $newimage) ){
	    ob_end_clean();
            return 5;}
    } else {
        // all other formats are converted to jpg
        if ( !imagejpeg( $newimage) ){
 	    ob_end_clean();
            return 6;}
    }
    ob_end_clean();
    imagedestroy( $newimage );

    //Set correct file permissions
    //$stat = stat( dirname( $destfilename ));
    //$perms = $stat['mode'] & 0000666; //same permissions as parent folder, strip off the executable bits
    //@ chmod( $destfilename, $perms );

    return 7;
}

echo "<html><style>BODY {background-color: #bbbbbb;font-family:arial; font-size:12}</style><body><br><div style='border-bottom: #A91905 2px solid;font-size:16'><b><i><script>document.write(window.parent.fc_chat.textSetter(162))</script></i></b></div><form name='newad' method='post' enctype='multipart/form-data' action=''><input type='hidden' name='nonce' value='" . $nonce . "'>";

//This function reads the extension of the file. It is used to determine if the file  is an image by checking the extension.
function fcchat_getExtension($str) {
         $i = strrpos($str,".");
         if (!$i) { return ""; }
         $l = strlen($str) - $i;
         $ext = substr($str,$i+1,$l);
         return $ext;
 }

function fcchat_recursive_directory_size($directory, $format=FALSE)
 {
     $size = 0;
  
     // if the path has a slash at the end we remove it here
     if(substr($directory,-1) == '/')
     {
         $directory = substr($directory,0,-1);
     }
  
     // if the path is not valid or is not a directory ...
     if(!file_exists($directory) || !is_dir($directory) || !is_readable($directory))
     {
         // ... we return -1 and exit the function
         return -1;
     }
     // we open the directory
     if($handle = opendir($directory))
    {
         // and scan through the items inside
         while(($file = readdir($handle)) !== false)
         {
             // we build the new path
             $path = $directory.'/'.$file;
  
             // if the filepointer is not the current directory
             // or the parent directory
             if($file != '.' && $file != '..')
             {
                 // if the new path is a file
                 if(is_file($path))
                 {
                     // we add the filesize to the total size
                     $size += filesize($path);
  
                 // if the new path is a directory
                }elseif(is_dir($path))
                {
                    // we call this function with the new path
                     $handlesize = fcchat_recursive_directory_size($path);
  
                     // if the function returns more than zero
                     if($handlesize >= 0)
                     {
                         // we add the result to the total size
                         $size += $handlesize;
  
                     // else we return -1 and exit the function
                     }else{
                         return -1;
                     }
                 }
             }
         }
         // close the directory
         closedir($handle);
     }
     // if the format is set to human readable
     if($format == TRUE)
     {
         // if the total size is bigger than 1 MB
         if($size / 1048576 > 1)
         {
             return round($size / 1048576, 1).' MB';
  
         // if the total size is bigger than 1 KB
         }elseif($size / 1024 > 1)
         {
             return round($size / 1024, 1).' KB';
         // else return the filesize in bytes
        }else{
             return round($size, 1).' bytes';
         }
     }else{
         // return the total filesize in bytes
         return $size;
     }
 }

//print_r(fcchat_recursive_directory_size(IMAGES_DIRECTORY,TRUE));

// This variable is used as a flag. The value is initialized with 0 (meaning no error  found)  
// and it will be changed to 1 if an errro occures.  
// If the error occures the file will not be uploaded.
$errors=0;
$filename='';
$newname='';
//checks if the form has been submitted
 if(isset($_POST['Submit'])) 
 {

	// Uploads need to be enabled in the configuration file fcchat/html/config/php_config.php
	if ( ALLOW_UPLOADS==0) die("Uploads not allowed");

	// Test the nonce
	$nonce=$_REQUEST['nonce'];
    	if (! wp_verify_nonce($nonce, 'wp-fcchat-upload') ) die("Security check failed");

	// reads the user
	$id = ( isset($_GET['id']) ) ? (int) $_GET['id'] : '';


	if(!is_numeric($id)){
		echo '<br><font face=arial><b><script>document.write(window.parent.fc_chat.textSetter(163))</script></font></b><br>';
		$errors=1;
	}else{
 		//reads the name of the file the user submitted for uploading
 		$image=$_FILES['image']['name'];
 		//if it is not empty
 		if ($image) 
 		{
 			//get the original name of the file from the clients machine
 			$filename = stripslashes($_FILES['image']['name']);
 			//get the extension of the file in a lower case format
			if(strpos($filename,"[[")>=1 || strpos($filename,"]]")>=1){
				//print error message
 				echo '<br><font face=arial><b><script>document.write(window.parent.fc_chat.textSetter(164))</script></font></b><br>';
 				$errors=1;
			}else{
  				$extension = fcchat_getExtension($filename);
 				$extension = strtolower($extension);
 				//if it is not a known extension, we will suppose it is an error and will not  upload the file,  
				//otherwise we will do more tests
 				if (($extension != "jpg") && ($extension != "jpeg") && ($extension != "png") && ($extension != "gif")) 
 				{
					//print error message
 					echo '<br><font face=arial><b><script>document.write(window.parent.fc_chat.textSetter(165))</script></font></b><br>';
 					$errors=1;
 				}
 				else
 				{
					//Remove all dots from the filename and replace with underscores, except the last one.
					$lastDot = strrpos($filename, ".");
					$filename = str_replace(".", "_", substr($filename, 0, $lastDot)) . substr($filename, $lastDot);
					if(($errorcode=fcchat_image_check($_FILES['image']['tmp_name']))==7){
					   //get the size of the image in bytes
 					   //$_FILES['image']['tmp_name'] is the temporary filename of the file
 					   //in which the uploaded file was stored on the server
 					   $size=filesize($_FILES['image']['tmp_name']);

					   //compare the size with the maxim size we defined and print error if bigger
					   if ($size > MAX_FILE_SIZE*1024)
					   {
					      echo '<br><font face=arial><b><script>document.write(window.parent.fc_chat.textSetter(166))</script></font></b><br>';
					      $errors=1;
					   }else if (fcchat_recursive_directory_size(IMAGES_DIRECTORY,FALSE)>MAX_DIR_SIZE){
					       echo '<br><font face=arial><b><script>document.write(window.parent.fc_chat.textSetter(167))</script></font></b><br>';
					       $errors=1;
					   }else{
						
					      //we will give an unique name, for example the time in unix time format
					      $image_name=$id.'_'.$filename;
					      //the new name will be containing the full path where will be stored (images folder)
					      $newname=IMAGES_DIRECTORY.$image_name;
					      //we verify if the image has been uploaded and print error instead
					      $copied = move_uploaded_file($_FILES['image']['tmp_name'], $newname);
					      if (!$copied) 
				   	      {
					         echo '<br><font face=arial><b><script>document.write(window.parent.fc_chat.textSetter(169))</script></b></font><br>';
						 $errors=1;
					      }
					   }
					}else{
						echo '<br><font face=arial><b><script>document.write(window.parent.fc_chat.textSetter(600,"Not a valid image format"))</script></font></b><br>';
 						echo $errorcode . 'not a valid image';
						$errors=1;
					}
				}
			}
		}else{
			echo '<br><font face=arial><b><script>document.write(window.parent.fc_chat.textSetter(170))</script></font></b><br>';
 				$errors=1;
		}
	}
}

//If no errors registred, print the success message
 if(isset($_POST['Submit']) && !$errors) 
 {
 	echo "<br><font color=#444444 face=arial><b>".$filename."</font><font color=#444444 face=arial> <script>document.write(window.parent.fc_chat.textSetter(171))</script></b><br><br><b><script>document.write(window.parent.fc_chat.textSetter(173))</script></b></font><font face=arial> <script>document.write(window.parent.fc_chat.textSetter(174))</script><br><br><span style='font-size:16px'><b>[[".$filename."]]</b></span> <br><br><script>document.write(window.parent.fc_chat.textSetter(175))</script>";
 }else{
	echo '<br><font color=#444444 face=arial><b><script>document.write(window.parent.fc_chat.textSetter(172))</script></b></font><font face=arial> <script>document.write(window.parent.fc_chat.textSetter(176))</script></font><table><tr><td><input type="file" name="image"></td></tr>
<tr><td><input name="Submit" id="submitbutton" type="submit" value=""></td></tr><tr><td><font face=arial><small><script>document.getElementById("submitbutton").value=window.parent.fc_chat.textSetter(177)</script><script>document.write(window.parent.fc_chat.textSetter(178))</script> '.MAX_FILE_SIZE.'KB)</small></font></td></tr></table> </form><br>';
 }
 if(isset($_POST['Submit']) && !$errors) 
 {
  	echo "<br><br><font color=#444444 face=arial> <script>document.write(window.parent.fc_chat.textSetter(179))</script></b></font><font face=arial>  <script>document.write(window.parent.fc_chat.textSetter(180))</script></small><br><br><a href='javascript:this.location.replace(window.parent.FCChatConfig.alt_dir+\"html/Upload.php?id=".$id."\")'><script>document.write(window.parent.fc_chat.textSetter(181))</script></a>&nbsp;<a href='javascript:window.parent.fc_chat.rem()'><script>document.write(window.parent.fc_chat.textSetter(182))</script></a><br><br>";
 }
 ?>
<div style="border-bottom: #A91905 2px solid;font-size:10">Powered by <A HREF="http://www.php.net/" style="color:black">PHP</A></div></body><html>