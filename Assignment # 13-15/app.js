
// assignment 13-15   Array



// 1. Declare an empty array using JS literal notation to store
// student names in future.


var student=[""];

// 2. Declare an empty array using JS object notation to store
// student names in future.


var students= new Array("");

// 3. Declare and initialize a strings array.

var food =["pizza", "burger"];

// 4. Declare and initialize a numbers array.

var numbr= [1,2,3];
// 5. Declare and initialize a boolean array.

var bol = [true, false]
// 6. Declare and initialize a mixed array.

var mix= ["string ", 1, true]
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var qualifications= ["SSC", "HSC","BSC", "BS" ,"B.COM", "MS", "M.phil" , "Phd"];

document.write("<h1r>" +  " Qualification " +  "</h1>" + " <br>");

for (var i=0 ; i<qualifications.length; i++){
    document.write(qualifications[i] + " <br>")
}



 document.write(" <br>")
document.write(" <br>")
document.write(" <br>")




// 8.
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

var stu=["Michael", "John", "Tony"]
var marks=[320,230,480]

var p1=(marks[0]/500)*100;
var p2=(marks[1]/500)*100;
var p3=(marks[2]/500)*100;

document.write(" Score of  " + stu[0] + " is " + marks[0] + ". Percentage : " + p1 + " % " + " <br>")
document.write(" Score of  " + stu[1] + " is " + marks[1] + ". Percentage : " + p2 +" % " +  " <br>")
document.write(" Score of  " + stu[2] + " is " + marks[2] + ". Percentage : " + p3 +  " % " + " <br>")







document.write(" <br>")
document.write(" <br>")
document.write(" <br>")


// 9. Initialize an array with color names. Display the array
// elements in your browser.

var color=["red", "blue", "green","pink","brown"]

document.write(color)



document.write(" <br>")
document.write(" <br>")
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.


color.unshift(prompt("enter a color name to add in the begining"));

document.write(color)

document.write(" <br>")
document.write(" <br>")

// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

color.push(prompt("enter a color name to add in the end"));

document.write(color)




document.write(" <br>")
document.write(" <br>")

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.


color.unshift("sky blue" , "dark blue ")
document.write(color)




document.write(" <br>")
document.write(" <br>")
// d. Delete the first color in the array. Display the updated
// array in your browser.

color.shift()
document.write(color)




document.write(" <br>")
document.write(" <br>")

// e. Delete the last color in the array. Display the updated
// array in your browser.



color.pop()
document.write(color)




document.write(" <br>")
document.write(" <br>")
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

var want= prompt("color name")

var ind=prompt("enter a index number")


color[ind]= want
document.write(color)




document.write(" <br>")
document.write(" <br>")


// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Page 2 of 6Arrays | JAVASCRIPT
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.




var index=prompt("enter a index number you delete ")


color.pop(index)
document.write(color)




document.write(" <br>")
document.write(" <br>")



// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


var score=[320,230,480,120]

document.write("Score of Student : " + score)
document.write(" <br>")

score.sort()


document.write("Ordered of Scores Of students: " +score.sort());





// 11.
// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.


document.write(" <br>")
document.write(" <br>")


var city=["Karchi", "Lahore", "Islamabad" + "Quetta", "Peshawar"]

document.write("Cities List :")
document.write(" <br>")
document.write(city)

var select=city.splice(2,1,)

document.write(" <br>")
document.write("Selected Cities List :")
document.write(" <br>")
document.write(select)





document.write(" <br>")
document.write(" <br>")
// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


var array1=["This", "is", "my", "cat"]
document.write("ARRAY :")
document.write(" <br>")
document.write(array1);


document.write(" <br>")

document.write("String :")
document.write(" <br>")
document.write(array1.join(" "))






document.write(" <br>")
document.write(" <br>")
// 13.
// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)




var device= ["keyboard", "mouse", "printer", "monitor"]
document.write("Devices :")
document.write(" <br>")
document.write(device)
document.write(" <br>")

for (var i=0; i<device.length;i++){
    document.write("Out:" + "</br> " +  device[i] + "</br>")
}






document.write(" <br>")
document.write(" <br>")

// 14.
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)


var device= ["keyboard", "mouse", "printer", "monitor"]
document.write("Devices :")
document.write(" <br>")
document.write(device)
document.write(" <br>")
for (var i=0; i<device.length;i++){

    
    document.write("Out:" + "</br> " + device.reverse()[i] + "</br>")

}



// 15.
// Write a program to store phone manufacturers (Apple,
// Samsung, Motorola, Nokia, Sony & Haier) in an array.
// Display the following dropdown/select menu in your
// browser using document.write() method:




var app = Application.currentApplication()
app.includeStandardAdditions = true
 
var choices = ["Samsung", "Motorola", "Nokia", "Sony", " haier"]
var favoriteMobile = app.chooseFromList(choices, {
    withPrompt: "Select your favorite mobile:",
    defaultItems: ["Samsung"]
})
document.write(favoriteMobile)



// Result: ["Apple"]







// // ----------------------------------------------the end ----------------------------------------------------------
