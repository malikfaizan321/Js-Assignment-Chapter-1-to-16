// CHAPTER 1

// 1. Write a script to greet your website visitor using JS alert box.

// alert("Hello there, Welcome to the website");

// ______________________________________________________________________________________

// 2. Write a script to display following message on your web page:

// alert("Error! Please enter a valid password");

// ______________________________________________________________________________________

// 3. Write a script to display following message on your web page: (Hint : Use line break)

// alert("Welcome to JS land...!\nHappy Coding");

// ______________________________________________________________________________________

// 4. Write a script to display following messages in sequence:

// alert("Welcome to JS Land...");
// alert("Happy Coding!");

// ______________________________________________________________________________________

// 5. Generate the following message through browser’s developer console:
//  Ans. We simply press F12 and in the console tab write the following code: alert("Hello... I can run JS through my web browser's console")';

// ______________________________________________________________________________________

// 6. Make use of alerts in your new/existing HTML & CSS project.

// ______________________________________________________________________________________

// 7. Practice placement of <script></script> element in
// following sections of your project in exercise 6:
// a. Head
// b. Body (before your page’s HTML)
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)

// Ans. Wrote in the index.html and commented it out.

// ______________________________________________________________________________________

// CHAPTER 2

// 1. Declare a variable called username.

var username;

// ______________________________________________________________________________________

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.

var myName = "Muhammad Tayyab Ferozi";

// ______________________________________________________________________________________

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message;
message = "Hello World";
// alert(message);

// ______________________________________________________________________________________

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.

var studentName = "John Doe";
var studentAge = "15 years old";
var studentCertification = "Certified Mobile Application Development";
// alert(studentName);
// alert(studentAge);
// alert(studentCertification);

// ______________________________________________________________________________________

// 5. Write a script to display the following alert using one JS variable:

var food = "PIZZA";
// alert(food + "\n" + food.slice(0, 4) + "\n" + food.slice(0, 3) + "\n" + food.slice(0, 2) + "\n" + food.slice(0, 1));

// ______________________________________________________________________________________

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "ferozitayyab@gmail.com";
// alert("My email address is: " + email);

// ______________________________________________________________________________________

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// ______________________________________________________________________________________

// 8. Write a script to display this in browser through JS

// document.write("Yeah! I can write HTML content through Javascript");

// ______________________________________________________________________________________

// 9. Store following string in a variable and show in alert and browser through JS\

var somestring = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(somestring);

// ______________________________________________________________________________________

// CHAPTER 3

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

var age = 16;

// alert("I am " + age + " years old");

// ______________________________________________________________________________________

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

if (!localStorage.getItem("visits")) {
    localStorage.setItem("visits", 0);
}
let visitsNumber = localStorage.getItem("visits");
visitsNumber++;
localStorage.setItem("visits", visitsNumber);

// alert("You have visited the site " + visitsNumber + " times");

// ______________________________________________________________________________________

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 2003;

// document.write("My birth year is " + birthYear + "<br>");
// document.write("Data type of my declared variable is " + typeof (birthYear));

// ______________________________________________________________________________________

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorsName = "John Doe";
var producTitle = "T-shirt";
var quantity = 5;
// document.write("<strong>" + visitorsName + "</strong> ordered <strong>" + quantity + " " + producTitle + "</strong>" + "(s) on XYZ Clothing Store");

// ______________________________________________________________________________________

// CHAPTER 4

// 1. Declare 3 variables in one statement.

var a = 5,
    b = 6,
    c = 7;

// ______________________________________________________________________________________

// 2. Declare 5 legal & 5 illegal variable names.

// Legal
var name = "Muhammad Tayyab Ferozi";
var age = 16;
var _continue = 5;
var $name = "Some name";
var age2 = 16.5;
// Illegal
// var 2name = "Muhammad Tayyab Ferozi";
// var continue = 13;
// var for = "hello world";
// var student's name = "Tayyab"
// var user input = "Some user input"

// ______________________________________________________________________________________

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case
// _________
// e) Variable names should not be JS _________

var letters = "letters";
var letter = "letter";
var numbers = "numbers";
var dollar = "$";
var underScore = "_";
var sensitive = "sensitive";
var keywords = "keywords";

