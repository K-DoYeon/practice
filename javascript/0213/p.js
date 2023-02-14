var count = 0;
myFunc();
let myFunc = function(){
    count++;
    console.log(count);
}

function myFunc(a,b){
    console.log("a + b의 값은" + (a+b) + "입니다");
}

function myFunc2(a,b){
    return a + b;
}
const result = myFunc2(5, 6);
console.log(result);