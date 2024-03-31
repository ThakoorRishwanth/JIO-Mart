var ele = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function(){
    ele.classList.toggle("toggled")
}

// Api link
let api = "https://zen-mart-2.onrender.com/Grociries";

// Getting the table-body
let tbody = document.getElementById("products-table-body");

// Create the fetchData function
async function fetchData(url){
try{
    let res = await fetch(url);

    let data = await res.json();

    console.log(data);
    appendData(data);
}
catch(err){
    console.log(err);
}
}
fetchData(api);


function createRow(item){
    let tr = document.createElement("tr");
    let thead = document.createElement("th");
    let name = document.createElement("td");
    let image = document.createElement("td");
    let curr_price = document.createElement("td");
    let mrp = document.createElement("td");
    let quantity = document.createElement("td");
    let edit = document.createElement("td");
    let del = document.createElement("td");

    let editbtn = document.createElement("button");
    let delbtn = document.createElement("button"); 

    thead.innerText = item.id;

    name.innerText = item.title;

    image.src = item.image;

    curr_price.innerText = item.Current_price;

    mrp.innerText = item.MRP;

    if(!item.quantity)
            quantity.innerText = Math.floor(Math.random()*125);
        else
            quantity.innerText = item.quantity;

            editbtn.innerText = "Edit";

            
            editbtn.className = "editbtn";
            
            edit.append(editbtn);

            editbtn.addEventListener("click",()=>{

                edit.value = item.id;
                editName.value = item.title;
            editImage.value = item.image;
            editPrice.value = item.Current_price;
            editCategory.value = item.MRP;
            quantity.value = item.quantity? item.quantity : quantity.innerText;
            
        })

        delbtn.innerText = "Delete"

        del.className = "delbtn";

        del.append(delbtn);

        delbtn.addEventListener("click",()=>{
            deleteData(item.id);
        })

        tr.append(thead, name, image, curr_price, mrp, quantity, edit, del);

        return tr;

}


function appendData(data){
    tbody.innerHTML = "";

    data.forEach((item)=>{
        let tr = createRow(item);

        tbody.append(tr);
    })
}

