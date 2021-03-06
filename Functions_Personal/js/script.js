//Andrew Tillett 10/22/13 Assignment Functions: Function Personal

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
When working, there are always a number of deadlines to meet. Calculate to see if you can meet your work's deadline based on work load, time spent working per day, and days left until deadline.

Parameters:
Workload
Time spent working
Days left until deadline

Result:
"If you spend X hours a day working on your X hour project, you can meet your deadline of X days with X hours to spare!" or "Sorry, looks like you will only work X hours total by spending X hours per day for X days on your X hour project. Better re-evaluate!"
*/

var workLoad = prompt("Please enter the total hours of your workload.");//Variable set to prompt the user to input the total hours of their project's workload
if(workLoad === ""){//Statement set to happen if workLoad is exactly equal to an empty field
	workLoad = prompt("PROJECT LENGTH ESTIMATE IS NEEDED");//Changes the prompt value of workLoad if the statement is true
}
var timeSpentWorking = prompt("Please enter how many hours you plan to work per day.");//Variable set to prompt the user to input the amount of hours they plan to work per day on the project
if(timeSpentWorking === "" || timeSpentWorking > 24){//Statement set to happen if timeSpentWorking is exactly equal to an empty field or if timeSpentWorking is greater than 24 hours
	timeSpentWorking = prompt("PLEASE ENTER A VALID NUMBER OF HOURS YOU PLAN TO WORK PER DAY ON THE PROJECT");//Changes the prompt value of timeSpendWorking if the statement is true
}
var daysLeft = prompt("Please enter how many days you have left to work on the project.");//Variable set to prompt the user to input how many days are left until the project deadline
if(daysLeft === ""){//Statement set to happen if daysLeft is exactly equal to an empty field
	daysLeft = prompt("DAYS LEFT UNTIL DEADLINE ARE NECESSARY");//Changes the prompt of daysLeft is the statement is true
}
var result = calcHours(workLoad, timeSpentWorking, daysLeft);//Variable set to hold the result of the functions calculations and provide the arguements to the function. The function's CALL
if( result <= 0){//Statement set to happen if the result is greater than or equal to 0
	result = result*(-1);//Changes the value of result from a negative number to a positive one if the statement is true
	console.log("If you spend " + timeSpentWorking + " hours a day working on your " + workLoad + " hour project, you can meet your deadline of " + daysLeft + " days with " + result + " hours to spare!" );//Prints to console the stated concatenation if the statement is true
}else if(result > 0){//Statement that happens if result is greater than 0
	console.log("Sorry, looks like you'll be " + result + " hours short of meeting the deadline if you work " + timeSpentWorking + " hours per day for " + daysLeft + " days on your " + workLoad + " hour project. Better re-evaluate!");//Prints to console the stated concatenation if the statement is true
}


function calcHours(workLoad, timeSpentWorking, daysLeft){//Function with 3 parameters that calculates if the user can meet the deadline given the inputted user information
	var calcHours = workLoad - (timeSpentWorking*daysLeft);//Variable set to calculate and hold the formula and result to determine whether the user can meet their deadline
	return calcHours;//Returns the resulting value of calcHours to the function's CALL
}

