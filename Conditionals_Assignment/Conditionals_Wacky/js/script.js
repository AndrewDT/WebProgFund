// Andrew Tillett 10/15/10 Assignment Conditionals Conditionals Wacky

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
Iron Man uses roughly 255 phase blasts to take down the Crimson Dynamo. Give he can only store up enough energy for 50 blasts at a time, and it takes 6.3 minutes to recharge 15 blasts, calculate if he can defeat the Crimson Dynamo given X minutes and X previously stored energy.

Givens:
Phase Blasts needed
Maximum stored energy
Minutes til recharge

Result: "Yes, with X previously stored blasts and given X minutes, Iron Man can defeat the Crimson Dynamo!" or "No, with X previously stored blasts and given X minutes, Iron Man will lose to the Crimson Dynamo!"
*/

var blastsNeeded = 255;//Variable assigned to hold the value of blasts needed to defeat Crimson Dynamo
var blastRechargeRate = 6.3;//Variable assigned to hold the value for Iron Man's blast recharge rate
var previousEnergy = prompt("Please enter the amount of energy Iron Man stored prior to the fight with Dynamo \n(Cannot exceed 50)");//Variable assigned a prompt to gather Iron Man's prior stored energy as inputted by the user
//if previousEnergy is greater than 50 OR previousEnergy is strictly equal to " (empty field)" then run the condition
if(previousEnergy > 50 || previousEnergy === ""){//Declares a condition for the if statement
	previousEnergy = prompt("IRON MAN CANNOT STORE MORE THAN 50 BLASTS WORTH OF ENERGY! \nPLEASE ENTER ANOTHER NUMBER");//Assigns a new prompt value to previousEnergy with capital letters to get the user's attention if the condition is true
}
var chargeTime = prompt("Please enter the amount of time Iron Man has during the fight to charge in between blasts \n(In minutes)");//Variable assigned a prompt to gather how much charge time Iron Man has during the fight as inputted by the user
//if chargeTime is strictly equal to "" (empty field) then run the condition
if(chargeTime === ""){//Declares a condition for the if statement
	chargeTime = prompt("PLEASE ENTER HOW MUCH TIME IRON MAN HAS TO CHARGE MID-FIGHT! \n(IN MINUTES)");//Assigns a new prompt value to chargeTime with capital letters to get the user's attention if the condition is true
}
var totalEnergy = Number(previousEnergy) + Number(chargeTime)/blastRechargeRate*15;//Variable set to hold the expression and result of total energy Iron Man would have based on user inputs and the formula

//Ternary set to shorten conditional declaration. If the condition is true, it prints to console the first value, if false, it prints to console the second value
(totalEnergy >= blastsNeeded) ? console.log("Yes, with " + previousEnergy + " previously stored blasts and given " + chargeTime + " minutes, Iron Man can defeat the Crimson Dynamo!") : console.log("No, with " + previousEnergy + " previously stored blasts and given " + chargeTime + " minutes, Iron Man will lose to the Crimson Dynamo!");
