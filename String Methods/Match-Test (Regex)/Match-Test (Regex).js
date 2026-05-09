"hello123".match(/\d+/)         // ["123"]        — pehla match
"hello123world456".match(/\d+/g)// ["123","456"]  — sab matches
"hello".match(/xyz/)            // null

"hello123".matchAll(/\d/g)      // iterator — sarey matches detail se

/^\d+$/.test("12345")           // true   — pattern match karo
/^\d+$/.test("123ab")           // false