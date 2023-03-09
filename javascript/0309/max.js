//1. 세 개의 정수중 가장 큰 수를 찾는 코드를 작성하라.
/* function max_to_three(x,y,z){
    let v = 0;
    if(x > y){
        v = x;
    }else{
        v = y;
    }
    if(z > y){
        v = z;
    }
    return v;
}

function max_to_three(x,y,z){
    const arr = [x, y, z]
    let v = -Infinity;
    for(let i = 0; i<arr.length; i++){
        if(v < arr[i]){
            v = arr[i];
        }
    }
    return v;
}*/
function max_to_three(x,y,z){
    return Math.max(x,y,z);
}
console.log(max_to_three(50,20,40)) 

