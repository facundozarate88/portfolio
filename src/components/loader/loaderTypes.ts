export interface LoaderProps {
    type?: LoaderType;
    size?: LoaderSize;
    color?: string; 
}

export enum LoaderSize {
    Small = 'sm',
    Medium = 'md',
    Large = 'lg',
};

export enum LoaderType {
    Default = 'default',
    ChaseDot = 'chaseDot',
    Bounce = 'bounce',
    FoldingCube = 'foldingCube',
}