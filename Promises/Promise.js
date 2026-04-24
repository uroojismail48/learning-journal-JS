const myPromise = new Promise((resolve, reject) => {

  let success = true;
//  let success = false;
  if (success) {
    resolve("ho gaya :) ");
  } else {
    reject("Nhi howa :(");
  }
});
myPromise .then((result) => (console.log(result)))
  .catch((error) => console.log(error)); 