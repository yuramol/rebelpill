import { component$ } from '@builder.io/qwik';

// Types
import type { BenefitCardProps } from '~/components/ui/BenefitCard/BenefitCard';

// Components
import { Wrapper } from '~/components/common';
import { BenefitCard, Typography } from '~/components/ui';

export const BenefitsSection = component$(() => {
  const benefits: Array<BenefitCardProps> = [
    {
      title: 'We do your work',
      subtitle: 'You have more free time',
    },
    {
      title: 'you bring the client',
      subtitle: 'you increase your customer base',
    },
    {
      title: 'You earn money',
      subtitle: 'You have passive income',
    },
  ];

  return (
    <section class={['w-full bg-dark flex overflow-hidden py-[120px]']}>
      <Wrapper class="min-h-[400px] flex flex-col items-center gap-20">
        {/* title */}
        <Typography text="Benefits model" variant="h6" class="uppercase" />

        {/* body */}
        <div class="flex items-center gap-8">
          {benefits.length &&
            benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
        </div>
      </Wrapper>
    </section>
  );
});
