// day 26
// Question 76: Function Parameters and Return Values: Create a function that takes two numbers as parameters, adds them together, and returns the result. Show how you can call this function and log the result.
function addNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addNumbers(10, 5));
// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.
function greet(name, greeting) {
    if (name === void 0) { name = "anonymous"; }
    if (greeting === void 0) { greeting = "Hello"; }
    console.log("".concat(greeting, " ").concat(name));
}
greet();
greet("Alice");
// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(5));
console.log(squareExpression(5));
