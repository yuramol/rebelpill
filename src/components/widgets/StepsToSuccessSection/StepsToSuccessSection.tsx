import { component$ } from '@builder.io/qwik';

// Types
import type { StepItemProps } from '~/components/ui/StepItem/StepItem';

// Components
import { Wrapper } from '~/components/common';
import { StepItem, Typography } from '~/components/ui';

export const StepsToSuccessSection = component$(() => {
  const steps: Array<StepItemProps> = [
    {
      step: 1,
      title: 'Fill out the form',
      isActive: true,
    },
    {
      step: 2,
      title: 'We plan a call',
    },
    {
      step: 3,
      title: 'We form a team',
    },
    {
      step: 4,
      title: 'You earn money',
    },
  ];

  return (
    <section
      class={['w-full bg-dark flex overflow-hidden relative py-[120px]']}
    >
      <Wrapper class="min-h-[400px] flex flex-col items-center gap-20">
        {/* title */}
        <Typography variant="h6" class="text-white">
          Steps to success
        </Typography>

        {/* body */}
        <div class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.length &&
            steps.map((step, index) => <StepItem key={index} {...step} />)}
        </div>
      </Wrapper>
    </section>
  );
});
