import { Slot, component$ } from '@builder.io/qwik';

interface WrapperGradientProps {
  rootClass?: string;
  childClass?: string;
}

export const WrapperGradient = component$<WrapperGradientProps>(
  ({ rootClass, childClass }) => {
    return (
      <div
        class={[
          `h-full w-full flex relative bg-stroke-gradient`,
          'before:content-[""] before:absolute before:inset-0.5 before:bg-dark before:z-0',
          rootClass,
        ]}
      >
        <div
          class={[
            'h-full w-full flex flex-col justify-center items-center z-[1] p-4',
            childClass,
          ]}
        >
          <Slot />
        </div>
      </div>
    );
  }
);
