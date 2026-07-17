async function getRate() {

    const fromCurrency = from.value.toLowerCase();
    
    const ToCurrency = to.value.toLowerCase();
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    const res = await fetch(url)
    const data = await res.json();
    const rate = data[fromCurrency][ToCurrency];
     if(Number(amount.value <= 0) ){
        amount.value = 1
    }

 const total = amount.value * rate

    rr.innerHTML = `${amount.value} ${from.value} = ${total.toFixed(2)} ${to.value}`;

}

const amount = document.querySelector("input");
const rr = document.querySelector(".rr"); 
const selects = document.querySelectorAll("select");
selects.forEach((select) => {
    for (let code in countryList) {
        let option = document.createElement("option");
        option.value = code;
        option.innerText = code;
        select.appendChild(option);
    }
});
const fromimg = document.querySelector("#fromimg")


   
const from = document.getElementById("from")

from.addEventListener("change", () => {
    const country = countryList[from.value];

    fromimg.src = `https://flagsapi.com/${country}/shiny/64.png`;
});
const to = document.getElementById("to");
const toimg = document.querySelector("#toimg")
to.addEventListener("change", () => {
    const country = countryList[to.value];

    toimg.src = `https://flagsapi.com/${country}/shiny/64.png`;
});
from.value = "PKR";
to.value = "JPY";
fromimg.src = `https://flagsapi.com/${countryList[from.value]}/shiny/64.png`;

toimg.src = `https://flagsapi.com/${countryList[to.value]}/shiny/64.png`;
let btn = document.querySelector(".btn")
btn.addEventListener("click", getRate)

getRate();