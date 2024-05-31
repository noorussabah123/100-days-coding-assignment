// day 11

import { log } from "console";

// Question 31: No Users: Ensure your user list isn’t empty.

let userName: string[] = []

if (userName.length === 0) {
    console.log("We need some users");
    
} else {
    // greet users
}


// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let currentUsers: string[] = ["admin", "user1", "user5", "user7"]

let newUsers: string[] = ["User1", "user6", "admin", "user4"]

newUsers.forEach(newusers => {
    if(currentUsers.some(currentusers => currentusers.toLowerCase() === newusers.toLowerCase())) {
        console.log(`${newusers} will need to enter new username`);
        
    } else {
        console.log(`${newusers} is available`);
        
    }
})


// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let numbers: number[] = [1,2,3,4,5,6,7,8,9,10]

numbers.forEach(number => {
    let suffix = "th"
    if (number === 1) {
        suffix = "st"
    } else if(number === 2) {
        suffix = "nd"
    } else if (number === 3) {
        suffix = "rd"
    }
        console.log(`${number}${suffix}`);
        
})