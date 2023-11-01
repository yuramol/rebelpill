import type { IconsNames } from '../Icon';

export interface InputProps {
  error?: string | boolean | undefined;
  helperText?: string;
  variant?: 'outlined' | 'textarea' | 'select';
  label?: string;
  icon?: IconsNames;
  id?: string;
  handleIcon?: () => void;
  onChange$?: (value: any) => void;
  onKeyDown$?: (value: any) => void;
  onKeyUp$?: (value: any) => void;
  onInput$?: (value: any) => void;
  extraClass?: string;
  wrapperClass?: string;
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
  selectOptions?: { value: string; title: string }[];
  value?: string;
}
