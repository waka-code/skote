import React from "react";
import Imagen from '../img/color-solid-24.png';
import Arrow from '../img/arrow.png'
import Usuario from '../img/usuario.jpg'
import Escudo from '../img/bell.png'
import Menu from '../img/menu.png'
import '../style/style.css'

function Nav(props){
     const TraerSetting =()=>{
        const opciones=document.querySelector('.opciones');
        opciones.classList.toggle('opciones2');
     }

     const TraerInfo = () =>{
        const info=document.querySelector('.information');
        info.classList.toggle('information2');
     }

     const Traernotificacion=()=>{
        const Not=document.querySelector('.Not');
        Not.classList.toggle('Not2');
     }

     const Traermegamenu=()=>{
        const mega=document.querySelector('.mega');
        mega.classList.toggle('mega2');
     }

     const traetsaint=()=>{
       const menuVertical = document.querySelector('.menuVertical');
       menuVertical.classList.toggle('menuVertical2')
    
      }
     
     
    return(
      <div className="Nav_componentes">
        <div className="Nav_bordeIzquierdo">
            <img src={Imagen} className="imagen" onClick={TraerSetting}/>
            <article className="nav_article" onClick={TraerInfo}>
                <img src={Arrow}  className="imagen arrow" />
                <p className="name_p"> {props.name} </p>
                <img src={Usuario} className='usuario'/>
            </article>
            <img src={Escudo} className='imagen' onClick={Traernotificacion}/>
        </div>

        <div className="Nav_bordedDerecho">
            <article className="megamenu" onClick={Traermegamenu}>
            <img src={Arrow} className="imagen arrow" />
            <p className="name_p"> M_Menu </p>
            </article>
            <article className="search">    
                <input type="search" placeholder="Search" className="search_imput" />
                <img src={Menu} className="menu" onClick={traetsaint} />
            </article>
        </div>
      </div>

    )
}

export default Nav;