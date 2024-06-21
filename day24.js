"use strict";
// day 24
Object.defineProperty(exports, "__esModule", { value: true });
// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
function printNumbersWithlet() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumbersWithlet();
// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
var age = 22;
age = 21;
console.log(age);
// const name = "Noor-us-Sabah"
// try {
//     name = "Maryam"
// } catch (error) {
//     console.log("Error: Can't reassign a `const`-declared variable.");
// }
var name = "Alice";
try {
    name = "Bob"; // This line will cause an error
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable.");
    console.error("Caugth error", error.message);
}
