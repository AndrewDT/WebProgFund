// Andrew Tillett 10/15/10 Assignment Conditionals Conditionals Personal

/*Criteria:

Make sure each of the sub-projects follows this list of criteria:
As in the Expressions assignment you will need to create code that calculates a result. You can not use the same formulas or code used in that previous assignment, however.
Decide what your code will calculate. This should be an original calculation. In other words you may not use any of the examples mentioned in this class. This will result in an automatic 0.
Your calculation should use a minimum of two factors or givens.
At least two factors must be essential for the calculation. If one of the factors (the pieces of information you are collecting with the prompts) is not needed in order to calculate the result then it is not essential.
There should be a minimum of two prompts to collect user information. The prompts should include labels so the user knows what information they need to enter. These prompts should assign the information collected into variables you have set up.
Write the givens as appropriately named variables.
Declare a variable for the resulting value of the calculation.
Calculate the result using the variables in an expression (NOT the literal values or numbers)
Assign the calculation to the resulting variable.
The result should appear in the browser's console. (Remember to include units like “square feet” or "meters cubed"). This should explain the result as well.
Validation
In each of the sub-projects you must use conditionals to validate the information the user enters into the prompts.
For example, if the user does not enter a value for the first prompt, make a conditional that checks if the value is empty. You can do this by evaluating if the contents of the prompt are the same as an empty string (which looks like "" i.e. thats two quotations with no character between them)
Comment every line of code (describe what each line is doing in English). Do NOT just label sections of your code.
Each of the following requirements must exist in at least one of the 3 subprojects:
A ternary
An else if
A logical operator
At least one relational operator other than ==
Commiting to your repository:
You are required to make at least 20 commits to your repository for each project as you develop your code.
Failing to do so will result in a 0 for the assignment.

Problem:
When lifting, it is important to adjust weight according to the maximum number of repetitions you can do at that weight. If the weight allows you to do 3 or less perfect repetitions, the weight should be decreased by 10%, and if the weight allows you to do more than 20 repetitions, the weight should be increased by 20%.

Givens:
Current weight load
Number of repetitions

Result: "You are lifting xlbs for x reps, which means this weight is perfect!", "Sorry, you can only do x reps at xlbs, so the weight is too heavy for you right now!", or "You can do x reps at xlbs, that's lightweight for you! Looks like you need to go heavier!"
*/


var currentWeight = prompt("Please enter the current weight you are lifting (in lbs)");// Declaring a variable with a prompt to hold the user inputted weight information
//if currentWeight variable is strictly equal to "" (empty field) then run the declared statement
if(currentWeight === ""){
	currentWeight = prompt("NOTE: CURRENT WEIGHT MUST BE ENTERED FOR A CORRECT IDEAL WEIGHT DETERMINATION");// Statement that will happen if the currentWeight field is empty. It gives a capitalized message to remind the user to input a valid value.
}
var reps = prompt("Please enter the number of perfect repetitions you can perform at your current weight load");// Declaring a variable with a prompt to hold the user inputted repetition amount
//if reps variable is strictly equal to "" (empty field) then run the declared statement
if(reps === ""){
	reps = prompt("NOTE: REPETITIONS AMOUNT MUST BE ENTERED FOR A CORRECT IDEAL WEIGHT DETERMINATION");// Statement that will happen if the reps field is empty. It gives a capitalized message to remind the user to input a valid value.
}

tooLight = reps > 20;// Variable assigned a value that determines whether the weight meets the conditions of being too light for the user
tooHeavy = reps <= 3;// Variable assigned a value that determines whether the weight meets the conditions of being too heavy for the user
justRight = reps >= 4 && reps <= 20;// Variable assigned a value that determines whether the weight meets the conditions of being just right for the user


var heavyReduction = .10;// Variable assigned to hold the value by which a tooHeavy weight value must be reduced
var lightIncrease = .20;// Variable assigned to hold the value by which a tooLight value must be increased

var perfectWeight;// Variable established for use in the later statements

//A statement set to give perfectWeight a value and print to console the result if tooLight is true
if(tooLight){
	var perfectWeight = Number(currentWeight) + Number(currentWeight)*Number(lightIncrease);//Assigns the perfectWeight variable a value using a given expression if the tooLight statement is true
	console.log("You can do " + reps + " reps at " + currentWeight + "lbs, that's lightweight for you! Looks like you need to go heavier! Try " + perfectWeight+"lbs");//Prints the result to console if tooLight is true
}else if(justRight){//A statement set to give perfectWeight a value and print to console the result if justRight is true
	var perfectWeight = currentWeight;//Assigns the perfectWeight variable a value using a given variable if the justRight statement is true
	console.log("You are lifting " + perfectWeight + "lbs for " + reps + " reps, which means this weight is just right!");//Prints the result to console if justRight is true
}else if(tooHeavy){//A statement set to give perfectWeight a value and print to console the result if tooHeavy is true
		var perfectWeight = Number(currentWeight) - Number(currentWeight)*Number(lightIncrease);//Assigns the perfectWeight variable a value using the given expression if tooHeavy is true
			console.log("Sorry, you can only do " + reps + " reps at " + currentWeight + "lbs, right now. Try " + perfectWeight + "lbs.");//Prints the result to console if tooHeavy is true
}
