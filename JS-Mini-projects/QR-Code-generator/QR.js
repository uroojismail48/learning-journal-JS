  const box = document.querySelector(".box")
            const para = document.querySelector(".para")
                const img = document.querySelector("#img")
    const input = document.querySelector("#input")
    const word = input.value.trim().split(/\s+/);
    function qrcode (){
        
         if (input.value.trim() === ""){
            para.innerHTML = "⚠ Please enter text or a link";
            para.style.color = "#ffd54f";
            box.classList.remove("show-img");
            return;
        }else if (input.value === input.value){
            para.innerHTML = `"${input.value} QR Generated Successfully";`
            para.style.color = "green";
        }
          img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(input.value);
        box.classList.add("show-img")
       
    }
