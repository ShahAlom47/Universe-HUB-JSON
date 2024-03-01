
const cardContainer = document.getElementById('card-container');
const modalContainer = document.getElementById('my_modal_4');
const tolsUrl = ' https://openapi.programming-hero.com/api/ai/tools'





fetch(tolsUrl)
.then(res=>res.json())
.then(datas=>{
let datasArr=datas?.data?.tools;

console.log(datasArr);

datasArr.sort((a,b)=> {
    let date1st = a.published_in
    let date2nd =b.published_in
    return date1st-date2nd;
})
console.log(datasArr);

for(let data of datasArr){ 
    makeCard(data)
}
})

//Card makeing  start 
const makeCard = (data)=>{
const createCard = document.createElement('div');
const featuresContainer = document.createElement('div');
const cardBottomContainer= document.createElement('div') 
const createBtn = document.createElement('button');

createCard.className=` card  bg-base-100 shadow-xl`
createCard.innerHTML=`
<figure class="px-10 pt-10 h-3/6">
<img src=${data.image} alt="${data.name}" class="rounded-xl" />
</figure>
`
featuresContainer.className=`card-body items-start text-start`
featuresContainer.innerHTML=`<h1 class=" font-bold text-lg">Features</h1>` 
let featuresDataArr =data.features;
for(let fData of featuresDataArr){
    let crateLi = document.createElement('li')
    crateLi.innerText= fData;
    featuresContainer.appendChild(crateLi);
}


cardBottomContainer.className=`card-body card-actions flex flex-row  justify-between w-full border-t-4 py-4 `
cardBottomContainer.innerHTML=`

   <div class="">
     <h1 class=" font-semibold text-lg"> ${data.name} </h1>
     <p>${data.published_in}</p>
   </div>
  
`
createBtn.className=`btn btn-circle text-xl text-red-700`
createBtn.innerHTML=`&#8594;`

createCard.appendChild(featuresContainer);
createCard.appendChild(cardBottomContainer);
cardBottomContainer.appendChild(createBtn);
cardContainer.appendChild(createCard);

createBtn.addEventListener('click',()=>callDataById(data.id))

}

// make card end 

//  cal data byy using id  start
const callDataById = (id)=>{
    const singleDataUrl = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(singleDataUrl)
    .then(res=>res.json())
    .then(data=>{makeModal(data);my_modal_4.showModal() })
}
//  cal data byy using id  end 

// make modal function  start
const makeModal = (datas)=>{
    
const modalcard =document.createElement('div');
modalContainer.innerHTML=``;

let random =parseInt(Math.random()*2)



const data = datas.data
modalcard.className=`card  flex gap-3 flex-row w-[900px] p-4 m-auto bg-white`
modalcard.innerHTML=`
<div class="card-left w-6/12 bg-pink-100 rounded-lg p-4 shadow-xl border-2 border-red-300 flex flex-col justify-center items-center">
<h1 class="tite mb-4 mx-3 text-xl font-semibold">${data.description}</h1>
<div class="mini-card-container flex gap-1 justify-between">
  <div class="bg-white rounded-lg p-2 text-center">
    <h2 class="font-bold text-green-700">${data.pricing[0].price}</h2>
    <h2 class="font-bold text-green-700">${data.pricing[0].plan}</h2>
  </div>
  <div class="bg-white rounded-lg p-2 text-center">
  <h2 class="font-bold text-green-700">${data.pricing[1].price}</h2>
  <h2 class="font-bold text-green-700">${data.pricing[1].plan}</h2>
  </div>
  <div class="bg-white rounded-lg p-2 text-center">
  <h2 class="font-bold text-green-700">${data.pricing[2].price}</h2>
  <h2 class="font-bold text-green-700">${data.pricing[2].plan}</h2>
  </div>
</div>

<div class="flex gap-3 justify-between p-3 ">
  <div>
    <h1 class="text-lg font font-semibold">Features</h1>
    <p class="text-sm ">${data.features['1'].feature_name}</p>
    <p class="text-sm ">${data.features['2'].feature_name}</p>
    <p class="text-sm ">${data.features['3'].feature_name}</lip
    <p class="text-sm ">${data.features['4']?.feature_name ||``}</p>
   
  </div>

  <div>
    <h1 class="text-lg font font-semibold">Integretion</h1>
    <p class="text-sm ">${data.integrations[0]}</p>
    <p class="text-sm ">${data.integrations[1]}</p>
    <p class="text-sm ">${data.integrations[2]}</p>
   
    <p class="text-sm ">${data.integrations[3] ||``}</p>
  </div>
</div>

</div>
<div class="card-right flex-1 p-6 flex flex-col justify-between">
<div class="modal-action m-0">
  <form method="dialog">
  <button class="btn btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
  </form>
</div>
<div class=" h-3/6  flex items-center">
<img class="" src="${data.image_link[0]||image_link[1] }" alt="">
</div>
<div class=" right-contant text-center py-3">
  <h1 class="text-lg font-bold text-center">${data.input_output_examples[random].input}</h1>
  <p  class="">${data.input_output_examples[random].output}</p>
</div>

</div>
`

modalContainer.appendChild(modalcard);

}
// make modal function  end 

const createrandomNum = ()=>{

   
     
};
console.log( );