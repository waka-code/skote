import React from "react";
import Close from '../img/close.png'

function Opciones(){

    const CloseSetting =()=>{
        const closeOpciones = document.querySelector(`.opciones`);
        closeOpciones.classList.toggle(`opciones2`)
     }

    return(
       <section className="SecOpcion">
        <article className="clo">
            <img className="close" src={Close} onClick={CloseSetting} />
            <p>Settings</p>
        </article>
        <hr />
        <article className="Layouts">
            <p>Choose Layouts</p>
        </article>
       </section>
    );
}

export default Opciones;