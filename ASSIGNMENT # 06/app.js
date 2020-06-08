
//......................Assignment # 06...............

// chapter 6  to 9


//   1. Write a program to take a number in a variable, do the
//     required arithmetic to display the following result in your
//     browser:


var a=10;


document.write("Result : " + " <br>" + "The value of a is :  "+ a + " <br>" + "..............................................................")


document.write(" <br>")
document.write(" <br>")
document.write(" <br>")

document.write("The value of ++a i : " + (++a) + " <br>" + " Now the value of a is : 11")

document.write(" <br>")
document.write(" <br>")
document.write(" <br>")

document.write("The value of a++ i : " + (a++) + " <br>" + " Now the value of a is : 12")

document.write(" <br>")
document.write(" <br>")
document.write(" <br>")

document.write("The value of --a i : " + (--a) + " <br>" + " Now the value of a is : 11")

document.write(" <br>")
document.write(" <br>")
document.write(" <br>")

document.write("The value of a-- i : " + (a--) + " <br>" + " Now the value of a is : 10")


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;


document.write(" <br>")
document.write(" <br>")
document.write(" <br>")


var a=2;
var b=1;
var result = --a - --b + ++b + b--;
document.write(" a is " +  a +  " <br>" +  " b is " + b+ " <br>" + "result is " + result  )


// 3. Write a program that takes input a name from user &
// greet the user.

document.write(" <br>")
document.write(" <br>")
document.write(" <br>")


var name= prompt("Please enter your name" )
document.write("Salam " + name + " welcome" )



// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

document.write(" <br>")
document.write(" <br>")
document.write(" <br>")

var num= prompt("Please enter a number ")

for (var i=1; i<=10; i++){
    switch(num){
        case (num):
             document.write(num + "x" + i + " = " + (num*i) + " <br>" + " <br>")

        default: 
        document.write("5" + "x" + i + " = " + (5*i) )
        

    }
}



// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// Page 2 of 3ALERTS | JAVASCRIPT
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)


var sub1=prompt("Please enter a subject 1 name ")
var sub2=prompt("Please enter a subject 2 name ")
var sub3=prompt("Please enter a subject 3 name ")
var total_marks_per_sub=100;

var obt_marks_sub1=+prompt("enter a obtained marks")
var obt_marks_sub2=+prompt("enter a obtained marks")
var obt_marks_sub3=+prompt("enter a obtained marks")
var total_marks=100*3;

var total_obtain_marks= obt_marks_sub1 + obt_marks_sub2 + obt_marks_sub3;
var total_percentage=( total_obtain_marks/total_marks)*100



document.write('<body>'+'<table>' + '<tr>'+ '<th>'+ " Subject " +'</th>'+ '<th>'+ " Total Marks " +'</th>'+ '<th>' +"Obtained Marks  " +'</th>'+'<th>' +"Percentage" +'</th>'+  '</tr>' +
'<tr>'+ '<th>'+ sub1 +'</th>'+ '<th>'+total_marks_per_sub +'</th>'+ '<th>' + obt_marks_sub1+'</th>'+'<th>' +obt_marks_sub1 + "%" +'</th>'+  '</tr>'+ 
'<tr>'+ '<th>'+ sub2 +'</th>'+ '<th>'+ total_marks_per_sub+'</th>'+ '<th>' + obt_marks_sub2 +'</th>'+'<th>' + obt_marks_sub2 + "%"+'</th>'+  '</tr>' +
'<tr>'+ '<th>'+ sub3 +'</th>'+ '<th>'+ total_marks_per_sub +'</th>'+ '<th>'+obt_marks_sub3 +'</th>'+'<th>' + obt_marks_sub3 + "%" +'</th>'+  '</tr>' +
'<tr>'+ '<th>'+  +'</th>'+ '<th>'+ total_marks +'</th>'+ '<th>'+total_obtain_marks +'</th>'+'<th>' + total_percentage + "%" +'</th>'+  '</tr>' +
'</table >' + 
'<body>')