// document.write("<h1>Rules for naming JS variables</h1><br><br><br>");
// document.write("Variable names can only contain " + letters + ", " + numbers + ", " + dollar + " and " + underScore + ". For example $my_1stVariable<br>");
// document.write("Variable must begin with a " + letter + ", " + dollar + " or " + underScore + ". For example $name, _name or name<br>");
// document.write("Variable names are case " + sensitive + "<br>");
// document.write("Variable names should not be JS " + keywords);

// ______________________________________________________________________________________

// CHAPTER 5

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

var x = 15,
    y = 4,
    z;
z = x + y;

// document.write("The sum of " + x + " and " + y + " is " + z + "<br>");

// ______________________________________________________________________________________

// 2. Repeat task1 for subtraction, multiplication, division & modulus.

z = x - y;

// document.write("The difference of " + x + " and " + y + " is " + z + "<br>");

z = x / y;

// document.write("The quotent of " + x + " and " + y + " is " + z + "<br>");

z = x * y;

// document.write("The product of " + x + " and " + y + " is " + z + "<br>");

z = x % y;
// document.write("The modulus of " + x + " and " + y + " is " + z + "<br>");

// ______________________________________________________________________________________

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var a;
// document.write("Value after variable declaration is: " + a + "<br>");
a = 10;
// document.write("Initial Value: " + a + "<br>");
a++;
// document.write("Value after increment is: " + a + "<br>");
a += 7;
// document.write("Value after addition is: " + a + "<br>");
a--;
// document.write("Value after decrement is: " + a + "<br>");
a %= 3;
// document.write("The remainder is: " + a + "<br>");

// ______________________________________________________________________________________

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

oneTicketPrice = 600;
fiveTicketPrice = oneTicketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is: " + fiveTicketPrice + "PKR<br>");

// ______________________________________________________________________________________

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var tableNumber = 3;

for (var i = 1; i < +10; i++) {
    // document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>");
}

// ______________________________________________________________________________________

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

var celciusTemp = 25;
var convertedCelciusTemp = celciusTemp * (9 / 5) + 32;
// document.write(celciusTemp + "°C is " + convertedCelciusTemp + "°F<br>");
var fahrenTemp = 70;
var convertedFahrenTemp = (fahrenTemp - 32) * (5 / 9);
// document.write(fahrenTemp + "°F is " + convertedFahrenTemp + "°C<br>");

// ______________________________________________________________________________________

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// var item1Price = 500;
// var item1Quanity = 3;
// var item2Price = 800;
// var item2Quantity = 5;
// var shippingCharges = 100;
// var totalPrice = (item1Price * item1Quanity) + (item2Price * item2Quantity) + shippingCharges;
// document.write("Price of item 1 is " + item1Price + "<br>");
// document.write("Quantity of item 1 is " + item1Quanity + "<br>");
// document.write("Price of item 2 is " + item2Price + "<br>");
// document.write("Quantity of item 2 is " + item2Quantity + "<br>");
// document.write("Shipping Charges " + shippingCharges + "<br><br>");
// document.write("Total Cost of your order is " + totalPrice);

// ______________________________________________________________________________________

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// var totalMarks = 510;
// var marksObtained = 444;
// var percentage = (marksObtained / totalMarks) * 100
// document.write("<h1>Marks Sheet</h1><br><br><br>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + marksObtained + "<br>");
// document.write("Percentage: " + percentage + "<br>");

// ______________________________________________________________________________________

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var usd = 10;
// var sr = 25;
// document.write("<h1>Currency in PKR</h1>");
// document.write("Total currency in PKR: " + ((usd * 104.80) + (sr * 28)));

// ______________________________________________________________________________________

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var number = 5;
// number = (((number + 5) * 10) / 2);
// document.write(number);

// ______________________________________________________________________________________

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.

// var currentYear = 2020;
// var birthYear = 2003;
// var firstPossibleAge = 2020 - 2003;
// var secondPossibleAge = 2020 - 2003 - 1;
// document.write("You are either " + firstPossibleAge + " or " + secondPossibleAge + " years old");

// ______________________________________________________________________________________

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// var radius = 20;
// var circumference = 2 * 3.142 * radius;
// document.write("The circumference is " + circumference + "<br>");
// var area = 3.142 * (radius ** 2);
// document.write("Area of a circle " + area + "<br>");

// ______________________________________________________________________________________

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

