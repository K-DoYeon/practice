/*
funtion 함수명(){
    자바스크립트코드
}

참조변수 = function(){
    자바스크립트코드
}

함수명();
참조변수명(); //호이스팅 안됨

myFunc(); //호이스팅(hoisting)

function myFunc(){
    블라블라
}
*/
var count = 0;

myFunc();

let myFunc = function(){
    count++;
    console.log(count);
}

myFunc();