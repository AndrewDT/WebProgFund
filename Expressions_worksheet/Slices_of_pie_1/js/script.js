// Andrew Tillett 10/9/13 Expressions_worksheet Slices of Pie Problem part 1


//Calulate how much pizza each partygoer will get at the party

var slicesPerPizza = 4.56;// Setting up the variable for how many slices there are for each pizza
var peopleAtTheParty = 12;// Setting up the variable for how many people are at the party
var pizzasOrdered = 7;// Setting up the variable for how many pizzas were ordered
var totalNumberOfSlices = pizzasOrdered * slicesPerPizza;// Setting up the variable with the expression that gives the total number of slices of pizza based on the total number of pizzas ordered
var result = "Each person ate " + totalNumberOfSlices / peopleAtTheParty + " slices of pizza at the party";// Setting up the variable with an expression and strings to give the total number of slices each partygoer will get based on the number of people and total number of pizza slices
console.log(result);// Printing the result variable to the console