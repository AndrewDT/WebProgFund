// Andrew Tillett 10/10/13 Expressions Industry

var problem = "At Family Video, our sales percentages are very important. The company wants to have a percentage of at least 10%. Given your sales of half-price rentals, candy bundles, rent 3 get 1 free movies, RODs (rentals of the day), and total number of tickets, calculate your current sales percentage.";
alert(problem);

//Givens: Half-Price Rentals / Candy Bundles / Rent 3 Get 1 Free Movies / RODs / Total Tickets

//Result Variable: Calculated current sales percentage

//Result to Print: "You have a sales percentage of X% based on your sales of X half prices, X candy bundles, X rent threes, and X RODs, with X tickets."

var halfPrice = prompt("Please enter your total number of sold Half-Price rentals");
var candyBundles = prompt("Please enter your total number of sold Candy Bundles");
var rentThree = prompt("Please enter your total number of sold Rent 3 Get 1 Free Movies");
var rods = prompt("Please enter your total number sold RODs");
var tickets = prompt("Please enter your total number of Tickets");

var sales = [halfPrice, candyBundles, rentThree, rods];

var total = (Number(sales[0]) + Number(sales[1]) + Number(sales[2]) + Number(sales[3]))/tickets*100;
var result = "You have a sales percentage of " + total + "%" + " based on your sales of " + halfPrice + " half prices, " + candyBundles + " candy bundles, " + rentThree + " rent threes, and " + rods + " RODs, with " + tickets + " tickets.";
alert(result);
console.log(result);
