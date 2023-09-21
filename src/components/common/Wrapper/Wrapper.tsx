import { component$, Slot } from '@builder.io/qwik';

interface WrapperProps {
  class?: string;
}

export const Wrapper = component$<WrapperProps>((props) => {
  return (
    <div class={`container w-full px-4 my-0 mx-auto ${props.class ?? ''}`}>
      <Slot />
    </div>
  );
});
