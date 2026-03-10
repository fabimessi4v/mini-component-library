import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


/*
  Explicación de componentes.
  Wrapper:
  Es un contenedor para el input, el icono y el label oculto.
  El label oculto se utiliza para mejorar la accesibilidad, ya que
  proporciona una descripción del campo de entrada para los lectores
  de pantalla.

  El icono se muestra dentro del campo de entrada para indicar su
  propósito, y el input es donde el usuario puede escribir su texto.
  El wrapper también se encarga de posicionar correctamente estos
  elementos y aplicar estilos como el color y el tamaño.
*/
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': size === 'small' ? 16 + "px" : 24 + "px" }}>
        <Icon id={icon} size={size === 'small' ? 16 : 24} />
      </IconWrapper>
      <TextInput placeholder={placeholder} width={width} />
    </Wrapper>
  );
}

const Wrapper = styled.label `
position: relative;
display: block;
color: ${COLORS.gray700};
&:hover {
  color: ${COLORS.black};
}
`



const IconWrapper = styled.div `
position: absolute;
top: 0;
bottom: 0;
left: 0;
margin: auto;
height: var(--size);
width: var(--size);
pointer-events: none;
`

const TextInput = styled.input `
height: 24px;
border  : none;
border-bottom: 1px solid ${COLORS.black};
padding-left: 24px;
color: inherit;
font-weight: 700;
&::placeholder {
  color: ${COLORS.gray500};
  font-weight: 400;
}

` 


export default IconInput;
