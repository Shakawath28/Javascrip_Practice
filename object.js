// var car={
//     brand:"Tesla",
//     price:10000000,
//     country: "USA",
//     list:[2,3,4,5],
//     strat: function(){

//         return brand
//     }
// }
// car.brand="BMW"
// console.log(car.brand)

///////////Method Of Object

// var calculator={
//     add: function(a,b){
//         return a+b
//     },

//     subtract: function(a,b){
//         return a-b
//     },

//     multiply: function(a,b){
//         return a*b
//     },

//     devide: function(a,b){
//         return a/b
//     }
// }

// var prompt = require("prompt-sync")();
// var num1=Number(prompt("Enter the first number: "))
// var num2=Number(prompt("Enter the second number: "))

// function processingUserinput(num1,num2){

//     var sum=calculator.add(num1,num2)
//     var subtraction=calculator.subtract(num1,num2)
//     var multiplied=calculator.multiply(num1,num2)
//     console.log("Sum is: ",sum,"\n","Subtraction is: ",subtraction, "\n", "Multiply is", multiplied)

// }

// processingUserinput(num1,num2)

////////

var person={
    name:"Jhon",
    age: 30,
    greet: function(){

        return "Hello! My name is "+ this.name

    },
    personAge: function(a,b){
        var sum=a+b
        console.log("Sum is ",sum)
        return "Your age is "+  this.age
    }

}

person.name="Calvin"

console.log(person.greet())
console.log(person.personAge(4,6))



// var name="raihan"
// function greet(name){
//     return name
// }
// console.log(greet())