import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function Grafico(props){
    return(
        <div className="graph" >

         <div className="contenedorProgressBar">
            <span className="progressText">{props.texto ? props.texto : "2022-Earned money"}</span>
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-Primary progress-bar-animated"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "100%"}}>
                </div>
            </div>
        </div>

        <div className="contenedorProgressBar">
            <span className="progressText">{props.texto ? props.texto : "2021-Earned money"}</span>
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-Primary progress-bar-animated"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "80%"}}>
                </div>
            </div>
        </div>

        <div className="contenedorProgressBar">
            <span className="progressText">{props.texto ? props.texto : "2020-Earned money"}</span>
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-Primary progress-bar-animated"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "60%"}}>
                </div>
            </div>
        </div>

        <div className="contenedorProgressBar">
            <span className="progressText">{props.texto ? props.texto : "2019-Earned money"}</span>
            <div className="progress">
                <div className="progress-bar progress-bar-striped bg-Primary  progress-bar-animated"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "40%"}}>
                </div>
            </div>
        </div>

         </div>
    );
}

export default Grafico;