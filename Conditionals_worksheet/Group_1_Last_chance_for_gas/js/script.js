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


var gasEfficiency = 28;
var gasGauge = .75;
var tankCapacity = 12;
var nextStation = 200;

var currentGas = gasGauge * tankCapacity;

if(currentGas * gasEfficiency > nextStation){
	console.log("Yes, you can make it without stopping for gas!");
}else{
	console.log("You only have " + currentGas + " gallons of gas in your tank, better get gas now while you can!");
}
