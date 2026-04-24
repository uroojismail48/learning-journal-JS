
//NORMAL FUNCTION
// function chai (pani , patti , cheeni , doodh){
// return  `${pani} + ${patti } + ${cheeni} + ${doodh}`
// }
// chai ("pani " , "doodh" , "cheeni")

// // Curried — ek ek karke
// function chai(paani) {
//   return function(doodh) {
//     return function(cheeni) {
//       return `${paani} + ${doodh} + ${cheeni} = Chai `;
//     };
//   };
// }
// chai("paani")("doodh")("cheeni"); 

//ARROW K STH
// const chai = (paani) => (doodh) => (cheeni) =>
//   `${paani} + ${doodh} + ${cheeni} = Chai `;
// chai("paani")("doodh")("cheeni"); 

///REUSEABLITY
const multiply = (a) => (b) => a * b;

const double = multiply (2);
const triple = multiply (3);
const ten = multiply (10);

console.log(double(5));
console.log(triple(5));
console.log(ten(5));


///REAL USE PRACTICE //discount SYSTEM
const applyDiscount = (discount) => (price) =>
    price - (price * discount) / 100;

const studentD = applyDiscount(20) //20% off 
const seniorD  = applyDiscount(30) //30% 
const specialD = applyDiscount(50) //50%

console.log(studentD(1000));  // 800  (20% off)
console.log(seniorD(1000));   // 700  (30% off)
console.log(specialD(1000));  // 500  (50% off)

