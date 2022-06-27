import React from "react";
import close from '../img/close.png'

function Articulo(){

    const closeArti=()=>{
            const articulo=document.querySelector('.articulo');
            articulo.classList.toggle('articulo2');
    }

    return(
        <div className="arti">
         <section className="order">
            <img src={close} alt=""  onClick={closeArti}/>
            <p>Order Details</p>
         </section>

         <p className="keyss">Product id: #SK2540 <br />
            Billing Name: Neal Matthews</p> 
         <hr />

         <section className="produc">
           <article>
            <p>Price</p>
             <article className="pro">
             <p>Product Name</p>
            <p>Product</p>
             </article>
           </article>
         </section>
         <hr />
         <section className="ProductosOrder">
            //esperando producto
         </section>
         <hr />
         <section className="btnclose">
            <button onClick={closeArti} >Close</button>
         </section>
      </div>
    );
}

export default Articulo;