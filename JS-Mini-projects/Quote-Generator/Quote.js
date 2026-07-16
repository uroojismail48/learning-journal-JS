
const bb = document.querySelector(".bb")
const aa = document.querySelector(".aa")
const btn = document.getElementById("btn")
const api = " https://dummyjson.com/quotes/random"

function getQuote() {
    try {
        fetch(api).then(res => res.json()).then(data => {
            aa.innerHTML = `${data.author} says`
            bb.innerHTML = `${data.quote} `
        }
        )
    }catch(error)
    {
 quote.innerText = "Failed to load quote.";
        author.innerText = "";+
        console.error(error);
    }
}

btn.addEventListener("click" , getQuote )