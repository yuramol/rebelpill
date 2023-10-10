import { component$ } from '@builder.io/qwik';

// Components
import { Typography, WrapperGradient, Icon } from '~/components/ui';

export interface BenefitCardProps {
  title: string;
  subtitle: string;
}

export const BenefitCard = component$<BenefitCardProps>(
  ({ title, subtitle }) => {
    return (
      <div class="h-full w-full min-h-[400px]">
        <WrapperGradient
          rootClass="rounded before:rounded"
          childClass="gap-4 min-h-[400px]"
        >
          {/* title */}
          <Typography
            text={title}
            variant="h6"
            class="text-white uppercase text-center"
          />

          {/* icon */}
          <Icon icon="arrowDown" />

          {/* subtitle */}
          <Typography
            text={subtitle}
            variant="h6"
            class="text-white uppercase text-center"
          />
        </WrapperGradient>
      </div>
    );
  }
);
