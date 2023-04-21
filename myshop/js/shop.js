(function(){
    const listAll = document.getElementsByClassName('list-all')[0];
    const cart = document.getElementById('cart');
    const close = document.getElementById('close');
    const changeImg = document.querySelectorAll('.simg')
    const size = document.shopform.size;
    const rootColors = document.getElementsByClassName('rootColors')[0];
    


    changeImg.forEach(function(el){
        el.addEventListener('mouseenter',function(event){
            const src = event.target.src;
            document.getElementById('bimg').src = src;
        });
        
    });

    // 컬러 선택하면 size check 풀기
    rootColors.addEventListener('click',function(){
        document.querySelectorAll('.size').forEach((v, i)=> {
            v.checked = false;
        });
    });

    // 본문 주문 폼
    size.forEach(function(sz){
        sz.addEventListener('change',function(e){
           const selectTitle = document.getElementById("title").value;
           const selectPrice = document.getElementById("price").value;
           const selectColor = document.querySelector('.color:checked').value;
           const selectSize = document.querySelector('.size:checked').value;
           const addProduct = document.getElementById('addProduct');
           let isAddProduct = document.getElementsByClassName("addProduct");
           

           const colors = document.getElementsByClassName('color');



           let colorsIndex;
           let i;

           for(i = 0; i < colors.length; i++){
            if(colors[i].checked) colorsIndex = i
           }

           const sizes = document.getElementsByClassName('size');
           let sizesIndex;
           for(i = 0; i < sizes.length; i++){
            if(sizes[i].checked) sizesIndex = i;
           }

        
           let addList = true;
           let count = 0;
           if(isAddProduct.length > 0) {
            count = isAddProduct.length;
           }

           document.querySelectorAll('.addProduct').forEach(function(v){
            if("addProduct"+colorsIndex+sizesIndex == v.id){
                alert("같은 주문이 있습니다.");
                addList = false;
            }
           });

           if(addList){

           let list = `<ul class="addProduct" id="addProduct${colorsIndex}${sizesIndex}">
                            <li class="title">
                                <p>${selectTitle}</p>
                                <p class="option">${selectColor}, ${selectSize}</p>
                            </li>
                            <li id="add">
                                <div class="addbox">
                                    <span class="ctv" id="ctv${colorsIndex}${sizesIndex}">1</span>
                                    <div class="pmbox">
                                        <div class="up" onclick="updn('${colorsIndex}${sizesIndex}', 1)"><i class="fa-solid fa-angle-up"></i></div>
                                        <div class="down" onclick="updn('${colorsIndex}${sizesIndex}', -1)"><i class="fa-solid fa-angle-down"></i></div>
                                    </div>
                                </div>
                                <span class="listclose" onclick = "closelist('${colorsIndex}','${sizesIndex}')"><i class="fa-solid fa-xmark"></i></span>
                                <input type="hidden" name="ct[]" class="ct" id="ct${colorsIndex}${sizesIndex}" value="1">
                                <input type="hidden" name="money" id="money${colorsIndex}${sizesIndex}" value="${selectPrice}"/>
                                <input type="hidden" name="summoney[]" id="summoney${colorsIndex}${sizesIndex}" value="${selectPrice}" />
                            </li>
                            <li class="totalP" id="totalIP${colorsIndex}${sizesIndex}">
                                ${numComma(selectPrice)}원
                            </li>
                        </ul>`;
            const opt = addProduct.innerHTML;
            addProduct.innerHTML = opt + list;
            
           }


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

}()); // 이름없는 함수 만들어서 바로 실행되게



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

// 리스트 수량 버튼

function updn(i, n){
    var ct = parseInt(document.getElementById('ct'+i).value);
    var money = parseInt(document.getElementById('money'+i).value);
    let summoney = 0;
    if(n > 0){
        if(ct <= 11){
            ct = ct + 1;

        }
    }else{
        if(ct > 1){
            ct = ct - 1;
        }
    }

    summoney = money*ct;

    document.getElementById('money'+i).valeu = summoney;
    document.getElementById('totalIP'+i).innerHTML = numComma(summoney) + "원"
    document.getElementById('ctv'+i).innerHTML = ct;
    document.getElementById('ct'+i).value = ct;
}
// 리스트 닫기
function closelist(m,n) {
    document.getElementById('addProduct'+m+n).remove();
}

// 세자리 단위 콤마 찍는 정규식
 const numComma = (value) => {
    // let rgx = /(\d+)(\d{3})/; // 세자리 숫자에 한자리 숫자가 더해지는 정규표현식 정의
    // while(rgx.test(value)){
    //     value = value.replace(rgx, '$1' + ',' + '$2');
    // }
    value = value.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    return value;
 
 }
