import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Size } from '../../../types/common.types';

const bounceDelay = keyframes`
    0%, 80%, 100% { transform: scale(0) }
    40% { transform: scale(1) }
`;

const StyledBounceDot = styled.div<BounceLoaderProps>`
    width: ${props => calculateSize(props.size!)};
    height: ${props => calculateSize(props.size!)};
    margin: 0 1px;
    background: ${args => args.color};
    border-radius: 100%;
    display: inline-block;
    animation: ${bounceDelay} 1.4s infinite ease-in-out both;

    &:nth-child(1) { animation-delay: -.32s }
    &:nth-child(2) { animation-delay: -.16s }
`;

interface BounceLoaderProps {
  size?: Size,
  color?: string,
}

const calculateSize = (size: Size) => {
  switch (size) {
    case Size.Small:
      return '1.5em';
    case Size.Medium:
      return '3em';
    case Size.Large:
      return '4.5em';
  }
};

const BounceLoader: React.FC<BounceLoaderProps> = ({ size, color }) => {
  const dots = ['1', '2', '3'];
  return (
    <React.Fragment>
      { dots.map(key => <StyledBounceDot key={key} size={size} color={color} />)}
    </React.Fragment>
  )
};

export default BounceLoader;
