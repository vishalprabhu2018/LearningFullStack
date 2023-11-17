/*
1. Type Conversion.

Write a function called convertToNumber that takes a string as an argument and returns the equivalent
number. If the string cannot be converted to a number, the function should return the string "Invalid number".
Use error handling in javascript to achieve this output.

*/

String.prototype.convertToNumber=function (){
    try {
        let num= Number(this);
        if (Number.isNaN(num)){
         throw new Error(`Invalid Number`);
        }
           return num;
    } catch (error) {
        console.log(`${error} `)
    }
}


console.log("123".convertToNumber());