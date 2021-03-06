//Andrew Tillett 10/21/13 Functions Worksheet Stung Problem

/*Criteria:
For each solution you will need the following:
Comment each line of code appropriately. Comment, comment, comment!
Write the givens as variables, and pass the givens to the function using arguments.
The calcultions should be within the functions and the function should return the result to the result variable.
Create a variable for your result (don’t forget!)
Print the result using the result variable and the appropriate message outside the function. (Do not print from the functions you create)
There should be a minimum of 20 commits to your git repository.
This should all be done in a single project and single .as file.


Problem:Stung! stings*animal weight in pounds = stings needed

It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function
Given:
Victim’s weight (in pounds)     
Parameter(s) for function:
Victim’s weight (in pounds)
Return:
Number of Bee stings
Result to print to the console:
“It takes X bee stings to kill this animal.
*/

var deadlyStings = calcDeadlyStings(200);//CALLS the function and holds the returning value from the function
console.log("It takes " + deadlyStings + " bee stings to kill this animal.");//Prints the result of the circumference variable to the console

function calcDeadlyStings(victimWeight){//Sets up a function that acts when called out in the code and acts out the interior code and formula
	var stingsNeeded = 8.666666667;// Variable that holds a value needed for use in the later formula
	var deadlyStings = victimWeight*stingsNeeded;// Variable that holds a formula and the result of the formula
	return deadlyStings;//Returns the value of the variable to the function CALL
}
