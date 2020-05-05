function add_method1( n1, n2){
    return n1+n2;
}
let t1= add_method1(1,2);
console.log(t1);


function add_method2( n1, n2){
    n2=n2 || 10;
    return n1+n2;
}
let t2= add_method2(1,2);
let t3= add_method2(1);
console.log(t2);
console.log(t3);


function add_method3( n1, n2=20){
    return n1+n2;
}
let t4= add_method3(1,2);
let t5= add_method3(1);
console.log(t4);
console.log(t5);