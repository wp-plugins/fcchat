/*
*DefaultMenu Class
*/
(function() {

var $ = jGo.$;

jGo.DefaultMenu = function() {
    jGo.Window.apply(this, arguments);
    this.type = 'DefaultMenu';

    this.eventsEnabled = true;
    this.isOpen = false;
    this.noHide=false;

    this.parent;
    this.target;
    this.frame;

    this.style;
    
    this.getDefault = function() {
        return jGo.DefaultMenu.prototype;
    };

    this.err = function() {
        alert("Method not found.");
    };
};

jGo.DefaultMenu.prototype = new jGo.Menu();

var TMp = jGo.DefaultMenu.prototype;

//Create it
TMp.create = function(id, p){
	var s = this.style = $.extend({},p[0]);
	//var left = s.left || (p[3].offset().left+p[3].width()+s.offsetLeft-(p[4][0]===document.body?'0':jGo.util.eN(p[4].offset().left)));
	//var top = s.top || (p[3].offset().top+s.offsetTop-(p[4][0]===document.body?'0':jGo.util.eN(p[4].offset().top)));
	this.target=p[3];
    this.parent=p[4];
	//var forecolor = (s.opacity!=1)?s.color:'transparent';
	var outerClass = 'jGo_app jGo_myapp defaultmenu'+id;
	var content ="<div style='position:relative'>"+p[1]+"</div>";
	this.frame=$(document.createElement('div')).addClass(outerClass).attr('id', 'jGo_defaultmenuF' + id).css({position:'absolute',display:'none','z-index':(jGo.config.z_index_base+101)}).css(s.css).html(content);
	this.parent.append(this.frame);
	this.target.eventHandler('mousedown', this, 'onMouseDown', '');
	this.frame.eventHandler('mousedown', this, 'onMouseDown', '');
	this.id=id;
};

//Event handlers
TMp.onMouseDown = function(e){
	this.noHide=true;
};

TMp.mouseOff = function(e){
	var root = (document.body.scrollHeight>=document.documentElement.scrollHeight)?document.body:document.documentElement;
	var scroll = (root.scrollLeft)?root.scrollLeft:0;
	if((scroll+root.clientWidth)>e.pageX||root.clientWidth==0){
		if(!this.noHide)this.hide();
		this.noHide=false;
	}
};

//Manipulation
TMp.position = function(target){
	var s = this.style.position,
 	t = this.target,
	p = this.parent,
	offset = 18,
	displayLeft = 0;
	var uPosX = (s.left || (t.offset().left+t.width() + s.offsetLeft-(p[0]===document.body?'0':jGo.util.eN(p.offset().left)))) - 9;
    var uPosY = (s.top || (t.offset().top+s.offsetTop-(p[0]===document.body?'0':jGo.util.eN(p.offset().top)))) - 9;

    var height = this.frame.height();
    var width = this.frame.width();
    
    var screen_left = jGo.util.getSWidth();
    var menu_left = width + uPosX + (p[0]===document.body?0:jGo.util.eN(p.offset().left));
    if (screen_left < menu_left && menu_left > width) {
        displayLeft = 1;
    }

    var screen_height = (jGo.browser.browser != 'Explorer'?$(window).scrollTop():0) + jGo.util.getSHeight();
    var menu_bottom = height + uPosY + (p[0]===document.body?0:jGo.util.eN(p.offset().top));
    if(screen_height < menu_bottom){
    	uPosY -= (menu_bottom - screen_height +10);
    };
 
    if (jGo.browser.browser != 'Explorer') {
        if (displayLeft == 0) {
            this.frame[0].style.left = uPosX + 'px';
        } else {
            this.frame[0].style.left = 'auto';
            this.frame[0].style.left = (uPosX + offset - width) + 'px';
        }
        this.frame[0].style.top = uPosY + 'px';
    } else {
        if (displayLeft == 0) {
            this.frame[0].style.pixelLeft = uPosX;
        } else {
            this.frame[0].style.pixelLeft = uPosX + offset - width;
        }
        this.frame[0].style.pixelTop = uPosY;
    }
};

TMp.show = function() {
   	jGo.UI.EventHandler('mousedown','defaultmenu'+this.id,jGo.UI,this,'mouseOff');
	this.position();
	this.frame.css("display","block");
   	this.isOpen=true;
	this.noHide=false;
};
TMp.hide = function() {
    jGo.UI.removeHandler('mousedown','defaultmenu'+this.id);
    this.frame.css("display","none");
    this.isOpen=false;
};
TMp.close = function() {
    this.frame.empty();
	this.frame.remove();
	this.target.removeEventHandler('mousedown');
    jGo.UI.removeHandler('mousedown','defaultmenu'+this.id);
	this.isOpen=false;
    return true;
};
TMp.destroy=function(){return false;}
})();

//Class Initialization
jGo.UI.registerWidgetClass(jGo.DefaultMenu,'DefaultMenu','complex.windows');
jGo.scripts.onLoad('jGo.DefaultMenu.js');