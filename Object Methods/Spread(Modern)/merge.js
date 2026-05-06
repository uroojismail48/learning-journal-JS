const obj1 = {user1 : "user1", age1 : 21};
const obj2 = {user2 : "user2", age2 : 28};
const merged = {...obj1, ...obj2};
console.log(merged)
//shallow copy karta hai
//same keys overwrite hoti hain
//deep merge nahi karta