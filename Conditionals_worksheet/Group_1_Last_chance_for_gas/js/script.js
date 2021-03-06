// Andrew Tillett 10/13/13 Conditionals Worksheet Last Chance for Gas Problem

/*Criteria:
 For each solution you will need the following:
Label the section of code appropriately
Write the givens as variables
The result should be calculated using variables, not literal values when possible.
Create code that will make decisions based on the value of the givens
Print the result of the decision-making to the console.
Use only code and techniques learned in this class.

Problem:
A driver has to determine if they can make it across the desert with their current fuel.  They are about to past the last gas station for the next 200 miles and they need to determine whether they should stop now for gas or not.
    
Given:
Gas efficiency of the car (in mpg)
Gauge reading of the gas tank (in %)
Car’s gas tank capacity (in gallons)
Result To Print Out:
“Yes, you can make it without stopping for gas!” or “You only have X gallons of gas in your tank, better get gas now while you can!”
 */


var gasEfficiency = 28;// Variable for assigning the gas efficiency of the car
var gasGauge = .75;// Variable for assigning the read of the gas gauge of the car
var tankCapacity = 12;// Variable for assigning the car's tank capacity
var nextStation = 200;// Variable assigned the given 200 miles to the next station

var currentGas = gasGauge * tankCapacity;// Variable for use in the if and else statements used to hold the assigned formula results

//If currentGas TIMES gasEfficiency is greater than nextStation, print to the console "Yes, you can make it without stopping for gas!"
//Else print to the console "You only have currentGas gallons of gas in your tank, better get gas now while you can!"
if(currentGas * gasEfficiency > nextStation){
	console.log("Yes, you can make it without stopping for gas!");// Printing to the console the given string if the above statement is TRUE
}else{
	console.log("You only have " + currentGas + " gallons of gas in your tank, better get gas now while you can!");// Printing to the console if the preceding statement is FALSE
}
