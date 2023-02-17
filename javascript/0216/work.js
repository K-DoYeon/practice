//callback

function display(str){
    console.log(str);
}

function mySum(num1, num2, mycallback){
    let sum = num1 + num2;
    mycallback(sum);
}
let a = 21;
let b = 23;
mySum(a,b,display);