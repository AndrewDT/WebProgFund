//Andrew Tillett 10/22/13 Assignent Functions Function Industry
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
As a personal trainer, it is important for me to know a person's one rep max when lifting weight so I can fine tune their workout plan with different weight percentages. Calculate your one rep max based on the weight lifted in pounds for 4 - 6 reps and how much that percentage is of your one rep max.

Parameters:
User's weight
User's One Rep Max

Result:
"Your One Rep Max is Xlbs based on your current load of Xlbs for 4 - 6 reps. You are lifting at X% of your One Rep Max."
*/
var weightInPounds = prompt("Please enter the weight you are lifting for in pounds \n (We will convert this to Kilograms)");//Variable with a prompt to have the user input a weight load value in pounds
if(weightInPounds === "" || weightInPounds < 90){//Statement that is set in case an invalid user weight load is entered or weightInPounds is exactly equal to a blank field
	weightInPounds = prompt("A VALID WEIGHT IS NECESSARY TO CALCULATE YOUR ONE REP MAX");//Changes the prompt of weightInPounds if the statement is true
}

var calcOneRM = function(weightInPounds){//Anonymous function used to calculate the user's One Rep Max
	weightInKilos = weightInPounds/2.205;//Variable set to calculate and hold the value of the user's weight load and convert it to kilos
	calcOneRM = (weightInKilos * 1.1307) + 0.6998;//Variable set to calculate and hold the value of the user's One Rep Max
	return calcOneRM;//Returns the value of calcOneRM to the CALL
}

var oneRMResult = calcOneRM(weightInPounds);//Variable set to hold the value of the function calcOneRM, with arguements. The function's CALL

var calcPercentage = function(weightInPounds, oneRMResult){//Anonymous function used to calculate the percentage of a user's One Rep Max they are currently lifting at
	weightInKilos = weightInPounds/2.205;//Variable set to calculate and hold the value of the user's weight load and convert it to kilos
	calcPercentage = weightInKilos/oneRMResult*100;//Variable set to calculate and hold the value of the percentage of a user's One Rep Max they are currently lifting at
	return calcPercentage;//Returns the value of calcPercentage to the function's' CALL
}

var result = calcPercentage(weightInPounds, oneRMResult);//Variable set to hold the value of the function calcPercentage, with arguements. The function's CALL
console.log("Your One Rep Max is " + oneRMResult + "kgs based on your current load of " + weightInPounds + "lbs for 4 - 6 reps. You are lifting at " + result + "% of your One Rep Max.");//Prints to console the concatenation with each formula result and user inputted value


