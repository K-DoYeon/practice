//fetch(url).then((rs)=>rs.json()).then((rs)=>{}).catch((eer)=>console.log(eer));

fetch('./data/shoplist.json')
.then((res)=>res.json())
.then((res)=> {
    const rs = res.shoplist; 
    let div = "";

    for(let i = 0; i < rs.length; i++){
      div += `<div class="col-lg-3 my-5">
        <div class="card">
            <a href="#">
              <img src="${rs[i].img}" class="img-fluid" alt="${rs[i].img}" />
            </a>
            <div class="card-body">
               <ul class="pd-list">
                  <li>
                    <span class="gray"></span>
                    <span class="blue"></span>
                    <span class="black"></span>
                    <span class="white"></span>
                  </li>
                  <li class="pd-title">
                      <h1>${rs[i].title}</h1>
                  </li>
                  <li>
                      <del>${rs[i].delprice}</del>
                      <br>
                      <strong>${rs[i].scaleprice}</strong>
                  </li>
                  <li>
                      <p>${rs[i].content}</p>
                  </li>
                  <li class="last">
                     <span>베스트셀러</span>
                     <span>핫딜할인5%</span>
                  </li>
               </ul> 
            </div>
        </div>
     </div>`;
    }

    document.getElementById("row").innerHTML = div;

    

})
