// day 19
// Question 55: Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var numbers = [1, 2, 3, 4, 5];
var doubleNumbers = numbers.map(function (number) { return number * 2; });
console.log(doubleNumbers);
// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
var stringArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringArray);
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [88, 94, 72, 99, 53, 77];
var total = grades.reduce(function (total, grade) { return total + grade; }, 0);
var averageGrade = total / grades.length;
console.log(averageGrade);
