var ele = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function(){
    ele.classList.toggle("toggled")
}



let api = "https://zen-mart-2.onrender.com/Grociries";

let user_api = "https://zen-mart-4.onrender.com/Users";

let TotalData;

let total = document.getElementById("total");
let Usertotal = document.getElementById("Usertotal");

async function fetchData(url){
    try{
        let res = await fetch(url);
        
        let data = await res.json();
        

        console.log(data);

            sales(data);

        
        
        
        // appendData(data);
    }
    catch(err){
        console,log(err);
    }
    
}

fetchData(api);

fetchData(user_api)

function sales(item){
    let sum = 0;
    item.forEach((items)=>{
        
        sum += items.Total;
        
        // console.log(items.Total);

    })
    Usertotal.textContent = sum;
}


