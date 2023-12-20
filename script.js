const bear = document.getElementById("bear");
const btn = document.getElementById("grabButton");

let beerImage = document.querySelector(".image")
let beerDescription = document.querySelector(".description");

btn.addEventListener("click", ()=>{
    getBear()
})


function getBear(){
    fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(beers => {
       let beer = beers[0]
       beerImage.src = beer.image_url;
       beerDescription.textContent = beer.description;

    })
    .catch(err =>{
        console.error(err.message);
    })
   
}

getBear();