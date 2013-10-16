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


var currentWeight = prompt("Please enter the current weight you are lifting (in lbs)");
var emptyWeightField;
if(currentWeight === ""){
	var emptyWeightField = prompt("NOTE: CURRENT WEIGHT MUST BE ENTERED FOR A CORRECT IDEAL WEIGHT DETERMINATION");
}
var reps = prompt("Please enter the number of perfect repetitions you can perform at your current weight load");
var emptyRepsField;
if(reps === ""){
	var emptyRepsField = prompt("NOTE: REPETITIONS AMOUNT MUST BE ENTERED FOR A CORRECT IDEAL WEIGHT DETERMINATION");
}

tooLight = reps > 20 || emptyRepsField > 20;
tooHeavy = reps <= 3 || emptyRepsField <= 3 ;
justRight = (reps >= 4 && reps <= 20) || (emptyRepsField >= 4 && emptyRepsField <= 20);


var heavyReduction = .10;
var lightIncrease = .20;

var perfectWeight;


if(tooLight){
	var perfectWeight = Number(currentWeight) + Number(currentWeight)*Number(lightIncrease) || Number(emptyWeightField) + Number(emptyWeightField)*Number(lightIncrease);
	console.log("You can do " + (reps || emptyRepsField) + " reps at " + (currentWeight || emptyWeightField) + "lbs, that's lightweight for you! Looks like you need to go heavier! Try " + perfectWeight+"lbs");
}else if(justRight){
	var perfectWeight = currentWeight || emptyWeightField;
	console.log("You are lifting " + perfectWeight + "lbs for " + (reps || emptyRepsField) + " reps, which means this weight is just right!");
}else if(tooHeavy){
		var perfectWeight = Number(currentWeight) - Number(currentWeight)*Number(lightIncrease) || Number(emptyWeightField) - Number(emptyWeightField)*Number(lightIncrease);
			console.log("Sorry, you can only do " + (reps || emptyRepsField) + " reps at " + (currentWeight || emptyWeightField) + "lbs, right now. Try " + perfectWeight + "lbs.");
}
