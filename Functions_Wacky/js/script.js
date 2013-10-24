//Andrew Tillett 10/22/13 Assignment Functions Function Wacky

/*Criteria:

Make sure each of the sub-projects follows this list of criteria:
As in the earlier assignments you will need to create code that calculates a result. You may not use the same formulas or code used in previous assignments.
Decide what your code will calculate. This should be an original calculation. In other words you may not use any of the examples mentioned in this class. This will result in an automatic 0.
Information should be collected from the user with prompts
Calculate the result using the variables in an expression (NOT the literal values or numbers)
The result should appear in the browser's console. (Remember to include units like “square feet” or "meters cubed"). This should explain the result as well.
Use a function as part of your code in each sub-project. This function should have at least two parameters and return a value.
 
Each of the following requirements must exist in at least one of the 3 subprojects:
A ternary
An else if
An anonymous function
A normal "named" function
An expression with two arithmetic operators
A function with three parameters.
At least one logical operator

Problem:
Captain America uses his shield as a weapon. He can throw it very fast, it is said he can throw it at least 55m/s Calculate the velocity of Cap's shield to see if it meets that record.

Parameters:
Distance
Time
*/

var distance = prompt("Please enter the distance Captain America is throwing his shield (In meters)");//Variable that prompts the user to input distance in meters
if(distance === ""){//statement set to be true if distance is exactly equal to an empty field
	distance = prompt("DISTANCE IS NECESSARY TO CALCULATE THE SPEED OF CAP'S SHIELD");//Changes prompt value of distance variable if statement is true
}
var time = prompt("Please enter the time it takes the shield to travel the distance (In seconds)");//Variable that prompt the user to input time in seconds
if(time === ""){//Statement set to be true if time is exactly equal to an empty field
	time = prompt("TIME TRAVELED IS NECESSARY TO CALCULATE THE SPEED OF CAP'S SHIELD");//Changes prompt value of time variable if statement is true
}
var result = shieldVelocity(distance, time);
(result >= 55) ? console.log("If Cap's shield travels " + distance + " meters in " + time + " seconds, its velocity will be " + result + "m/s which is faster than his previous record of 55m/s!") :
console.log("Traveling at only " + result + "m/s, for " + distance + " meters, and " + time + " seconds, Cap's shield will not beat his previous record of 55m/s!");

function shieldVelocity(distance, time){
	var velocity = distance/time;
	return velocity;
}


