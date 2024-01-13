import React from "react";
import "./style.css";

import PastaTec from "../../PastaTec/index";

export default function ConteudoPrincipal(){
     return(
        <main>
            <section className="primeira-secao">
                <h2>React JS</h2>
                <p>Biblioteca Javascrip para  criar SPAs</p>
                <a href="https://reactjs.org/" target="_blank">Site Oficial</a>
            </section>

            <section className="segunda-secao">
                <h2>Requisitos</h2>
                <p>Veja abaixo os requisitos mínimos para aprender React JS</p>
                <div className="tecnologias">
                    <PastaTec 
                        titulo = "HTML" 
                        texto = "Aprender a estrututar os elementos da página com HTML" 
                    />
                    <PastaTec
                         titulo = "CSS"
                         texto = "Aprender a estilizar os elementos da página com CSS" 
                    />
                    <PastaTec 
                         titulo = "JavaScipt"
                         texto = "Aprender a linguagem utilizada pelo React JS, o JavaScript"
                    />
                </div>
            </section>
        </main>
     );
};