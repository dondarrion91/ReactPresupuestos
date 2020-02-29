import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

const Listado = ({gastos}) => (
  <div className="gastos-realizados">
    <h2>{gastos.map(gasto => (
        <Gasto
            key={gasto.id}
            gasto={gasto}
        />
    ))}</h2>
  </div>
);

Listado.protoTypes = {
  gastos: PropTypes.array.isRequired
}
 
export default Listado;