// day 11
// Question 31: No Users: Ensure your user list isn’t empty.
var userName = [];
if (userName.length === 0) {
    console.log("We need some users");
}
else {
    // greet users
}
// Question 32: Checking Usernames: Ensure uniqueness in usernames.
var currentUsers = ["admin", "user1", "user5", "user7"];
var newUsers = ["User1", "user6", "admin", "user4"];
newUsers.forEach(function (newusers) {
    if (currentUsers.some(function (currentusers) { return currentusers.toLowerCase() === newusers.toLowerCase(); })) {
        console.log("".concat(newusers, " will need to enter new username"));
    }
    else {
        console.log("".concat(newusers, " is available"));
    }
});
// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
