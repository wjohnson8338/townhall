"use strict";
var $ = function(id) {
	return document.getElementById(id);
}
var printPage = function() {
    window.print(); 
}
window.onload = function() {
	$("printButton").onclick = printPage;
}

function correctYear() {
	var d = new Date();
	document.getElementById('currentYear').innerHTML = d.getFullYear();
}

window.onload = function() {
	correctYear();
}