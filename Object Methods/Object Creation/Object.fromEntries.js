//Q! Is array of pairs ko ek object mein convert karo:

const pairs = [["name","Ahmed"], ["age",22], ["city","Karachi"]]
const obj = Object.fromEntries(pairs)
console.log(obj)
// node Object.fromEntries.js