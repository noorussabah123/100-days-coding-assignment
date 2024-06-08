// day 18
// Question 52: Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
var smartphone = {
    make: "Oppo",
    model: "Oppo A16e",
    spesc: {
        storage: "32GB",
        screenSize: "6.52inches",
        Battery: "5 to 6 hours"
    }
};
console.log(smartphone);
// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var developerSkills = {
    languages: ["Typescript", "Javascrpt", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
console.log("language: ".concat(languages[0], ", Framework: ").concat(frameworks[0], ", Tools: ").concat(tools[0], " "));
// Question 54: Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function creatObjectwithDynamicKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userPreference = creatObjectwithDynamicKey("theme", "dark");
console.log(userPreference);
