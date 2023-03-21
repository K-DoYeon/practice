/* 9. (코딩테스트 문제) 

   대문자와 소문자가 섞여있는 문자열 s가 있습니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution을 완성하시오.

   'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않는다. 

   예를 들어  s  가 pPoooyY 면 true 를 리턴하고 Padfyy면 false를 리턴한다. 

 

제한사항.

문자열 s의 길이 : 50이하의 자연수

문자열 s는 알파벳으로만 이루어져 있다. */

const en = "abc"
const le = en.match(/p/gi).filter(function(item){return item !== '';}).length;
const le2 = en.match(/y/gi).filter(function(item2){return item2 !== '';}).length;
const ma = en.match(/p/gi);
const ma2 = en.match(/y/gi);
let result = 0;

if(le == le2){
    result = true;
}else if(ma == null && ma2 == null){
    result = true;
}else{
    result = false;
}

console.log(result);
