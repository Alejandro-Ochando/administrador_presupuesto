import React from 'react';

const Gasto = ({ gasto }) => {
 
    return (

        <li className="gastos presupuesto">
            <p>
                {gasto.nombre}
                <span className="gasto">€ {gasto.cantidad} </span>
            </p>
        </li>


      );
}
 
export default Gasto;