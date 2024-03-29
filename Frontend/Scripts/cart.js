//targeting elements


//example data
// {
//     "id": "1",
//     "Product_image": "https://www.jiomart.com/images/product/original/491504124/super-sarvottam-physically-refined-rice-bran-oil-1-l-product-images-o491504124-p491504124-0-202307061545.jpg?im=Resize=(360,360)",
//     "Veg_symbol": "https://www.jiomart.com/assets/ds2web/jds-icons/icon-veg.svg",
//     "title": "Super Sarvottam Physically Refined Rice Bran Oil 1 L",
//     "Current_price": "₹99.00",
//     "MRP": "₹199.00",
//     "Offer": "50% OFF"
// }

let getdata=JSON.parse(localstorage.getItem("productdata")) || [] ;
console.log(getdata);


//create card

function card(obj) {

    let c_div = document.createElement("div");
    let imagediv = document.createElement("div");
    let product_img = document.createElement("img");
    let price = document.createElement("p");
    let quantity = document.createElement("p");
    let quatadd = document.createElement("button");
    let quatdel = document.createElement("button");
    let deletebtn = document.createElement("button");

    //attributes
    c_div.id = "c_div."
    imagediv.id = "imagediv";
    product_img.id = "product_img";
    price.id = "price";
    quantity.id = "quantity";
    quatadd.id = "quatadd";
    quatdel.id = "quatdel";
    deletebtn.id = "deletebtn";


    //innertext
    product_img.src = obj.Product_image;
    price.innerText = obj.price;
    quantity.innerText = obj.quantity;
    quatadd.innerText = "+";
    quatdel.innerText = "-";
    deletebtn.innerText = "Delete";

    //append
    imagediv.append(product_img);
    c_div.append(imagediv, price, quantity, quatadd, quatdel, deletebtn);


    //eventlistner
    // deletebtn.addEventListener("click", () => {

    // })
}

// localdata=JSON.parse(localstorage.getItem("productdata")) || [] ;

//checking empty divs
let _2nditem = document.getElementById("item-2");
let _3rditem = document.getElementById("item-3");

function appenddata() {
    // localdata=JSON.parse(localstorage.getItem("productdata")) || [] ;
    if (getdata.length === "") {
        _2nditem.style.visibility = "visible";
    }

    else if (_3rditem.innerHTML !== "") {
        _2nditem.style.visibility = "hidden";
        _3rditem.style.visibility = "visible";
        _3rditem.innerHTML="";
        getdata.forEach((element)=>{
            card(element);
        })

    }
}



function getitems() {
    let getdata = JSON.parse(localStorage.getItem("productdata")) || [];
    console.log(getdata);
    data.forEach(element => {
        card(element)
    });
}

// getdata
getitems();