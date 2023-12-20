const bear = document.getElementById("bear");
const btn = document.getElementById("grabButton");
const beerName = document.querySelector(".name");
let  beerVolume = document.querySelector(".volume");
let date = document.querySelector(".date");
let beerAlv = document.querySelector(".alv")

let beerImage = document.querySelector(".image");
let beerDescription = document.querySelector(".description");

document.addEventListener('DOMContentLoaded', getBear())
btn.addEventListener("click", ()=>{
    getBear()
})

function getBear(){

    fetch("https://api.punkapi.com/v2/beers/random")
    .then(response => response.json())
    .then(beers => {
       let beer = beers[0]
      getBeerDetails(beer);
       console.log(beer)

    })
    .catch(err =>{
        console.error(err.message);
    })
   
}

function getBeerDetails(beer){
    beerImage.src = beer.image_url;
    beerDescription.textContent = beer.description;
    beerName.textContent = beer.name;
    beerAlv.textContent = beer.abv;
    beerVolume.textContent = beer.volume.value;
    date.textContent= beer.first_brewed;


};