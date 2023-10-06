import { component$ } from '@builder.io/qwik';

// Components
import { Typography } from '../Typography';

interface ChipProps {
  text: string;
  class?: string;
}

export const Chip = component$<ChipProps>(({ text, class: className }) => {
  return (
    <div
      class={[
        'text-white bg-black rounded-full text-h5 font-medium uppercase py-2.5 px-6',
        className,
      ]}
    >
      <Typography text={text} variant="h5" />
    </div>
  );
});
