import React from "react";
import lock from '../img/lock.png';
import wallet from '../img/wallet.png';
import user from '../img/user.png';
import xseccion from '../img/xseccion.png';
import check from '../img/check.png';

function InfoUsuario(){
     const checkk=()=>{
      const fire = document.querySelector(`.firebase`);
      fire.classList.toggle(`firebase2`)
     }
    
    return(
       <div className="info info2">
          <p><img src={user} alt="" />Profile</p>
          <p><img src={wallet} alt="" />My Wallet</p>
          <p><img src={lock} alt="" />Lock screen</p>
          <p className="check" onClick={checkk}><img src={check} alt=""/>Login</p>
          <p className="logout"><img src={xseccion} alt="" />Loguot</p>
       </div>
    );
}

export default InfoUsuario;