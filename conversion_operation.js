let x = 32

console.log(typeof x)

let y = String(x)    // Convert the datatypes 
let z = Number(y)
console.log(typeof y)
console.log(y)
console.log(typeof z)


// "32" => 32
// "32abc" => Not an Number (NaN)
// true => 1
// false => 0

let bool = "e"
let bool2 = Boolean(bool)
console.log(bool2)

// 1 => true
// 0 => false
// "" => false
// "abc" => true
