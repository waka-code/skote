import React from "react";
import '../style/header.css'

function Header(props){
    return(
        <section className="headerBox">
            <article className="boxAverage">
            <article>
            <img className="imgBox" src= {require(`../img/${props.img}.png`)}/>
            </article>
                <article>
                <p>{props.title}</p>
                <p>{props.prices}</p>
                </article>
            </article>
            
        </section>
    )
}

export default Header;