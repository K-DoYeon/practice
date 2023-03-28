(function(){
    const listAll = document.getElementsByClassName('list-all')[0];
    const cart = document.getElementById('cart');
    const close = document.getElementById('close');
    const changeImg = document.querySelectorAll('.simg')

    changeImg.forEach(function(el){
        el.addEventListener('mouseenter',function(event){
            const src = event.target.src;
            document.getElementById('bimg').src = src;
        });
        
    });

    listAll.addEventListener('click', changeNav);
    cart.addEventListener('click', cartBoxView);
    close.addEventListener('click',cartBoxView);
    
    function changeNav(){
        const nav = document.getElementsByTagName('nav')[0].offsetTop + 52;
        const sitemap =document.getElementById('sitemap');
        listAll.classList.toggle('close');
        listAll.classList.toggle('newlist');

        if(listAll.className === "list-all close"){
            sitemap.style.top = nav+"px";
            sitemap.style.display ="block";
        }else{
            sitemap.style.display = "none";
        }
    }


    function cartBoxView(){
        document.getElementsByClassName("cart-view")[0].classList.toggle("none");
    }


    // const bx = document.getElementById('ct');
    // console.log(bx.dataset);


    //window.onload = function(){}

    const btnRight = document.getElementById("btn-right");
    const btnLeft = document.getElementById('btn-left');
    const ptIn = document.getElementById("ptIn");
    let ps = 0;
    btnRight.onclick = function(){
        ps = ptIn.offsetLeft
        if(ps < 0){
            ps += 50;
            ptIn.style.left = ps + "px";
        }
    }
    btnLeft.onclick = function(){
        ps = ptIn.offsetLeft;
        if(ps > -200){
            ps -= 50;
            ptIn.style.left = ps + "px";
        }
    }

}());



 function viewQuick(){
        document.getElementsByClassName('quick')[0].classList.toggle('action');
    }




function viewTab(e){
    const tabcontent =document.getElementsByClassName('tabcontent');
    const tabs = document.getElementsByClassName('tab')[0];
    console.log(tabs.children[0]);

    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].classList.remove('active');
    }
    for(let i = 0; i < tabcontent.length; i++){
        tabs.children[i].classList.remove('active');
    }
    tabcontent[e].classList.add('active');
    tabs.children[e].classList.add('active');
}

function openview(n){
    const el = document.querySelectorAll(".pd")
    el.forEach((items) =>{
        items.classList.remove('col-lg-3','col-lg-4','col-lg-12')
        items.classList.add('col-lg-' + n)
    });
}
