/* 1. 글자 또는 숫자를 거꾸로 반전 시키는 함수를 작성하라.

  예) 32243  === > 34223,  안녕하세요 ===> 요세하녕안 */

  function reverse_str(str){
    str += "";
    return str.split("").reverse().join("");
    
  }
  console.log(reverse_str("안녕하세요? 반갑습니다."));
  console.log(reverse_str("123456"));