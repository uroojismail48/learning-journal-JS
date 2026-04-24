const rider1 = new Promise((_, reject) => setTimeout(() => reject("Rider 1 nnh aya "), 1000));
const rider2 = new Promise((resolve) => setTimeout(() => resolve("Rider 2 pouhoncha"), 3000));
const rider3 = new Promise((resolve) => setTimeout(() => resolve("Rider 3 pouhuncha "), 2000));

Promise.race([rider1, rider2, rider3])
  .then((winner) => {
    console.log("Pehle aaya:", winner); 
  })
  .catch((error) => {
    console.log("Sab fail:", error);
  });