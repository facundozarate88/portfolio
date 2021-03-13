import { Size } from "../../types/common.types";

interface StyledComponents {
  theme?: any;
}
export default interface ButtonProps extends StyledComponents {
  label?: string;
  primary?: boolean;
  size?: Size;
  disabled?: boolean;
  onClick?: () => void;
};
