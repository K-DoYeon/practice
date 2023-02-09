const str ="Hello Thank you good luck to you";

//1. 인덱스 16에 저장된 문자를 출력하세요
    console.log(str.charAt(16));

//2. 문자열 왼쪽부터 제일 먼저 발견되는 you의 인덱스 값을 출력하세요.
    console.log(str.indexOf("you"));

//3. 문자열 인덱스 16이후에 첫 번째로 발견되는 you의 인덱스 값을 출력하세요.
    console.log(str.indexOf("you",16));

//4. 문자열 오른쪽부터 왼쪽방향으로 제일 먼저 발견되는 you의 인덱스 값.


//5. 문자열 인덱스 25부터 왼쪽 방향으로 제일 먼저 발견되는 you 인덱스 값


//6. 문자열 왼쪽부터 첫 번째로 발견되는 luck를 찾아 반환
    console.log(str.match("luck"));
    
//7. search로 you를 찾아 인덱스값 반환
    console.log(str.search("you"));

//8. 문자 인덱스 21부터 4글자를 반환
    console.log(str.substr(21,4)); //a부터 b의 갯수만큼

//9. 문자 인덱스 6부터 12까지 반환
    console.log(str.substring(6,12)); //a부터 b이전 까지

//10. 왼쪽부터 제일 먼저 발견된 you를 me로 바꾸시오.
    console.log(str.replace("you","me"));

    let t = str.split(" "); //문자열을 공백기준으로 나누어 t라는 배열로 만듬
    let tt = Array(); //공백 배열을 하나 만듬
    console.log(t);
    for(let i =0; i<t.length; i++){ //t배열의 크기만큼 루프를 돌리면서 you를 me로 바꿈
         tt[i] = t[i].replace("you","me"); //바꾼 변수를 배열 tt에 저장
    }
    console.log(tt.join(" ")); //배열 tt를 공백을 기준으로 합침