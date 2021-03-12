export default interface ButtonProps {
  label?: string;
  primary?: boolean;
  backgroundColor?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
};

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}
