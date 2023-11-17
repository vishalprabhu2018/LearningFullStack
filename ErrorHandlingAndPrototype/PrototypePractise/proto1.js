const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  myObject.greet(); // Greetings from Madrid
  
  console.log(myObject.toString());   //acess the toString from the protope of myObjet

 console.log(Object.getPrototypeOf(myObject));// to get the prototype of myObject 

 