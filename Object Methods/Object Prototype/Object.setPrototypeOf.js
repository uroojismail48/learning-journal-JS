const person = {
    greet(){
        console.log("Hello")
    }
};
const user ={
    name: "urooj"
};
Object.setPrototypeOf(user, person)
user.greet()
// node Object.setPrototypeOf.js
//Prototype Chain
const grandparent = {
walk(){
console.log("walking")
}};
const parent = {

}
Object.setPrototypeOf(parent , grandparent)
const child  = {}
Object.setPrototypeOf(child, grandparent)
child.walk();