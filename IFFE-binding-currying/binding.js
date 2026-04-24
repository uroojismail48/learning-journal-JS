//NORMAL CALLING THIS 
const urooj = {
    name : "urooj",
    greeting : function(){
        console.log(`mera naam ${this.name} hai`)
    } 
}
urooj.greeting()
//prblem 
const g = urooj.greeting;
g()//greeting undefined aya jb function bhr nikala

//FIXING THIS PROBLEMS using BIND()
const u = { name: "urooj" };
function greet() {
  console.log(`Assalam o Alaikum, ${this.name}!`);
}
const uroojgreet = greet.bind(u); // this = fix ho gaya
uroojgreet();
setTimeout(uroojgreet, 2000); // Baad mein bhi call



///call()
const user1 = {name: "user1" , city: "karachi"
}
const user2 = {name: "user2" , city: "Lahore"
}
function intro (age, job ){
    console.log(`${this.name} , ${this.city}, ${age} , ${job} `)
}
// intro.call(user1 , 25 , "devloper");
// intro.call(user2 , 20 , "designer");

//APPLY()
const info = [25 , "devloper"];
intro.apply(user1 , info);

//teen ek sth
const person = { name: "Ali" };

function gr(city, lang) {
  console.log(`${this.name} — ${city} — ${lang}`);
}

// bind  — naya function banao, baad mein chalao
const boundFn = gr.bind(person, "Karachi", "Urdu");
boundFn(); // "Ali — Karachi — Urdu"
// call  — turant chalao, arguments alag alag
gr.call(person, "Karachi", "Urdu"); // "Ali — Karachi — Urdu"
// apply — turant chalao, arguments array mein
gr.apply(person, ["Karachi", "Urdu"]); // "Ali — Karachi — Urdu"