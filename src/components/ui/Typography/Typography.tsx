import { Slot, component$ } from '@builder.io/qwik';

interface TypographyProps {
  text: string;
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'button'
    | 'body1'
    | 'description'
    | undefined;
  class?: string;
}

export const Typography = component$<TypographyProps>(
  ({ variant, text, ...restProps }) => {
    const renderTypography = () => {
      switch (variant) {
        case 'h1':
          return (
            <h1 class={`text-h1 leading-8 font-bold ${restProps.class}`}>
              {text}
              <Slot />
            </h1>
          );
        case 'h2':
          return (
            <h2 class={`text-h2 leading-7 font-semibold ${restProps.class}`}>
              {text}
              <Slot />
            </h2>
          );
        case 'h3':
          return (
            <h3 class={`text-h3 leading-6 font-semibold ${restProps.class}`}>
              {text}
              <Slot />
            </h3>
          );
        case 'h4':
          return (
            <h4 class={`text-h4 leading-5 font-bold ${restProps.class}`}>
              {text}
              <Slot />
            </h4>
          );
        case 'h5':
          return (
            <h5 class={`text-h5 leading-4 font-medium ${restProps.class}`}>
              {text}
              <Slot />
            </h5>
          );
        case 'h6':
          return (
            <p class={`text-base leading-3 font-medium ${restProps.class}`}>
              {text}
              <Slot />
            </p>
          );
        case 'button':
          return (
            <p class={`text-base leading-3 font-semibold ${restProps.class}`}>
              {text}
            </p>
          );
        case 'body1':
          return (
            <p class={`text-sm leading-2 font-normal ${restProps.class}`}>
              {text}
              <Slot />
            </p>
          );
        case 'description':
          return (
            <p
              class={`text-caption leading-1 font-semibold ${restProps.class}`}
            >
              {text}
              <Slot />
            </p>
          );
        default:
          return <p {...restProps}>{text}</p>;
      }
    };

    return <>{renderTypography()}</>;
  }
);
