//targeting elements
let getdata = JSON.parse(localStorage.getItem("productdata")) || [];
console.log(getdata);
let _2nditem = document.getElementById("item-2");
let _3rditem = document.getElementById("item-3");
let navbar=document.getElementById("navbar");

$(function(){
    $("#navbar").load("navbar.html");
})

//example data
// {
//     "image": "https://www.jiomart.com/images/product/original/rvwqbfhiw9/dr-vaidya-s-new-age-ayurveda-apple-cider-vinegar-450ml-product-images-orvwqbfhiw9-p606924086-0-202312271420.jpg?im=Resize=(360,360)",
//     "title": "DR. VAIDYA'S new age ayurveda Apple Cider Vinegar, 450ml",
//     "price": "₹299.00",
//     "quantity": 3
// }


//create card

function datacard(obj) {

    let c_div = document.createElement("div");
    let imagediv = document.createElement("div");
    let product_img = document.createElement("img");
    let price = document.createElement("p");
    let quantity = document.createElement("p");
    let quatadd = document.createElement("button");
    let quatdel = document.createElement("button");
    let deletebtn = document.createElement("button");

    //attributes
    c_div.id = "c_div"
    imagediv.id = "imagediv";
    product_img.id = "product_img";
    price.id = "price";
    quantity.id = "quantity";
    quatadd.id = "quatadd";
    quatdel.id = "quatdel";
    deletebtn.id = "deletebtn";


    //innertext
    product_img.src = obj.image;
    price.innerText = obj.price;
    quantity.innerText = obj.quantity;
    quatadd.innerText = "+";
    quatdel.innerText = "-";
    deletebtn.innerText = "Delete";

    //append
    imagediv.append(product_img);
    c_div.append(imagediv, price, quantity, quatadd, quatdel, deletebtn);
    _3rditem.append(c_div);

    //eventlistner
    // deletebtn.addEventListener("click", () => {

    // })
}

// localdata=JSON.parse(localstorage.getItem("productdata")) || [] ;

//checking empty divs

function appenddata() {

    if (getdata.length === "") {
        _2nditem.style.visibility = "visible";
    }

    else if (_3rditem.innerHTML !== "") {
        _2nditem.style.visibility = "hidden";
        _3rditem.style.visibility = "visible";
        _3rditem.innerHTML = "";
        getdata.forEach((element) => {
            datacard(element);
            console.log(element);
        })

    }
}

appenddata();