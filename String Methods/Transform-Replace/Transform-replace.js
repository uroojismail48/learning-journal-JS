const str  = "HEllo im a dev"
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.replace("hello" , "hi" )) // — sirf pehla
console.log(str.replaceAll("l"  , "L"))//— sab replace
console.log(str.replace(/world/i, "Hi"))//   — regex se
console.log(str.normalize())// Unicode normalize karo
// node Transform-replace.js