//Screencast: While Loop
/*
While Loop: Looks like an if conditional statement

var b = 10;//Sets up the index

While Loop

while b is greater than 0 than run this condition
while(b > 0){//Checks the condition
	console.log(b + "kegs on the wall");
	b--;//Increments or decrements the index
}
*/


//Screencast: Do While Loop
/*
While Loop: Looks like an if conditional statement

var b = 10;//Sets up the index

While Loop

while b is greater than 0 than run this condition
while(b > 0){//Checks the condition
	console.log(b + "kegs on the wall");
	b--;//Increments or decrements the index
} 

var c = 10;

do{
	console.log(c + "kegs on the wall");
	c--;
}
while(c > 0);
//Gives us the same result as the first while loop
//While must come after the do
//DO run this code WHILE the condition is true
//Code still runs even if false though
*/


//For Loop
/*While Loop: Looks like an if conditional statement

var b = 10;//Sets up the index

While Loop

while b is greater than 0 than run this condition
while(b > 0){//Checks the condition
	console.log(b + "kegs on the wall");
	b--;//Increments or decrements the index
} 

var c = 10;

do{
	console.log(c + "kegs on the wall");
	c--;
}
while(c > 0);
//Gives us the same result as the first while loop
//While must come after the do
//DO run this code WHILE the condition is true
//Code still runs even if false though


//For loop is a combination of all loops put together. Also known as the "Short loop". Does everything in one like (Like a ternary maybe?)

for(var i = 10; i > 0; i--){
	console.log(i + "kegs on the wall");
}

//Shorter version of the other loops and does the same thing
*/


//Video: Working with Loops
/*
var a =1;

while(a < 10){
	console.log(a);
}//hits back to while statement to see if it is still true. Note the word LOOP. This is an infinite loop though which is BAD!

var a =1;

while(a < 10){
	console.log(a);
	a++;
}//eventually becomes false, therefore no infinite loop and the rest of code gets ran

//Do While
var a = 100;

do{
	console.log(a);
	a++;
}while(a < 10);

//Always runs the DO at least once and then checks the while to decided whether to continue running this portion of code

//For Loop

var i = 1;//set up the index 

while(i < 10){//Checks the condition
	//do stuff
	//do stuff
	//do stuff
	//etc.
	i++://increment the index
}
// SETUP index ; Check Condition ; Increment the index
for(var i = 1; i < 10; i++){
	//do stuff
	//do stuff
	//do stuff
	//etc..
}

//Break - A word to jump us out of the loop Moves us out beyond the bottom of the loop

for(var i = 1; i < 10; i++){
	//do stuff
	//do stuff
	if(i == 101){
		break;
	}
	//do stuff
}


//Continue - Means jump back up and check the condition again. It moves us back to the top

for(var i = 1; i < 10; i++){
	//do stuff
	//do stuff
	if(i % 5 == 0){
		continue;
	}
	//do second set of stuff
}
*/