// Andrew Tillett 10/10/13 Expressions Wacky

alert("Spider-man is a great superhero with great power, however, he does not actually have spider web powers and he uses fluid for his webshooters. Assuming he uses 3oz of fluid per city block traveled and .5oz per height in inches of the villain, calculate the amount leftover after fighting the villain if given X amount of total fluid, traveling X city blocks, and X height in inches of the villain.");
// Alert to show the problem variable to users so they can understand the later input prompts

//Givens: Amount of total fluid / City blocks traveled / Villain height in inches

//Result Variable: Fluid remaining after traveling and fighting the villain

//Result to Print: "If Spidey started with Xoz of total fluid, traveled, X city blocks, and the villain was Xin tall, Spidey would have Xoz of fluid leftover to fight more crime

var totalFluid = prompt("Please enter Spidey's total amount of fluid");// Prompt to gather total fluid amount from the user for use in the formula
var blocksTraveled = prompt("Please enter the amount of city blocks Spidey must travel to reach the villain");// Prompt to gather the total number of blocks traveled by Spidey from the user for use in the formula
var villainHeight = prompt("Please enter the height in inches(in) of the villain.");// Prompt to gether the villain's height from the user

var blocksTotal = blocksTraveled*3;// Variable with an expression used to calculate the total amount of fluid used based on the information of blocks traveled given by the user
var heightTotal = villainHeight*.5;// Variable with an expression used to calculate the total amount of fluid used based on the information of the villain's height given by the user

var crimeFight = [totalFluid, blocksTotal, heightTotal];// Array used to organize the user inputted information and calculated results for the final formula

var total = Number(crimeFight[0]) - Number(crimeFight[1]) - Number(crimeFight[2]);// Variable with an expression used to calculate the total amount of fluid Spidey would have left over in oz to fight more crime after this encounter
var result = "If Spidey started with " + totalFluid +"oz of total fluid, traveled " + blocksTraveled + " city blocks, and the villain was " + villainHeight + "in tall, Spidey would have " + total + "oz of fluid leftover to fight more crime.";
// Result variable used to add supporting text and show the user their given information and resulting answer to Spidey's leftover fluid

alert(result);// Alert used to show the result variable and its supporting text, a user's given information, and resulting answer to Spidey's leftover fluid
console.log(result);// Used to print the result to the machine along with all supporting text, user inputted information, and resulting answer to Spidey's leftover fluid
