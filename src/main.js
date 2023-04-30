/* eslint-disable no-console */
//main.js, importa las funciones exportadas de data.js y las usa para realizar la manipulación de dato
import data from "./data/pokemon/pokemon.js";
import {searchPokByName, searchPokByNumber, ordenadoAz, invertirYOrdenarPorNombreZa} from "./data.js";

const containerPokemons=document.getElementById("pokemones")

const templateCard = datapokemon => {
  containerPokemons.innerHTML = "";
  datapokemon.forEach(pokemon => {
    const containerCard = document.createElement("div");
    containerCard.classList.add("contenedor-card1");
    containerCard.setAttribute("id", "contenedor-card1");
    containerCard.innerHTML +=
    `<div class="card1" id="card1">
      <h2 class="pokemon-name">${pokemon.name}</h2>
      <div class="pokemon-img-container" id="pokemon-img-container">
        <img class="pokemon-img" src="${pokemon.img}" alt="${pokemon.name}">
      </div>
      <p class="pokemon-num">${pokemon.num}</p>
    </div>`;
    containerPokemons.appendChild(containerCard);
  });
};

templateCard(data.pokemon);

const actualizarResultados = (searchQuery) => {
  const searchResult = searchPokByName(searchQuery);
  containerPokemons.innerHTML = "";
  templateCard(searchResult);
};

//buscar por nombre
const btnBuscarByName = document.getElementById('search');
btnBuscarByName.addEventListener('input', (e) =>{
  actualizarResultados(e.target.value)
});

//buscar por numero
const buscarByNumber = document.getElementById("search");
buscarByNumber.addEventListener("input", (e)=> {
  const searchNumResult = searchPokByNumber(e.target.value);
  containerPokemons.innerHTML = "";
  templateCard(searchNumResult);
});

//ventana del modal para cerrar
const cerrar = document.getElementById('cerrar');
//para cerrar la ventana emergente
cerrar.addEventListener('click', () =>  {
  const msj = document.getElementById('msj');
  msj.classList.remove('show');
  console.log(msj)
});



//ventana del modal para cerrar
const cerrarN = document.getElementById('cerrar');
//para cerrar la ventana emergente
cerrarN.addEventListener('click', () =>  {
  const msj = document.getElementById('msj');
  msj.classList.remove('show');
});

//para que al hacer click se baje a la seccion filtrando
const toFilterLink = document.getElementById("to-filter-link");
toFilterLink.addEventListener("click", (event) => {
  event.preventDefault();
  const filtrandoSection = document.getElementById("filtrando-section");
  filtrandoSection.scrollIntoView({ behavior: "smooth" });
});

//para ordenar A-Z FINAL
const orderAz = document.getElementById('az');
orderAz.addEventListener('click', () => {
  const ordenado = ordenadoAz();
  console.log(ordenado);
})


//ordenar de la Z-A FINAL
const invertirZa = document.getElementById("za");
invertirZa.addEventListener("click", () => {
  const datosInvertidos = invertirYOrdenarPorNombreZa();
  // Manipulación del DOM para mostrar los datos invertidos y ordenados
  console.log(datosInvertidos);
});

