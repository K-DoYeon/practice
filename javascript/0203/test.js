//break;
// const user = 15;

// switch(user){
//     case 15:
//         console.log("중학생");
//         case 18:
//         console.log("고등학생");
//         default:
//             console.log("일반인");
// }

// for(let i =0; i <10; i++){
//     console.log("출력");
//     console.log(i);
// }

// for(let i =0; i <10; i++){
//     if(i==6) break;
//     console.log(i);
// }

// continue는 그냥 넘김

//1부터 10까지의 수 중에 홀수만 출력하시오 단, continue문을 이용하시오.
// for (let i = 1; i <= 10; i++) {
//     if (i%2 === 0) continue;
//     console.log(i); 
//   }

//함수
// 함수이름();
// function 함수이름(매개변수){
//     console.log("물건출력");
// }
// console.log( sum(3));
// function sum(num){
//     // console.log( num + 5);
//     return num+1; //덧셈한거 가지고 빠져나가
// }
//전역 변수 (global variable)
var num = 10; 
function gNum(){
    var num = 20;//지역변수(local variable)
    console.log("함수 내부에서 변수 num을 확인한 결과" + num + "이 나옵니다.");
    // num = 20;
}
gNum();
console.log("함수 외부에서 변수 num을 확인한 결과" + num + "이 나옵니다.");


