//Conditional Logic Concepts
//Conditional Statement:
/*
if(CONDITION){
 ACTIONS
}

sunny=true
if(sunny){
	goToTheBeach();
}ELSE{
	goToTheMovies();
}
 */


//Logic Concepts
/* Comparison:
 temp = 82;//True or 62 false because of if
 if(temp > 70){
 	goToTheBeach();
 }
 
 >(Greater than), <(Less Than), >=(Greater Than or Equal To), <=(Less Than or Equal To), !=(Not Equal to), ==(Equal To)
one = is for assignment two are for comparing the values 
 
 */

//Nesting Conditionals
/*
 if(sunny){
 	goToTheBeach();
 	
 	 if(warmWater){
 	wearNewSuit();
 }
 }else{
 	goToTheMovies();
 }

 Make sure if one action depends on another it is nested in the conditional statement as goToTheBeach and wearNewSuit
 */

//Conditional Statement:
/*
if(CONDITION){
 ACTIONS
}

sunny=true
if(sunny){
	goToTheBeach();
}ELSE{
	goToTheMovies();
}
 */


//Conditionals Examples
/*
 var oldEnough = true;
 
 Good to write in english first
 //if the child is old enough, print to the console "you can ride!"
 Curly brace best practice is same line as if statement
 Basic condition has two parts : Condition and Code block
 if(oldEnough){
 	 //code performed if condition is true
 	console.log("You can ride the coaster!");
 }
 console.log("what comes after")//if conditional is false, code keeps on going
 */


//Relational Expressions
/*
 var kidHeight = 40;
 var minHeight = 48;
 //if the child is old enough, print to the console "you can ride!"
 //if the kid is over 48 inches in height
 if(kidHeight > minHeight){
 	console.log("You can ride the coaster!");
 }
 */


//Condition with Expressions

/*
 var kidHeight = 47;
 var minHeight = 48;
 var sneakerLift = 2;
 //if the child is old enough, print to the console "you can ride!"
 //if the kid is over 48 inches in height
 if(kidHeight + sneakerLift > minHeight){
 	console.log("You can ride the coaster!");
 }
 */

//If and Else
/* Else combines If statements
 var kidHeight = 52;
 var minHeight = 48;
 //if the child is old enough, print to the console "you can ride!"
 //if the kid is over 48 inches in height
 //code performed if true
 if(kidHeight > minHeight){
 	console.log("You can ride the coaster!");
 }else{
 	//code performed if false
 	console.log("Sorry kid, you've got some growing to do first!");
 }
 */


//Else Ifs
//Plain if statements are for the machine to choose to do or skip a block of code
//If and Else are for the machine to choose between two blocks of code
//Else Ifs are for the machine to choose between 3 or more blocks of code
/*
 var kidHeight = 52;
 var minHeight = 48;
 var wParentHeight = 45;//the height of the kid with the parent
 //if the child is old enough, print to the console "you can ride!"
 //if the kid is over 48 inches in height
 if(kidHeight > minHeight){
 	//you can ride!
 	console.log("You can ride the coaster!");
 }else if(kidHeight > wParentHeight){
 	//you can ride with a parent present
 	console.log("You can ride, but only with a parent present.");
 }else{
 	//sorry you have growing to do
 	console.log("Sorry kid, you've got some growing to do first!");
 }
 
 Else should NEVER require a condition
 Else IF ALWAYS requires a condition
 If first statement is true, it stops and skips the further statements. If first statement false, the console keeps reading the further code.
 */


//Relational Operators
/*
 Greater than, less than, greater than or equal to, less than or equal to
 Purpose of these operators is to compare two and ONLY TWO values or variables
The comparison results in TRUE or FALSE

Equality Operators
Equality: ==
Strict Equality ===
Inequality !=
Job is the same as relational operators

var a = 12;
a > 20 //FALSE

Do not break the symbols by space. BAD!!!
<= is NOT the same as < =

5 < 5 //FALSE
5 <= 5 //TRUE

Equality
uses the == operator (NO SPACE)
Read "The same as"
Equality == compares two values
Assignment = Stores values

Strict Equality
uses the === Operator
Read "The same value" AND "the same type"
6 Number
"6" String
6 == "6" //TRUE
6 === "6" //FALSE one is a number, one is a string

Use Strict Equality over Equality
=== is better than ==
Considered more efficient

Inequality
uses the != operator
Read "is not the same as"
a != b
 */


//Logical Operators
/* Comparing pairs of True and False
 Logical Operators
 They are used to compare two TRUE or FALSE values
 They are used to compare pairs of relational expressions
 Their comparison results are in TRUE or FALSE
 They are:
 And &&
 Or ||
 Exclusive Or (XOR) ^
 Not !
 
 And Operator
 Represented by &&
 Requires both in the pair to be TRUE for the whole pair to be TRUE
 TRUE && TRUE = TRUE
 TRUE && FALSE = FALSE
 FALSE && TRUE = FALSE
 FALSE && FALSE = FALSE
 
 var budget = 300;
 var iPhonePrice = 199.99;
 var paycheck = 200;
 
 //if the price of the phone is less our budget AND if our paycheck is over 300
 if(iPhonePrice < budget && paycheck > 300){
 	console.log("We can buy the phone!")
 }else{
 	console.log("No phone for you!!")
 }
 
Or Operator
Represented by the || symbol
Requires at least ONE of the pair to be TRUE for the whole pair to be TRUE
TRUE || TRUE = TRUE
TRUE || FALSE = TRUE
FALSE || TRUE = TRUE
FALSE || FALSE = FALSE

 var budget = 100;
 var iPhonePrice = 199.99;
 var wonLottery = true;
 
 //if the price of the phone is less our budget OR if we won the lottery
 if(iPhonePrice < budget || wonLottery){
 	console.log("We can buy the phone!")
 }else{
 	console.log("No phone for you!!")
 }

Not Operator
Represented by the symbol !
Flips a value *Also called Negation
	TRUE becomes FALSE
	FALSE becomes TRUE
Is not used for comparison
If more than one are true, the result if FALSE

a!=b is the same as !(a===b)
a<b is the same as !(a<b)

How do we see if a, b, and c all have the same value?
a === b === c *This will not work properly
a === b && b === c *Correct way

Things to remember:
Relational Operators go in between PAIRS of objects

Logical Operators go in between Relational Expressions or Boolean values

Always work in pairs


 */

//Ternary Operators - Decision making on one line

/*
 Represent by a ?
 
 if(condition){
 	do if true;
 }else{
 	do if false;
 }
 
 (condition) ? do if true : do if false;
 
 
 var gpa = 48;
 
 //if the gpa is over the min 2.0 score, the student can graduate
 if(gpa > 2.0){
 	console.log("You can graduate!");
 }else{
 	console.log("GPA is too low!")
 }
 
 (gpa > 2.0) ? console.log("You can graduate!") : console.log("GPA is too low!");
 
var age = 6;
var book;

//if the child is under 10, they get Green Eggs and Ham, otherwise they get The Time Machine
//Traditional Conditional
if(age < 10){
	book = "Green Eggs and Ham";
}else{
	book = "The Time Machine";
}
console.log(book);
//Ternary Form
book = (age < 10) ? "Green Eggs and Ham" : "The Time Machine";
 
 
 
 */


//Introduction to Conditionals

/*
 4 Types of procedural code
 Sequential
 Conditional
 Reusable
 Repetitive
 
 Addressing Conditional
 Recipe Metaphor (If we are at high altitude, add an egg)
 
 Conditional code acts the same way
 Choosing whether to run a block of code or not
 Choosing between blocks of code
 */

















