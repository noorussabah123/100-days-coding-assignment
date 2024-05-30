// Day 6
// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
let guest = ["Maryam", "Hiba", "Shahnoor"];
console.log("Great news I have found a bigger dinner table");
guest.unshift("Ayesha");
guest.splice(guest.length / 2, 0, "Siddiqa");
guest.push("Sidra");
guest.forEach(guest => {
    console.log(`Hello ${guest}, would you like to join me for dinner?`);
});
// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
console.log("Unfotunately I can invite only two people for diinner");
while (guest.length > 2) {
    let removedGuest = guest.pop();
    console.log(`Sorry ${removedGuest}, I cant invite you for dinner`);
}
guest.forEach(guest => {
    console.log(`Hello ${guest}, would you like to join me for dinner?`);
});
guest.splice(0, guest.length);
console.log(guest);
// Question 18: Seeing the World: Think of at least five places you’d like to visit.
let places = ["Saudia Arab", "Germany", "New Zealand", "Switzerland", "Palestine"];
console.log("Original order", places);
console.log("Alphabetical order", [...places].sort());
console.log("Original order", places);
console.log("Reversed order", [...places].sort().reverse());
console.log("Original order", places);
places.reverse();
console.log("Reversed order", places);
places.sort();
console.log("Alphabetical order", places);
places.reverse();
console.log("Original order", places);
places.reverse();
console.log("Reverse Alphabetical order", places);
export {};