var favouriteSnack = "Motu Patlu Pops";
var currenctAge = 16;
var maxAge = 50;
var snackPerDay = 2;
var daysInOneMonth = 30;
var monthsInOneYear = 12;
var daysInOneYear = daysInOneMonth * monthsInOneYear;
var snacksInOneYear = daysInOneYear * snackPerDay;
var yearsLeft = maxAge - currenctAge;
var snackInLife = yearsLeft * snacksInOneYear;
// document.write("Favourite Snack: " + favouriteSnack + "<br>");
// document.write("Current Age: " + currenctAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of snacks per day: " + snackPerDay + "<br>");
// document.write("You will need " + snackInLife + " to last you until the ripe old age of " + maxAge);

// ______________________________________________________________________________________

// CHAPTER 6-9

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = 10;
// document.write("Result: <br>");
// document.write("The value of a is: ", a, "<br>");
// document.write(".......................................", "<br><br>")
// document.write("The value of ++a is: ", ++a, "<br>");
// document.write("Now the value of a is: ", a, "<br><br><br>");
// document.write("The value of a++ is: ", a++, "<br>");
// document.write("Now the value of a is: ", a, "<br><br><br>");
// document.write("The value of --a is: ", --a, "<br>");
// document.write("Now the value of a is: ", a, "<br><br><br>");
// document.write("The value of a-- is: ", a--, "<br>");
// document.write("Now the value of a is: ", a, "<br><br><br>");

// ______________________________________________________________________________________

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2, b = 1, result;
// document.write("a is: ", a, "<br>b is: ", b, "<br>");
// result = --a;
// document.write("Result after --a is: ", result, ", a is ", a, ", b is ", b, "<br>");
// result = result - --b;
// document.write("Result after --a - --b is: ", result, ", a is ", a, ", b is ", b, "<br>");
// result = result + ++b;
// document.write("Result after --a - --b + ++b is: ", result, ", a is ", a, ", b is ", b, "<br>");
// result = result + b--;
// document.write("Result after --a - --b + ++b + b-- is: ", result, ", a is ", a, ", b is ", b, "<br>");

// ______________________________________________________________________________________

// 3. Write a program that takes input a name from user & greet the user.

// var name = prompt("Please enter your name");
// alert("Hello " + name);

// ______________________________________________________________________________________

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var numberInput = +prompt("Enter a number:");
// if (isNaN(numberInput)) {
//   numberInput = 5;
// }
// for (var i = 1; i <= 10; i++) {
//   document.write(numberInput + " x " + i + " = " + numberInput * i + "<br>");
// }

// ______________________________________________________________________________________

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// var subject1 = prompt("Enter name of 1st subject:");
// var subject2 = prompt("Enter name of 2nd subject:");
// var subject3 = prompt("Enter name of 3rd subject:");
var totalMarks = 100;
// var marks1 = +prompt("Enter marks for the 1st subject:");
// var marks2 = +prompt("Enter marks for the 2nd subject:");
// var marks3 = +prompt("Enter marks for the 3rd subject:");

// var subjectHolders = document.querySelectorAll(".subject-holder");
// var obtainedMarksHolders = document.querySelectorAll(".obtmarks-holder");
// subjectHolders[0].innerHTML = subject1;
// subjectHolders[1].innerHTML = subject2;
// subjectHolders[2].innerHTML = subject3;
// obtainedMarksHolders[0].innerHTML = marks1;
// obtainedMarksHolders[1].innerHTML = marks2;
// obtainedMarksHolders[2].innerHTML = marks3;

