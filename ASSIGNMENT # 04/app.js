//VARIABLE NAMES: Legal & Illegal | JAVASCRIPT

// 1. Declare 3 variables in one statement.

var a="hello" ; b="world"; c="javascript"

// 2. Declare 5 legal & 5 illegal variable names.
//Declare 5 legal

var number=5; 
var $for=6;
var _for=7;
var for1=8;
var _if=4;


//5 illegal variable names

//  var for=3;
//  var var=4;
//  var if=4;
//  var for=10;
//  var typeof=3;


// 3. Display this in your browser

// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________


var alph="letter";
var no="number";
var dollor="$";
var underscore="_";

var a="letter ";



document.write( "<h1>"+ "Rules for naming JS variables" + "</h1>" +"<br>" + "Variable names can only contain" + " " + alph +  " " + no + " "   + dollor +  " " + "and" + " " +  underscore + " " + "For example "+ "<b>" + "$my_1stVariable " + "<b>" + "</br>" + "Variable names can only contain " + alph + " " + dollor + " " + "or "+ underscore +  "<b>" + "$name, _name or name " + "<b>" +"<br>" + "Variable names are case sensitive"  +"<br>" + "Variable names should not be JS keywords")