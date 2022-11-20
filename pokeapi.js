var pokeList = document.querySelector(".pokeList");
var click1 = document.querySelector(".click1");
var search = document.querySelector(".searchp");
console.log("hello");

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


// async function pokeSearch() {
//     var response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
//     var search1 = await response.json();
//     console.log(poke.sprites.front_default);

// }
    
// pokeSearch();