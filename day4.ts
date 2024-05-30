// Day 4

// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If the programs are straightforward at this point, just add your name and the current date at the top of each program file. Then, write one sentence describing what the program does.

// Noor-us-Sabah, 27-May-2024
// This prograam print a message

let myName: string = "Noor-us-Sabah";

console.log(`Hello ${myName}, would you like to learn some typescript today?`);


// Question 11: Names: Store the names of a few of your friends in an array called names. Print each person’s name by accessing each element in the list, one at a time.


let freindsNames: string[] = ["Maryam", "Hiba", "Ayesha", "Mahnoor"];

for (let i = 1; i < freindsNames.length; i++) {
    console.log(freindsNames[i]);
    
    
}


// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.


let names: string[] = ["Maryam,", "Ayesha", "Hiba", "Mahnoor"]

for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some typescript today`);
    
}