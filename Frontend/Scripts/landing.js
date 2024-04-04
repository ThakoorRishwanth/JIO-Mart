let navBarAttachment=document.querySelector(".navBarAttachment");
let footerDiv=document.querySelector(".footerDiv");
$(function(){
    $(".navBarAttachment").load("../../Frontend/Pages/navbar.html");
})

$(function(){
  $(".footerDiv").load("../../Frontend/Pages/footer.html");
})

//store width of container in the obj variable
var obj = document.getElementsByClassName('container')[0].clientWidth;

function goNext() {
  document.getElementsByClassName('container')[0].scrollBy({ 
    left: obj, 
  });
}

function goPrevious() {
  document.getElementsByClassName('container')[0].scrollBy({ 
    left: -obj,
  });
}
var obj2 = document.getElementsByClassName('container5')[0].clientWidth;

function goNext1() {
  document.getElementsByClassName('container5')[0].scrollBy({ 
    left: obj2, 
  });
}

function goPrevious1() {
  document.getElementsByClassName('container5')[0].scrollBy({ 
    left: -obj2,
  });
}

/*We can also use scroll left and scroll right method to achieve the same result as above*/

/*
function goNext() {
  var container = document.getElementsByClassName('container')[0];
  container.scrollLeft += obj;
}

function goPrevious() {
  var container = document.getElementsByClassName('container')[0];
  container.scrollLeft -= obj;
}
*/



$(function() {
  var inWrap = $('.inner-wrapper');
  var slideWidth = $('.slide2').outerWidth();

  function slideNext() {
    inWrap.animate({left: '-=' + slideWidth}, 200, function() {
      var firstSlide = $('.slide2').first();
      inWrap.css('left', -slideWidth);
      $('.slide2').last().after(firstSlide);
    });
  }

  function slidePrev() {
    inWrap.animate({left: '+=' + slideWidth}, 200, function() {
      var lastSlide = $('.slide2').last();
      inWrap.css('left', -slideWidth);
      $('.slide2').first().before(lastSlide);
    });
  }

  // Enabling auto scroll
  var sliderInterval = setInterval(slideNext, 4000);

  $('.prev2').on('click', function() {
    clearInterval(sliderInterval);
    slidePrev();
    sliderInterval = setInterval(slideNext, 4000);
  });

  $('.next2').on('click', function() {
    clearInterval(sliderInterval);
    slideNext();
    sliderInterval = setInterval(slideNext, 4000);
  });
});

let container = document.getElementById("container7");
let flag = true; // Set initial flag value to true

let page = 1;
fetchData();

window.addEventListener("scroll", () => {
    let clientHeight = document.documentElement.clientHeight;
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;

    if (scrollHeight - clientHeight <= Math.ceil(scrollTop) && flag) {
        console.log("we are at the bottom");
        page++;
        fetchData(page);
        flag = false;
    }
});

// Create card function
function createCard(productData) {
    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = productData.Product_image;
    image.alt = 'Product Image';
    card.appendChild(image);

    const title = document.createElement('h2');
    title.textContent = productData.title;
    title.style.whiteSpace = 'nowrap';
    card.appendChild(title);

    const price = document.createElement('h4');
    price.textContent = `Current Price: ${productData.Current_price}`;
    price.style.color="black";
    card.appendChild(price);
     

    return card;
}

// Fetch data function
async function fetchData(page = 1) {
    try {
        let res = await fetch(
            `https://zen-mart-4.onrender.com/Grociries?page=${page}&limit=12`
        );
        let data = await res.json();
        appendData(data);
        flag = true; // Set flag to true after fetching data
    } catch (err) {
        console.log(err);
    }
}

// Append data function
function appendData(data) {
    data.forEach((item) => container.append(createCard(item)));
}