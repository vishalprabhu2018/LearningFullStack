let myHeros=['thor','spiderman'];
let dcHeros=['batman','flash','superman'];

let heropower={
    thor:"hammer",
    spiderman:"sling",

    getSpidermanPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`)
    }

}
// heropower.getSpidermanPower();


Object.prototype.vishal=function(){
    console.log(`Vishal is present in all object`)
}

console.log(myHeros.vishal());
console.log(heropower.vishal());

Array.prototype.heyVishal=function(){
    console.log('Vishal says hi')
}
console.log(myHeros.heyVishal());
// console.log(heropower.heyVishal());  this gives us a error


//inheritance

const user={
    name:"top name",
    email:"top@gmail.com"
}

const teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:true
}

const TAAssistant={
    makeAssignment: "js assignment",
    fulltime:true,
    __proto__:TeachingSupport   // old method
}

//Teacher.__proto__=user;  old method
console.log(TAAssistant.isAvailable)

Object.setPrototypeOf(TeachingSupport,teacher);

console.log(TeachingSupport.makeVideo)


String.prototype.truelength=function(){
    console.log(`True length is ${this.trim().length}`);
}

"hitesh   ".truelength();
"vishal    ".truelength();