//targeting elements
let getdata = JSON.parse(localStorage.getItem("productdata")) || [];
let _2nditem = document.getElementById("item-2");
let _3rditem = document.getElementById("item-3");
let _4thitem = document.getElementById("item-4");
// _4thitem .style.visibility="visible";
let navbar = document.getElementById("navbar");

$(function () {
    $("#navbar").load("navbar.html");
})

// window.onload.appenddata();
//example data
// {
//     "image": "https://www.jiomart.com/images/product/original/491504124/super-sarvottam-physically-refined-rice-bran-oil-1-l-product-images-o491504124-p491504124-0-202307061545.jpg?im=Resize=(360,360)",
//     "title": "Super Sarvottam Physically Refined Rice Bran Oil 1 L",
//     "price": "₹99.00",
//     "mrp": "₹199.00",
//     "quantity": 1
// }


//create card

function datacard(obj, index) {

    let c_div = document.createElement("div");
    let imagediv = document.createElement("div");
    let product_img = document.createElement("img");
    let cardbody = document.createElement("div");
    let title = document.createElement("p");
    let price = document.createElement("p");
    let quantitydiv = document.createElement("div");
    let quantity = document.createElement("p");
    let quatadd = document.createElement("button");
    let quatdel = document.createElement("button");
    let deletebtn = document.createElement("button");

    //attributes
    c_div.id = "c_div"
    imagediv.id = "imagediv";
    cardbody.id = "cardbody ";
    product_img.id = "product_img";
    price.id = "price";
    title.id = "title";
    quantitydiv.id = "quantitydiv";
    quantity.id = "quantity";
    quatadd.id = "quatadd";
    quatdel.id = "quatdel";
    deletebtn.id = "deletebtn";


    //innertext
    product_img.src = obj.image;
    price.innerText = obj.price;
    title.innerText = obj.title;
    quantity.innerText = obj.quantity;
    quatadd.innerText = "+";
    quatdel.innerText = "-";
    deletebtn.innerText = "Delete";

    //append
    imagediv.append(product_img);
    quantitydiv.append(quatadd, quantity, quatdel);
    cardbody.append(title, price, quantitydiv, deletebtn)
    c_div.append(imagediv, cardbody);
    _3rditem.append(c_div);

    //eventlistner
    deletebtn.addEventListener("click", () => {
        let ind = index;
        if (ind >= 0 && ind < getdata.length) {
            getdata.splice(ind, 1);

            localStorage.setItem("productdata", JSON.stringify(getdata));

            c_div.remove();
            appenddata();

        }
        else {
            console.log("invalid index");
        }
        location.reload();

    })

    quatadd.addEventListener("click", () => {
        obj.quantity++;
        quantity.innerText = obj.quantity;
        localStorage.setItem("productdata", JSON.stringify(getdata));
        location.reload();
    })

    quatdel.addEventListener("click", () => {
        obj.quantity--;
        quantity.innerText = obj.quantity;
        localStorage.setItem("productdata", JSON.stringify(getdata));
        if (obj.quantity === 0) {
            let ind = index;
            if (ind >= 0 && ind < getdata.length) {
                getdata.splice(ind, 1);

                localStorage.setItem("productdata", JSON.stringify(getdata));

                c_div.remove();
                appenddata();

            }
            else {
                alert("Limit Reached Please add some product");
            }
        }
        location.reload();
    })
}

//checking empty divs

function appenddata() {

    if (getdata.length === 0) {
        _2nditem.style.visibility = "visible";
        _3rditem.style.visibility = "hidden";
        _4thitem .style.visibility="hidden";
    }
    
    else if (_3rditem.innerHTML !== "") {
        _2nditem.style.visibility = "hidden";
        _3rditem.style.visibility = "visible";
        _4thitem .style.visibility="visible";
        _3rditem.innerHTML = "";
        getdata.forEach((element, index) => {
            datacard(element, index);
        });

    }
}

appenddata();


// function addpayment(price,mrp){
//     let payout_div=document.createElement("div");
//     let mrp_price=document.createElement("p");
//     let discount=document.createElement("p");
//     let delivery_fee=document.createElement("p");
//     let total=document.createElement("p");
     
//     //attributes

//     payout_div.id="payout_div";
//     mrp_price.id="mrp_price";
//     discount.id="discount";
//     delivery_fee.id="delivery_fee";
//     total.id="total";

//     //innertext

//     mrp_price.innerText= `${mrp}`;
//     discount.innerText= `${mrp}` - `${price}`;
//     delivery_fee.innerText=40;
//     total.innerText=`${price}`;
    
//     // append 

//     payout_div.append(mrp_price,discount,delivery_fee,total);
//     _4thitem.append(payout_div);

// }
// addpayment();


function payment(price){
    let div=document.createElement("div");
    // let mes_div=document.createElement("div");
    let order_total=document.createElement("p");
    let checkpay=document.createElement("button");

    // attributes

    div.id="main_div";
    // mes_div.id="mes_div";
    order_total.id="order_total";
    checkpay.id="checkpay";

    // innertext

    // mes_div.innerText="Complete Payment"
    order_total.innerText=`Order Total :  ₹ ${price}`;
    checkpay.innerText="Place Order";

    // append 

    div.append(order_total,checkpay);//mes_div,
    _4thitem.append(div);

}


function totalpaymentcalc(){
    // Retrieve data from localStorage
    let getdata = JSON.parse(localStorage.getItem("productdata")) || [];
    let totalPrice = getdata.reduce((total, product) => {
        let price = parseFloat(product.price.replace("₹", ""));
        return total + (price * product.quantity); // Assuming price is a string representing the price, parse it to a float
        
    }, 0);
  payment(totalPrice);
  console.log(totalPrice);
}
totalpaymentcalc();
