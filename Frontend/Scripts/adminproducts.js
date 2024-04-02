var ele = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function(){
    ele.classList.toggle("toggled")
}

// Api link
let api = "https://zen-mart-2.onrender.com/Grociries?_page=1&_limit=7";

// Getting the table-body
let tbody = document.getElementById("products-table-body");

// Add product 
let titleInput = document.getElementById("title");
let imgInput = document.getElementById("img");
let priceInput = document.getElementById("price");
let mrpInput = document.getElementById("mrp");
let quantityInput = document.getElementById("quantity");
let addBtn = document.getElementById("add-product");


// Update product
let updateid = document.getElementById("product_id");
let titleupdate = document.getElementById("update_title");
let imgupdate = document.getElementById("update_img");
let priceupdate = document.getElementById("update_price");
let mrpupdate = document.getElementById("update_mrp");
let quantityupdate = document.getElementById("update_qunatity");
let updatebtn = document.getElementById("updatebtn");

// ADD EVENT LISTENERS
addBtn.addEventListener("click", postData);
updatebtn.addEventListener("click",(e)=>{
    e.preventDefault();
   let id=updateid.value;

    let updateobj={
        title: titleupdate.value,
        Product_image: imgupdate.value,
        Current_price: priceupdate.value,
        MRP: mrpupdate.value,
    }

    updateproduct(updateobj, id)



});

// Create the fetchData function
async function fetchData(url){
try{
    let res = await fetch(url);

    let data = await res.json();

    let totalCount = res.headers.get(`X-Total-Count`);
    let totalPages = Math.ceil(totalCount / 10);
    paginate(totalPages)

    console.log(data);
    appendData(data);
}
catch(err){
    console.log(err);
}
}
fetchData("https://zen-mart-2.onrender.com/Grociries?_page=1&_limit=7");


function createRow(item){
    let tr = document.createElement("tr");
    let thead = document.createElement("th");
    let name = document.createElement("td");
    let image = document.createElement("td");
    let images = document.createElement("img");
    let curr_price = document.createElement("td");
    let mrp = document.createElement("td");
    let quantity = document.createElement("td");
    let edit = document.createElement("td");
    let del = document.createElement("td");

    let editbtn = document.createElement("button");
    let delbtn = document.createElement("button");

    thead.innerText = item.id;

    name.innerText = item.title;

    images.src = item.Product_image;
    images.style.height="100px";
    image.append(images);

    curr_price.innerText = item.Current_price;

    mrp.innerText = item.MRP;

    if(!item.quantity)
            quantity.innerText = Math.floor(Math.random()*125);
        else
            quantity.innerText = item.quantity;

            editbtn.innerText = "Edit";

            
            editbtn.className = "editbtn";
            
            edit.append(editbtn);

            editbtn.addEventListener("click",(e)=>{
                e.preventDefault();
                
                editproduct(item);
            

            
        })

        delbtn.innerText = "Delete"

        delbtn.className = "delbtn";

        del.append(delbtn);

        delbtn.addEventListener("click",()=>{
            deleteProduct(item.id)

            console.log(item.id);
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

// ADD NEW DATA

async function postData() {
    let productData = {
        title: titleInput.value,
        Product_image: imgInput.value,
        Current_price: priceInput.value,
        MRP: mrpInput.value,
        Quantity: quantityInput.value
    };

    try {
        let res = await fetch("https://zen-mart-2.onrender.com/Grociries?_page=1&_limit=7", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productData)
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        let data = await res.json();
        console.log(data);
        
        fetchData("https://zen-mart-2.onrender.com/Grociries?_page=1&_limit=7");
    } catch (err) {
        console.log(err);
    }
}

async function deleteProduct(id){
    try{
        let res = await fetch(`https://zen-mart-2.onrender.com/Grociries/${id}`,{
            method:"DELETE",
        })
        console.log(res);
        fetchData("https://zen-mart-2.onrender.com/Grociries?_page=1&_limit=7")
    }
    catch(err){
        console.log(err);
    }
}


function editproduct(item){
    
        updateid.value=item.id;
            titleupdate.value=item.title;
            imgupdate.value=item.Product_image;
           priceupdate.value=item.Current_price;
           console.log(item.title)
            mrpupdate.value=item.MRP;

}

async function updateproduct(obj, id){

    try{
        let res = await fetch(`https://zen-mart-2.onrender.com/Grociries/${id}?_page=1&_limit=7`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json" 
            },
            
            body:JSON.stringify(obj)
            
        });
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        let data = await res.json();
        
        console.log(data);
        fetchData("https://zen-mart-2.onrender.com/Grociries?_page=1&_limit=7");
    }
    catch(err){
        console.log(err);
    }
    
}

function paginate(totalPages) {
    let tableBtn = document.getElementById("btnTable");
    tableBtn.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      let pagBtn = document.createElement("button");
      pagBtn.innerText = `${i}`;
      pagBtn.classList.add("btn", "btn-secondary");
      tableBtn.append(pagBtn);
  
      pagBtn.addEventListener("click", () => {
        fetchData(
          `https://zen-mart-2.onrender.com/Grociries?_page=${i}&_limit=7`
        );
      });
    }
  }