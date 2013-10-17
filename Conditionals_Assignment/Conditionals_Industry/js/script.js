// Andrew Tillett 10/15/10 Assignment Conditionals Conditionals Industry

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
At Family Video, assuming the customer does not have half-price, after tax, new release movies are $2.99 per rental and others are $1.07 per rental. If new releases are rented Tuesday - Thurday, the customer gets a free dollar-movie for each new release rented. Calculate the customer's total price based on their rentals if rented Tuesday - Thursday or their price if rented Friday - Monday

Givens:
New release movies
Dollar Movies
Normal Price Days
Free Movie Days

Result: "Based on your X number of new releases and X number of dollar movies, your total rental price equals $X." or "Based on your X number of new releases, X number of dollar movies, and because you are renting on a discount day, your total rental price equals $X"
*/

var newRelease = 2.99;// Variable to hold the assigned value of the price of each new release
var dollarMovie = 1.07;// Variable to hold the assigned value of the price of each dollar movie rental

var newReleaseRentals = prompt("Please enter the total number of new releases you are renting.");//Variable assigned a prompt to gather the user's number of new releases
//if newReleaseRentals is strictly equal to " (empty field)" run the condition
if(newReleaseRentals === ""){//A condition set to give newReleaseRentals a value and new prompt with all capital letters to remind the user to input a valid value if true
	newReleaseRentals = prompt("NUMBER OF NEW RELEASE RENTALS MUST BE ENTERED FOR AN ACCURATE TOTAL");//Assigns a new prompt value to newReleaseRentals if the condition is true
}
var dollarMovieRentals = prompt("Please enter the total number of dollar movies you are renting.");// Variable assigned a prompt to gather the user's number of dollar movie rentals'
//if dollarMovieRentals is strictly equal to " (empty field)" run the condition
if(dollarMovieRentals === ""){//A statement set to give dollarMovieRentals a value and new prompt with all capital letters to remind the user to input a valid value if true
	dollarMovieRentals = prompt("NUMBER OF DOLLAR MOVIE RENTALS MUST BE ENTERED FOR AN ACCURATE TOTAL");//Assigns a new prompt value to dollarMovieRentals if the condition is true
}
var totalRentals = Number(newReleaseRentals) + Number(dollarMovieRentals);//Variable set to hold the expression and results of total rentals
var rentalDay = prompt("Please enter the day of the week you are renting. \n Ex. Sunday would be the input: 1");// Variable assigned a prompt to gather the day the user is renting their movies
//if rentalDay is strictly equal to " (empty field)" OR greater than 7, run the condition
if(rentalDay === "" || rentalDay > 7){//A condition set to give rentalDay a value and new prompt with all capital letters to remind the user to input a valid value if true
	var rentalDay = prompt("VALID RENTAL DAY MUST BE ENTERED FOR AN ACCURATE TOTAL \n Ex. Sunday would be the input: 1");//Assigns a new prompt to gather the day the user is renting their movies if the condition is true
}


var rentalPrice = newReleaseRentals*newRelease + dollarMovieRentals*dollarMovie;//Variable assigned an expression that calculates and holds the user's rental price value
var discountPrice = newReleaseRentals*newRelease;//Variable assigned an expression that calculates and holds the user's rental price value at with the discount

//if rentalDay is greater than or equal to 3 AND less than or equal to 5 run the condition
if(rentalDay >= 3 && rentalDay <= 5){//A condition that if true, runs a print result to console
	console.log("Based on your " + newReleaseRentals + " number of new releases, " + dollarMovieRentals + " number of dollar movies, and because you are renting on a discount day, your total rental price equals $" + discountPrice);//Prints the result to console if the condition is true
}else{//condition set to happen any time the first condition is false
	console.log("Based on your " + newReleaseRentals + " new releases and " + dollarMovieRentals + " number of dollar movies, your total rental price equals $" + rentalPrice);//Prints the result to console any time the first condition is false
}

