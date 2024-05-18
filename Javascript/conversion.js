let score="33abc"
console.log(typeof(score))
let value=Number(score) // score is converted to number
console.log(typeof(value))
console.log(value)
let a=null
let b=undefined
console.table([a,b])
// "33"----> 33
// "33abc"---->Nan print hoga value and type hamara number hi rahega
// "true"---->1

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(isLoggedIn)
console.log(booleanIsLoggedIn)

// Converting Number into string
let an=33
let r=String(an)
console.log(typeof r)


