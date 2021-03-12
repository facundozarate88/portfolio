import React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
    label?: string;
    primary?: boolean;
    backgroundColor?: boolean;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    onClick?: () => void;
};

const StyledButton = styled.button<ButtonProps>`
    font-size: .8rem;
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
    size = 'medium',
    disabled = false,
}) => {

    function handleClick() {
        console.log('You clicked THE button');
    }

    return (
        <StyledButton
            type="button"
            primary={primary}
            onClick={handleClick}
        >{label}</StyledButton>
    );
}

export default Button;