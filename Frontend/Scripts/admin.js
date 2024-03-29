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
        
        TotalData  = data.length;
        console.log(TotalData);
        total.textContent = TotalData;

        sales(data);
        
        
        
        // appendData(data);
    }
    catch(err){
        console,log(err);
    }
    
}

fetchData(api);

fetchData(user_api)

var sum = 0;
function sales(item){
    item.forEach((items)=>{
        let num = item.total;
        console.log(num);
        sum += num;

    })
    Usertotal.append(sum)
}


