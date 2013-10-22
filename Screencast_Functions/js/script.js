//Introduction to Functions
/*
Sequential - Expressions
Conditional - If statements, ternaries
Reusable - Functions
Repetitive - Loops

Why do we need them?
DRY: Don't Repeat Yourself!
They allow us to have code that is written once, but able to be used again and again by the machine

Functions store stuff
Variable - Store values
Functions - Store lines of code

Ways to think about functions
-Like modular factories
-Stuff can go in, stuff can come out
-References to another recipe you might use many times
-Instead of priting the same recipe in many pages of a recipe book, why not put a reference to the recipe. (Ex: Check out the frosting recipe on page 250)

In games:
-Functions allow you to have the code in one place and run that code as many times as you want
-Code for shooting: Used again and again
*/



//Types of functions
/*
Functions - a.k.a. "Normal Function"
Procedures
Anonymous Functions
*/

//Basic Function Structure
/*
function functionName(){
	//code the function runs
}

//PARENTHESIS are for PARAMETERS
//Functions have NAMES so we can refer to them later

function (outptMsg){
	console.log("Hello World");
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}
*/


//Function Invocation - Telling the function to run
/*
function (outptMsg){
	console.log("Hello World");
}

function calcArea(){
	var width = 20;
	var height = 30;
	var area = width * height;
	console.log(area);
}

//FUNCTIONS must be CALLED/INVOKED

calcArea();//Invoking the function
calcArea();
calcArea();
//This prints it three times because the code is repeatable thanks to the functions.
*/


//Variable Scope - Inside and Outside Functions
/*

var width = 5;//Not being calculated/ Scoped to rest of code

function calcArea(){
	var width = 20;//Scoped to calcArea
	var height = 30;
	var area = width * height;
	console.log(area);
}
console.log(width)//Prefers to use the variable outside the function because the variable outside is scoped to it
calcArea();//Prefers to calculate the variable within the code block rather than the repeated variable
*/

//Arguements and Parameters - Getting stuff into a function

/*
//Parameters allow us to store different basic material as we need them
//Not all functions have to have arguements or parameters

funcName(arguement1, arguement2);//function CALL

//Function DEFINITION
function funcName(parameter1, parameter2){
	//code the function runs
}
//30 and 20 are the arguements, getting stored in the parameters
calcArea(30, 20);
//storage containers - w, h
function calcArea(w, h){ //w-30, h-20
	var area = w * h;
	console.log(area);
}

function dogYears(age){
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.");
}
var age1 = 4;
dogYears(age1);
dogYears(5);
//Parenthesis in a function call, but in the definition it holds parameters
//Arguements are always in the function call
//Parameters are always in the function definition
*/

//Returning Values - Getting values back from a function

/*
var total = calcArea(30, 20);//Takes returned value

function calcArea(w, h);{
	var area = w * h;
	return area;//Value is being returned, but to the CALL
}
console.log(total);//Doesn't recognize area outside the function/ Changed from AREA to TOTAL

//Results being returned should be assigned a variable
*/


//Functions and Procedures
/*
-Functions return values
-Procedures don't
A more specific type of function

//This is a function
function calcAreaF(width, height){
	var area = width * height;
	return area;
}

//This is the procedure
function calcAreaP(width * height){
	var area = width * height;
	console.log(area); //no return
}

Functions with no return values are procedures
*/


//Anonymous Functions - Masked heroes of the JavaScript world

/*
Anonymous Functions:
Also called CLOSURES
Are functions created as the code runs

var functionName = function(){
	//code the function runs
}//Function definition

functionName(); //Function call

function functionName(){
	// Structure we've been seeing
}

//Anonymous function structure
var functionName = function(){
	//code to run
}
//could only be called if assigned a variable name

functionName();


calcArea function anonymous format:

var calcArea = function(width, height){
	//code the function runs
	var area = width * height;
	return area;
}

var a = calcArea(20, 30);

console.log(a);

//Downside to anonymous functions is that they HAVE TO BE DECLARED BEFORE THEY ARE CALLED (DEFINED BEFORE INVOKED) Similar to variables for example.

//No matter where a named function is in the code, it is grabbed and okay

//Variable scope can be limited better if they are anonymous functions rather than normal ones
*/






