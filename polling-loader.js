// ==UserScript==
// @name         Visa Polling
// @description  Automate polling of earlier appointments
// @version      0.1
// @author       You
// @match        https://ais.usvisa-info.com/en-il/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/shali3/polling-automation/main/polling.js';
    
    script.onload = function () {
        alert("test1");
    };
    script.src = something;

    document.head.appendChild(script); //or something of the likes
})();