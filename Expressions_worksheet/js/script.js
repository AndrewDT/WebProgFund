//Examples:

/* Problem: Calculate the area of a rectangle given the width and height of the rectangle.
Givens:
The width of the rectangle
The height of the rectangle.
Result Variable:
The area of the rectangle.
Result to Print:
“The circumference of the circle is x”;
Example problem as it should appear in your code.
//Calculate the Circumference of a Circle
var radius = 6;
const PI = 3.14159265;
//multiply 2, PI and the radius & assign to circ variable.
var circ = radius * 2 * PI;
//print out the output circumference
console.log(“The circumference of the circle is “ + circ );
Problems:

Dog Years

Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”  Calculate how old Sparky the pit bull is in dog years based on his actual age.
     Givens:
Sparky’s age.
     Result Varable:
Sparky’s age in dog years.
    Result to Print:
“Sparky is X human years old which is X in dog years.



//Calculate Sparky the pit bull's age in dog years

var sparkyHumanYears = 4;// Setting up the variable for Sparky's age in human years
var sparkyDogYears = 7;// Setting up the variable for Sparky's age in dog years
var result = "Sparky is " + sparkyHumanYears + " human years old which is " + sparkyHumanYears * sparkyDogYears + " in dog years.";// Setting up the variable with an expression and strings for the result of Sparky's age in dog years based on how old his is in human years
console.log(result);// Printing the result variable to the console


End of Problem 1 */


/* Slice of Pie part 1

A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)
     Given:
Number of slices per pizza
Number of people at the party
Number of pizzas ordered.
     Result Variables:
Number of slices per person. (Can be a decimal or floating point).
    Result to Print:
“Each person ate X slices of pizza at the party.”


//Calulate how much pizza each partygoer will get at the party

var slicesPerPizza = 4.56;// Setting up the variable for how many slices there are for each pizza
var peopleAtTheParty = 12;// Setting up the variable for how many people are at the party
var pizzasOrdered = 7;// Setting up the variable for how many pizzas were ordered
var totalNumberOfSlices = pizzasOrdered * slicesPerPizza;// Setting up athevariable with the expression that gives the total number of slices of pizza based on the total number of pizzas ordered
var result = "Each person ate " + totalNumberOfSlices / peopleAtTheParty + " slices of pizza at the party";// Setting up the variable with an expression and strings to give the total number of slices each partygoer will get based on the number of people and total number of pizza slices
console.log(result);// Printing the result variable to the console

End of Problem 2 */


