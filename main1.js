// function greet(){
//     console.log("Hello i am Robot")
// }

// greet()


//parameter 
 function sum (a , b) {
     return a + b;
 }

 var total = sum(5 , 10)
 console.log(total)

//recursion 

function factorical(n) {
    if ( n  === 1) {
        return 1;
    }
    console.log(n)
    return n* factorical(n-1)
}

console.log(factorical(5))


let a = true;
let b = false;

console.log(a && b)   //both values are true  then answer is ture and if oone value is true and one value is false then answer is false 
console.log (a||b)    //both value are false then answer is false , if answer is true and one is false so the answer is true 

