// let str = 'test';
// console.log(str[2]);

//객체 리터럴 방식으로 str객체 생성, 생성자 함수...

/* let str ={
    name: '철수',
    age: 30,
    gender: "남자"
}
console.log(typeof str);
console.log(str.name);
console.dir(str['age']);

str.gender = "여자";

console.log(typeof str);
console.log(str.gender);

str.major = '백수';
console.log(str.major); */

// function mfunction(x,y){
//     consol.log (x * y);
// }
// function nfunction(x,t){
//     return x * y;
// }

// /* let result = function(){
//     return 5 * 10;
// } */

// let result = () => {
//     return 5 * 8;
// }

// console.log(result());
// console.log(mfunction(10,30));

const person = {
    firstname : "철수",
    lastName : "안",
    age : 60,
    fullName : function(){
        return this.lastName+ "" + this.firstname
    }
}
const result = "나이는 " + person.age + "이며 이름은 " + person.fullName() + "이다.";
console.log(result);