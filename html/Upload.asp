<%@ Language=VBScript %>
<% 
option explicit 
Response.Expires = -1
Server.ScriptTimeout = 600
%>
<!-- #include file="config/asp_config.asp" -->
<!-- #include file="freeaspupload.asp" -->
<%


' ****************************************************
' Change the value of the variable below to the pathname
' of a directory with write permissions, for example "C:\Inetpub\wwwroot" 
' ****************************************************

' Note: this file uploadTester.asp is just an example to demonstrate
' the capabilities of the freeASPUpload.asp class. There are no plans
' to add any new features to uploadTester.asp itself. Feel free to add
' your own code. If you are building a content management system, you
' may also want to consider this script: http://www.webfilebrowser.com/

Dim avatars
avatars=false

function OutputForm()
%>
    <form name="frmSend" method="POST" enctype="multipart/form-data" action="" onSubmit="return onSubmitForm();">
	<br><font color= #444444><B><script>document.write(window.parent.fc_chat.textSetter(172))</script></B> </font> <script>document.write(window.parent.fc_chat.textSetter(176))</script><br><br>
    <input name="attach1" type="file" size=35><br>
    <br> 
    <input style="margin-top:4" type=submit id="submitbutton" value=""><br><br>
<script>document.getElementById("submitbutton").value=window.parent.fc_chat.textSetter(177)</script>
    <script>document.write(window.parent.fc_chat.textSetter(178))</script> <%=MAX_IMAGE_SIZE%>KB)
    </form>
<%
end function

function TestEnvironment()
    Dim fso, fileName, testFile, streamTest
    TestEnvironment = ""
    Set fso = Server.CreateObject("Scripting.FileSystemObject")
    if not fso.FolderExists(Server.MapPath(IMAGES_DIRECTORY)) then
        TestEnvironment = "<B>Folder " & Server.MapPath(IMAGES_DIRECTORY) & " does not exist.</B><br>The value of your IMAGES_DIRECTORY is incorrect. Open asp_config.asp in an editor and change the value of IMAGES_DIRECTORY to the pathname of a directory with write permissions."
        exit function
    end if
    fileName = Server.MapPath(IMAGES_DIRECTORY) & "\test.txt"
    on error resume next
    Set testFile = fso.CreateTextFile(fileName, true)
    If Err.Number<>0 then
        TestEnvironment = "<B>Folder " & Server.MapPath(IMAGES_DIRECTORY) & " does not have write permissions.</B><br>The value of your IMAGES_DIRECTORY is incorrect. Open asp_config.asp in an editor and change the value of IMAGES_DIRECTORY to the pathname of a directory with write permissions."
        exit function
    end if
    Err.Clear
    testFile.Close
    fso.DeleteFile(fileName)
    If Err.Number<>0 then
        TestEnvironment = "<B>Folder " & Server.MapPath(IMAGES_DIRECTORY) & " does not have delete permissions</B>, although it does have write permissions.<br>Change the permissions for IUSR_<I>computername</I> on this folder."
        exit function
    end if
    Err.Clear
    Set streamTest = Server.CreateObject("ADODB.Stream")
    If Err.Number<>0 then
        TestEnvironment = "<B>The ADODB object <I>Stream</I> is not available in your server.</B><br>Check the Requirements page for information about upgrading your ADODB libraries."
        exit function
    end if
    Set streamTest = Nothing
end function

function SaveFiles
    Dim Upload, fileName, fileSize, ks, i, fileKey

    Set Upload = New FreeASPUpload
    Upload.Save(Server.MapPath(IMAGES_DIRECTORY))

	' If something fails inside the script, but the exception is handled
	If Err.Number<>0 then Exit function

    SaveFiles = ""
    ks = Upload.UploadedFiles.keys
    if (UBound(ks) <> -1) then
        if errorstring = "" then
       		for each fileKey in Upload.UploadedFiles.keys
            		SaveFiles = "<br><font color=#444444 face=arial><b>" & Upload.UploadedFiles(fileKey).FileName & " (" & Upload.UploadedFiles(fileKey).Length & " bytes)</font><font color=#444444 face=arial> <script>document.write(window.parent.fc_chat.textSetter(171))</script></b><br><br><b><script>document.write(window.parent.fc_chat.textSetter(173))</script></b></font><font face=arial> <script>document.write(window.parent.fc_chat.textSetter(174))</script><br><br><font face=arial><span style='font-size:16px'><b> [[" & Upload.UploadedFiles(fileKey).FileName & "]]</b></span> </font><br><br><script>document.write(window.parent.fc_chat.textSetter(175))</script><br><br><font color=#444444 face=arial><b><script>document.write(window.parent.fc_chat.textSetter(179))</script></b></font><font face=arial> <script>document.write(window.parent.fc_chat.textSetter(180))</script><br></small><br><br><a href='javascript:this.location.replace(window.parent.FCChatConfig.alt_dir+""html/Upload.asp?id=" & userID & """)'><script>document.write(window.parent.fc_chat.textSetter(181))</script></a>&nbsp;<a href='javascript:window.parent.fc_chat.rem()'><script>document.write(window.parent.fc_chat.textSetter(182))</script></a><br><br>"
        	next
	else
		SaveFiles = "<br><b><script>document.write(window.parent.fc_chat.textSetter(" & errorstring & "))</script></b>"
	end if
    else
        SaveFiles = "<br><b><script>document.write(window.parent.fc_chat.textSetter(168))</script></b>"
        errorstring="-1"
    end if
end function
%>

<HTML>
<HEAD>
<TITLE>Free ASP Upload</TITLE>
<style>
BODY {background-color: #dddddd;font-family:arial; font-size:12}
</style>
<script>
function onSubmitForm() {
    var formDOMObj = document.frmSend;
    if (formDOMObj.attach1.value == "" && formDOMObj.attach2.value == "" && formDOMObj.attach3.value == "" && formDOMObj.attach4.value == "" )
        alert("Please press the browse button and pick a file.")
    else
        return true;
    return false;
}
</script>

</HEAD>

<BODY>
<br>
<div style="border-bottom: #A91905 2px solid;font-size:16"><b><i>Share Images</i></b></div>
<%
Dim diagnostics
if Request.ServerVariables("REQUEST_METHOD") <> "POST" then
    diagnostics = TestEnvironment()
    if diagnostics<>"" then
        response.write "<div style=""margin-left:20; margin-top:30; margin-right:30; margin-bottom:30;"">"
        response.write diagnostics
        response.write "<p>After you correct this problem, reload the page."
        response.write "</div>"
    else
        response.write "<div style=""margin-left:20"">"
        OutputForm()
        response.write "</div>"
    end if
else
    response.write "<div style=""margin-left:20"">"
    response.write SaveFiles()
    if errorstring<>"" Then
	OutputForm()
    end if
    response.write "<br><br></div>"
end if

%>
<br>
<!-- Please support this free script by having a link to freeaspupload.net either in this page or somewhere else in your site. -->
<div style="border-bottom: #A91905 2px solid;font-size:10">Powered by <A HREF="http://www.freeaspupload.net/" style="color:black">Free ASP Upload</A></div>

<br><br>


</BODY>
</HTML>
