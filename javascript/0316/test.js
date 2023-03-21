/* 1. 글자 또는 숫자를 거꾸로 반전 시키는 함수를 작성하라.

  예) 32243  === > 34223,  안녕하세요 ===> 요세하녕안 */

  const str = "hello"
  const re = str.split('').reverse().join('')

  console.log(re);
 

/* 2. 문자열의 모든 조합을 출력하는 함수를 작성하라.

  예) dog  ==> d, o, do, g, dg, og, dog */

  const pat = "dog"
  const sl = pat.split('')
  let a = 0;

  for (let s = 0; s < 4; s++){
    for(let i= 0; i < 4; i++){
        a = sl[s] + sl[i]
      }
  }
  

  const su = sl[0]+sl[1]

  
  console.log(a);

//3. 입력한 문자를 알파벳 순으로 정렬하여 출력하는 함수를 작성하라.
const en = "javascrpit"
const rs = en.split('').sort()

console.log(rs)
 

/* 4. 문자열을 받아서 각 단어의 첫자를 대문자로 출력하는 함수를 작성하라.

  예) the quick brown fox ==> The Quick Broun Fox */

  const list = "the quick brown fox"
  const rs2 = list.charAt(0).toUpperCase();
  const rs3 = list.slice(1)

  console.log(rs2 + rs3)
 

//5. 문자열을 받아 문자열 내의 모음의 갯수를 출력하는 함수를 작성하라.