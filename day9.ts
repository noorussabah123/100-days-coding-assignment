// day 9

import { log } from "console";

// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', or 'red' to a variable called alien_color.

let alien_color = "Red"

if (alien_color === "Red") {
    console.log("You earned five points");
    
}

let alienacolor = "Green"
if (alienacolor === "Red") {
    // no output because the condition is false 
}


// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.


let alienColour = "Blue"

if(alienColour === "Blue") {
    console.log("You earned 5 points for shooting the alien");
    
} else {
    console.log("You just earnd 10 points");
    
}


// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

let aleincolor = "Red"

if(aleincolor === "Yellow") {
    console.log("You earned five points");
    
} else if(aleincolor === "Green") {
    console.log("You earned 10 points");
    
} else if(aleincolor === "Red") {
    console.log("You earned 15 points");
    
}