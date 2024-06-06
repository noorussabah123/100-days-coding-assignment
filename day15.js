// day 15
// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var magicians = ["David", "Alice", "Bob"];
function makeGreat(magician) {
    var greatMagician = [];
    magician.forEach(function (magician) {
        greatMagician.push("".concat(magician, " the Great"));
    });
    return greatMagician;
}
function showMagician(magician) {
    magician.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagician = makeGreat(magicians.slice());
console.log("Original magician");
showMagician(magicians);
console.log("Great amgician");
showMagician(greatMagician);
// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Make sandwich with: ".concat(items.join(' , '), "."));
}
makeSandwich("ham", "cheese");
makeSandwich("turkey", "lettus", "tomato");
makeSandwich("avacado", "sprouts", "mustard", "mayo");
// Question 45: Cars: Create detailed car objects with flexible properties.
function makeCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(function (option) {
        var key = option[0];
        var value = option[1];
        car[key] = value;
    });
    return car;
}
console.log(makeCar("Toyota", "Corolla", ["colour", "Red"], ["Year", 2020]));
console.log(makeCar("Ford", "Fiesta", ["Color", "Blue"], ["Sunrrof", true]));
