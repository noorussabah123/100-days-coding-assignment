// Day 2
// Question 1: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
//"Albert Einstein once said, “A person who never made a mistake never tried anything new.”"


let famousPerson: string = "Once Wintson Churchill said: Success is going from failure to failure without loss of enthusiasm"

console.log(`"${famousPerson}"`);

// Question 2: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.


let famous_person: string = "Thomas A. Edison";

let quote: string = `${famous_person} once said: "The secret of success is focus of purpose"`

console.log(quote);


// Question 3: Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.


let person_name: string = "\t\n Noor \t\n"

console.log(person_name);
console.log(person_name.trim());


