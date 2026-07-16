let box = document.getElementById("input") 
let h1 =  document.getElementById("h1") 
function go(){
 
    h1.style.color = "green"

    let birth = new Date(box.value)
    let today = new Date()
    let age = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth()  - birth.getMonth()

    if(month < 0 || (month === 0 && today.getDate() < birth.getDate()) ){
        age--
    }
       h1.innerHTML = `Your Age is ${age} Years`;
}