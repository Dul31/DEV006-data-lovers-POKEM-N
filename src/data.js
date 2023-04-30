//import pokemon from "./data/pokemon/pokemon.js";
import data from "./data/pokemon/pokemon.js";
//En el archivo data.js, exporta las funciones de búsqueda y filtrado.

//input SEARCH buscar por nombre ANTIGUO
export const searchPokByName = (name) =>{
  //metodo startsWidth para buscar por nombre comenzando desde la primera
  //console.log(data)
  const searching = data.pokemon.filter(p => p.name.startsWith(name));
  return searching
}

//input search by number
//CONVERTIR EL STRING DEL INPUT EN NUMERO
//filtrar toda la data por el numero que se convirtio
//    durante el filtrado comparar el numero convertido con la propiedad num del pokemon convertida en numero tbn
export function searchPokByNumber(num){
  const searchingNumber = Number(num);
  const searching = data.pokemon.filter(p => searchingNumber === Number(p.num));
  return searching;
}

//para ordenar AZ CORREGIDO
export function ordenadoAz() {
  const ordenado = data.pokemon.sort((a,b)=> a.name.localeCompare(b.name));
  return ordenado;
}

//para invertir el orden ZA FINAL
export function invertirYOrdenarPorNombreZa() {
  const invertirYOrdenarPorNombreZa = data.pokemon.reverse().sort((a, b) => b.name.localeCompare(a.name));
  return invertirYOrdenarPorNombreZa
}

//para que al hacer click se baje a la seccion filtrando
const toFilterLink = document.getElementById("to-filter-link");
toFilterLink.addEventListener("click", (event) => {
  event.preventDefault();
  const filtrandoSection = document.getElementById("filtrando-section");
  filtrandoSection.scrollIntoView({ behavior: "smooth" });
});

//filtrar por tipo
const selectType = document.getElementById("element-type-filter");
selectType.addEventListener("change", () => {
  const filtrado = filtradoTipo(selectType.value);
  console.log(filtrado);
});

//filtrar por debilidad
const selectWeaknesses = document.getElementById("element-weaknesses-filter");
selectWeaknesses.addEventListener("change", () => {
  const filtradoD = filtradoDebilidad(selectWeaknesses.value);
  console.log(filtradoD);
});

//filtrar por fortaleza
const selectResistant = document.getElementById('element-resistant-filter');
selectResistant.addEventListener("change", () => {
  const filtradoR = filtradoResistencia(selectResistant.value);
  console.log(filtradoR)
});

//ordenar ascendentemente
const menorAmayor = document.getElementById("ascendente");
menorAmayor.addEventListener("click", () => {
  const datosOrdenados = ordenarPorNumeroAscendente();
  // Manipulación del DOM para mostrar los datos ordenados por número ascendente
  console.log(datosOrdenados);
});

//ordenar descendentemente
const mayorAmenor = document.getElementById("descendente");
mayorAmenor.addEventListener("click", () => {
  const datosOrdenados = ordenarPorNumeroDescendente();
  // Manipulación del DOM para mostrar los datos ordenados por número descendente
  console.log(datosOrdenados);
});

// Calcular la fuerza
function calcularFuerza(data) {
  const baseAttack = parseInt(data.stats['base-attack']);
  const baseDefense = parseInt(data.stats['base-defense']);
  const baseStamina = parseInt(data.stats['base-stamina']);
  const maxCp = parseInt(data.stats['max-cp']);
  const fuerza = (baseAttack * baseDefense * Math.sqrt(baseStamina) * maxCp**2 / 10**8);
  return fuerza;
}

//filtrado por tipo
export function filtradoTipo(type) {
  const filtrado = data.pokemon.filter((pokemon) =>{
    if(pokemon.type.includes(type)){
      return pokemon;
    }
  });
  return filtrado;
}

//filtar por debilidad
export function filtradoDebilidad(weaknesses) {
  const filtradoWeaknesses = data.pokemon.filter((pokemon) => {
    if(pokemon.weaknesses.includes(weaknesses)){
      return pokemon;
    }
  });
  return filtradoWeaknesses;
}

//filtrar por fortaleza
export function filtradoResistencia(resistant){
  const filtradoResistant = data.pokemon.filter((pokemon)=> {
    if(pokemon.resistant.includes(resistant)){
      return pokemon;
    }
  });
  return filtradoResistant;
}

//ordenar ascendentemente FINAL
export function ordenarPorNumeroAscendente() {
  return data.pokemon.sort((a, b) => a.num - b.num);
}

//ordenar descendente FINAL
export function ordenarPorNumeroDescendente() {
  return data.pokemon.sort((a, b) => b.num - a.num);
}

// Calcular la fuerza
function calcularFuerza(pokemon) {
  const baseAttack = parseInt(pokemon.stats['base-attack']);
  const baseDefense = parseInt(pokemon.stats['base-defense']);
  const baseStamina = parseInt(pokemon.stats['base-stamina']);
  const maxCp = parseInt(pokemon.stats['max-cp']);
  const fuerza = (baseAttack * baseDefense * Math.sqrt(baseStamina) * maxCp**2 / 10**8);
  return fuerza;
}

//Los 10 pokemons más fuertes
export function strongest(data) {
  return data.pokemon.sort((a, b) => calcularFuerza(b) - calcularFuerza(a)).slice(0, 10);
}

//Los 10 pokemons más débiles
export function weaknest(data) {
  return data.pokemon.sort((a, b) => calcularFuerza(a) - calcularFuerza(b)).slice(0, 10);
}