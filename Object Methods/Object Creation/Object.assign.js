const obj1 = { a: 1 };
const obj2 = { b: 2 };
const val = (Object.assign(obj1 , obj2))
console.log(val)
const copy = Object.assign({}, val);
console.log(copy)

// val { a: 1, b: 2 };
//  Copy{ a: 1, b: 2 };