let api = "https://zen-mart-2.onrender.com/Grociries";

let total = document.getElementById("total");


async function fetchData(url){
    try{
        let res = await fetch(url);
        
        let data = await res.json();
        

        console.log(data);

        total.textContent = data.length;
    }
    catch(err){
        console,log(err);
    }
    
}

fetchData(api)
