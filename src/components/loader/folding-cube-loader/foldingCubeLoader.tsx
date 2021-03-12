import React from 'react';
import styled, { keyframes } from 'styled-components';
import { LoaderSize } from '../loaderTypes';

const fold = keyframes`
    0%, 10% {
        transform: perspective(140px) rotateX(-180deg);
        opacity: 0;
    }
    25%, 75% {
        transform: perspective(140px) rotateX(0deg);
        opacity: 1;
    }
    90%, 100% {
        transform: perspective(140px) rotateY(180deg);
        opacity: 0; 
    }
`;

const StyledFoldingCube = styled.div<FoldingCubeLoaderProps>`
    width: ${args => calculateSize(args.size)};
    height: ${args => calculateSize(args.size)};
    position: relative;
    transform: rotateZ(45deg);
`;

const StyledCube = styled.div<FoldingCubeLoaderProps>`
    float: left;
    width: 50%;
    height: 50%;
    position: relative;

    transform: scale(1.1); 


    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${args => args.color};
        animation: ${fold} 2.4s infinite linear both;
        transform-origin: 100% 100%;
    }

    &:nth-child(2) {
        transform: scale(1.1) rotateZ(90deg);

        &::before {
            animation-delay: .3s;
        }
    }

    &:nth-child(4) {
        transform: scale(1.1) rotateZ(180deg);

        &::before {
            animation-delay: .6s;
        }
    }
    
    &:nth-child(3) {
        transform: scale(1.1) rotateZ(270deg);

        &::before {
            animation-delay: .9s;
        }
    }
`;

interface FoldingCubeLoaderProps {
    size: LoaderSize,
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

const FoldingCubeLoader: React.FC<FoldingCubeLoaderProps> = ({ size, color }) => {
    const cubes = ['1', '2', '3', '4'];
    return (
        <StyledFoldingCube size={size}>
            {cubes.map(key => <StyledCube key={key} size={size} color={color} />)}
        </StyledFoldingCube>
    )
};

export default FoldingCubeLoader;