// document.write("<table>"); //table
// document.write("<thead>"); // table head
// document.write("<tr>"); // 1st row
// document.write("<th>", "Subject");
// document.write("</th>");
// document.write("<th>", "Total Marks");
// document.write("</th>");
// document.write("<th>", "Obtained Marks");
// document.write("</th>");
// document.write("<th>", "Percentage");
// document.write("</th>");
// document.write("</tr>"); // 1st row closed
// document.write("</thead>"); // table head closed
// document.write("<tbody>"); // table body
// document.write("<tr>"); // 2nd row
// document.write("<td>", subject1);
// document.write("</td>");
// document.write("<td>", totalMarks);
// document.write("</td>");
// document.write("<td>", marks1);
// document.write("</td>")
// document.write("<td>", ((marks1 / totalMarks) * 100), "%");
// document.write("</td>")
// document.write("</tr>"); // 2nd row closed
// document.write("<tr>"); // 3rd row
// document.write("<td>", subject2);
// document.write("</td>");
// document.write("<td>", totalMarks);
// document.write("</td>");
// document.write("<td>", marks2);
// document.write("</td>");
// document.write("<td>", ((marks2 / totalMarks) * 100), "%");
// document.write("</td>")
// document.write("</tr>"); // 3rd row closed
// document.write("<tr>"); // 4th row
// document.write("<td>", subject3);
// document.write("</td>");
// document.write("<td>", totalMarks);
// document.write("</td>");
// document.write("<td>", marks3);
// document.write("</td>");
// document.write("<td>", ((marks3 / totalMarks) * 100), "%");
// document.write("</td>")
// document.write("</tr>"); // 4th row closed
// document.write("</tbody>"); // table body closed
// document.write("<tfoot>"); // table footer
// document.write("</tr>"); // 5th row
// document.write("<th>");
// document.write("</th>");
// document.write("<th>", totalMarks + totalMarks + totalMarks);
// document.write("</th>");
// document.write("<th>", marks1 + marks2 + marks3);
// document.write("</th>");
// document.write("<th>", ((marks1 + marks2 + marks3) / (totalMarks + totalMarks + totalMarks)) * 100, "%");
// document.write("</th>");
// document.write("</tr>"); // 5th row closed
// document.write("</tfoot>"); // table footer closed
// document.write("</table>"); //table closed

// console.log(marks1)
// console.log(marks2)
// console.log(marks3)

// CHAPTER 9-11

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// var cityInput = prompt("Enter Your city name:").toLowerCase();
// if (cityInput === "karachi") {
//   alert("Welcome to the city of lights");
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// ______________________________________________________________________________________

// var genderInput = prompt("Enter your gender:").toLowerCase();

// if (genderInput === "male") {
//   alert("Good Morning Sir");
// } else if (genderInput === "female") {
//   alert("Good Morning Ma'am");
// }

// ______________________________________________________________________________________

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// var colorInput = prompt("Enter the color of raod traffic signal:").toLowerCase();
// if (colorInput === "red") {
//   alert("Must Stop");
// } else if (colorInput === "yellow") {
//   alert("Ready to move");
// } else if (colorInput === "green") {
//   alert("Move now");
// }

// ______________________________________________________________________________________

// 4. Write a program to take input remaining fuel in car (in
//   litres) from user. If the current fuel is less than 0.25litres,
//   show the message “Please refill the fuel in your car”

// var fuelInput = +prompt("Enter fuel:");
// if (fuelInput < 0.25) {
//   alert("Please refill the fuel in your car");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//   alert("car is smaller than cat");
//   }

// ______________________________________________________________________________________

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// var a = 4;
// if (++a === 5) {
//   alert("given condition of variable a is true");
// }
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }
// var materialCost = 20000;
// var labourCost = 2000;
// var totalCost = materialCost + labourCost;
// if (totalCost === labourCost + materialCost) {
//   alert("The cost equals");
// }
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// ______________________________________________________________________________________

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// var marks1 = +prompt("Input marks of 1st subject");
// var totalSubjectMarks1 = +prompt("Input total marks of 1st subject");
// var marks2 = +prompt("Input marks of 2nd subject");
// var totalSubjectMarks2 = +prompt("Input total marks of 2nd subject");
// var marks3 = +prompt("Input marks of 3rd subject");
// var totalSubjectMarks3 = +prompt("Input total marks of 3rd subject");
// var totalObtainedMarks = marks1 + marks2 + marks3;
// var totalMarks = totalSubjectMarks1 + totalSubjectMarks2 + totalSubjectMarks3;
// var percentage = (totalObtainedMarks / totalMarks) * 100;
// var grade, remarks;
// if (percentage >= 80) {
//   grade = "A-one";
//   remarks = "Excellent";
// } else if (percentage >= 70) {
//   grade = "A";
//   remarks = "Good";
// } else if (percentage >= 60) {
//   grade = "B";
//   remarks = "You need to improve";
// } else if (percentage < 60) {
//   grade = "Fail";
//   remarks = "Sorry";
// }

