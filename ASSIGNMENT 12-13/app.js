

// IF...ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITION | JAVASCRIPT






// . Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).



ch = prompt("enter a character");
var index = 0;
var i = ch.charCodeAt(index);

if (i >= 65 && i <= 90) {
    alert("the given number is a Capital Letter " + ch)
}
else if (i >= 97 && i <= 122) {
    alert("the given number is a Small Letter " + ch)
}
else if (i >= 48 && i <= 57) {
    alert("the given number is a Integr Letter " + ch)
}





// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.





var a = +prompt("enter a first integers");
 var b =+ prompt("enter a second integers");


 if (a > b){
     document.write(a+ " is greater than " + b)

 }
 else if (a<b){
    document.write(a+ " is less than " + b)

 }

 else if (a===b){
    document.write(a+ " is equal to " + b)
    
 }





 document.write(" <br>")
document.write(" <br>")
document.write(" <br>")

//  3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


 var inp= +prompt(" Enter a  Intgers") 

 if ( inp >0){
     document.write(inp +"  it is a Positive value ")
 }
 else if(inp<0){

    document.write(inp +"  it is a negative value ")

 }
 else{
    document.write(inp +"  it is equal to zero")

 }



 document.write(" <br>")
 document.write(" <br>")
 document.write(" <br>")



//  4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise



var input= prompt(" Enter a  Character ") 
if (input=="A" || input =="a" || input =="E" || input =="e" || input =="I" || input =="i" || input =="O" || input =="o" || input =="U" || input =="u"){
    document.write("it is a Vovel")
}

else{
    document.write("it is not a vovel")

}


document.write(" <br>")
document.write(" <br>")
document.write(" <br>")


// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.



var confirmedPassword=12345;

var password= prompt("enter your password");


if (password==confirmedPassword){
    document.write("Correct password")
}
else if (password!=confirmedPassword){
    document.write("Incorrect  password")
}




document.write(" <br>")
document.write(" <br>")
document.write(" <br>")


// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }



var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}






// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statement


var time= +("Enter a time ")

if (time >= 0 && time < 1200){
    document.write("Good Morning!)

}
else if (time >= 1200 && time < 1700){
    document.write("Good AFTERNOON!")

    
}
else if (time >= 1700 && time < 2100){
    document.write("Good evening!")
    
    
}
else if (time >= 2100 && time < 2359){
    document.write("Good Night!")  
    
}







----------------------------------------------the end ----------------------------------------------------------