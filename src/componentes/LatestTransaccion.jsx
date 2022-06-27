import React from "react";
import Listado from './Listado'

function LatestTransaccion(props){
   return(
       <div className="View">
        <div className="viewTitle">
        <p>View Details</p>
        <p>Payment Method</p>
        <p>Payment Status</p>
        <p> Total</p>
        <p>Date</p>
        <p>Billing Name</p>
        <p>Order iD</p>
        <input type="checkbox" />
        </div>
        <br />
        <Listado
        card='Mastercard'
        status='Chargeback'
        total='$400'
        date='Oct,2019 07'
        name='Neal Matthews'
        id='SK2540#'
        />
         <hr />
        <Listado
        card='Mastercard'
        status='Paid'
        total='$400'
        date='Oct,2019 07'
        name='Neal Matthews'
        id='SK2540#'
        />
        <hr />
        <Listado
        card='Mastercard'
        status='Refund'
        total='$410'
        date='Oct,2020 07'
        name='Barry Matthews'
        id='SK5896#'
        />
        <hr />
        <Listado
        card='Mastercard'
        status='Refund'
        total='$410'
        date='Oct,2020 07'
        name='Barry Matthews'
        id='SK5896#'
        />
       </div>

       
   );
}

export default LatestTransaccion;