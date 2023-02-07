/*
Math.abs(숫자) 숫자의 절댓값을 반환
Math.max(1, 3, 5, 6, 7); 가장 큰 값을 반환
Math.min(1, 3, 5, 6, 7); 가장 작은 값을 반환
Math.pow(숫자,제곱값); 숫자의 거듭제곱값을 반환
Math.sqrt(숫자) 숫자의 제곱근
Math.PI    (원주율)

Math.random() 0과 1사이의 난수
Math.round(숫자) 소수점 첫째 자리에서 반올림한 정수
Math.ceil(숫자) 소수점 첫째 자리에서 무조건 올림한 정수
Math.floor(숫자) 소수점 첫째 자리에서 무조건 내림한 정수
*/

// 1. 10,5,8,30 중 가장 큰 수를 구하라.
let a = Math.max(10, 5, 8, 30);
console.log(a);
// 2. 10,5,8,30 중 가장 작은 수를 구하라.
let b = Math.min(10, 5, 8, 30);
console.log(b);

//변수 num = 2.13215이다.
// 3. num을 반올림 한 수를 구하라.
const num = 2.13215;
let c = Math.round(num);
console.log(c);
//console.log(Math.round(num));
// 4. num을 소수점 첫째 자리 내림 한 수를 구하라.
let d = Math.floor(num);
console.log(d);
// 5. num을 소수점 첫째 자리 올림 한 수를 구하라.
let e = Math.ceil(num);
console.log(e);
// 6. 0부터 1사이의 난수를 발생시켜라.
let f = Math.random();
console.log(f);
// 7. 원주율 상수를 줄력하라.
let g = Math.PI;
console.log(g);
// 8. 0부터 30사이의 난수를 발생 시켜라.
let h = Math.floor(Math.random()*31);
console.log(h);

//console.log(Math.floor(Math.random()*31));

const weAre = ["강우성", "곽동우", "권현규", "김도연", "김민지", "김병기", "김원중", "김재정", "김지원", "김형준", "김형통", "박재윤", "서택상", "신종현", "신지원", "안강찬", "윤은비", 
"이성준", "이해빈", "이현건", "전여경", "정규진", "조원홍", "차명진", "최누리", "최인영", "최형윤", "허정현", "혼정원"];
console.log(Math.floor(Math.random()*31))