import React, { Fragment } from 'react';
import { revisarPesupuesto } from '../helpers';

const ControlPresupuesto = ({ presupuesto, restante }) => {
    return ( 

        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: € {presupuesto}
            </div>
            <div className={revisarPesupuesto(presupuesto, restante)}>
                Restante: {restante}
            </div>

        </Fragment>

     );
}
 
export default ControlPresupuesto;