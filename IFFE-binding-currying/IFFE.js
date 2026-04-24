(function () {
    console.log("iffe method running...")
})();

//ARROW K STH
(() => {
  console.log("Arrow iffe running...");
})();

//arrow k sth 
((name, age) =>{
    console.log(`name : ${name}, age : ${age}`)
})("UROOJ" , 20);

//////////////
//IFFE METHOD LETTING VAR PLAY TO 10 , NOT 3,3,3 BUT 123 RESULT
for (var i = 0; i < 10; i++) {
    ( function(j){
  setTimeout(function() {
    console.log(j); 
  }, 1000);
    })(i)
}