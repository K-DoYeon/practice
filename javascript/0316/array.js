//3. 입력한 문자를 알파벳 순으로 정렬하여 출력하는 함수를 작성하라.

function arr(str){
    return str.split('').sort().join('');
}
console.log(arr("안녕하세요. 반갑습니다."));