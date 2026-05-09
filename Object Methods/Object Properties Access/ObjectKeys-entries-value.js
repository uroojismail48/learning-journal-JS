const user = { name: "Ali", age: 25, city: "Karachi" };
console.log( "keys", Object.keys( user))
//[ 'name', 'age', 'city' ]
console.log( "Values" ,  Object.values(  user))
// ["ALi" , 25 , "karachi"]
console.log(   "Entries",    Object.entries( user))
//[ [ 'name', 'Ali' ], [ 'age', 25 ], [ 'city', 'Karachi' ] ]
//node ObjectKeys-entries-value.js



//////////////////////////////////////////////////////
//q1 Is object ki saari keys aur values alag alag print karo:
const student = { name: "Sara", age: 20, city: "Lahore" };
console.log("keys" ,   Object.keys(student))
console.log("Values" , Object.values(student))