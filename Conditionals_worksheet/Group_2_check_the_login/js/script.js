// Andrew Tillett 10/13/13 Conditionals Worksheet Groupt 2 Check the Login Problem

/*Criteria:
For each solution you will need the following:
Label the section of code appropriately
Write the givens as variables
The result should be calculated using variables, not literal values when possible.
Create code that will make decisions based on the value of the givens
Print the result of the decision-making to the console.
Use only code and techniques learned in this class.

Problem: Check the Login
Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear.
Given:
Username entered by user
Password entered by user
Correct username
Correct password
Result To Print Out:
“Welcome, (place their username here)!”  - if the username and password is correct
“User not found. Try again.” -if the username does not match
“Password does not match our records.”  -if the username matches but the password does not
*/

var enteredUsername = "Andrew";// Variable for assigning the username information the user enters
var enteredPassword = "Password";// Variable for assigning the password information the user enters
var correctUsername = "Andrew";// Variable for the assigned correct username in the system
var correctPassword = "Password";// Variable for the assigned correct password in the system

//If enteredUsername is strictly equal to correctUsername AND enterpassword is strictly equal to correctPassword, print to console "Welcome, (correctUsername!)"
//Else if enteredUsername is NOT equal to correctUsername, print to console "User not found. Try again"
//Else print to console "Password does not match our records"
if(enteredUsername === correctUsername && enteredPassword === correctPassword){
 	console.log("Welcome, " + correctUsername + "!");// Printing to console the given string if the above statement is TRUE
 }else if(enteredUsername != correctUsername){
 	console.log("User not found. Try again.");// Printing to the console the given string if the preceding statement is FALSE and the else if is TRUE
 }else{
 	console.log("Password does not match our records.");// Printing to the console the given string if the preceding statements are both FALSE
 }