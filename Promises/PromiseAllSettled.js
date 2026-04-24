const p1 = Promise.resolve("Ali pass ");
const p2 = Promise.reject("Ahmed fail ");
const p3 = Promise.resolve("Sara pass ");

Promise.allSettled([p1, p2, p3])
  .then((results) => {
    results.forEach((result) => {
      console.log(result);
    });
  });
