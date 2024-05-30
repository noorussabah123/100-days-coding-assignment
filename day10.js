// day 10
// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.
var personAge = 30;
if (personAge < 2) {
    console.log("The person is a baby");
}
else if (personAge < 4) {
    console.log("The person is a toddler");
}
else if (personAge < 15) {
    console.log("The person is a kid");
}
else if (personAge < 20) {
    console.log("The person is a teenager");
}
else if (personAge < 50) {
    console.log("The person is a adult");
}
else {
    console.log("The peron is a elder");
}
// Question 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are included.
var favouriteFruits = ["Mango", "Watermelon", "Oranges", "Pomegranate", "Banana"];
if (favouriteFruits.includes("Watermelon")) {
    console.log("Watermelon is one of my favourite fruits");
}
if (favouriteFruits.includes("Mango")) {
    console.log("Mango is one of my favourite fruits");
}
if (favouriteFruits.includes("Pomegranate")) {
    console.log("Pomegranate is one of my favourite fruits");
}
if (favouriteFruits.includes("Oranges")) {
    console.log("Oranges is one of my favourite fruits");
}
if (favouriteFruits.includes("Banana")) {
    console.log("Banana is my favourite fruit");
}
// Question 30: Hello Admin: Greet users differently, especially 'admin'.
var userNames = ["admin", "user1", "user2", "user3"];
userNames.forEach(function (userName) {
    if (userName === "admin") {
        console.log("Hello admin, would you like to see a status update?");
    }
    else {
        console.log("Hello ".concat(userName, ", thank you for logging in again"));
    }
});
