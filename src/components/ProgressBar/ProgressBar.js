/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';



const SIZES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    radius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    radius: 8,
  },
};








const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    /* Contenedor principal que define el tamaño y fondo gris */
    <Wrapper 
      role="progressbar" 
      aria-valuenow={value} 
      aria-valuemin="0" 
      aria-valuemax="100"
      padding={styles.padding}
      radius={styles.radius}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      
      {/* La barra que se llena */}
      <BarWrapper radius={styles.radius - styles.padding}>
        <Bar value={value} height={styles.height}/>
      </BarWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px 2px ${COLORS.transparentGray35};
  /* Usamos las props dinámicas */
  border-radius: ${p => p.radius}px;
  padding: ${p => p.padding}px;
`;

const BarWrapper = styled.div`
  overflow: hidden;
  /* El radio interno debe ser un poco menor si hay padding */
  border-radius: ${p => p.radius}px;
`;

const Bar = styled.div`
  width: ${p => p.value}%;
  height: ${p => p.height}px;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;



export default ProgressBar;
