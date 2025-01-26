
var a = 10;
if (true) {
  var a = 20;
  console.log(a);
}
console.log(a);


let a = 10;
if (true) {
  let a = 20;
  console.log(a);
}
console.log(a);

let a = 10;
let a = 20;


var a = 10;
var a = 20;


for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.warn(i);
  }, 1000);
}

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    console.warn(i);
  }, 1000);
}

function add() {
  return 10 + 20;
}
console.log(add);

function  plus(a,b){
    return a+b
}
console.log(add(10,20));
console.log(add(20));



function sum(a,b=10){
return a+b
} console.log(add(10));


function someVal(){
    return 100;
}
function sum(a,b=10 ,c=someVal()){
    return a+b+c;
    } console.log(add(10));


function someVal(){
    return "first";
}
function sum(a,b= "middle" ,c=someVal()){
    return a+ " " +b+ " " +c;
    } console.log(sum("last"));

function main(a,b=main()){
    return a+b;
}
main();

function funName(){
    return "pookie";
}
let quote = "either you run the code or code or code runs you"
let by = "fatima"
let user = "peter"
x = 10;
y = 5;
console.log("either you run the code or code or code runs you " + "fatima");
console.log(`either you run the code or code or code runs you 
    fatima` );
    console.log(`either you run the code or code or code runs you 
        ${by} ${user} ${funName()} ${x+y}` );
