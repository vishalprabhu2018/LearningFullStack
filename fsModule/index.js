//This is a high level api gives data in a abstracted way


const fs=require('fs');

console.log('READ START');

//Asynchronous way to readFile
fs.readFile('./input.txt',function(err,data){
    if(err){
      console.log('err',err)
      return err;
    }
    console.log('data',data.toString());
    console.log('READ END')
    return data
})

console.log('OTHER STUFF');


//Synchronous way to readFile

let data=fs.readFileSync('input.txt');
console.log('Synchronous data',data.toString());
console.log('Read End')
console.log('Other Stuff')





