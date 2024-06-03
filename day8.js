"use strict";
// Day 8
Object.defineProperty(exports, "__esModule", { value: true });
// Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
var friends = ["Maryam", "Ayesha", "Shahnoor"];
console.log(friends[3]); // intentional error 
console.log(friends[2]); // corrrecting the error by accessing a valid index
// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
var car = "toyota";
console.log("Is car == 'toyota'? I predict true");
console.log(car == 'toyota');
console.log("Is car == 'Audi'? I predict False ");
console.log(car == 'Audi');
console.log("Is car == 'toyota'? I predict True");
console.log(car === 'toyota');
console.log("Is car.length < 2? I predict False");
console.log(car.length < 2);
console.log("Is car.toLowerCase() === 'toyota'? i predict True");
console.log(car.toLowerCase() === 'toyota');
console.log("Is car.toUpperCase() === 'toyota'? I predict False");
console.log(car.toUpperCase() === 'toyota');
console.log("Is car.includes('y')? I predict true");
console.log(car.includes('y'));
console.log("Is car.includes('b')? I predict False");
console.log(car.includes('b'));
console.log("Is !car.includes('z')? I predict True");
console.log(!car.includes('z'));
// && and ||
// let num1 = 5
// let num2 = 10
console.log(5 < 10 && 10 > 5); // true
console.log(5 > 10 || 10 > 15); // false
console.log(5 > 10 || 10 < 15); // true
