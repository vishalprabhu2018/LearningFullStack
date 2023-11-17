//javascript by default is a synchronous language and a single tread languague  
//one tread means one execution flow,many tread means many execution flow

//event loop and call back queue

console.log('start')
setTimeout(function f(){
    console.log("timer done",)
},2000)
console.log('end');