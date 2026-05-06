const config = {theme : "dark"};
Object.freeze(config) //it freezes the object
config.theme = "light"; //doesnt change
console.log(config.theme) //still dark
