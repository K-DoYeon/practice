const dt = new Date();
// console.log(dt);

//날짜 관련 메서드
 const nyear = dt.getFullYear(); //연도
// console.log(nyear);
const nMonth = dt.getMonth() +1 ; //배열 [0,1,2,~11];
// console.log(nMonth);
// const nDate = dt.getDate(); 
// 시간 getHours
// 분 getMinutes
// 초 getSeconds
// 밀리초(1/1000초) getMilliseconds();

// const nHours = dt.getHours();
// console.log(nHours);

// const nTime = dt.getTime();

/* const nDay = dt.getDay(); 
console.log(nDay); */

// `${변수명} 문자열 ${변수명}""`;

//요일
// const nDay = dt.getDay();
// let nnDay;
// switch(nDay){
//     case 0 :
//         nnDay = "일";
//         break;
//         case 1 :
//             nnDay = "월";
//             break;
// } 

// if(nDay == 0){
//     nnDay = "일";
// }else if(nDay == 1){
//     nnDay = "월";
// }

// const myDay = ["일", "월", "화", "수", "목", "금", "토"];
// const nDay = dt.getDay();
// MyDay[nDay];

// const nowDate = `오늘은 ${nyear}년 ${nMonth}월 ${nDate}일 ${myDay[nDay]}요일 ${nHours}시 입니다`;
// console.log(nowDate);

//2023.2.7화요일 00시

/* const nYear = dt.getFullYear();
console.log(nYear);
const nMonth = dt.getMonth() +1 ;
console.log(nMonth);
const nDate = dt.getDate();
console.log(nDate);*/

// console.log(nTime);

// const olp = new Date(1988, 9, 17);
// const theMonth = olp.getMonth();
// const theDay = olp.getDay();
// console.log(`88올림픽이 열린 날은 ${myDay[theDay]}요일 이었습니다.`);

// const olp = new Date(1988, 9, 17);
// const dateDiff = dt.getTime() - olp.getTime();

/*
1초 = 1000;
1분 = 1000 *60;
1시간 = 1000 * 60 * 60;
1일 = 1000 * 60 * 60 * 24; */

// const theDay = olp.getDay();
// console.log(`88올림픽이 열린 날은 ${myDay[theDay]}요일 이었습니다.`);

// const result = Math.ceil( dateDiff / (1000*60*60*24));
// console.log(result);

//2023년 연말까지 남은 일수를 계산해 보세요.


const toDay = new Date();
const nowYear = toDay.getFullYear();
const theDate = new Date(nowYear, 11, 31);

const diffDate = theDate.getTime() - toDay.getTime();
const result = Math.ceil(diffDate/(60*60*24*1000));
console.log(`연말까지 ${result}일 남았다`);



 