
//targeting elements in dom
let product_div = document.getElementById("products-card");
let grocery_url = "https://zen-mart-4.onrender.com/Grociries?";
let priceinput = document.getElementById("priceslide");
let priceval = document.getElementById("pricevalue");
let discountinput = document.getElementById("discountslide");
let discountval = document.getElementById("discountvalue");


// let getdata= JSON.parse(localStorage.getItem("productdata")) || [];
// console.log(getdata);



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

//creating card
function card(obj) {
    //creating elements
    // let main_div=document.createElement("div");
    let cdiv = document.createElement("div");
    let image_div = document.createElement("div");
    let product_img = document.createElement("img");
    let c_body = document.createElement("div");
    let product_title = document.createElement("h5");
    let price_div = document.createElement("div")
    let product_price = document.createElement("p");
    let product_oldprice = document.createElement("p");
    let product_offer = document.createElement("p");
    let add_btn = document.createElement("button");
    let btntext = document.createElement("span");

    //attributes
    // main_div.id="main_div";
    cdiv.id = "cdiv";
    image_div.id = "image_div";
    product_img.id = "product_img";
    c_body.id = "c_body";
    product_title.id = "product_title";
    price_div.id = "price_div";
    product_price.id = "product_price";
    product_oldprice.id = "product_oldprice";
    product_offer.id = "product_offer";
    add_btn.id = "add_btn";
    btntext.id = "btntext";

    //innertext
    product_img.src = obj.Product_image;
    product_title.innerText = obj.title;
    product_price.innerText = obj.Current_price;
    product_oldprice.innerText = obj.MRP;
    product_offer.innerText = obj.Offer;
    btntext.innerText = "Add To Cart";


    //append
    add_btn.append(btntext);
    price_div.append(product_price, product_oldprice, product_offer);
    c_body.append(product_title, price_div, add_btn);
    image_div.append(product_img);
    cdiv.append(image_div, c_body);
    // main_div.append(cdiv);
    product_div.append(cdiv);

    // eventlistner 

    add_btn.addEventListener("click", (e) => {
        e.preventDefault();
        let getdata = JSON.parse(localStorage.getItem("productdata")) || [];

        let data = {
            image: obj.Product_image,
            title: obj.title,
            price: obj.Current_price,
            mrp:obj.MRP,
            quantity: 1
        }

        let existingProductIndex = getdata.findIndex(product => product.title === data.title);

        if (existingProductIndex !== -1) {
            // Product already exists, update its quantity
            getdata[existingProductIndex].quantity++;

        }
        else {
            // Product doesn't exist, add it to the cart
            getdata.push(data);
        }

        localStorage.setItem("productdata", JSON.stringify(getdata));

        // window.location.href = 'cart.html';

    })

}


//fetching data

async function fetchdata(url) {
    try {
        let res = await fetch(`${url}&_limit=24`);
        let ans = await res.json();

        console.log(ans);

        ans.forEach(element => {
            card(element);
        });
    }
    catch (err) {
        console.log(err);
    }
}

fetchdata(grocery_url);

// example link with parameters

// https://zen-mart-4.onrender.com/Grociries?_page=1&_limit=25





//price slider js

function slideprice() {
    priceinput.addEventListener("input", () => {
        let val = priceinput.value;
        let price = `${val}`;

        priceval.innerText = `${price}`;
    })
}

slideprice();


//price slider js

function slidediscount() {
    discountinput.addEventListener("input", () => {
        let val = discountinput.value;
        let price = `${val}`;

        discountval.innerText = `${price}`;
    })
}

slidediscount();


//infinity scroolbar


// Function to detect if scrollbar has reached the bottom of the page
function isScrollbarAtBottom() {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
}

// Function to load more products when scrollbar reaches the bottom
function loadMoreProducts() {
    let currentPage = 1; // Variable to keep track of current page
    let loading = false; // Flag to prevent multiple simultaneous requests

    window.addEventListener('scroll', function() {
        if (!loading && isScrollbarAtBottom()) {
            loading = true; // Set loading flag

            // Increment page number and fetch more products
            currentPage++;
            let nextPageUrl = `${grocery_url}&_page=${currentPage}`;
            fetchdata(nextPageUrl)
                .then(() => loading = false) // Reset loading flag after data is loaded
                .catch((error) => {
                    loading = false; // Reset loading flag on error
                    console.error('Error loading more products:', error);
                });
        }
    });
}

// Call the function to load more products when scrollbar reaches the bottom
loadMoreProducts();
