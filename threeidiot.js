const age=[12,23,34,3,2];
const age1=[42,53,64,53,42];
const age2=[54,3,45,34,5];
const allage= age.concat(age1).concat([1,2,3,3,4,5]).concat(age2);
console.log(allage);

const allage2= [...age,3,1,1,1,1,1,1,...age1,...age2];
console.log(allage2);
let m1=656;
let m2=345;
let m3=454;
const result1= Math.max(m1,m2,m3);
console.log(result1);

let arr=[23,34,45];
const result2= Math.max(...arr);
console.log(result2);

