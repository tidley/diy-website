"use strict";
exports.__esModule = true;
var ACLASS = '<a class=';
var HREF = ' href=';
var JSCLICK = " onclick='";
function makeMenu(options) {
    var navMenu = "<div id='menu'>  <div id='nav'>";
    var menuClass = "'active'";
    for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
        var option = options_1[_i];
        navMenu += ACLASS;
        navMenu += menuClass;
        navMenu += HREF;
        navMenu += "'" + option[0] + "'";
        // Add JS link if one exists
        if (option[2]) {
            navMenu += JSCLICK;
            navMenu += option[2] + "'";
        }
        navMenu += '>' + option[1] + '</a>';
        if (menuClass === "'active'") {
            menuClass = "'inactive'";
        }
    }
    navMenu += '</div>';
    // Add menu ham
    navMenu += addHam();
    return navMenu;
}
exports.makeMenu = makeMenu;
function addHam() {
    var ham = "<a id='ham' href='javascript:void(0);'>";
    ham += "<img src='/img/Hamburger_icon.svg' alt='menu' onclick='openMenu()'>";
    ham += '</a>';
    return ham;
}
