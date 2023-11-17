function createPromise(){
    return new Promise(function exec(resolve,reject){

        setTimeout(function f(){
            console.log('timer done');
            reject(10);
        }, 3000)
    })
}

async function consume(){
    try{
  console.log("inside function");
  const response=await createPromise();  //await appko apkai asyncronous function sai bahar throw kartha hai
  console.log("response is ", response);
  console.log('hii');
    }
    catch(err){
        console.log('handled');
    }
    }


console.log('start')
    
    consume();
    console.log('end');