class Car{
    constructor(company,model,year){
        this.company=company;
        this.model=model;
          this.year=year;
    }
    getDescription(){
        return(`This is a ${this.company} ${this.model} ${this.year}`)
    }


}

const myCar=new Car('skoda','g5','2022');
console.log(myCar.getDescription());
