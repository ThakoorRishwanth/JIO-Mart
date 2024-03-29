var ele = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function(){
    ele.classList.toggle("toggled")
}



let api = "https://zen-mart-2.onrender.com/Grociries";

let TotalData;

let total = document.getElementById("total");

async function fetchData(url){
    try{
        let res = await fetch(url);
        
        let data = await res.json();
        
        TotalData  = data.length;
        console.log(TotalData);
        total.textContent = TotalData;
        
        
        
        // appendData(data);
    }
    catch(err){
        console,log(err);
    }
    
}


fetchData(api);



