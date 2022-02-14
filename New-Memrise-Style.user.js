// ==UserScript==
// @name        New-Memrise-Style
// @namespace   
// @description New-Memrise-Style
// @includes    *
// @excludes    
// ==/UserScript==

var html = document.getElementsByTagName('head');
var css = document.createElement("link");
css
　.setAttribute("rel","stylesheet");
　.setAttribute("type”,”text/css");
　.setAttribute("href","https://www.topi.cf/Memrise-style/main.css");

html.appendChild(css);