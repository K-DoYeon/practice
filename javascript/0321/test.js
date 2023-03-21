//1. 임의의 세 개의 정수중 가장 큰 정수를 찾는 코드를 작성하라.

/* let a = 1;
let b = 2;
let c = 3;

console.log(Math.max(a,b,c)) */

/* function max_num(x, y, z){
    let max_val = 0;
    if(x > y){
        max_val = x;
    }else{
        max_val = y;
    }if(z > max_val){
        max_val = z;
    }
    return max_val;
}
console.log(max_num(10, 30, 99)); */
 

//2. 임의의 두 개의 정수중 100에 가까운 정수를 찾는 코드를 작성하라.

/*  let a = 100;
 let b = 100;
function soultion(a,b){
 if(Math.abs(100 - a) < Math.abs(100 - b)){
    return a;
 }else if(Math.abs(100 - a) > Math.abs(100 - b)){
    return b;
 }else{
    return false;
 }
}
console.log(soultion(a,b)); */


//3. 두 숫자가 40~60범위에 있는지 아니면 70에서 100의 범위에 있는지 확인하는 코드를 작성하라.

/* let a = 70;
let b = 5;

function soultion(a,b){
    if(a >= 40 && a <= 60 && b >= 40 && b <= 60){
        return "40~60범위에 있습니다."
    }else if(a >= 70 && a <= 100 && b >= 70 && b <= 100){
        return "70~100범위에 있습니다."
    }else{
        return false;
    }
}
console.log(soultion(a,b)); */
 

//4. 40~60범위에 있는 정수 중 큰 수를 찾는 코드를 작성하라.

/*  let a = 50;
 let b = 40;

 function soultion(a,b){
    if(a >= 40 && a <= 60 && b >= 40 && b <= 60){
        return Math.max(a,b)
    }else{
        return false
    }
 }

 console.log(soultion(a,b)); */

//5. 임의의 문자열에서 두 번째에서 네 번째위치에 문자가 있는지 확인하는 코드를 작성하라.

/*  const a = "javascript";

 let b = a.slice(2,5);

 function soultion(b){
    if(b.indexOf(" ") == 1){
        return false;
    }else{
        return true;
    }
 }
 console.log(soultion(b)); */

/*  function soultion(str,s){
    let ok = false;
    for(let i = 0; i < str.length; i++){
        if((str.charAt(i) == s) && ( i >= 1 && i <= 3)){
            ok = true;
            return ok;
        }
    }
    return ok;
 }

 console.log(solution("JavaScript","a")); */

//6. 임의의 세개의 정수중 마지막 숫자가 같은지 확인하는 코드를 작성하라

 /* function solution(x, y, z){
    if((x > 0) && (y > 0) && (z > 0)){
       return (x % 10 == y % 10 && y % 10 == z % 10 && x % 10 == z % 10)
    }else{
        return false;
    }
 }

 console.log(solution(101,92,81)); */

/* 7. 영어로 된 문자열에서 처음 세개의 문자를 소문자로 변환하여 출력하는 코드를 작성하라. 

   단, 문자열의 길이가 3보다 작으면 모두 대문자로 출력하라. */

   /* function soultion(str){
    if(str.length < 3){
        return str.toUpperCase();
    }
    const f_part = (str.substring(0, 3)).toLowerCase();
    const b_part = str.substring(3, str.length);
    return f_part + b_part;
   }

   console.log(soultion("Python"));
   console.log(soultion("hi"));
   console.log(soultion("JAVASCRIPT")); */

 

//8. 여러 과목의 시험점수를 배열로 받아 평균에 따라 A, B, C, D, ,F 등급을 부여해 출력 시켜라.

 /* 
  */

//9. 임의의 두 정수의 합이 50~80 이면 65를 반한하고 그렇지 않으면 80을 반환하라.

 

//10. 임의의 두 정수 중 하나가 8인지 또는 두 정수의 합 또는 차가 8인지 확인하는 코드를 작성하라.

 

//11. 임의의 세 정수를 받아 세 개의 숫자가 모두 같으면 30을 반환하고 두 숫자만 같으면 40을 반환하며 모두 다르면 20을 반환하라.

 

//12. 임의의 문자를 입력하면 문자를 뒤집어 출력하는 코드를 작성하라.

  let str = "가나다라마바사";
  str = str.split("").reverse().join("");
  console.log(str);

//13. 임의의 두 숫자중 하나만 7또는 11의 배수가 되는지 확인하는 코드를 작성하라.

 

//14. 임의의 두 정수중 하나가 15이거나 합계 또는 차가 15이면 true를 반환하는 코드를 작성하라.

 

//15. 임의의 문자열에서 각 단어의 첫 자를 대문자로 출력 시켜라.