// Andrew Tillett 10/10/13 Expressions Industry

var problem = "At Family Video, our sales percentages are very important. The company wants to have a percentage of at least 10%. Given your sales of half-price rentals, candy bundles, rent 3 get 1 free movies, RODs (rentals of the day), and total number of tickets, calculate your current sales percentage.";
// Variable set up to describe the problem, givens, and goal to users

alert(problem); // Alert to show the problem variable to users so they can understand the later input prompts

//Givens: Half-Price Rentals / Candy Bundles / Rent 3 Get 1 Free Movies / RODs / Total Tickets

//Result Variable: Calculated current sales percentage

//Result to Print: "You have a sales percentage of X% based on your sales of X half prices, X candy bundles, X rent threes, and X RODs, with X tickets."

var halfPrice = prompt("Please enter your total number of sold Half-Price rentals");// Prompt to gather the user's number of half-price rentals for the sales formula
var candyBundles = prompt("Please enter your total number of sold Candy Bundles"); // Prompt to gather the user's number of Candy Bundles for the sales formula
var rentThree = prompt("Please enter your total number of sold Rent 3 Get 1 Free Movies");// Prompt to gather the user's number of Rent Threes for the sales formula
var rods = prompt("Please enter your total number sold RODs");// Prompt to gather the user's number of RODs for the sales formula
var tickets = prompt("Please enter your total number of Tickets");// Prompt to gather the user's number Tickets tendered for the sales formula

var sales = [halfPrice, candyBundles, rentThree, rods];// Array used to organize the user inputed sales information, except for tickets

var total = (Number(sales[0]) + Number(sales[1]) + Number(sales[2]) + Number(sales[3]))/tickets*100;// Variable with an expression that adds the sales array items, divides the ticket numbers, and then multiplied by 100 to give the accurate sales percentage based on the user's information
var result = "You have a sales percentage of " + total + "%" + " based on your sales of " + halfPrice + " half prices, " + candyBundles + " candy bundles, " + rentThree + " rent threes, and " + rods + " RODs, with " + tickets + " tickets.";
// Result variable used to add supporting text and show the user their given information and resulting sales percentage
alert(result);// Alert used to show the result variable and its supporting text, a user's given information, and resulting sales percentage to the user
console.log(result);// Used to print the result to the machine along with all supporting text, user inputted information, and resulting sales percentage
