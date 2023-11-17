//line by line execution

function h(x,fn){
    //h->hof
    //fn->callback
    console.log(x*x);
    fn(x*x);
}

// h(5,function(){console.log('done with callback')});

h(10,exec);

function exec(n){
    console.log('The squared value is ',n)
}