// day 24

import { loadEnvFile } from "node:process";

// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.



function printNumbersWithlet() {
    for (let i = 1 ; i <= 5; i++) {
        console.log(i);
        
        
    }
}

printNumbersWithlet()


// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.



let age = 22

age = 21

console.log(age);


 const personName = "Noor-us-Sabah"

 try {
   let  name = "Maryam"
 } catch(error) {
    console.log("Error: can't reassign const-declared variable");
    
 }




// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.

{
    let blockLet = "Visible inside the block"
    const blockConst = "Also visible inside the block"

    console.log(blockLet);
    console.log(blockConst);
    
    
    
}

try {

} catch (error) {
    console.log("blockLet is not accesible outside the block");
    
}

try {

} catch (error) {
    console.log("blockConst is not accesible outside the block");
    
}
