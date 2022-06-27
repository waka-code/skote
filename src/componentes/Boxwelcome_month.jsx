import React from "react";
import usuario from '../img/usuario.jpg'

function Boxwelcome_month(props){
    return(
      <div className="welcomeDasboard">
        <section>
            <img className="imgusuario" src= {require(`../img/${props.usuarios}.jpg`)}/>
            <p className="name">{props.name}</p>
            <p className="profesion">{props.profecion}</p>
        </section>
        <section className="btn">
            <p> {props.money} <br /> <span>Revenue</span></p>
            <p> {props.proyect} <br /> <span>Projects</span></p>
            <button>View profile</button>
        </section>
      </div>
    );
}

export default Boxwelcome_month;