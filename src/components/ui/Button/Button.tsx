import { component$ } from '@builder.io/qwik';

// Styles
import styles from './Button.module.css';
import IconArrowRight from '../Icon/icons/IconArrowRight';

// Components

interface ButtonProps {
  text: string;
  variant?:
    | 'contained-primary'
    | 'outlined-primary'
    | 'contained-secondary'
    | 'outlined-secondary';
  isLoading?: boolean;
  disabled?: boolean;
  class?: string;
  tabIndex?: number;
  onClick?: (e: any) => void;
}

export const Button = component$<ButtonProps>(
  ({
    text,
    variant,
    isLoading,
    tabIndex,
    disabled,
    class: className,
    onClick,
    ...restProps
  }) => {
    const returnText = isLoading ? 'LOADING...' : text;

    const renderButton = () => {
      switch (variant) {
        case 'contained-primary':
          return (
            <button
              type="button"
              class={[
                'group/contained-primary w-full max-w-[437px] p-4 text-white bg-[#0c0c0c] uppercase text-base font-bold border-0 rounded-full flex justify-center items-center gap-5 shrink-0 overflow-hidden relative z-[1] transition-padding duration-[0.4s] hover:pl-10',
                'before:content-[""] before:h-full before:w-0 before:hover:w-full before:rounded-full before:absolute before:top-0 before:left-0 before:transition-all before:duration-[0.4s] before:z-[-1] before:bg-hover-gradient',
                styles.btn_circular,
                className,
              ]}
              onClick$={onClick}
              disabled={disabled}
            >
              {returnText}
              <span class={styles.icon}>
                <IconArrowRight
                  class={`block transition-all duration-[0.4s] ${styles.icon_arraow_right} group-hover/contained-primary:translate-x-2.5`}
                />
              </span>
            </button>
          );
        case 'outlined-primary':
          return (
            <button
              type="button"
              class={[
                'group/outlined-primary w-full max-w-[596px] p-3.5 uppercase text-primary hover:text-white text-sm font-bold border-0 z-[1] relative transition-all duration-[0.4s]',
                'before:content-[""] before:absolute before:transition-all before:duration-[0.4s] before:hover:h-full before:hover:w-full before:h-[40%] before:w-[80%] before:border-2 before:border-solid before:border-t-0 before:border-r-0 before:left-0 before:bottom-0',
                'after:content-[""] after:absolute after:transition-all after:duration-[0.4s] after:hover:h-full after:hover:w-full after:h-[40%] after:w-[80%] after:border-2 after:border-solid after:border-b-0 after:border-l-0 after:top-0 after:right-0',
                styles.btn_square,
                className,
              ]}
              onClick$={onClick}
              disabled={disabled}
            >
              <span
                class={[
                  'bg-hover-gradient absolute inset-1.5 opacity-0 group-hover/outlined-primary:opacity-100 z-[-1] transition-all duration-[0.4s]',
                ]}
              ></span>
              {returnText}
            </button>
          );
        case 'contained-secondary':
          return (
            <button
              type="button"
              tabIndex={tabIndex}
              class={[
                'w-full max-w-[220px] text-black  hover:text-white bg-primary hover:bg-secondary hover:opacity-70 p-2 relative uppercase text-sm font-bold border-0 transition-all duration-[0.4s]',
                className,
              ]}
              onClick$={onClick}
              disabled={disabled}
            >
              <span
                tabIndex={tabIndex}
                class={[
                  'bg-hover-gradient absolute inset-1.5 opacity-0 group-hover/outlined-secondary:opacity-100 z-[-1] transition-all duration-[0.4s]',
                ]}
              ></span>
              {text}
            </button>
          );
        case 'outlined-secondary':
          return (
            <button
              type="button"
              tabIndex={tabIndex}
              class={[
                'group/outlined-secondary w-full max-w-[220px] p-2 uppercase text-white hover:text-white text-sm font-bold border-0 z-[1] relative transition-all duration-[0.4s]',
                'before:content-[""] before:absolute before:transition-all before:duration-[0.4s] before:hover:h-full before:hover:w-full before:h-[100%] before:w-[100%] before:border-2 before:border-solid before:border-t-0 before:left-0 before:bottom-0',
                'after:content-[""] after:absolute after:transition-all after:duration-[0.4s] after:hover:h-full after:hover:w-full after:h-[100%] after:w-[0%] after:border-2 after:border-solid after:top-0 after:left-0 after:border-l-0 after:border-r-0 after:border-b-0',
                styles.btn_square,
                className,
              ]}
              onClick$={onClick}
              disabled={disabled}
            >
              <span
                tabIndex={tabIndex}
                class={[
                  'bg-hover-gradient absolute inset-1.5 opacity-0 group-hover/outlined-secondary:opacity-100 z-[-1] transition-all duration-[0.4s]',
                ]}
              ></span>
              {text}
            </button>
          );
        default:
          return (
            <button {...restProps} disabled={disabled} onClick$={onClick}>
              {text}
            </button>
          );
      }
    };

    return <>{renderButton()}</>;
  }
);