// document.write("<h1>Marks Sheet</h1><br><br><br>");
// document.write("Total marks : ", totalMarks, "<br>");
// document.write("Marks Obtained : ", totalObtainedMarks, "<br>");
// document.write("Percentage : ", percentage, "<br>");
// document.write("Grade : ", grade, "<br>");
// document.write("Remarks : ", remarks, "<br>");

// ______________________________________________________________________________________

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var secretNumber = 5;
// var userInput = +prompt("Guess the secret number");

// if (userInput === secretNumber) {
//   alert("Bingo!")
// } else if (userInput === secretNumber + 1) {
//   alert("Close enough to the secret number");
// }

// ______________________________________________________________________________________

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// var userInput = +prompt("Enter a number");
// if ((userInput % 3) === 0) {
//   alert("The number is divisible by 3");
// }

// ______________________________________________________________________________________

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// var userInput = +prompt("Enter a number");
// if (userInput % 2 === 0) {
//   alert("The number is an even number");
// } else if (userInput % 2 !== 0) {
//   alert("The number is an odd number");
// }

// ______________________________________________________________________________________

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var userInput = +prompt("Enter the temperature:");
// if (userInput > 40) {
//   alert("It is too hot outside");
// } else if (userInput > 30) {
//   alert("The weather today is normal");
// } else if (userInput > 20) {
//   alert("Today's weather is cool");
// } else if (userInput > 10) {
//   alert("OMG! Today's weather is so cool")
// }

// ______________________________________________________________________________________

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var firstNumber = +prompt("Enter the first number:");
// var secondNumber = +prompt("Enter the second number:");
// var operation = prompt("Enter an operation i.e +, -, *, /, %");
var result;

// switch (operation) {
//   case "+":
//     result = firstNumber + secondNumber;
//     break;
//   case "-":
//     result = firstNumber - secondNumber;
//     break;
//   case "*":
//     result = firstNumber * secondNumber;
//     break;
//   case "/":
//     result = firstNumber / secondNumber;
//     break;
//   case "%":
//     result = firstNumber % secondNumber;
//     break;
// }

// alert(result);

// CHAPTER 12-13

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var userInput = prompt("Enter a letter/number");

// var transformedInput = +userInput;

// if (!isNaN(transformedInput)) {
//   alert("Your input is a number");
// } else if (isNaN(transformedInput)) {
//   var ASCIIcode = userInput.charCodeAt(0);
//   console.log(ASCIIcode);
//   if (ASCIIcode >= 65 && ASCIIcode <= 90) {
//     alert("Your input is a string and Uppercase");
//   } else if (ASCIIcode >= 97 && ASCIIcode <= 122) {
//     alert("Your input is a string and Lowercase");
//   }
// }

// ______________________________________________________________________________________

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// var number1 = +prompt("Enter the first number");
// var number2 = +prompt("Enter second number");
// if (number1 > number2) {
//   alert("First number i.e " + number1 + " is the larger one");
// } else if (number2 > number1) {
//   alert("Second number i.e " + number2 + " is the larger one");
// } else if (number1 === number2) {
//   alert("Both are equal");
// } else {
//   alert("Invalid input");
// }

// ______________________________________________________________________________________

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var userInput = +prompt("Enter a number");
// if (userInput > 0) {
//   alert("This is a positive number");
// } else if (userInput < 0) {
//   alert("The number is a negative number");
// } else if (userInput === 0) {
//   alert("The number is zero.")
// } else {
//   alert("Invalid input");
// }

// ______________________________________________________________________________________

// 4. Write a program that takes a character (i.e. string of
//   length 1) and returns true if it is a vowel, false otherwise

// var userInput = prompt("Enter an english alphabet")[0].toLowerCase();
// switch (userInput) {
//   case "a":
//   case "e":
//   case "i":
//   case "o":
//   case "u":
//     alert("The alphabet is a wovel");
//     break;
//   default:
//     alert("The alphabet is a consonent")
// }

// ______________________________________________________________________________________

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

// var correctPassword = "this is a secret password";
// var userInput = prompt("Enter a password").trim();
// if (userInput === "") {
//   alert("Please enter your password");
// } else if (userInput === correctPassword) {
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }

// ______________________________________________________________________________________

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// }
// else {
//   greeting = "Good evening";
// }

