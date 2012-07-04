/*
* Template overrides
* 
* Refer to tutorial: http://www.fastcatsoftware.com/wp3.3/?p=7 
* 
*/

(function(){
	
/************** Overrides go here ************************************************************/
	
/* Example: Overrides the ChatCenter Window background color. Uncomment the line below to try*/
// setOption("FCChatConfig.styles.chat_window.frame.background_color","purple");






/************** End Overrides ****************************************************************/
	
/* Override functions */
function getObj(a,b,d){var c=window;for(var i=0;i<b.length-d;i++){c=c[b[i]]}return c};
function setOption(a,d){try{var b=a.split(".");var c= getObj(a,b,1);c[b[b.length-1]]=d}catch(e){}};
function mergeOption(a,d){try{var b=a.split(".");var c = getObj(a,b,1);c[b[b.length-1]]+=d}catch(e){}};
function mergeBlock(a,d){try{var b=a.split(".");var c=getObj(a,b,0);jGo.$.extend(true,c,d)}catch(e){}};
function getCSSProp(a,d,g){try{var b=a.split(".");var c;c=getObj(a,b,1);var f=((c[b[b.length-1]].split(d+":"))[1].split(";"))[0];return (g?jGo.util.eN(f):f)}catch(e){}};

}());