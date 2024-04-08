// Define variable

let apple = "apple";
let uppercaseApple ="APPLE";
let ten = 10;
let twenty =20;
let fruit =["Apple","Mango","Grapes"]

// Test for equality and inequality with strings

console.log("Is apple is equal to apple?");
console.log(apple == "apple");


console.log("Is apple is not equal to apple");
console.log(apple !="apple");

// Test using lowercase function
console.log("\nIs appleis equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs apple is equal to apple after converting to lowercase");
console.log(uppercaseApple.toLocaleLowerCase() != "apple");

// Numerical tests
//  Equal to
console.log("\n is ten is equal to twenty?");
console.log( ten == twenty);

// not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

// Greater than
console.log("\nIs ten is greater then zero?");
console.log(ten > 0);

// Less than or smaller than
console.log("\nIs twenty is less then 10");
console.log(twenty <10);

// Greater than or Equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

// less than or equal to
console.log("\n twenty is less than or equal to 10");
console.log(twenty <= 10);

// Tests using "and" & "or" operator

// using && operator

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

// using || or operator

console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is not equal to 20 ");
console.log (20 > 50 || 20 != 20);

// Test weather an item is include in array
console.log("Is orange include my fruit array");
console.log(fruit.includes("orange"));

// cannot include 
console.log ("Is orange include not my fruit array");
console.log(!fruit.includes ("orange"))