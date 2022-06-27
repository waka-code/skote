import './App.css';
import Nav from './componentes/Nav'; 
import Menuvertical from './componentes/Menuvertical';
import Contenedorheader from './componentes/Contenedorheader'
import Grafico from './componentes/Grafico';
import  Boxwelcome_month from './componentes/Boxwelcome_month'
import LatestTransaccion from './componentes/LatestTransaccion'
import Opciones from './componentes/OpcionesDashboar'
import InfoUsuario from './componentes/InfoUsuario'
import Notificacion from './componentes/Notificacion'
import Megamenu from './componentes/Megamenu'
import Articulo from './componentes/Articulo'
import AuthFirebase from './componentes/AuthFirebase';
import "firebase/firestore";
import "firebase/auth";
import './style/responsive.css'

function App() {
 
  return (
    <div className='App'>
      <AuthFirebase/>
      <div className='opciones opiciones2'>
      <Opciones/>
      </div>

      <div className="information information2">
       <InfoUsuario/>
      </div>

       <div className="Not Not2">
              <Notificacion/>
      </div>

      <div className="mega mega2">
              <Megamenu/>
      </div>

       <div className='contenedor_nav'>
        <Nav name='Louis' />
        <article className="dasboards">
               <p>Dashboard / <span>Dashboards</span></p>
               <p>DASHBOARD</p>
        </article>

        <div className='contenedor_header'>
          <div className='boxBox'>
          <div className='headerLeft'>
          <Contenedorheader/>
          <br/>
          <div className='graphica'>
            <Grafico/>
           </div>
          </div>
         <div className='headerRithg'>
            < Boxwelcome_month
            usuarios='usuario'
            name='Henry Price'
            profecion='Designer'
            money='$1245'
            proyect='125'
            />

            < Boxwelcome_month
             usuarios='usuario1'
            name='Vlad Louis'
            profecion='Programmers'
            money='$2245'
            proyect='255'
            />
         </div>
        </div>
         <div className='Latestransaction'>
           <section>
           <p className='transaction'>Latest Transaction</p>
           </section>
           <article> 
             <LatestTransaccion/>
           </article>
         </div>
          <div className="articulo articulo2">
        <Articulo/>
      </div>
       </div>
       <footer>
         <p>
          Desingn & Develop by Waka-Code
         </p>
         <p>
           Waka-Code 2020
         </p>
       </footer>
       </div>
       <div className='menuVertical menuVertical2'>
        <Menuvertical />
      </div>
    </div>
  );
}

export default App;
