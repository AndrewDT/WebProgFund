//Andrew Tillett 10/13/13 Conditionals Worksheet Group 3 Movie Ticket Price Problem

/*Criteria:

For each solution you will need the following:
Label the section of code appropriately
Write the givens as variables
The result should be calculated using variables, not literal values when possible.
Create code that will make decisions based on the value of the givens
Print the result of the decision-making to the console.
Use only code and techniques learned in this class.

Problem: Movie Ticket Price

The local movie theater in town has a ticket price of $12.00 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00. In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price. 
Determine which of the two prices the customer is eligible for.
Given:
Time of Movie (Assume whole numbers here)
Age of the customer
 Result To Print Out:
“The ticket price is X”
*/

var movieTime = 2;// Variable for the given movieTime and can be assigned multiple values for use in the later if and else statements
var customerAge = 9;// Variable for the given customerAge and can be assigned multiple values for use in the later if and else statements

var price = 12.00;// Variable for the regular ticket price assigned the given value of 12.00
var discountPrice = 7.00;// Variable for the discount ticket price assigned the given value of 7.00

var discountAge = customerAge < 10 || customerAge >= 55;// Variable that is assigned a set of values within restraints to determine whether a customer's age fits the given criteria for discount pricing and for use in the later if and else statement
var discountTime = movieTime > 3 && movieTime < 5;// Variable that is assigned a set of values within restraints to determine whether the movie time fits the given criteria for discount pricing and for use in the later if and else statement

// If discountAge or discountTime is TRUE, print to console "The ticket price is $7.00"
// Else, if neither discountAge or discountTime are true, print to console "The ticket price is $12.00"
if(discountAge || discountTime){
	console.log("The ticket price is $" + discountPrice);// Printing to console the given string if the if statement is TRUE
}else{
	console.log("The ticket price is $" + price);// Printing to the console the given string if the if statement is FALSE
}
