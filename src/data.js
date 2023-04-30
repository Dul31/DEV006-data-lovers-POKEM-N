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


