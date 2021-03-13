import React from 'react';
import styled from 'styled-components';
import ButtonProps from './button.types';
import { Size } from '../../types/common.types';

const getButtonSize = (props: ButtonProps) => {
  switch (props.size) {
    case Size.Small:
      return '.7rem';
    case Size.Medium:
      return '.8rem';
    case Size.Large:
      return '1rem';
  }
};

const getButtonType = (props: ButtonProps) => {
  if (props.disabled) {
    return props.theme.buttons.disabled;
  } else if (props.primary) {
    return props.theme.buttons.primary;
  } else {
    return props.theme.buttons.secondary;
  }
};

const StyledButton = styled.button<ButtonProps>`
  ${props => getButtonType(props)}
  font-size: ${props => getButtonSize(props)};
`;

const Button: React.FC<ButtonProps> = ({
  label,
  primary = false,
  size = Size.Medium,
  disabled = false,
  ...rootDOMAttributes
}) => {
  return (
    <StyledButton
      type="button"
      primary={primary}
      size={size}
      disabled={disabled}
      {...rootDOMAttributes}
    >{label}</StyledButton>
  );
};

export default Button;
