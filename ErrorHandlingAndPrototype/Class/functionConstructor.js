function product(n,p,r){
    this.name=n;
    this.price=p;
    this.rating=r;
    // return 10;
    // return{x:10 , y:20}

}

const p=new product('iphone',10020,7);
console.log(p);


// this keyword is different in js than other languague
//this keyword refers to the context where we called 
//in the constructor also
// if you return primitive it is ignored and we return object referred by this 


// This theory isz not applicable with arrow function