import React, { useState } from 'react';

const Formulario = () => {
    return ( 

        <form>
            <h2>Agregas tus gastos aquí</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
                <label>Cantidad Gasto</label>

                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 200"
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