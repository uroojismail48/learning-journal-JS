const animal  = {speak() {return "....HELLO WORLD"}}
//Object k andr function jo return krrha hai value
const dog = Object.create(animal)
console.log(dog.speak())
//...HELLO WORLD