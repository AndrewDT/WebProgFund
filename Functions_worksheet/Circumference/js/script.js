//Andrew Tillett 10/21/13 Functions Worksheet Circumference Problem

/*Criteria:
For each solution you will need the following:
Comment each line of code appropriately. Comment, comment, comment!
Write the givens as variables, and pass the givens to the function using arguments.
The calcultions should be within the functions and the function should return the result to the result variable.
Create a variable for your result (don’t forget!)
Print the result using the result variable and the appropriate message outside the function. (Do not print from the functions you create)
There should be a minimum of 20 commits to your git repository.
This should all be done in a single project and single .as file.


Problem: Circumference - 2*PI*R

Calculate the circumference of a circle.
Parameter(s) for function:
Radius of the circle
Return:
Circumference of the circle
Result to print to the console:
“The circumference of the circle is X”;
*/

var circumference = calcCircumference(10);//CALLS the function and holds the returning value from the function
console.log(circumference);//Prints the result of the circumference variable to the console
function calcCircumference(radius){//Sets up a function that acts when called out in the code and acts out the interior code and formula
	var pi = 3.141592;//A variable used to hold the value of pi up to 6 decimals rather than use the number itself in the later formula
	var circumference = 2*pi*radius;//Variable used to hold the value of the formula result
	return circumference;//Returns the value from circumference variable to the CALL in the code
}



