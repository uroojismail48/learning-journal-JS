// node Object.is.js
//Object.is() do values ko compare karta hai.
console.log(Object.is(5, 5)); //true
console.log(Object.is(5, 10)); //false
//  === vs Object.is()

console.log(NaN === NaN); //false
console.log(Object.is(NaN, NaN)); //true
console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); //false

const obj1 = {name: "Ali"};
const obj2 = {name: "Ali"};
console.log(Object.is(obj1, obj2)); //false
// kese : Objects reference type hote hain.
// Memory addresses different hain.

const obj1 = {name: "Ali"};
const obj2 = obj1;
console.log(Object.is(obj1, obj2)); //true

