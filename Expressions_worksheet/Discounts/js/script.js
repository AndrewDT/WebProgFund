// Andrew Tillett 10/9/13 Expressions_worksheet Discounts Problem


//Calculate the discounted price for an item

var originalPrice = 18.99;// Creating a variable for the orignal price of the item
var discount = 10;// Creating a variable for the discount percent on the item
var description = "Supplement";// Creating a variable for the item's description
var salesTax = .07;// Creating a variable for the applicable sales tax on the item

var priceWithoutTax = originalPrice - originalPrice/discount;// Creating a variable with an expression that gives the price of the item without tax by subtracting the result of the division of originalPrice and discount variables from the originalPrice variable
var priceWithTax = priceWithoutTax + originalPrice*salesTax;// Creating a variable with an expression that gives the price of the item with tax by adding the priceWithoutTax variable to result of the variables orginalPrice multiplied by salesTax

var result = "Your " + description + " was originally $" + originalPrice + ", but after a " + discount + "% discount, it is now $" + priceWithoutTax + " without tax, and $" + priceWithTax + " with tax.";
// Creating a result variable with strings and variables and assigning each variable its appropriate place for the desired outcome
console.log(result);// Printing the result variable to the console