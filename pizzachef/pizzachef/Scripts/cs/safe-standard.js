var pswUuEsid = "YdutNufnfOsF";
// safe-standard@gecko.js

var pswUuEiso;
try {
	pswUuEiso = (opener != null) && (typeof(opener.name) != "unknown") && (opener.pswUuEwid != null);
} catch(e) {
	pswUuEiso = false;
}
if (pswUuEiso) {
	window.pswUuEwid = opener.pswUuEwid + 1;
	pswUuEsid = pswUuEsid + "_" + window.pswUuEwid;
} else {
	window.pswUuEwid = 1;
}
function pswUuEn() {
	return (new Date()).getTime();
}
var pswUuEs = pswUuEn();
function pswUuEst(f, t) {
	if ((pswUuEn() - pswUuEs) < 7200000) {
		return setTimeout(f, t * 1000);
	} else {
		return null;
	}
}
var pswUuEol = false;
function pswUuEow() {
	if (pswUuEol || (1 == 1)) {
		var pswo = "menubar=0,location=0,scrollbars=auto,resizable=1,status=0,width=650,height=680";
		var pswn = "pscw_" + pswUuEn();
		var url = "http://messenger.providesupport.com/messenger/merabino.html?ps_l=" + escape(document.location) + "";
		window.open(url, pswn, pswo);
	} else if (1 == 2) {
		document.location = "http://";
	}
}
var pswUuEil;
var pswUuEit;
function pswUuEpi() {
	var il;
	if (3 == 2) {
		il = window.pageXOffset + 50;
	} else if (3 == 3) {
		il = (window.innerWidth * 50 / 100) + window.pageXOffset;
	} else {
		il = 50;
	}
	il -= (271 / 2);
	var it;
	if (3 == 2) {
		it = window.pageYOffset + 50;
	} else if (3 == 3) {
		it = (window.innerHeight * 50 / 100) + window.pageYOffset;
	} else {
		it = 50;
	}
	it -= (191 / 2);
	if ((il != pswUuEil) || (it != pswUuEit)) {
		pswUuEil = il;
		pswUuEit = it;
		var d = document.getElementById('ciwUuE');
		if (d != null) {
			d.style.left  = Math.round(pswUuEil) + "px";
			d.style.top  = Math.round(pswUuEit) + "px";
		}
	}
	setTimeout("pswUuEpi()", 100);
}
var pswUuElc = 0;
function pswUuEsi(t) {
	window.onscroll = pswUuEpi;
	window.onresize = pswUuEpi;
	pswUuEpi();
	pswUuElc = 0;
	var url = "http://messenger.providesupport.com/" + ((t == 2) ? "auto" : "chat") + "-invitation/merabino.html?ps_t=" + pswUuEn() + "";
	var d = document.getElementById('ciwUuE');
	if (d != null) {
		d.innerHTML = '<iframe allowtransparency="true" style="background:transparent;width:271;height:191" src="' + url + 
			'" onload="pswUuEld()" frameborder="no" width="271" height="191" scrolling="no"></iframe>';
	}
}
function pswUuEld() {
	if (pswUuElc == 1) {
		var d = document.getElementById('ciwUuE');
		if (d != null) {
			d.innerHTML = "";
		}
	}
	pswUuElc++;
}
if (false) {
	pswUuEsi(1);
}
var pswUuEd = document.getElementById('scwUuE');
if (pswUuEd != null) {
	if (pswUuEol || (1 == 1) || (1 == 2)) {
		var ctt = "";
		if (ctt != "") {
			tt = ' alt="' + ctt + '" title="' + ctt + '"';
		} else {
			tt = '';
		}
		if (false) {
			var p1 = '<table style="display:inline;border:0px;border-collapse:collapse;border-spacing:0;"><tr><td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="#" onclick="pswUuEow(); return false;"><img name="pswUuEimage" src="images/bg_off_line.jpg"  style="border:0;display:block;margin:auto"';
			var p2 = '<td style="padding:0px;text-align:center;border:0px;vertical-align:middle"><a href="http://www.providesupport.com/pb/merabino" target="_blank"><img src="http://image.providesupport.com/';
			var p3 = 'style="border:0;display:block;margin:auto"></a></td></tr></table>';
			if ((0 >= 140) || (0 >= 0)) {
				pswUuEd.innerHTML = p1+tt+'></a></td></tr><tr>'+p2+'lcbpsh.gif" width="140" height="17"'+p3;
			} else {
				pswUuEd.innerHTML = p1+tt+'></a></td>'+p2+'lcbpsv.gif" width="17" height="140"'+p3;
			}
		} else {
			pswUuEd.innerHTML = '<a href="#" onclick="pswUuEow(); return false;"><img name="pswUuEimage" src="images/bg_off_line.jpg"  border="0"'+tt+'></a>';
		}
	} else {
		pswUuEd.innerHTML = '';
	}
}
var pswUuEop = false;
function pswUuEco() {
	var w1 = pswUuEci.width - 1;
	pswUuEol = (w1 & 1) != 0;
	pswUuEsb(pswUuEol ? "images/bg_on_line.jpg" : "images/bg_off_line.jpg");
	pswUuEscf((w1 & 2) != 0);
	var h = pswUuEci.height;

	if (h == 1) {
		pswUuEop = false;

	// manual invitation
	} else if ((h == 2) && (!pswUuEop)) {
		pswUuEop = true;
		pswUuEsi(1);
		//alert("Chat invitation in standard code");
		
	// auto-invitation
	} else if ((h == 3) && (!pswUuEop)) {
		pswUuEop = true;
		pswUuEsi(2);
		//alert("Auto invitation in standard code");
	}
}
var pswUuEci = new Image();
pswUuEci.onload = pswUuEco;
var pswUuEpm = false;
var pswUuEcp = pswUuEpm ? 30 : 60;
var pswUuEct = null;
function pswUuEscf(p) {
	if (pswUuEpm != p) {
		pswUuEpm = p;
		pswUuEcp = pswUuEpm ? 30 : 60;
		if (pswUuEct != null) {
			clearTimeout(pswUuEct);
			pswUuEct = null;
		}
		pswUuEct = pswUuEst("pswUuErc()", pswUuEcp);
	}
}
function pswUuErc() {
	pswUuEct = pswUuEst("pswUuErc()", pswUuEcp);
	try {
		pswUuEci.src = "http://image.providesupport.com/cmd/merabino?" + "ps_t=" + pswUuEn() + "&ps_l=" + escape(document.location) + "&ps_r=" + escape(document.referrer) + "&ps_s=" + pswUuEsid + "" + "";
	} catch(e) {
	}
}
pswUuErc();
var pswUuEcb = "images/bg_off_line.jpg";
function pswUuEsb(b) {
	if (pswUuEcb != b) {
		var i = document.images['pswUuEimage'];
		if (i != null) {
			i.src = b;
		}
		pswUuEcb = b;
	}
}

