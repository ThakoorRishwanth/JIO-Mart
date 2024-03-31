var ele = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function(){
    ele.classList.toggle("toggled")
}


let tableBody = document.getElementById("orders-table-body");



let user_api = "https://zen-mart-4.onrender.com/Users";




let Usertotal = document.getElementById("Usertotal");

async function fetchData(url){
    try{
        let res = await fetch(url);
        
        let data = await res.json();
        

        // console.log(data);

            sales(data);
            appendData(data)
    }
    catch(err){
        console,log(err);
    }
    
}

fetchData(user_api)

function sales(item){
    let sum = 0;
    item.forEach((items)=>{
        
        sum += items.Total;
        
        // console.log(items.Total);

    })
    Usertotal.textContent = sum;
}


// Create Table
function createrow(item,index){
    let trow = document.createElement("tr");
    let thead = document.createElement("th");
    // let orderId = document.createElement("td");
    let userId = document.createElement("td");
    let name = document.createElement("td");
    let Total = document.createElement("td");

    thead.innerText = index+1;
    userId.innerText = item.id;
    name.innerText = item.name;
    Total.innerText = item.Total;

    trow.append(thead, userId, name, Total);
    tableBody.append(trow);

   
}

function appendData(data){
tableBody.innerHTML = "";
data.forEach((item, index)=>{

    let trow = createrow(item, index);

    // tableBody.append(trow);
})
}