// ______________________________________________________________________________________

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// var userInput = +prompt("Enter the time in 24 hour format i.e 1200 for 12 am");
// if (userInput >= 0000 && userInput < 1200) {
//   alert("Good Morning!");
// } else if (userInput >= 1200 && userInput < 1700) {
//   alert("Good afternoon!");
// } else if (userInput >= 1700 && userInput < 2100) {
//   alert("Good Evening");
// } else if (userInput >= 2100 && userInput <= 2359) {
//   alert("Good night!");
// }

// ______________________________________________________________________________________

// CHAPTER 14-16

// 1. Declare an empty array using JS literal notation to store
// student names in future.

// var studentNames = [];

// ______________________________________________________________________________________

// 2. Declare an empty array using JS object notation to store
// student names in future.

// var studentNames2 = new Array();

// ______________________________________________________________________________________

// 3. Declare and initialize a strings array.

// var stringArray = ["Hello", "World"];

// ______________________________________________________________________________________

// 4. Declare and initialize a numbers array.

// var numArray = [2, 45, 52];

// ______________________________________________________________________________________

// 5. Declare and initialize a boolean array.

// var boolArray = [true, false, false, true];

// ______________________________________________________________________________________

// 6. Declare and initialize a mixed array.

// var mixedArray = ["Hi", 32, true, ["another", "world"]];

// ______________________________________________________________________________________

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phill", "PhD"];

// document.write("Qualifications: <br><br>")

// for (var i of qualifications) {
//   document.write(i, "<br>");
// }

// ______________________________________________________________________________________

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// var studentArray = ["Michael", "John", "Tony"];
// var scoreArray = [320, 230, 480];

// for (var i = 0; i < studentArray.length; i++) {
//   document.write("Score of ", studentArray[i], " is ", scoreArray[i], ". Percentage: ", (scoreArray[i] / 500) * 100, "%<br>");
// }

// ______________________________________________________________________________________

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// var colors = ["red", "green", "magenta", "yellow", "black"];
// document.write(colors, "<br>");
// var userInput = prompt("What color do you want to add to the beginning of the array?");
// colors.push(userInput);
// document.write(colors, "<br>");
// colors.unshift("blue", "cyan");
// document.write(colors, "<br>");
// colors.shift();
// document.write(colors, "<br>");
// colors.pop();
// document.write(colors, "<br>");
// var index = +prompt("At which index do you want to add an element?")
// userInput = prompt("What color do you want to add at index " + index + " of the array?");
// colors.splice(index, 0, userInput);
// document.write(colors, "<br>");
// index = +prompt("At which index do you want to delete an element of the array?");
// var deleteCount = +prompt("How many elements do you want to delete?");
// colors.splice(index, deleteCount);
// document.write(colors, "<br>");

// ______________________________________________________________________________________

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// var studentScores = [320, 230, 480, 120];
// document.write("Scores of students: ", studentScores, "<br>");
// document.write("Sorted scores of students: ", studentScores.sort())

// ______________________________________________________________________________________

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// var citiesArray = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("Cities list: ", citiesArray, "<br>");
// var selectedArray = citiesArray.slice(2, 4);
// document.write("Selected cities list: ", selectedArray);

// ______________________________________________________________________________________

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This ", " is", " my", " cat"];
// document.write("Array: <br>", arr, "<br>");
// document.write("String: <br>", arr.join(" "), "<br>");

// ______________________________________________________________________________________

// 13. Create a new array.Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO - First In First Out)

// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("Devices: <br>", devices, "<br><br>");
// document.write("Out: <br>", devices.shift(), "<br>");
// document.write("Out: <br>", devices.shift(), "<br>");
// document.write("Out: <br>", devices.shift(), "<br>");
// document.write("Out: <br>", devices.shift(), "<br>");

// ______________________________________________________________________________________

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In￾First Out)

// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");
// document.write("Devices: <br>", devices, "<br><br>");
// document.write("Out: <br>", devices.pop(), "<br>");
// document.write("Out: <br>", devices.pop(), "<br>");
// document.write("Out: <br>", devices.pop(), "<br>");
// document.write("Out: <br>", devices.pop(), "<br>");

// 15. Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method:

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// for (var i of manufacturers) {
//   document.write(i, "<br>")
// }

// ______________________________________________________________________________________