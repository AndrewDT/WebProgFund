// Andrew Tillett 10/10/13 Expressions Wacky

alert("Spider-man is a great superhero with great power, however, he does not actually have spider web powers and he uses fluid for his webshooters. Assuming he uses 3oz of fluid per city block traveled and .5oz per height in inches of the villain, calculate the amount leftover after fighting the villain if given X amount of total fluid, traveling X city blocks, and X height in inches of the villain.");

//Givens: Amount of total fluid / City blocks traveled / Villain height in inches

//Result Variable: Fluid remaining after traveling and fighting the villain

//Result to Print: "If Spidey started with Xoz of total fluid, traveled, X city blocks, and the villain was Xin tall, Spidey would have Xoz of fluid leftover to fight more crime

var totalFluid = prompt("Please enter Spidey's total amount of fluid");
var blocksTraveled = prompt("Please enter the amount of city blocks Spidey must travel to reach the villain");
var villainHeight = prompt("Please enter the height in inches(in) of the villain.");

var blocksTotal = blocksTraveled*3;
var heightTotal = villainHeight*.5;

var crimeFight = [totalFluid, blocksTotal, heightTotal];

var total = Number(crimeFight[0]) - Number(crimeFight[1]) - Number(crimeFight[2]);
var result = "If Spidey started with " + totalFluid +"oz of total fluid, traveled " + blocksTraveled + " city blocks, and the villain was " + villainHeight + "in tall, Spidey would have " + total + "oz of fluid leftover to fight more crime.";

alert(result);
console.log(result);
