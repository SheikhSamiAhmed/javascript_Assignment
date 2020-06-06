
//..................MATH EXPRESSIONS | JAVASCRIPT............

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1= +prompt("enter a num1","digit is ");
var num2= +prompt("enter a num2", "digit is ");
var a= num1 + num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + a + "<br>")

//2. Repeat task1 for subtraction, multiplication, division &
//modulus

var b= num1 - num2;
var c= num1 * num2;
var d= num1 / num2;
var e= num1 % num2;
document.write("sub of " + num1 + " and " + num2 + " is " + b + "<br>" )
document.write("mul of " + num1 + " and " + num2 + " is " + c + "<br>")
document.write("div of " + num1 + " and " + num2 + " is " + d + "<br>")
document.write("modulus of " + num1 + " and " + num2 + " is " + e)



//for space
document.write("<br>" + "<br>"+"<br>")


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var f;

// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("Value after variable declaration is :" + f)
document.write("<br>")
// c. Initialize the variable with some number.
f=5;

// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("Initial value: " + f)
document.write("<br>")

// e. Increment the variable.

++f;

// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("Value after increment is: " + f)
document.write("<br>")
// g. Add 7 to the variable.
f+=7;
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
document.write("Value after after addition: " + f)
document.write("<br>")
// i. Decrement the variable.
--f;

// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write("Value after after decrement: " + f)
document.write("<br>")
// k. Show the remainder after dividing the variable’s value
// by 3.
f%=3;

// l. Output : “The remainder is : 0”.
document.write("The remainder is: " + f)
document.write("<br>")


document.write("<br>")
document.write("<br>")
document.write("<br>")


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:


var ticket_price=600;
var person=5;

var total_cost= ticket_price* person;

document.write("Total cost to buy 5 tickets to a movie is " + total_cost + "PKR")

document.write("<br>")
document.write("<br>")
document.write("<br>")

//5. Write a script to display multiplication table of any
//number in your browser. E.g


var number= +prompt("Enter a number");
document.write("Table of  " + number + "<br>" + "<br>"+ "<br>")
for(var i=1; i<=20; i++){
 
    document.write( number + "X" + i + "=" + (number*i) + "<br>")
}

document.write("<br>")
document.write("<br>")
document.write("<br>")

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NN o C is NN o F”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NN o F is NN o C”.


var tem_Celcius=25;
var tem_Fahrenhei=70;

var cel=(tem_Fahrenhei - 32) *5/9 ;
var far= (tem_Celcius * 9/5) + 32;


document.write(tem_Celcius + " is " + far +"F")
document.write("<br>" + tem_Fahrenhei + " is " + cel + "C")