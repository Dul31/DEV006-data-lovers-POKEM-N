import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";
console.log(data.pokemon)


//input SEARCH buscar por nombre 
const btnBuscarByName = document.getElementById('search');
btnBuscarByName.addEventListener('input', (e) =>{
  searchPokByName(e.target.value)
  console.log(e.target.value)
  console.log(searchPokByName(e.target.value))
}) 
export const searchPokByName = (name) =>{
//metodo startsWidth para buscar por nombre comenzando desde la primera
  const searching = data.pokemon.filter(p => p.name.startsWith(name));
  return searching
};


//item order A-Z
const orderAz = document.getElementById('az');
orderAz.addEventListener('click', () => {
  //ordenar la copia por nombre de la A hasta la Z
  const ordenado = data.pokemon.sort((a,b)=> a.name.localeCompare(b.name));
  //mostrar el resultado
  console.log(ordenado);
});

//item order Z-A
const invertirZa = document.getElementById('za');
invertirZa.addEventListener('click', () => {
  const invertido = data.pokemon.reverse().sort((a,b)=> a.name.localeCompare(b.name));
  //mostrar el resultado
  console.log(invertido);
});

//item order x NUMERO ascendente 
const menorAmayor = document.getElementById('ascendente');
menorAmayor.addEventListener('click', () => {
  const ascending = data.pokemon.sort((a,b) => a.num - b.num);
  console.log(ascending);
});


//item order x NUMERO descendente
const mayorAmenor = document.getElementById('descendente');
mayorAmenor.addEventListener('click', () => {
  const descending = data.pokemon.sort((a,b) => b.num - a.num);
  console.log(descending);
});


//click en el boton filtrar y que vaya a la seccion de filtrar
// Obtener el enlace "TO FILTER"
const toFilterLink = document.getElementById('to-filter-link');

// Agregar un evento de clic al enlace
toFilterLink.addEventListener('click', (event) => {
  // Prevenir el comportamiento predeterminado del enlace
  event.preventDefault();
  
  // Obtener la sección correspondiente
  const filtrandoSection = document.getElementById('filtrando-section');
  
  // Desplazarse suavemente hacia la sección correspondiente
  filtrandoSection.scrollIntoView({ behavior: 'smooth' });
});



//Filtro por tipo
const typeWater = document.getElementById('water');
typeWater.addEventListener('click', () => {
  filtradoTipo("water");
})



function filtradoTipo(type){
  const filtrado = data.pokemon.filter((pokemon) =>{
    if(pokemon.type.includes(type)){
      return pokemon;
    }
  });
  console.log (filtrado);
}

