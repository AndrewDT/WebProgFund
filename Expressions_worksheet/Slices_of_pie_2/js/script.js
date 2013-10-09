// Andrew Tillett 10/9/13 Expressions_worksheet Slices of Pie Problem part II


//Calculate how many leftover whole slices of pizza Sparky will recieve

var slicesPerPizza = 4;// Setting up the variable for how many slices there are for each pizza
var peopleAtTheParty = 12;// Setting up the variable for how many people are at the party
var pizzasOrdered = 7;// Setting up the variable for how many pizzas were ordered
var totalNumberOfSlices = pizzasOrdered * slicesPerPizza;// Setting up the variable with the expression that gives the total number of slices of pizza based on the total number of pizzas ordered
var result = "Sparky got " + totalNumberOfSlices % peopleAtTheParty + " slices of pizza";// Setting up the variable with an expression and strings to give the total remaining number of leftover whole slices Sparky will get after each partygoer receives their amount of pizza
console.log(result);// Printing the result variable to the console