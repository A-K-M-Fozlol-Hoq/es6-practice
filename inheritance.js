class Parent{
    constructor(){
        this.fathername="Mozakker";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;
    }
    getfullname(){
        return this.fathername+" "+this.name;
    }
}
const baby1= new Child('metul');
const baby2= new Child('Fozlol');
console.log(baby1);
console.log(baby2);
console.log(baby1.getfullname());