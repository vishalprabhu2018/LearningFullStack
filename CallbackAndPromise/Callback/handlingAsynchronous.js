console.log('start')
setTimeout(function f2(){
    console.log("timer done",)
},2000)
setTimeout(function f1(){
    console.log("timer done",)
},0)
console.log('end');

for(let i=0; i<10000000; i++){}