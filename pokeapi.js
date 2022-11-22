var pokeList = document.querySelector(".pokeList");
var click1 = document.querySelector(".click1");
var ranImg = document.querySelector(".ranImg");
var pokeName = document.querySelector(".pokeName");
var type = document.querySelector(".type");
var type2 = document.querySelector(".type2");


click1.addEventListener("click",async function topTen() {
    var response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
    var topPoke = await response.json();
    for(var top = 0; top < topPoke.results.length; top++){
        var listItem = document.createElement("li");
        listItem.innerText = topPoke.results[top].name;
        pokeList.appendChild(listItem);
    }
    
},
{once : true});


async function randpoke() {
    var pokeId = Math.floor(Math.random() * 905);
    console.log(pokeId);
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
    var change = await response.json();
    pokeName.innerText = change.name;
    ranImg.src = change.sprites.front_shiny;
    type.innerText = change.types[0].type.name;
    type2.innerText = change.types[1].type.name;
    // type2.innerText = change.types[1].type.name;
    // console.log(change.types[0].type.name);
    // console.log(change.types[1].type.name);
}