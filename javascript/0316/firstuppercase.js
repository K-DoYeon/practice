/* 4. 문자열을 받아서 각 단어의 첫자를 대문자로 출력하는 함수를 작성하라.

  예) the quick brown fox ==> The Quick Broun Fox */

  function uppercase(str){
    let arr = str.split(" ");
    let newarr = [];
    
    for(let i = 0; i < arr.length; i++){
        newarr.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1))
    }
    return newarr.join(' ');
  }

  console.log(uppercase("the quick brown fox"));