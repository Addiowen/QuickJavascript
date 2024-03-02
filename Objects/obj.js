let myObj = {
    name: "owen",
    age: 30,
    colors: ["blue", "black", "yellow"], // you can add arrays in your object
    // we can also have an object inside an object
    car: {
        model: "BMW",
        Color: "maroon"
    }
}

console.log(myObj.name) // dot notation
console.log(myObj["name"]) // bracket notation
console.log(myObj.colors[0]) // access one element in the array inside the object
console.log(myObj.car.model) // access car model inside the object