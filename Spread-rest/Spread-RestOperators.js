const arr = [1,2,3];
const copy = [...arr];

console.log(arr)
console.log(copy)
////////////////////////
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log(merged)
///////////////////////////
const usser = { name: "Ali", age: 20 };
const updated = {...usser, age:22};
/////////////////////////////////
function sum(a, b, c) {
  return a + b + c;
}

const numms = [1, 2, 3];
sum(...numms)
/////////////////////////////
function sum(...numbers){
    return numbers.reduce((acc , num) => acc + num , 0)
}
console.log(sum(1, 2, 3, 4));

const nums = [10, 20, 30, 40];
const [first, ...rest] = nums;

console.log(first); // 10
console.log(rest);  // [20, 30, 40]

const user = {
  name: "Ali",
  age: 25,
  city: "Karachi"
};


const { name, ...otherInfo } = user;

console.log(name);       // Ali
console.log(otherInfo);  // { age: 25, city: "Karachi" }