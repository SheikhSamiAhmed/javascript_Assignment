
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




// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// Page 4 of 9MATH EXPRESSIONS | JAVASCRIPT
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.



document.write("<br>")
document.write("<br>")
document.write("<br>")

var item1=3;
var item2=2;
var price1=650;
var price2=100;
var extra=100;
var total=item1*price1 + item2*price2 +100;


document.write(" Price of item 1 is " +price1 + "<br>" + "quantity of item 1 is 3 " + "<br>" +" Price of item 2 is " + price2 + "<br>" + " Quantity of item 2 is 7 " + "<br>" + " Shipping charges " + extra +  "<br>" + "<br>" +"Total cost of your order is  " + total ) 




// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser


document.write("<br>")
document.write("<br>")
document.write("<br>")


var total_marks=980;
var obtained=804;

var percentage=(obtained/total_marks)*100;

document.write("Total marks: " + total_marks + "<br>" + " Marks obtained : " + obtained + "<br>"+ "Percentage :" + percentage + "%" )


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)


document.write("<br>")
document.write("<br>")
document.write("<br>")


var riyal=28;
var dollar=104.80;

var total_currency_in_pkr= 10*dollar + 25*riyal;

document.write("Total Currency in PKR : " + total_currency_in_pkr)



// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

document.write("<br>")
document.write("<br>")
document.write("<br>")

var v=5;
v=(v+5)*10/2
document.write(v)


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.



var year=2020;
var birth_year=1997;
var Age= 2020- 1997;

document.write(" Current year: " + year +"<br>" + "Birth year " + birth_year + "<br>" +"Your Age is : " +Age)


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142)


document.write("<br>")
document.write("<br>")
document.write("<br>")


var r=20;
var pi=3.142;
var C=2*pi*r
var A=pi*r**2;

document.write("<h1>" + "The Geometrizer" + "</h1>")
document.write("Radius of a circle : " +r + "<br>" + "The circumference is :" + C +"<br>" + " The area is : " +A)



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.


document.write("<br>")
document.write("<br>")
document.write("<br>")

var snack="Chocolate chip";
var c_age=15;
var m_age=65;
var snack_amount_day=3;
var total_snack_amount= (m_age - c_age)*3

document.write("<h1>" + "The Lifetime Supply Calculator" + "</h1>")

document.write("Favorite snack: "+ snack + "<br>"+"Current Age : " +c_age  + "<br>"+ "Maximum age : "+ m_age + "<br>" + " Amount of snacks per day" +snack_amount_day + "<br>" + " You will need "+ total_snack_amount + "to last you until the ripe old age of " + m_age)