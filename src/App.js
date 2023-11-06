import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./Componentes/Inicio";
import { Personaje } from "./Componentes/Personaje";
import './index.css';
/*
BrowserRouter se usa para crear rutas,
dentro de Routes van cada una de las rutas o enlaces de nuestra 
pagina, el path especifica la ruta y el element , la funcion que se va 
a ejecutar 

*/

function App() {
  return (
    <div className="contenedor">
      ;
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route
            path="/personaje/:id"
            element={<Personaje></Personaje>}
          ></Route>
        </Routes>
      </BrowserRouter>
      ;
    </div>
  );
}

export default App;
