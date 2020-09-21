import React, { Fragment, useState } from 'react';

const Pregunta = () => {
    
    //Definicion del state
    const [ cantidad, guardarCantidad] = useState(0);
    

    //Fuuncion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt( e.target.value));
    }

    // Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validacion

        //Si hay error en la validacion



    }



    return (

        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            <form
                onSubmit={agregarPresupuesto}
            >
                
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;