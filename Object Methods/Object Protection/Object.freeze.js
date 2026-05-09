const config = {theme : "dark"};
Object.freeze(config) //it freezes the object
config.theme = "light"; //doesnt change
console.log(config.theme) //still dark
//q 1  config object ko lock karo taake koi bhi value change na ho sake:

const config1 = { theme: "dark", lang: "en" };
config1.theme = "light"; // yeh kaam nahi karna chahiye

console.log(Object.freeze(config))
// node Object.freeze.js