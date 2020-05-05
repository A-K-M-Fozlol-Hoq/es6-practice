function doubleIT(num){
    return num*2;
}

const doubleIt = function (num){
    return num*2;
}

const doubleit = function  myFunction(num){
    return num*2;
}

const DoubleIT = num => num*2;
const add = (x,y) => x+y;
const giveme5 = () => 5;

let n1= doubleIT(2);
let n2= doubleIt(3);
let n3= doubleit(4);
let n4= DoubleIT(5);
let n5= add(1,2);
let n6= giveme5();
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
const add2 = (x,y=10) => x+y; //ninja technique , see trmplate_string
let n7= add2(1,2);
let n8= add2(1);
console.log(n7);
console.log(n8);

const doMath =(p,q)=>{
    let add=p+q;
    let sub=p-q;
    return add*sub;
}
let result = doMath(2,1);
console.log('result= ',result);