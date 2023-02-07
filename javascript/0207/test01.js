/* const tv = {
    com : "LG",
    size : "100inch",
    color : "white",
    price : "5,000,000원",
    start : function(){
       console.log( this.com + "의 " + this.size + "tv를 켭니다");
    } ,
    stop : function(){
        console.log( this.com + "의 " + this.size + "tv를 끕니다");
    }
}
// console.log(tv.com);
tv.start();
tv.stop(); */

/* function 이름(){
    실행식
}
이름(); */

// 생성자 함수 ---> new라는 키워드를 통해 함수를 불러옴

const tv = new Object();
tv.com = "LG";
tv.size = "100 inch";
tv.color = "white";
tv.price = "5,000,000원"
tv.start = function(){
    console.log(this.com + "의 " + this.size + "tv를 켭니다");
}

tv.stop = function(){
    console.log( this.com + "의 " + this.size + "tv를 끕니다");
}

//날짜 객체 ---> new date();
const thisDate = new Date();
console.log(thisDate);