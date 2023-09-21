export interface InputProps {
  error?: string | false | undefined;
  helperText?: string;
  variant?: 'outlined';
  label?: string;
  icon?: any;
  handleIcon?: () => void;
  onChange?: (value: string) => void;
  extraClass?: string;
  type?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  form?: string;
  list?: string;
  max?: number | string;
  maxLength?: number;
  min?: number | string;
  minLength?: number;
  multiple?: boolean;
  name?: string;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  required?: boolean;
  size?: number;
  step?: number;
}
