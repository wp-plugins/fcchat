/*
*DefaultToolbar Class
*/
(function() {

var $ = jGo.$;
var z_b = jGo.config.z_index_base;

jGo.DefaultToolbar = function() {
    jGo.Control.apply(this, arguments);
    this.type = 'DefaultToolbar';
    
    this.context;
    this.items;
    this.placement;
    this.left_offset;
    this.minimized_text;
    this.isVisible;
    this.minimized;
    this.parent;
    
    //ie6 doesnt support fixed elements
    this.IE6Mode=false;
    this.app_prefix;
    this.track_window_events;
    this.reposition_enabled = true;
    
    this.width;
    this.min_width;
    
    this.dialog_fade_interval = 250;
    
    this.style={};
    
    this.getDefault = function() {
        return jGo.DefaultToolbar.prototype;
    };

    this.err = function() {
        alert("Method not found.");
    };
};

jGo.DefaultToolbar.prototype = new jGo.Control();

var proto = jGo.DefaultToolbar.prototype;

/* 
 * Create it
 *
 	Args:
 	    context, -for instance jGo.fcchat_toolbar, the context may contain a style object ie. jGo.fcchat_toolbar.style
		items, - the a list of items to placed in the toolbar, the items objects (when created) should be appended to the context in the object hierarchy
		placement, -topright, bottomleft etc.
		minimized_text, -something to say when the toolbar is minimized
		hiddenItemStart, - the rightmost item that will be hidden when the toolbar is minimized, (along with all items to the left of it)
		top offset,
		left offset,
		isVisible, -true false
		minimized, -true or false
		parent, -where to append
		app_prefix, -something to add before class names
		track_window_events -will the toolbar track window events
		
*/

proto.create = function(id, p){
	
	//initialize values
	this.context = p[0];
	this.items = p[1];
	this.app_prefix = p[10] || 'jGo_'+id;
	var prefix = this.app_prefix;
	var hiddenItemStart = p[4] || p[1][p[1].length-1];
	var style = this.style = (this.context.style?$.extend({},this.context.style):this.style);
	this.placement = p[2] || 'bottomright';
	this.minimized_text = p[3] || 'FriendsCenter';
	this.minimized = p[8] || false;
	this.isVisible = (p[7]!=null?p[7]:true);
    this.parent= p[9] || $(document.body);
    this.track_window_events = (p[11]!=null?p[11]:true);
    this.left_offset=p[6]||26;
    
    //dim
	
	this.width=this.calculateWidth(0)+style.icon_tray.width;
	this.min_width=this.width-(this.calculateWidth(hiddenItemStart)+this.context[hiddenItemStart].style.menu_item.width)+style.icon_tray.restore.width+20;
	var align_right = (this.placement.indexOf('right')!=-1);
	if(!align_right){
		this.min_width=style.icon_tray.restore.width+style.icon_tray.width+10+this.calculateWidth(hiddenItemStart);
	}
	var width=this.getCurrentWidth();
	var top =  (this.placement.indexOf('top')!=-1?-1:jGo.util.getInnerHeight()-style.height)+(p[5]?p[5]:0);
	var left = (this.placement.indexOf('left')!=-1?5:jGo.util.getSWidth()-(width+this.left_offset));
	
	//workarounds for browser idiosyncrasies 
    var ie_offset=0;
    try{
    	if (jGo.browser.browser == "Explorer") {
    		if((jGo.browser.version=='5' || jGo.browser.version=='6')){
        		this.IE6Mode=true;
        	}
            ie_offset = 1;
        }
        if (jGo.browser.browser == "Safari") {
            ie_offset = -1;
        }     
    }catch(e){}
	
    var inner_top=0;
    var inner_left=(this.IE6Mode?left:0);
    //end dim
    
    var tbd = 'display:' + (this.minimized?'none':'block') + ';';
    var tbdo = 'display:' + (this.minimized?'block':'none') + ';';
	
	var content="<div class='"+prefix+"toolbar' id='"+prefix+"toolbar_inner' style='position: absolute; display: block; " +
					"top: "+inner_top+"px;" +
					"left: "+inner_left+"px;" +
					"width:"+width+"px;height:"+style.height+"px;z-index: " + (z_b + 104) + ";"+style.css+"'>";
				
	//Add all toolbar items
	var hidden_marker=(align_right?0:1);
	for(var i = 0;i<this.items.length;i++){
		var _width=this.calculateWidth(this.items[i]);
		if(this.minimized&&hidden_marker&&align_right){
			_width=_width-(this.width-this.min_width);
		}
		if(i!=0){
			content+="<img class='"+(!hidden_marker?prefix+"toolbar_divider":prefix+"toolbar_divider2")+"' src='" + jGo.config.path + "/current_skin/trans.gif' style='position:absolute;"+(!hidden_marker?tbd:"display:block;")+"left:"+(_width-1)+"px;"+style.divider_css+"'>";
		}
		if(this.items[i]==hiddenItemStart&&!align_right){
			hidden_marker=0;
		}
		var container="<div class='"+(!hidden_marker?prefix+"toolbar_item":prefix+"toolbar_item2")+"' id='"+prefix+this.items[i]+"_toolbar_item' style='position:absolute;"+(!hidden_marker?tbd:"display:block;")+"top:0px;left:"+_width+"px'>";
		content+=container+this.context[this.items[i]].create();
		if(this.items[i]==hiddenItemStart){
			hidden_marker=(align_right?1:0);
		}
		content+="</div>";
	}			

	content+="<div id='"+prefix+"os_start' style='position: absolute;"+tbdo+"top: "+(style.icon_tray.hide_icon.top+ie_offset) + "px; left: "+(!align_right?this.min_width-style.icon_tray.minimize_icon.offset-70:7)+"px;z-index: " + (z_b + 102) + ";'>" +
			"<a class='"+prefix+"toggle_toolbar' style='"+style.icon_tray.hide_icon.css+"' href='JavaScript:void(0);'>"+(!align_right?this.minimized_text+"&raquo;&raquo;":"&laquo;&laquo;"+this.minimized_text)+"</a>" +
			"</div>" +
			"<div id='"+prefix+"os_min' style='position: absolute;"+tbd+"top: "+(style.icon_tray.minimize_icon.top+ie_offset) + "px; left: "+(this.width-style.icon_tray.minimize_icon.offset)+"px;z-index: " + (z_b + 102) + ";'>" +
			"<a class='"+prefix+"toggle_toolbar' style='"+style.icon_tray.minimize_icon.css+"' href='JavaScript:void(0);'>"+(!align_right?"&laquo;&laquo;":"&raquo;&raquo;")+"</a>" +
			"</div>" +
			"<div id='"+prefix+"xxx' style='position: absolute; display: block; top: "+(style.icon_tray.hide_icon.top+ie_offset) + "px; left: "+(width-style.icon_tray.hide_icon.offset)+"px;z-index: " + (z_b + 102) + ";'>" +
				"<a id='"+prefix+"close_toolbar' style='"+style.icon_tray.hide_icon.css+"' href='JavaScript:void(0);'>x</a>" +
			"</div>" +
			"</div>";

	
	
	this.frame=$(document.createElement('div')).addClass('jGo_app jGo_myapp default_toolbar').attr('id', prefix+'toolbar').css({'position':'fixed','z-index':jGo.config.max_z_index,'visibility':(this.isVisible?'visible':'hidden'),top:top+'px',left:left+'px'}).html(content);
	this.parent.append(this.frame);
	this.windowEventsHandler(this.track_window_events);
	$("a."+prefix+"toggle_toolbar").onEvent('click', this, 'toggle', '');
	$("#"+prefix+"close_toolbar").onEvent('click', this, 'hide', '');
	this.id=id;
};

proto.calculateWidth = function(item){
	var width=0;
	for(var i = 0;i<this.items.length;i++){
		if(this.items[i]==item)return width;
		width+=this.context[this.items[i]].style.menu_item.width;
	}
	return width;
};

proto.getCurrentWidth = function(){
	return (this.minimized?this.min_width:this.width);
};


//toggle the toolbar between minimized and maximized width
proto.toggle = function(){
	var minimized=this.minimized=(this.minimized?false:true);
	var width=this.getCurrentWidth();
	var width_dif = this.width - this.min_width;
	var prefix = this.app_prefix;
	var _n = 'none';
	var _b = 'block';
	$("div."+prefix+"toolbar_item,img."+prefix+"toolbar_divider,#"+prefix+"os_min").css({"display":(!minimized?_b:_n)});
	if(this.placement.indexOf('right')!=-1){
		$("div."+prefix+"toolbar_item2,img."+prefix+"toolbar_divider2").each(function(){
			$(this).css({"left":jGo.util.eN($(this).css("left"))+(!minimized?width_dif:-width_dif)+"px"})
		});
	}
	$("#"+prefix+"os_start").css({"display":(!minimized?_n:_b)});
	$("#"+prefix+"xxx").css({"left":(width-this.style.icon_tray.hide_icon.offset)+'px'});
	this.frame.css({"width":width+"px"});
	$("#"+prefix+"toolbar_inner").css({"width":width+"px"});
	this.close_dialogs();
	this.reposition();
};

proto.windowEventsHandler = function(track){ 
	var resizeTimer = null;
	var _t=this;
	var handler = function() {
	    clearTimeout(resizeTimer);
	    resizeTimer = setTimeout(function(){_t.reposition()}, 80);
	};
	if(track){
		$(window).resize(handler);
		if(this.IE6Mode){
			$(window).scroll(handler);
		}
	}else{
		$(window).unbind('scroll',handler);
		$(window).unbind('resize',handler);
	}
};

proto.reposition = function(){
	if(this.reposition_enabled){
		var elem = this.frame;
		this.close_dialogs();
		if(this.IE6Mode){
			this.frame.css("display","none");
			elem=$("#"+this.app_prefix+"toolbar_inner");
			if(this.placement.substr(0,1)=='b'){
				elem.css('top',($(document).scrollTop()+jGo.util.getInnerHeight()-this.style.height)+'px');
			}else{
				elem.css('top',$(document).scrollTop()+'px');
			}
		}else if(this.placement.substr(0,1)=='b'){
			elem.css('top',(jGo.util.getInnerHeight()-this.style.height)+'px');
		}
		if(this.placement.indexOf('right')!=-1){
			elem.css('left',(jGo.util.getSWidth()-(this.getCurrentWidth()+this.left_offset))+'px');
		}
		this.frame.css("display","block");
	}
};

proto.show = function() {
	this.frame.css("visibility","visible");
   	this.isVisible=true;
};
proto.hide = function() {
	this.close_dialogs();
    this.frame.css("visibility","hidden");
    this.isVisible=false;
};
proto.close = function() {
    this.frame.empty();
	this.frame.remove();
    return true;
};

//Dialog subclass//////////////////////////////////////////////////////////////////////////////////

/*
 *  toggle_dialog => standard way to toggle a toolbar dialog
 *  	dialog - the dialog box to toggle
 *  	position- callback function to set the position of the dialog relative to the toolbar
 *  	render- (optional) callback function to render the contents of the box on toggle on
 */
proto.toggle_dialog = function(dialog,position,render,fade){
	fade = fade|| this.dialbog_fade_interval;
	if(dialog.css("display")!="none"){
		$("div.jGo_dialog").fadeOut(fade)
	}else{
		//all dialogs should have class jGo_dialog
		this.close_dialogs();
		position();
		if(render){
			render();
		}
		dialog.fadeIn(fade)
	}
};

/*
 *  position_dialog => position a dialog along the toolbar
 *  	dialog - the dialog box to toggle
 *  	left- - the position of the dialog relative to the toolbar
 *  	width - width of the dialog
 *  	height - height of the dialog
 */
proto.position_dialog = function(dialog,left,width,height){
	var elem = (this.IE6Mode?"#"+this.app_prefix+"toolbar_inner":"#"+this.app_prefix+"toolbar");
	var pos = (this.IE6Mode?"absolute":"fixed");
	var basepos = Math.max(3,jGo.util.eN($(elem).css("left"))+left);
	var subtract = Math.min(0,this.getCurrentWidth()-left-(width+3));
	dialog.css({
		position:pos,
		top:(jGo.util.eN($(elem).css("top"))-(this.placement.substr(0,1)=='t'?-this.style.height-4:7+height))+'px',
		left:basepos+(basepos+subtract>3?subtract:0)+"px"});
};

/*
 *  close_dialogs => standard way to close dialogs
 *  	dialog - the dialog box to toggle
 *  all dialogs should have class jGo_dialog
 */
proto.close_dialogs = function(){
	$("div.jGo_dialog").css("display","none");
};

proto.destroy=function(){return false;}
})();

//Class Initialization
jGo.UI.registerWidgetClass(jGo.DefaultToolbar,'DefaultToolbar','complex.controls');
jGo.scripts.onLoad('jGo.DefaultToolbar.min.js');