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
    if(typeof change.types[1] != "undefined"){
        type2.innerText = change.types[1].type.name;
        type.innerText = change.types[0].type.name;
        ranImg.src = change.sprites.front_shiny;
    }else{
        type.innerText = change.types[0].type.name;
        ranImg.src = change.sprites.front_shiny;
        type2.innerText = " ";
    }
    // type2.innerText = change.types[1].type.name;
    // console.log(change.types[0].type.name);
    // console.log(change.types[1].type.name);
}

//! This is for the search button

var form = document.querySelector("form");
var name1 = document.querySelector(".name1");
var searchImg = document.querySelector(".searchImg");
var types3 = document.querySelector(".types-1");
var types4 = document.querySelector(".types-2");
var orderId = document.querySelector(".order");
var held = document.querySelector(".held");

async function searchPoke(){
    var formData = new FormData(form);
    var query = formData.get("searchp");
    var query = query.toLocaleLowerCase();
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    var searchPman = await response.json();
    name1.innerText = searchPman.name;
    if(typeof searchPman.types[1] != "undefined"){
        types3.innerText = "Type 1: " + searchPman.types[1].type.name;
        types4.innerText = "Type 2: " +searchPman.types[0].type.name;
        searchImg.src = searchPman.sprites.front_shiny;
        orderId.innerText = "PokeDex Id # " + searchPman.id;
        held.innerText = "Item held: " + searchPman.held_items[0].item.name;

    }else if(typeof searchPman.types[0] != "undefined" && typeof searchPman.types[1] != "undefined"){
        types4.innerText = "Type 1: " + searchPman.types[0].type.name;
        searchImg.src = searchPman.sprites.front_shiny;
        types3.innerText = " ";
        held.innerText = "Item held: " + searchPman.held_items[0].item.name;
        orderId.innerText = "PokeDex Id # " + searchPman.id;
    }else{
        name1.innerText = "That is not a Pokemon";
    }
}
