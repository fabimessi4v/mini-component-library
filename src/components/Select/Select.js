import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

// Parametros: value (valor seleccionado actualmente), onchange (funcion que se ejecuta si el usuario, elige opcion distinta)
const Select = ({ label, value, onChange, children }) => {
  // busca entre los hijos, similitud con el valor actual
  const displayedValue = getDisplayedValue(value, children);

  return (
    <SelectWrapper>
    <Nativeselect value={value} onChange={onChange}>
      {children}
    </Nativeselect>
    <Helper>hello<Icon id="chevron-down" size={24} strokeWidth={2} /></Helper>
    </SelectWrapper>
  );
};


const SelectWrapper= styled.div `
position: relative;
width: max-content;
`
const Helper= styled.div `
background-color:${COLORS.transparentGray15};
color:${COLORS.gray700};
padding: 12px 16px;
font-size: 16px;
`

const Nativeselect= styled.select `
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
opacity: 0;
`
export default Select;
