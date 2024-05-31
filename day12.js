// day 12
// Question 34: Pizzas: Share your favorite pizzas and express your love for them.
var pizzas = ["Peri peri chicken", "Fajita chicken", "Pepperoni", "BBQ chicken"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza"));
});
console.log("I really like pizza");
// Question 35: Animals: Highlight animals with a common trait.
var animals = ["Cow", "Cat", "Rabbit"];
animals.forEach(function (animal) {
    console.log("".concat(animal, " would make a great pet"));
});
console.log("Any of these would make a great pet");
// Question 36: T-Shirt: Create a function for customizing t-shirts.
function makinTshirt(size, message) {
    console.log("Making T-shirt of ".concat(size, " size with the message of ").concat(message, " printed on it"));
}
makinTshirt("Medium", "Future programmer");
