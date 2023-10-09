let textInput=document.getElementById("text-input");

let characterCount=document.getElementById("character-count");
let  remainingCount=document.getElementById("remaining-count");

textInput.addEventListener("keyup",(e)=>{
    let count=textInput.value.length;
    
    characterCount.innerText=count;
    remainingCount.innerText=100-count;
    console.log(document.getElementById("text-input").value.length);
    if(count>=100){
       
        document.querySelector("section").classList.add("borderC");
        document.querySelector("h2").classList.add("borderC");
        document.querySelectorAll(".detail").classList.add("borderC");
       
      
    }else{
        document.querySelector("section").classList.remove("borderC");
        document.querySelector("h2").classList.remove("borderC");
        document.querySelector(".detail").classList.remove("borderC");
    }
   
})