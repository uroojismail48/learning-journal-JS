//object mein new properties add hone se rokta hai.
//existing properties change ho sakti hain 
// existing properties delete ho sakti hain

const user = {
    name : "urooj",
    city : "Karachi"
};
Object.preventExtensions(user)
user.age = 26;
console.log(user) // age add nahi hui 
user.name = "Urooj ismail";
console.log(user.name); //changed 
delete user.city;
console.log(user) //deleted
//Check Karna Object Extensible Hai Ya Nahi
const user2 = {
    name : "urooj",
    city : "Karachi"
};
console.log(Object.isExtensible(user2)); //true


