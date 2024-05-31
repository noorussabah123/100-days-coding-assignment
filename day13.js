// day 13
// Question 37: Large Shirts: Default values in make_shirt().
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Making a T-shirt of ".concat(size, " size with the message ").concat(message, " printed on it "));
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Dive into coding");
// Question 38: Cities: Describing cities with a function.
function describingCities(cities, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(cities, " is in ").concat(country));
}
describingCities("Islamabad");
describingCities("Quetta");
describingCities("Karachi");
// Question 39: City Names: Formatting city-country pairs.
function city_Country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_Country("Karachi", "Pakistan"));
console.log(city_Country("Paris", "France"));
console.log("Tehran", "Iran");
