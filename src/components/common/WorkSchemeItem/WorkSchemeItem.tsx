import { component$ } from '@builder.io/qwik';

// Components
import { Typography } from '~/components/ui';

interface WorkSchemeItemProps {
  text: string;
  class?: string;
}

export const WorkSchemeItem = component$<WorkSchemeItemProps>(
  ({ text, class: className }) => {
    return (
      <div class={['flex items-center gap-2', className]}>
        <div class="h-[50px] w-[50px] bg-primary-gradient rounded-full hidden md:block"></div>
        <Typography variant="h4" class="uppercase text-center">
          {text}
        </Typography>
      </div>
    );
  }
);
