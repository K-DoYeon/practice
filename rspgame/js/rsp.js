

//let random = Math.ceil(Math.random()*2)

function rps(n){
    let com = Math.ceil(Math.random()*3)
    if(n == 1){
        alert('가위' + com);
    }else if(n == 2){
        alert('바위' + com);
    }else{
        alert('보' + com);
    }
}