import React from "react";
import Menuvercomponent from "./Menuvercomponent";

function Menuversecc(){
   return(
      <div className="menuversecc">
        <Menuvercomponent
         arrows='arrow'
         title='Menu'
         name='Dashboards'
         titleli='Default'
         titlelii='Sass'
         titleliii='Crypto'
           />

         <Menuvercomponent
         arrows='arrow'
         title='APPS'
         name='Calendars'
         titleli='Chats'
         titlelii='File Manager'
         titleliii='Ecommerce'
           />

         <Menuvercomponent
        arrows='arrow'
         title='PAGES'
         name='Authentication'
         titleli='Utility'
         titlelii='Tables'
         titleliii='Charts'
           />

        <Menuvercomponent
        arrows='arrow'
         title='COMPONENTS'
         name='UI Elements'
         titleli='Forms'
         titlelii='Tables'
           />

       <Menuvercomponent
        arrows='arrow'
         title='COMPONENTS'
         name='UI Elements'
         titleli='Forms'
         titlelii='Tables'
           /> 

        <Menuvercomponent
         arrows='arrow'
         title='APPS'
         name='Calendars'
         titleli='Chats'
         titlelii='File Manager'
         titleliii='Ecommerce'
           />

      </div>
   )
}

export default Menuversecc;