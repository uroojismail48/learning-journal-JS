const hospital1 = Promise.reject("Hospital 1: Nahi hai ");
const hospital2 = Promise.resolve("Hospital 2: Mil gaya ");
const hospital3 = Promise.resolve("Hospital 3: Mil gaya ");

Promise.any([hospital1, hospital2, hospital3])
  .then((result) => console.log(result)) 
  .catch(() => console.log("Kisi ke paas nahi "));

