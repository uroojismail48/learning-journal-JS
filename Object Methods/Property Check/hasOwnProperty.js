// const user = {name : "urooj", age : 21};
// user.hasOwnProperty("name"); 
// console.log(user.hasOwnProperty("name"))
// user.hasOwnProperty("toString");
// console.log(user.hasOwnProperty("toString"))
/////////////////////////////////////////////////
//Q 1 Check karo ke car object mein "model" key directly exist karti hai ya nahi (prototype se nahi):
const car = { brand: "Toyota", year: 2020 };
console.log(car.hasOwnProperty("model"))
console.log(car.hasOwnProperty("brand"))

//node hasOwnProperty.js