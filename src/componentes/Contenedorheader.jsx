import React from "react";
import Header from './Header'

function Contenedorheader(props){
    return(
        <div className="boxHeader">
          <Header 
           img='collectio'
           title='Avarage Price'
           prices= '$16.2'/>

          <Header 
           img='package'
           title='Revenue'
           prices= '723,$35'/>

        <Header 
           img='reflect'
           title='Orders'
           prices= '1,235'/>
        </div>
    );
}

export default Contenedorheader;