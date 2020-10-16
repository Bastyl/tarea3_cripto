// ==UserScript==
// @name         3DES_CFB_mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://htmlpreview.github.io/?https://github.com/Bastyl/tarea3_cripto/blob/main/tarea3.html
// @grant        none
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.min.js

// ==/UserScript==

setTimeout(function(){
var key = 'abcdfabcdf132453';
var d = 'secret secret secret secret';

var param = CryptoJS.TripleDES.encrypt(d, key, {mode: CryptoJS.mode.CFB}).toString();
console.log(param);

var decrypt = CryptoJS.TripleDES.decrypt(param, key,{mode: CryptoJS.mode.CFB}).toString(CryptoJS.enc.Utf8);
console.log(decrypt);


    //Mismo codigo anterior pero con IV:
//var iv = "00000000";
//var param = CryptoJS.TripleDES.encrypt(d, t, {mode: CryptoJS.mode.CFB,iv: iv}).toString();
//console.log(param);
//console.log('decrypt',CryptoJS.TripleDES.decrypt(param, t,{mode: CryptoJS.mode.CFB,iv: iv2}).toString(CryptoJS.enc.Utf8));

}, 2000);