function magWindow(){

		var page_width=0;
		var page_height=0;
    	var div_overlay;
		var obj_self;
		var div_content;
		var div_content_border;
		var div_main_block;
		var id;
		var active;
		var scrOfY;
		var scrOfX;
		var windowWidth;
		var windowHeight;
		var x;
		var y;

		function get_ww()
		{
			var frameWidth=800;
			if (window.innerWidth)
				frameWidth = window.innerWidth;
			else if (document.documentElement && document.documentElement.clientWidth)
				frameWidth = document.documentElement.clientWidth;
			else if (document.body)
				frameWidth = document.body.clientWidth;
			return frameWidth;
		}


		function get_wh()
		{
			var frameHeight=640;
			if (self.innerHeight)
				frameHeight = self.innerHeight;
			else if (document.documentElement && document.documentElement.clientHeight)
				frameHeight = document.documentElement.clientHeight;
			else if (document.body)
				frameHeight = document.body.clientHeight;
			return frameHeight;
		} 
		
    	this.calculate_size = function ()
    	{
			var ua = navigator.userAgent.toLowerCase();
			var isOpera = (ua.indexOf('opera')  > -1);
			var isIE = (!isOpera && ua.indexOf('msie') > -1);
			
			function getViewportHeight() {
				return ((document.compatMode || isIE) && !isOpera) ? (document.compatMode == 'CSS1Compat') ? document.documentElement.clientHeight : document.body.clientHeight : (document.parentWindow || document.defaultView).innerHeight;
			}
			function getViewportWidth() {
				return ((document.compatMode || isIE) && !isOpera) ? (document.compatMode == 'CSS1Compat') ? document.documentElement.clientWidth : document.body.clientWidth : (document.parentWindow || document.defaultView).innerWidth;
			}
			
			this.page_width = Math.max(document.compatMode != 'CSS1Compat' ? document.body.scrollWidth : document.documentElement.scrollWidth, getViewportWidth());
			this.page_height = Math.max(document.compatMode != 'CSS1Compat' ? document.body.scrollHeight : document.documentElement.scrollHeight, getViewportHeight());

			//alert(this.page_width);
			
			if (window.innerHeight)
			{
				this.windowWidth = window.innerWidth;
				this.windowHeight = window.innerHeight;
			} else if (document.documentElement && document.documentElement.clientHeight)
			{
				this.windowWidth = document.documentElement.clientWidth;
				this.windowHeight = document.documentElement.clientHeight;
			} else if (document.body)
			{
				this.windowWidth = document.body.clientWidth;
				this.windowHeight = document.body.clientHeight;
			}
			
			
			var scrOfX = 0, scrOfY = 0;
			if( typeof( window.pageYOffset ) == 'number' ) {
				//Netscape compliant
				scrOfY = window.pageYOffset;
				scrOfX = window.pageXOffset;
			} else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
				//DOM compliant
				scrOfY = document.body.scrollTop;
				scrOfX = document.body.scrollLeft;
			} else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
				//IE6 standards compliant mode
				scrOfY = document.documentElement.scrollTop;
				scrOfX = document.documentElement.scrollLeft;
			}
			this.scrOfY=scrOfY;
			this.scrOfX=scrOfX;
    	},



    	this.recalculate_sizes = function (rest)
		{
			var sx=get_ww();
			var sy=get_wh();
			if(rest==1)
			{
				this.div_overlay.style.height=sx+'px';
				this.div_overlay.style.width=sy+'px';
			}
			this.calculate_size();
			
			this.div_overlay.style.height=this.page_height+'px';
			this.div_overlay.style.width=this.page_width+'px';
			
			if(this.div_main_block)
			{
				var x=this.x;
				var y=this.y;
				var startx=parseInt((sx-x)/2,10)+this.scrOfX;
				var starty=parseInt((sy-y)/2,10)+this.scrOfY;
				
				this.div_main_block.style.left=startx+'px';
				this.div_main_block.style.top=starty+'px';
			}
			
		},


    	this.overlay=function (display, visibility)
		{
			this.recalculate_sizes();
			if(this.active=='0')
			{
				this.div_overlay.className="magic_window_overlay_show";
				//this.div_main_block.className="magic_window_main_block_show";
				this.active=1;
			}
			else
			{
				this.div_overlay.className="magic_window_overlay";
				//this.div_main_block.className="magic_window_main_block";
				this.active=0;
			}
		},


   		this.initialize= function ()
   		{
	    	this.active=0;
	    	this.calculate_size();
		    this.div_overlay = document.createElement('div');
		    this.div_overlay.setAttribute('id', 'mag_overlay');
			
			
			this.div_overlay.style.opacity=0.7;
			this.div_overlay.style.backgroundImage='url(/magic_window/black.png)';
			this.div_overlay.style.height=this.page_height+'px';
			
			this.div_overlay.className="magic_window_overlay";
			var body = document.getElementsByTagName('body')[0];
			body.appendChild( this.div_overlay );

			addEvent( this.div_overlay, 'click', function () { magicWindow.hide(); } , false);

		}

		this.show= function (id,x,y)
		{
			this.x=x;
			this.y=y;
			this.id=id;
			this.overlay();
			var sx=get_ww();
			var sy=get_wh();
			var startx=parseInt((sx-x)/2,10)+this.scrOfX;
			var starty=parseInt((sy-y)/2,10)+this.scrOfY;
			
			this.div_main_block = document.createElement('div');
			this.div_main_block.setAttribute('id', id+'_main_block');
			
			
			this.div_main_block.style.left=startx+'px';
			this.div_main_block.style.top=starty+'px';
			this.div_main_block.style.width=(x)+'px';
			this.div_main_block.style.height=(y+28)+'px';
			this.div_main_block.style.display='none';
			
			this.div_main_block.className="magic_window_main_block";
			
			var div_header = document.createElement('div');
			
			
			div_header.setAttribute('id', id+'_main_header');
			div_header.style.width=(x-10)+'px';
			
			div_header.className="magic_window_main_header";
			div_header.innerHTML='<a href="#" onclick="magicWindow.hide();return false;" style="float:right;"><img src="/magic_window/magic_close.gif" border=0></a>';
			
			
			this.div_content_border = document.createElement('div');
			
			this.div_content_border.style.width=x+'px';
			this.div_content_border.style.height=y+'px';
			
			this.div_content_border.className="magic_window_content";
			
			this.div_content = document.createElement('div');
			this.div_content.setAttribute('id', id);
			this.div_content.className="lightbox";
			
			this.div_content_border.appendChild( this.div_content  );
			
			this.div_main_block.appendChild( div_header );
			this.div_main_block.appendChild( this.div_content_border  );
			
			//this.div_overlay.appendChild( this.div_main_block );
			
			var body = document.getElementsByTagName('body')[0];
			body.appendChild( this.div_main_block );
			
			this.div_content.innerHTML="<center>Load</center>"
			
			
			
			this.div_content_border.onclick = function(e) {
					if(typeof e!='undefined')
					{
						e.cancelBubble = true;
						if(typeof e.stopPropagation!="undefined") e.stopPropagation();
					}
				};
			div_header.onclick = function(e) {
					if(typeof e!='undefined')
					{
						e.cancelBubble = true;
						if(typeof e.stopPropagation!="undefined") e.stopPropagation();
					}
				};
			
			FadeIn(id+'_main_block');
		}
		
		
		this.resizeY=function(y)
		{
			this.div_main_block.style.height=(y+28)+'px';
			
			this.div_content_border.style.height=y+'px';
		}

		this.hide= function ()
		{
			//alert(this.div_main_block);
			this.overlay();
			//var body = document.getElementsByTagName('body')[0];
			this.div_main_block.parentNode.removeChild(this.div_main_block);
		}

		this.initialize();
}


