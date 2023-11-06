import axios from "axios";
/*
LO que hacemos es hacer una peticion a una pagina web, y esta
peticion nos devuelve un resultado, que se guarda en peticion
EL await se usa para decir, voy a hacer una peticion a una determinada
pagina, pero espera que la pagina me devuelva una respuesta
Entonces con el await esperamos la respuesta de la pagina, osea el recurso
La peticion nos retorna una array, dentro de data estan los personajes de la pagina
con sus propiedades
*/
export const  TodoslosPersonajes= async (state)=>{
const peticion=  await axios.get("https://rickandmortyapi.com/api/character")
state(peticion.data.result)
}

