// Andrew Tillett 10/10/13 Expressions Personal

var problem = "Each person has a Basal Metabolic Rate (BMR). Assuming all users are male and given weight in pounds(lbs), height(in), and age calculate the BMR of a specific male"; // Variable set up to describe the problem, givens, and goal to users

alert(problem); // Alert to show the problem variable to users so they can understand the later input prompts

//Givens: Weight in Pounds(lbs) / Height / Age

//Result Variable: BMR of a specific Male

//Result to Print: "Based on your weight of Xkg (kilograms), height of Xcm, and age of x years, your Basil Metabolic Rate (BMR) is x calories a day."

var weightPounds = prompt("First we need to convert your weight to kilograms(kg) \nPlease enter your weight in pounds(lbs)");// Variable made to prompt users to input their weight information and convert it to kilograms as required by the formula for BMR
var weightKilograms = weightPounds/2.2;// Variable with expression to convert the user given weight from pounds(lbs) to kilograms(kg)

var heightInches = prompt("Now lets convert your height to centimeters (cm) \nPlease enter your height in inches(in)");// Variable made to prompt users to input their height information and convert it to centimeters as required by the formula for BMR
var heightCentimeters = heightInches * 2.54;// Variable with the expression to convert the user given height from inches(in) to centimeters(cm)

var age = prompt("Please enter your age");// Variable made to prompt users to input their age for use in the BMR formula

var bmr = 88.362 + (13.397 * weightKilograms) + (4.799 * heightCentimeters) - (5.677 * age);// Variable with the expression used to calculate a male individual's BMR

var result = "Based on your weight of " + weightKilograms + "kg (kilograms), height of " + heightCentimeters + "cm, and age of " + age + " years, your Basil Metabolic Rate (BMR) is " + bmr + " calories a day.";
// Result variable used to add supporting text and show the user their given information and resulting BMR
alert(result) = "Based on your weight of " + weightKilograms + "kg (kilograms), height of " + heightCentimeters + "cm, and age of " + age + " years, your Basil Metabolic Rate (BMR) is " + bmr + " calories a day.";
// Alert used to show the result variable and its supporting text, a user's given information, and resulting BMR to the user
console.log(result);// Used to print the result to the machine along with all supporting text, user inputted information, and resulting BMR
