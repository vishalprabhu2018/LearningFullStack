class complexNum{
#real;
#img;

constructor(r,i){
  this.#real=r; 
  this.#img=i;
}

display(){
    console.log(this.#real,"+ i",this.#img);
}

get real(){
    return this.#real;
}

get img(){
    return this.#img;
}
addComplexNum(c){
  this.#real+=c.real;
  this.#img+=c.img; 
}
}

const c1=new complexNum(2,3);
c1.display();
const c2=new complexNum(4,5);
    c1.addComplexNum(c2);
    c1.display();

