import { Size } from "../../types/common.types";

export interface LoaderProps {
  type?: LoaderType;
  size?: Size;
  color?: string;
}

export enum LoaderType {
  Default = 'default',
  ChaseDot = 'chaseDot',
  Bounce = 'bounce',
  FoldingCube = 'foldingCube',
}
