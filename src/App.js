import React from "react";
import './App.css';
import Topo from "./componentes/Topo";
import ConteudoPrincipal from "./componentes/ConteudoPrincipal";
import Rodape from "./componentes/Rodape";

function App() {
  return (
    <body>
       <Topo />
       <ConteudoPrincipal />
       <Rodape />
    </body>
  );
};

export default App;
