import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import { rotate } from '../../../animations/animations';
import { LoaderSize } from '../loaderTypes';

const chaseDot = keyframes`
    80%, 100% { transform: rotate(360deg) };
`;

const chaseDotBefore = keyframes`
    50% {
        transform: scale(.4);
    } 100%, 0% {
        transform: scale(1);
    }
`;

const StyledChaseLoader = styled.div<ChaseLoaderProps>`
    width: ${props => calculateSize(props.size)};
    height: ${props => calculateSize(props.size)};
    position: relative;
    animation: ${rotate} 2.5s infinite linear both;
`;

const ChaseDot = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    animation: ${chaseDot} 2s infinite ease-in-out both;

    &::before {
        content: '';
        display: block;
        width: 25%;
        height: 25%;
        background: ${props => props.color || '#1815bd'};
        border-radius: 100%;
        animation: ${chaseDotBefore} 2s infinite ease-in-out both;
    }

    &:nth-child(1) { animation-delay: -1.1s }
    &:nth-child(2) { animation-delay: -1s }
    &:nth-child(3) { animation-delay: -.9s }
    &:nth-child(4) { animation-delay: -.8s }
    &:nth-child(5) { animation-delay: -.7s }
    &:nth-child(6) { animation-delay: -.6s }

    &:nth-child(1)::before { animation-delay: -1.1s }
    &:nth-child(2)::before { animation-delay: -1s }
    &:nth-child(3)::before { animation-delay: -.9s }
    &:nth-child(4)::before { animation-delay: -.8s }
    &:nth-child(5)::before { animation-delay: -.7s }
    &:nth-child(6)::before { animation-delay: -.6s }
`;

interface ChaseLoaderProps {
    size: LoaderSize
    color?: string,
}

const calculateSize = (size: LoaderSize) => {
    switch (size) {
        case LoaderSize.Small:
            return '2em';
        case LoaderSize.Medium:
            return '3em';
        case LoaderSize.Large:
            return '4em';
    }
};

const ChaseLoader: React.FC<ChaseLoaderProps> = ({ color, size }) => {
    const dots = ['1', '2', '3', '4', '5', '6'];

    return (
        <StyledChaseLoader size={size}>
            {dots.map((key) => <ChaseDot key={key} color={color} />)}
        </StyledChaseLoader>   
    )
};

export default ChaseLoader;