let lienmainL=document.querySelectorAll(".lienmainL")
let divMainL=document.querySelector(".divMainL")
let lienFermer=document.querySelector(".lienFermer")
let divFermer=document.querySelector(".divFermer")
let i=0
for(i=0;i<lienmainL.length;i++){
lienmainL[i].addEventListener("mouseover",function(){
    divMainL.classList.remove("divMainL")
     divMainL.classList.add("divMainLscript")
     divFermer.classList.remove("divFermer")
     divFermer.classList.add("divFermerScript")

})}


divFermer.addEventListener("click",function(){
divMainL.classList.remove("divMainLscript")
     divMainL.classList.add("divMainL")
     lienFermer.classList.remove("divFermerScript")
     lienFermer.classList.add("divFermer")

})


//Diapocode

let imgL=document.querySelector(".imgL")
let imgR=document.querySelector(".imgR")
let imgL2=document.querySelector(".imgL2")
let imgR2=document.querySelector(".imgR2")
let imgDiv=document.querySelector(".imgDiv")
let imgDiv2=document.querySelector(".imgDiv2")
let diaPosition=document.querySelectorAll(".diaposition div")
let diaPosition2=document.querySelectorAll(".diaposition2 div")
let imgDiapo=["img_0ac57a.jpeg","img_31f9d8.jpeg","img_159eba.jpeg","img_c50a6e.jpeg"]
i=0
imgDiv.src=imgDiapo[0]
diaPosition[0].classList.add("divselect")
diaPosition2[0].classList.add("divselect")

 

//Diapo


function clicBoutonR(){

    
    i=i+1
    imgDiv.classList.add("imgDivScriptR")
    setTimeout(function(){imgDiv.classList.remove("imgDivScriptR")},200)
  
    imgDiv.src=imgDiapo[i]

    if(i===imgDiapo.length){
        diaPosition[imgDiapo.length-1].classList.remove("divselect")
        i=0
      imgDiv.src=imgDiapo[i]
        
    }
   
    if(imgDiapo[i]===diaPosition[i].className)
        {diaPosition[i].classList.add("divselect")}
    if(imgDiapo[i]!==diaPosition[i].className){diaPosition[i-1].classList.remove("divselect")}

}


function clicBoutonL(){

    
    i=i-1
    imgDiv.src=imgDiapo[i]
     imgDiv.classList.add("imgDivScriptL")
    setTimeout(function(){imgDiv.classList.remove("imgDivScriptL")},200)

    if(i===-1){diaPosition[i+1].classList.remove("divselect")
        i=(imgDiapo.length)-1
        imgDiv.src=imgDiapo[i]
        }
   
  
    if(imgDiapo[i]===diaPosition[i].className)
        {diaPosition[i].classList.add("divselect")}
    if(imgDiapo[i]!==diaPosition[i].className){diaPosition[i+1].classList.remove("divselect")}

}



imgR.addEventListener("click",function(){clicBoutonR()})

imgL.addEventListener("click",function(){clicBoutonL()})

/*setInterval(function(){clicBoutonR()},10000)*/



//autre Diapo

let autreDiapo=["img_8ad7cf.jpeg","img_7762b4.jpeg","img_ed10a3.jpeg","img_d7ed10.jpeg"]
imgDiv2.src=autreDiapo[0]
function autreclicBoutonR(){

    
    i=i+1
    imgDiv2.classList.add("imgDivScriptR")
    setTimeout(function(){imgDiv2.classList.remove("imgDivScriptR")},200)
  
    imgDiv2.src=autreDiapo[i]

    if(i===autreDiapo.length){
        diaPosition2[autreDiapo.length-1].classList.remove("divselect")
        i=0
      imgDiv2.src=autreDiapo[i]
        
    }
   
    if(autreDiapo[i]===diaPosition2[i].className)
        {diaPosition2[i].classList.add("divselect")}
    if(autreDiapo[i]!==diaPosition2[i].className){diaPosition2[i-1].classList.remove("divselect")}

}


function autreclicBoutonL(){

    
    i=i-1
    imgDiv2.src=autreDiapo[i]
     imgDiv2.classList.add("imgDivScriptL")
    setTimeout(function(){imgDiv2.classList.remove("imgDivScriptL")},200)

    if(i===-1){diaPosition2[i+1].classList.remove("divselect")
        i=(imgDiapo2.length)-1
        imgDiv2.src=autreDiapo[i]
        }
   
  
    if(autreDiapo[i]===diaPosition2[i].className)
        {diaPosition2[i].classList.add("divselect")}
    if(autreDiapo[i]!==diaPosition2[i].className){diaPosition2[i+1].classList.remove("divselect")}

}



imgR2.addEventListener("click",function(){autreclicBoutonR()})

imgL2.addEventListener("click",function(){autreclicBoutonL()})

/*setInterval(function(){autreclicBoutonR()},10000)*/
