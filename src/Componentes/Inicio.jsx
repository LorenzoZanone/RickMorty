import React, { useEffect, useState } from "react";
import { TodoslosPersonajes } from "../Funciones/funciones";

/*
Cuando se cargue la pagina, se va a ejecutar el UseEffect
*/
export const Inicio = () => {
  const [personajes, SetPersonajes] = useState(null);
  useEffect(() => {
    TodoslosPersonajes(SetPersonajes);
  }, []);
  return (
    <div>
      {personajes != null
        ? personajes.map((personaje) => (
            <div key={personaje.key}>
              <a href="">{personaje.name}</a>
              <img src={personaje.image} alt=""></img>
            </div>
          ))
        : "No hay personajes"}
    </div>
  );
};

export default Inicio;
