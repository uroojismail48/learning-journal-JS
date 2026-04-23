const ali = new Promise((resolve) => setTimeout(() => resolve("Chai ready "), 1000));
// const ahmed = new Promise((resolve) => setTimeout(() => resolve("Samosa ready"), 2000));
const ahmed = new Promise((_, reject) => setTimeout(() => reject("Ahmed nahi aaya "), 2000))
const sara = new Promise((resolve) => setTimeout(() => resolve("Table ready "), 1500));

Promise.all([ali, ahmed, sara])
  .then((results) => {
    console.log(results);

  })
  .catch((error) => {
    console.log("Kisi ne kaam nahi kiya:", error);
  });
