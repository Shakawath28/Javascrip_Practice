// Padma,Meghna,Jamuna
// var ar1=["Padma","Meghna","Jamuna"]
// console.log(ar1[0])
// var ar1=[]
// ar1[0]="Padma"
// ar1[1]="Meghna"
// ar1[2]="Tista"
// ar1[3]="Karnaphuli"
// ar1[4]="Meghna"
// console.log(ar1.length)
// ar1[5]="Shurma"
// ar1[6]="Halda"
// ar1[10]="Matamuhuri"
// console.log(ar1.length)


//Array Properties and Method
//var riverlist=["Padma","Meghna","Jamuna"]
// var numList=[6,2,1,3,5,8,10]
// console.log(numList)
// var sortedNum=numList.sort()
// console.log("Sorted array is",sortedNum)
//console.log(riverlist.sort())

//Quiz
// var ar1=["rakib","shujan","asif","tariqul"]
// var ar2=ar1.sort()
// console.log(ar2[0])
//Quiz 2
// var ar=["Khulna","Barguna","Sylhet","Chattogram"]

// var ar1=ar.sort()
// console.log(ar1[3])

// var riverlist=["Padma","Meghna","Jamuna","Tista","Kortowa","Shurma"]
// var sort=riverlist.sort()
// //console.log("The length of the array is:", sort.length)
// for(var i=0; i<riverlist.length; i++)
// {
//     console.log(riverlist[i])
// }
// console.log("I am outside of loop")

//////////////// Adding array element

// var ar=[1,2,3,4,5,6]
// var ar2=[]
// for(var i=0;i<ar.length;i++)
// {
//     ar2[i]=ar[i]+1
// }
// console.log(ar2)
///////Push Method

// var ar=[1,2,3,4,5,6]
// var ar2=[]
// for(var i=0;i<ar.length;i++)
// {
//     ar2.push(ar[i]+1)
// }
// console.log(ar2)

// var riverlist=["a","b","c"]
// console.log(riverlist)
// riverlist.push("g")
// console.log(riverlist)

/////pop method
// var riverlist=["a","b","c","d"]
// riverlist.pop()
// console.log(riverlist)







//Looping arry Element
// var riverlist=["Padma","Meghna","Jamuna","Tista","Gomati"]
// var len=riverlist.length
// console.log("The length of the array is" ,len)
// for(var i=0; i< len ; i++)
//     {
//         console.log(riverlist[i])
//     }


////////// Userinput in Array

 // var prompt = require("prompt-sync")();
// var ar=[]
// for(i=1;i<6;i++)
// {
//     var a=Number(prompt("Enter a number:"))
//     ar.push(a)
// }
// console.log(ar)
// var ar1=[]


// for(var i=0;i<10;i++){
//     var a=Number(prompt("Enter a number: "))
//     ar1.push(a)
// }
// console.log(ar1)

// var ar2=[]
// for(i=0;i<4;i++)
// {
//     var r=prompt("Enter a River Name: ")
//     ar2.push(r)
// }
// console.log(ar2)

// ar=[7]
// for(i=1;i<5;i++)
// {
//     var userinput=Number(prompt("Enter a Number:"))
//     if (userinput==ar) {
//         console.log("Congrats!!It's matched in Your",i,"th attempt")
        
//     } 
//     else
//      {
//         console.log("Please Try Angain")
        
//     }
// }

///////////////2D Array
// var twoDAr = [[1,2],
//              [3,6],
//              [7,8]]

// console.log(twoDAr[2][1])

// var twoDAr=[[2,3],
//             [5,6],
//             [1,9]]
//  for(i=0;i<twoDAr.length;i++)
//     {
//         for(j=0;j<2;j++)
//         {
//             console.log(twoDAr[i][j])
//         }
//     }           

//////////Assignment

// mat = [[2, 7, 89, 6],
//        [90, 45,3, 7],
//        [78, 56, 4, 2]]
       
// var ar=[]
// for(i=0; i< mat.length; i++)
// {
//     for(var j=0; j<4 ; j++)
//     {
//         a=mat[i][j]
//         ar.push(a)
        
//     }
// }
// console.log(ar)

////2
// var mat=[[1, 2, 3],
//          [4, 5, 6],
//          [7, 8, 9]]
// console.log(mat)
// var ar=[ ]
// for(var i=0; i< mat.length; i++)
// {
//     for(var j=0; j<3 ; j++)
//     {
//         a=mat[i][j]
//         ar.push(a+1)
//     }
// }
// console.log(ar)

///3
// var prompt = require("prompt-sync")();
// var ar=[]
// for(i=0; i<5 ; i++)
// {
//  var a=Number(prompt("Enter a number: "))
//  ar.push(a)
// }
// console.log("Unsorted array",ar)
// console.log("Sorted array", ar.sort())
////4
// var prompt = require("prompt-sync")();
// var ar=[]

// for(i=0;i<5;i++)
// {
//     var userinput=Number(prompt("Enter a Number: "))
//     if (userinput%2==0) {
//         console.log("Even Number")
        
//     } else {
//         console.log("odd Number")
        
//     }
//     ar.push(userinput)
// }
// console.log(ar)