const greenAir = ["교대", "방배", "강남"];
const yellowAir = ["미금", "정자", "수서"];

//splice, pop, shift, push, unshift

/* let rs = greenAir.splice(2, 1, "서초", "역삼"); //2번 인덱스 부터 1개 //splice는 배역 자체를 변화 시킨다.
console.log(greenAir, rs); */

let rs = yellowAir.pop(); 
console.log(yellowAir, rs); //rs는 수서

let rs2 = yellowAir.shift();
console.log(yellowAir, rs2); // rs2는 미금

yellowAir.push(rs);
yellowAir.unshift(rs2);
console.log(yellowAir);