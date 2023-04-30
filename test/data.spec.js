import {searchPokByName, searchPokByNumber, ordenadoAz, invertirYOrdenarPorNombreZa} from "../src/data.js";
jest.mock("../src/data/pokemon/pokemon.js", () => {
  return {
    pokemon: [
      {
        num: "067",
        name: "machoke",
        img: "https://www.serebii.net/pokemongo/pokemon/067.png",
        type: ["fighting"],
        resistant: ["bug", "rock", "dark"],
        weaknesses: ["flying", "psychic", "fairy"],
        stats: {
          "base-attack": "177",
          "base-defense": "125",
          "base-stamina": "190",
          "max-cp": "2031",
          "max-hp": "162",
        },
      },
      {
        num: "243",
        name: "raikou",
        img: "https://www.serebii.net/pokemongo/pokemon/243.png",
        type: ["electric"],
        resistant: ["electric", "flying", "steel"],
        weaknesses: ["ground"],
        stats: {
          "base-attack": "241",
          "base-defense": "195",
          "base-stamina": "207",
          "max-cp": "3452",
          "max-hp": "175",
        },
      },
      {
        num: "173",
        name: "cleffa",
        img: "https://www.serebii.net/pokemongo/pokemon/173.png",
        type: ["fairy"],
        resistant: ["fighting", "bug", "dragon", "dark"],
        weaknesses: ["poison", "steel"],
        stats: {
          "base-attack": "75",
          "base-defense": "79",
          "base-stamina": "137",
          "max-cp": "671",
          "max-hp": "120",
        },
      },
    ],
  };
});

//buscar pokemon por name
describe("searchPokByName busca a todos los pokemones por su nombre", () => {
  it("is a function", () => {
    expect(typeof searchPokByName).toBe("function");
  });

  it("returns deberia retornar el nombre del pokemon buscado cleffa para [cleffa]", () => {
    expect(searchPokByName("cleffa")).toEqual([
      {
        num: "173",
        name: "cleffa",
        img: "https://www.serebii.net/pokemongo/pokemon/173.png",
        type: ["fairy"],
        resistant: ["fighting", "bug", "dragon", "dark"],
        weaknesses: ["poison", "steel"],
        stats: {
          "base-attack": "75",
          "base-defense": "79",
          "base-stamina": "137",
          "max-cp": "671",
          "max-hp": "120",
        },
      },
    ]);
  });
});

//test para buscar por numero
describe("searchByNumber busca al pokemón por su numero", () => {
  it("is a function", () => {
    expect(typeof searchPokByNumber).toEqual("function");
  });

  it("debería retornar el numero del pokemon buscado 67 para [067]", () => {
    expect(searchPokByNumber("67")).toEqual([
      {
        num: "067",
        name: "machoke",
        img: "https://www.serebii.net/pokemongo/pokemon/067.png",
        type: ["fighting"],
        resistant: ["bug", "rock", "dark"],
        weaknesses: ["flying", "psychic", "fairy"],
        stats: {
          "base-attack": "177",
          "base-defense": "125",
          "base-stamina": "190",
          "max-cp": "2031",
          "max-hp": "162",
        },
      },
    ]);
  });
});

//Test para ordenar A-Z
describe("ordenadoAz ordena todos los pokemones por orden alfabético", () => {
  it("is a function", () => {
    expect(typeof ordenadoAz).toBe("function");
  });

  it("returns una matriz de pokemon ordenada alfabeticamente ascendente [cleffa], [machoke], [raikou]", () => {
    const resultadoOrdenadoAz = ordenadoAz();//arreglo de pokemon ordenado
    const primerPokemonDespuesdeOrdenar = resultadoOrdenadoAz[0];
    const segundoPokemonDespuesdeOrdenar = resultadoOrdenadoAz[1];
    const tercerPokemonDespuesdeOrdenar = resultadoOrdenadoAz[2];
    expect(primerPokemonDespuesdeOrdenar.name).toBe("cleffa");
    expect(segundoPokemonDespuesdeOrdenar.name).toBe("machoke");
    expect(tercerPokemonDespuesdeOrdenar.name).toBe("raikou");
  });
});

//test para invertir y ordenar Z-A
describe("invertirZa invierte y ordena todos los pokemos de la Z a la A", () => {
  it("is a function", () => {
    expect(typeof invertirYOrdenarPorNombreZa).toBe("function");
  });

  it("returns `los nombres de los pokemones de la Z-A [raikou], [machote], [cleffa]", () => {
    const resultadoinvertirYOrdenarPorNombreZa = invertirYOrdenarPorNombreZa();//arreglo de pokemon ordenado de Z a A
    const primerPokemonOrdenInvertido = resultadoinvertirYOrdenarPorNombreZa[0];
    const segundoPokemonOrdenInvertido = resultadoinvertirYOrdenarPorNombreZa[1];
    const tercerPokemonOrdenInvertido = resultadoinvertirYOrdenarPorNombreZa[2];
    expect(primerPokemonOrdenInvertido.name).toBe("raikou");
    expect(segundoPokemonOrdenInvertido.name).toBe("machoke");
    expect(tercerPokemonOrdenInvertido.name).toBe("cleffa");
  });
});