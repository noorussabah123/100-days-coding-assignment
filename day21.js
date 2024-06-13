// day 21
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicleTypes;
(function (vehicleTypes) {
    vehicleTypes[vehicleTypes["car"] = 0] = "car";
    vehicleTypes[vehicleTypes["trucks"] = 1] = "trucks";
    vehicleTypes[vehicleTypes["motorcycles"] = 2] = "motorcycles";
})(vehicleTypes || (vehicleTypes = {}));
console.log(vehicleTypes.car);
var student = {
    name: "Noor-us-Sabah",
    age: 22,
    courses: ["Math", "Physics", "English"]
};
console.log(student);
var circle = {
    kind: "Circle",
    radius: 5
};
var rectangle = {
    kind: "Rectangle",
    width: 10,
    height: 20
};
console.log(circle);
console.log(rectangle);
