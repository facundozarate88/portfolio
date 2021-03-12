import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LoaderSize } from '../loaderTypes';

const bounceDelay = keyframes`
    0%, 80%, 100% { transform: scale(0) }
    40% { transform: scale(1) }
`;

const StyledBounceDot= styled.div<BounceLoaderProps>`
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
    size?: LoaderSize,
    color?: string,
}

const calculateSize = (size: LoaderSize) => {
    switch (size) {
        case LoaderSize.Small:
            return '1em';
        case LoaderSize.Medium:
            return '2em';
        case LoaderSize.Large:
            return '3em';
    }
};

const BounceLoader: React.FC<BounceLoaderProps> = ({ size, color }) => {
    const dots = ['1', '2', '3'];
    return (
        <React.Fragment>
            { dots.map(key => <StyledBounceDot key={key} size={size} color={color} />) }
        </React.Fragment>
    )
};

export default BounceLoader;