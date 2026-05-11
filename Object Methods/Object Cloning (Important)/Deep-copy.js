const user = { name: "Ali", age: 25 };
//Q1 user object ki ek copy banao aur copy mein age ko 30 karo — original nahi badlna chahiye:
const copy = {...user,  age:30};
console.log("copy", copy)
console.log("copy", user.age)
console.log("user", user)
console.log("copy", copy.age)
// node Deep-copy.js
//Pure complete independent copy.
const user1 = {
  name: "Ali",
  address: {
    city: "Karachi"
  }
};

const copy1 = structuredClone(user1);
copy1.address.city = "Lahore"
console.log(user1.address.city);