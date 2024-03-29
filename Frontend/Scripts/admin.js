var ele = document.getElementById("wrapper");
var toggleButton = document.getElementById("menu-toggle");

toggleButton.onclick = function(){
    ele.classList.toggle("toggled")
}


// let TotalData = res.headers.get("X-Total-Count");