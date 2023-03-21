//5. 문자열을 받아 문자열 내의 모음의 갯수를 출력하는 함수를 작성하라.
//정규표현식

function solution(str){
    let vowel_list = "aeiouyAEIOUY";
    let vconunt = 0;
    for(var x = 0; x < str.length; s++){
        if(vowel_list.indexOf(str[x]) != -1){
            vconunt += 1;
        }
    }
    return vconunt;
}
