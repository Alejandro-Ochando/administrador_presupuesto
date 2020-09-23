import React, { useState } from 'react';
import shortid from 'shortid';
import Error from './Error';

const Formulario = ({ agregarNuevoGasto }) => {
    
    const [ nombre, guardarGasto ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);
    

    //Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if(nombre.trim() === '' || isNaN( cantidad ) || cantidad < 1){
            guardarError(true);
            return;
        }
        
        guardarError(false);
        //construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()

        }

    
        //pasar el gasto al componente principal
        agregarNuevoGasto(gasto);


        //Resetear el form
        guardarGasto('');
        guardarCantidad(0);

    }
    
    return ( 

        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregas tus gastos aquí</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o Error en el presupuesto" />  : null }
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre} //Valor inicial
                    onChange={e => guardarGasto(e.target.value)}
                />
                <label>Cantidad Gasto</label>

                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 200"
                    value={cantidad}
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Agregar Gasto"
                    
                />
            </div>
        </form>


     );
}
 
export default Formulario;