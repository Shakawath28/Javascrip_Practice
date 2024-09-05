///////No Parameter
// function greet() {
//     console.log("Hello!! Welcome")

// }
// var grt1=greet
// grt1()
/////////////Parameter passing

// function greet(name)
// {
//     console.log("Welcome!!",name)
    
// }
// greet("Alif")
// greet("Raihan")
// greet("hasina")

//////Return
// var prompt = require("prompt-sync")();
// var numb1=Number(prompt("Enter the first number: "))
// var numb2=Number(prompt("Enter the second number: "))
// function add(num1,num2) {
//     a=num1+num2
//     return a
// }
// c=add(numb1,numb2)
// var d=add(9,10)
// console.log("the addition of two number: ",d)
// console.log("the addition of two number by user: ",c)

// function add(num1,num2) {
//     return(num1+num2)
    
// }
// c=add(4,9)
// if(c==13)
// {
//     console.log("welcome")
// }
// else
// {
//     console.log("Not Allowed")
// }

///////////Default Parameter
// function greet(name="raihan") {
//     console.log("Welcome", name)
    
// }
// greet("Abir")

//////////Local and Global Scope
var num1=8
var number2=9
function multiply(a,b) {
    var num1=a
    var num2=b
    return num1*num2*number2
    
}
console.log(multiply(4,5))
console.log("Global Scope",num1,number2,num2)

////////////Method Chaining
// function add(a,b){
//     return a+b
// }

// function multiply(num1,num2){
//     return num1*num2
// }

// function calculate(k,l){
//     var addval=add(k,l)
//     var multival=multiply(k,l)
//     console.log(addval)
//     console.log(multival)
// }
// calculate(2,5)

/////////Call back function
// function add(num1){
//     return num1**2
// }

// function calculate(num1,num2,add) {
//     return add(num1)+num2
    
// }
// w=calculate(2,6,add)
// console.log(w)

//////////
// var prompt = require("prompt-sync")();
// var num1=Number(prompt("Enter the first number: "))
// var num2=Number(prompt("Enter the second number: "))

// function add(num1,num2){
//     return num1+num2
// }

// function sub(num1,num2){
//     return num1-num2
// }

// function multiply(num1,num2){
//     return num1*num2
// }

// function calculate(num1,num2,add,sub,multiply){
//     a=add(num1,num2)
//     b=sub(num1,num2)
//     c=multiply(num1,num2)
// }

// p=calculate(num1,num2,add,sub,multiply)
// console.log(a ,b, c)
