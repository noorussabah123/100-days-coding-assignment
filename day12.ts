// day 12

// Question 34: Pizzas: Share your favorite pizzas and express your love for them.


let pizzas: string[] = ["Peri peri chicken", "Fajita chicken", "Pepperoni", "BBQ chicken"]

pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza`);
    
})

console.log("I really like pizza");


// Question 35: Animals: Highlight animals with a common trait.

let animals: string[] = ["Cow", "Cat", "Rabbit"]

animals.forEach(animal => {
    console.log(`${animal} would make a great pet`);
    
})
console.log("Any of these would make a great pet");



// Question 36: T-Shirt: Create a function for customizing t-shirts.

function makinTshirt(size: string, message: string) {
    console.log(`Making T-shirt of ${size} size with the message of ${message} printed on it`);
    
}

makinTshirt("Medium", "Future programmer")





