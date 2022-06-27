import React from "react";
import Designer from '../img/Designer.png'
import Menuvercomponent from "./Menuvercomponent";

function Megamenu(props){
    return(
        <div className="megamenu">
            <section className="megaImg">
                <img src={Designer} alt="" />
            </section>
            <section className="megaText">
            <Menuvercomponent
             title='UI Components'
             name='Lightbox'
             titleli='Rating'
             titlelii='Forms'
             titleliii='Tables'
             titleliiii='Charts'
          />

            <Menuvercomponent
             title='Extra Pages'
             name='Light Sidebar'
             titleli='Horizontal layout'
             titlelii='FAQs'
             titleliii='Timeline'
             titleliiii='Maintenance'
          />

            <Menuvercomponent
             title='Applications'
             name='Ecommerce'
             titleli='Calender'
             titlelii='Email'
             titleliii='Tables'
             titleliiii='Charts'
          />

            <Menuvercomponent
             title='UI Components'
             name='Lightbox'
             titleli='Rating'
             titlelii='Forms'
             titleliii='Tables'
             titleliiii='Charts'
          />
            </section>
        </div>
      
    );
}

export default Megamenu;