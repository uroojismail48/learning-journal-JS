    const passwordbox = document.getElementById("pass")
        const length = 12
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lowerCase = "abcdefghijklmnopqrstuvwxyz"
        const number = "0123456789"
        const Chars = "!@#$%^&*()_+=}{:>?<~}"
        const allChars = upperCase + lowerCase + number  + Chars
        function CreatePass(){
          let password = ""
          password += upperCase[Math.floor(Math.random() * upperCase.length)]
             password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
                password += number[Math.floor(Math.random() * number.length)]
                   password += Chars[Math.floor(Math.random() * Chars.length)]
       
       while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
       }
       passwordbox.value = password

                }