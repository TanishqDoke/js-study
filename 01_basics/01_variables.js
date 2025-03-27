const accountId=702855
let accountEmail='vshinde@gmail.com' // let has block scope 
var accountPassword="Tanishq"       // var has global scope so any changes in loop might affect the global variable
accountCity="Pune"

let accountState;

// Not allowed since it is declared as const.
//accountId=2134

// console.log(accountId)
 accountEmail="tdoke@gmail.com"
 accountPassword="Doke"
 accountCity="Mumbai"

 console.table([accountEmail,accountId,accountPassword,accountCity,accountState])



 // var scope

 var a=10
 {
    var a=25
    console.log(a)
 }
 console.log(a)

 // ------------------------------------------------------------------------------

 // let scope

 let b=25
 {
    let b=24
    console.log(b)
 }
 console.log(b)


 // ---------------------------------------

 // var can be redeclared
 var a=10
 var a=24

 //let can be updated but not redeclared

 let a=10
 a=25 // Allowed
 let a=25 // Not allowed