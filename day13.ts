// day 13

// Question 37: Large Shirts: Default values in make_shirt().

function make_shirt(size: string = "Large", message: string = "I love Typescript"){
    console.log(`Making a T-shirt of ${size} size with the message ${message} printed on it `);
    
}

make_shirt()
make_shirt("Medium")
make_shirt("Small", "Dive into coding")


// Question 38: Cities: Describing cities with a function.

function describingCities(cities: string, country: string = "Pakistan") {
    console.log(`${cities} is in ${country}`);
    
}

describingCities("Islamabad")
describingCities("Quetta")
describingCities("Karachi")



// Question 39: City Names: Formatting city-country pairs.

function city_Country(city: string, country: string) {

    return `${city}, ${country}`
}

console.log(city_Country("Karachi", "Pakistan"));
console.log(city_Country("Paris", "France"));
console.log("Tehran", "Iran");


