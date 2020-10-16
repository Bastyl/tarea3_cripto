// ==UserScript==
// @name         GetHTMLvalues
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://htmlpreview.github.io/?https://github.com/Bastyl/tarea3_cripto/blob/main/tarea3.html
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js
// ==/UserScript==

setTimeout(function(){

    var iv = document.getElementsByClassName('iv')[0].id;

    var encrypted = document.getElementsByClassName('3DES')[0].id;

    console.log(iv);
    console.log(encrypted);

}, 2000);