function FadeIn(id)
{
	var time=700;
	var elem=document.getElementById(id);
	var startOpacity = elem.style.opacity || 0;
	elem.style.opacity = startOpacity;
	
	if(elem.style.display = 'none') elem.style.display = '';
	
	(function go() {
		var t = parseFloat(elem.style.opacity) + parseFloat( 1 / ( time / 10 ) );
		elem.style.opacity = t;

		// for IE
		elem.style.filter = 'alpha(opacity=' + elem.style.opacity * 100 + ')';
		if( elem.style.opacity < 1 )
		{
			setTimeout( go, 10 );
		}
		else
		{
			
		}
	})();
	
}


function bindReady(handler){

	var called = false

	function ready() { // (1)
		if (called) return
		called = true
		handler()
	}

	if ( document.addEventListener ) { // (2)
		document.addEventListener( "DOMContentLoaded", function(){
			ready()
		}, false )
	} else if ( document.attachEvent ) {  // (3)

		// (3.1)
		if ( document.documentElement.doScroll && window == window.top ) {
			function tryScroll(){
				if (called) return
				if (!document.body) return
				try {
					document.documentElement.doScroll("left")
					ready()
				} catch(e) {
					setTimeout(tryScroll, 0)
				}
			}
			tryScroll()
		}

		// (3.2)
		document.attachEvent("onreadystatechange", function(){

			if ( document.readyState === "complete" ) {
				ready()
			}
		})
	}

	// (4)
    if (window.addEventListener)
        window.addEventListener('load', ready, false)
    else if (window.attachEvent)
        window.attachEvent('onload', ready)
    /*  else  // (4.1)
        window.onload=ready
	*/
}


var addEvent = function(elem, type, eventHandle) {
    if (elem == null || elem == undefined) return;
    if ( elem.addEventListener ) {
        elem.addEventListener( type, eventHandle, false );
    } else if ( elem.attachEvent ) {
        elem.attachEvent( "on" + type, eventHandle );
    } else {
        elem["on"+type]=eventHandle;
    }
};



var magicWindow;
bindReady ( function ()
{
	magicWindow = new magWindow();
	addEvent(window, 'resize', function () { magicWindow.recalculate_sizes(1); }, false);
}
);