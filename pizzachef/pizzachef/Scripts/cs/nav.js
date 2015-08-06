include('js/bootstrap.js');
include('js/jquery.mobile.customized.min.js');
include('js/jquery.mobilemenu.js');
include('js/jquery.mobilemenu2.js');


//----Include-Function----
function include(url){ 
  document.write('<script type="text/javascript" src="'+ url +'" ></script>'); 
}

$(document).ready(function(){ 
  $('#category ul').mobileMenu();
});
$(document).ready(function(){ 
  $('#header ul.nav').mobileMenu2();
});



!function ($) {

 }(window.jQuery);
if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});

$.include('js/superfish.js');
$(function(){
// IPad/IPhone
  var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
    ua = navigator.userAgent,
 
    gestureStart = function () {
        viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    },
 
    scaleFix = function () {
      if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
        viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
        document.addEventListener("gesturestart", gestureStart, false);
      }
    };
scaleFix();
// Menu Android
  var userag = navigator.userAgent.toLowerCase();
  var isAndroid = userag.indexOf("android") > -1; 
  if(isAndroid) {
    $('.sf-menu').responsiveMenu({autoArrows:true});
  }
});



    var m1 = 318; 
    var m2 = 71; 
    var menuID = "menu-top-fixed";
    
    var menuOpacityOnChange = "1";
    
    var menuOpacityOnChangeIE = menuOpacityOnChange * 100;
    
    function getScrollTop() {
               var scrOfY = 0;
               if( typeof( window.pageYOffset ) == "number" ) {
                       //Netscape compliant
                       scrOfY = window.pageYOffset;
               } else if( document.body
               && ( document.body.scrollLeft
               || document.body.scrollTop ) ) {
                       //DOM compliant
                       scrOfY = document.body.scrollTop;
               } else if( document.documentElement
               && ( document.documentElement.scrollLeft
                || document.documentElement.scrollTop ) ) {
                       //IE6 Strict
                       scrOfY = document.documentElement.scrollTop;
               }
               return scrOfY;
    }
    
    function marginMenuTop() {
                var top  = getScrollTop();
                var s    = document.getElementById(menuID);
     
                if(typeof s != "undefined" && s){
     
                  if (top+m2 < m1) {
                      s.style.top       = (m1-top) + "px";
                      s.style.filter    = s.style.filter.replace("progid:DXImageTransform.Microsoft.Alpha(opacity="+menuOpacityOnChangeIE+")","");
                      s.style.opacity   = "1";
     
                  } else {
                      s.style.top       = m2 + "px";
                      s.style.opacity   = menuOpacityOnChange;
                      s.style.filter    = s.style.filter.replace("progid:DXImageTransform.Microsoft.Alpha(opacity="+menuOpacityOnChangeIE+")","");
                      s.style.filter    += "progid:DXImageTransform.Microsoft.Alpha(opacity="+menuOpacityOnChangeIE+")";
     
                  }
                }
    }
    
    function setMenuPosition(){
    if(typeof window.addEventListener != "undefined"){
        window.addEventListener("scroll", marginMenuTop, false);
    } else if(typeof window.attachEvent != "undefined"){
        window. attachEvent("onscroll", marginMenuTop);
    }
    }
    
    if(typeof window.addEventListener != "undefined"){
        window.addEventListener("load", setMenuPosition, false);
     
    } else if(typeof window.attachEvent != "undefined"){
        window. attachEvent("onload", setMenuPosition);
    }

