function createPromise(){
    return new Promise(function exec(resolve,reject){

        setTimeout(function f(){
            console.log('timer done');
            resolve(":resolve done");
        }, 3000)
    })
}

console.log('start');

//console.log(createPromise());

let x=createPromise();  //this x will act as a placeholder 



x.then(function f(value){
    console.log("Promise Done",value)  //this will execute after the resolve   
}).catch(function g(value){
    console.log("rejected ")
})


console.log('end'); 


for(let i=0; i<10000000; i++){}   //blocking piece of code

//Promises has 3 state pending,fulfilled,rejected