import React from 'react';
import styled from 'styled-components';
import { rotate } from '../../animations/animations';
import BounceLoader from './bounce-loader/bounceLoader';
import ChaseLoader from './chase-loader/chaseLoader';
import FoldingCubeLoader from './folding-cube-loader/foldingCubeLoader';
import { LoaderProps, LoaderSize, LoaderType } from './loaderTypes';

const StyledLoader = styled.div<LoaderProps>`
    border: ${props => calculateBorderSize(props.size!)} solid #f2f2f2;
    border-radius: 50%;
    border-top: ${props => calculateBorderSize(props.size!)} solid ${props => props.color};
    width: ${props => calculateSize(props.size!)};
    height: ${props => calculateSize(props.size!)};
    background: transparent;
    animation: ${rotate} 1.5s linear infinite;
`;

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

const calculateBorderSize = (size: LoaderSize) => {
    switch (size) {
        case LoaderSize.Small:
            return '.3em';
        case LoaderSize.Medium:
            return '.5em';
        case LoaderSize.Large:
            return '.7em';
    }
};

const Loader: React.FC<LoaderProps> = ({
    size = LoaderSize.Medium,
    type = LoaderType.Default,
    color = '#2f89d3'
}) => {
    switch (type) {
        case LoaderType.ChaseDot:
            return <ChaseLoader size={size} color={color} />
        case LoaderType.Bounce:
            return <BounceLoader size={size} color={color} />
        case LoaderType.FoldingCube:
            return <FoldingCubeLoader size={size} color={color} />
        default:
            return <StyledLoader size={size} color={color}/>
    }
};

export default Loader;