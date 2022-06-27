import React from "react";


function Listado(props){
    
    const traerarticle=()=>{
        const articulo = document.querySelector(`.articulo`);
        articulo.classList.toggle('articulo2')
     }

    return(
       <div className="listado"> 
       <button onClick={traerarticle} >View Details</button>
          <p>{props.card}</p>
          <p>{props.status}</p>
          <p>{props.total}</p>
          <p>{props.date}</p>
          <p>{props.name}</p>
          <p>{props.id}</p>
          <input type="checkbox"/>
       </div>
    );
}

export default Listado;