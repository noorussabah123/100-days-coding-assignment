// day 15

// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magicians: string[] = ["David", "Alice", "Bob"]

function makeGreat(magician:string[]): string[] {
    let greatMagician: string[] = []
    
    magician.forEach(magician =>{
        greatMagician.push(`${magician} the Great`)
    })

    return greatMagician
}

function showMagician(magician:string[]): void {
    magician.forEach(magician => {
        console.log(magician);
        
    })
}

let greatMagician = makeGreat(magicians.slice())

console.log("Original magician");
showMagician(magicians)

console.log("Great amgician");
showMagician(greatMagician)



// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function makeSandwich(...items:string[]) {
    console.log(`Make sandwich with: ${items.join(' , ')}.`);
    
}


makeSandwich("ham", "cheese")
makeSandwich("turkey", "lettus", "tomato")
makeSandwich("avacado", "sprouts", "mustard", "mayo")



// Question 45: Cars: Create detailed car objects with flexible properties.

 function makeCar(manufacturer:string, model: string, ...options:[string, any][]): {[key: string]: any} {
         let car: {[key: string]: any} = {
        manufacturer: manufacturer,
        model: model
   }

    options.forEach(option => {
       let key = option[0]
       let value = option[1]
        car[key] = value
    })

    return car
 }

 console.log(makeCar("Toyota", "Corolla", ["colour", "Red"], ["Year", 2020]));
 console.log(makeCar("Ford", "Fiesta", ["Color", "Blue"], ["Sunrrof", true]));
 
 




