//q1 Is string ko reverse karo sirf string methods use karke:
const str = "Pakistan";
 const rev  = str.split("").reverse().join("")
console.log(rev)
//Q2 Is email se sirf username (@ se pehle wala hissa) nikalo:
//    node Questions.js
const email = "ali.khan@gmail.com";
 const e =  email.slice(0, email.indexOf("@"))
console.log(e)
//q3 Number 7 ko 5 digits ka string banao zeros se pad karke:
const num = 7;
const a = String(num).padStart(5, "0")
console.log(a)

  //q3   Is sentence mein sarey spaces ko hyphens se replace karo aur lowercase banao (URL slug banao):
   const title = "Hello World From Pakistan";
const b =    title.toLowerCase().replaceAll(" ", "-")
console.log(b)
//q4 Check karo ke yeh string valid email hai ya nahi (@ aur . dono hone chahiye):
 const users = [
   { name: "Ali",   city: "Karachi" },
   { name: "Sara",  city: "Lahore"  },
   { name: "Ahmed", city: "Karachi" },
 ];
 const d = users
  .filter(u => u.city === "Karachi")
  .map(u => u.name.toUpperCase());
console.log(d)