import React from "react";
import Regular from '../img/regular.png'
import '../style/Menuvertical.css'
import Menuversecc from "./Menuversecc";

function Menuvertical(props){
   return(
      <div className="menuVerticall">
         <h2> <img src={Regular} /> SAINT</h2>
         <div className="menuTexto">
           <Menuversecc />
         </div>
      </div>
   );
}

export default Menuvertical;