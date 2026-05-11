// JavaScript mein har object kisi na kisi dusre object se inherit karta hai.
// Us inherited object ko prototype kehte hain.
const user = {};
console.log(Object.getPrototypeOf(user)); //[Object: null prototype] {}
//    node Object.getPrototypeOf.js
const animal = {
    eats : true
};
const dog = Object.create(animal)
console.log(Object.getPrototypeOf(dog)) //true
