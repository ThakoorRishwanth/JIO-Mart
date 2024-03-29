let hamburger= document.querySelector(".hamburger");
let slideBar= document.querySelector(".slide");
let Arrow=document.querySelector(".Arrow");


hamburger.addEventListener("click",()=>{
    slideBar.style.transform = "translateX(400px)";
    slideBar.style.height= "auto";
   
   
 
    
})
Arrow.addEventListener("click",()=>{
    slideBar.style.transform = "translateX(-400px)";
    
  
})