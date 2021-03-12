import React from 'react';
import styled from 'styled-components';
import ButtonProps, { ButtonSize } from './button.types';

const StyledButton = styled.button<ButtonProps>`
    font-size: ${props => {
    switch (props.size) {
      case 'small':
        return '.6rem';
      case 'medium':
        return '.8rem';
      case 'large':
        return '1rem';
    }
  }};
    font-weight: 700;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    background-color: ${props => props.primary ? 'DarkSeaGreen' : 'Crimson'};
    box-shadow: 2px 4px 3.5px rgba(0, 0, 0, 0.2);
    padding: 1em 3em;
    color: white;
    outline: none;

    &:active {
        transition: transform .01s ease-in;
        transform: translate(0, 1.5px);
        box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.2);
    }

    &:hover {
        transition: background-color .3s;
        background-color: ${props => props.primary ? ' #4d804d' : '#bb1133'}
    }
`

const Button: React.FC<ButtonProps> = ({
  label,
  primary = false,
  backgroundColor,
  size = ButtonSize.Medium,
  disabled = false,
}) => {

  function handleClick() {
    console.log('You clicked THE button');
  }

  return (
    <StyledButton
      type="button"
      primary={primary}
      size={size}
      onClick={handleClick}
    >{label}</StyledButton>
  );
}

export default Button;
