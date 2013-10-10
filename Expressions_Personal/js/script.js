// Andrew Tillett 10/10/13 Expressions Personal

//Each person has a Basal Metabolic Rate (BMR). Assuming all users are male and given weight in pounds(lbs), height, and age calculate the BMR of a specific male

//Givens: Weight in Pounds(lbs) / Height / Age

//Result Variable: BMR of a specific Male

//Result to Print: "Based on your weight of Xkg (kilograms), height of Xcm, and age of x years, your Basil Metabolic Rate (BMR) is x calories a day."

var greeting = "This calculator can calculate the Basil Metabolic Rate (BMR) of any male \n (Sorry ladies!)";
alert(greeting);

var weightPounds = prompt("First we need to convert your weight to kilograms(kg) \nPlease enter your weight in pounds(lbs)");
var weightKilograms = weightPounds/2.2;

var heightInches = prompt("Now lets convert your height to centimeters (cm) \nPlease enter your height in inches(in)");
var heightCentimeters = heightInches * 2.54;

var age = prompt("Please enter your age");

var bmr = 88.362 + (13.397 * weightKilograms) + (4.799 * heightCentimeters) - (5.677 * age);

var result = "Based on your weight of " + weightKilograms + "kg (kilograms), height of " + heightCentimeters + "cm, and age of " + age + " years, your Basil Metabolic Rate (BMR) is " + bmr + " calories a day.";
alert(result);
console.log(result);
