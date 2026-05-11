// Sirf top-level properties copy hoti hain.

const user ={
      name: "Ali",
      address: {
        city: "Karachi"
}
}
const copy = {...user}
copy.name = "Jamaica";
console.log(user.name);
console.log(copy.name);