/*             ASSIGNMENT #02
     VARIABLES FOR STRINGS | JAVASCRIPT


1. Declare a variable called username.
2. Declare a variable called myName & assign to it a string
that represents your Full Name.
*/
var username="Your name please?";

var myName="SHEIKH SAMI AHMED"

alert(username + "\n " + myName)



/*
3. Write script to
a) Declare a JS variable, titled message.
b) Assign “Hello World” to variable message
c) Display the message in alert box.

*/
var message="welcome to javascript learning tuturial"
var a="Hello World"


alert(message + "\n " + a)


/*
4. Write a script to save student’s bio data in JS variables and
show the data in alert boxes.

*/

var name=" Sheikh Sami Ahmed"
 var age= "23 years old"
 var course="Certified Mobile Application Development(in future)"

 alert(name)
 alert(age)
 alert(course)


 /*
 5. Write a script to display the following alert using one JS
variable:


var m="PIZZA";
for(var n=5; n>=1 ;n-- ){
     for(var i=1; i<=n; i++ ){
          document.write(m[i])
     }
     document.write('<br/>') 
}
for(var i=5 i>=1 ; i--){
     document.write(m[i])
}
*/



var i, result, str
str="pizza"
for(var i=1; i<=str.length ;i++ ){
     result=str.substr(0,i)
     alert(result )
}


/*
6. Declare a variable called email and assign to it a string that
represents your Email Address(e.g. example@example.com).
Show the blow mentioned message in an alert box.(Hint: use
string concatenation)

*/
var email="sheikhsami1997@gmail.com"

alert("My email address is " + " " + email)



/*
8. Write a script to display this in browser through JS

*/

document.write("Yah I can write HTML content through JavaScript")


/*
9. Store following string in a variable and show in alert and
browser through JS

*/

var design="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"

alert(design)