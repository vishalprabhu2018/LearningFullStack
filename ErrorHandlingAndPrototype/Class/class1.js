class Product{
    //properties-> variables -> data member
    // name;
    // price;
    // rating;
     #rating;   //private data member
     constructor(n,p, r){              //custom constructor
           console.log("calling the constructor")    //object bannai sai pahilai call hota hai
           this.name=n;
           this.price=p;
           this.#rating=r;    // this keyword refers to the calling contexts
 
           //return 10; if you are returning primitive then it will be avoided in constructor.
        //    return {x:0, y:20} if you return non primitive it will be returned.
     }

     static custom(){
        console.log("calling a static method");
     }

      //behaviour->function -> member function
    display(){
        console.log("this refers to ",this);
        console.log("displaying the current product", this.name, this.price,this.#rating);
    }
}

const p=new Product("iphone",50000, 4);   //new creates an empty plain object
// -> in the above piece of code we are calling the constructor method

p.name="samsung"
console.log(p);
p
console.log(p.rating);
p.display();

Product.custom();  // isko object kai sath call nahi kar saktai hai
