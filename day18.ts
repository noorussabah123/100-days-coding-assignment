// day 18

// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.


let smartphone = {
    make: "Oppo",
    model: "Oppo A16e",
    spesc: {
        storage: "32GB",
        screenSize: "6.52inches",
        Battery: "5 to 6 hours"
    }
}

console.log(smartphone);



// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.



let developerSkills = {
    languages: ["Typescript", "Javascrpt", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
}

let {languages, frameworks, tools} = developerSkills

console.log(`language: ${languages[0]}, Framework: ${frameworks[0]}, Tools: ${tools[0]} `);





// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.


function creatObjectwithDynamicKey(key:string, value: string) {
    let dynamicObject: {[key: string]: string} = {}

    dynamicObject[key] = value

    return dynamicObject
}

let userPreference = creatObjectwithDynamicKey("theme", "dark")

console.log(userPreference);
