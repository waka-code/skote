import React from "react";
import Arrow from '../img/arrow.png'
import '../style/Menuvercomponent.css'

function Menuvercomponent(props){
    return(
        <div className='componenteTitle'>
            <p className="title">{props.title}</p>
            <article className="titleComponent">
                <article>
                <img src={Arrow} className="arrow" />
                  {props.name}
                </article>
                  
                  <ul className="titleText">
                       <li>{props.titleli}</li>
                       <li>{props.titlelii}</li>
                       <li>{props.titleliii}</li>
                       <li>{props.titleliiii}</li>
                  </ul>
            </article>
        </div>
    );
}

export default Menuvercomponent;