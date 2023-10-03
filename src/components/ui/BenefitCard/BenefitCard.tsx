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
      <div class="h-[400px] w-[320px]">
        <WrapperGradient rootClass="rounded before:rounded" childClass="gap-4">
          {/* title */}
          <Typography text={title} variant="h6" class="uppercase text-center" />

          {/* icon */}
          <Icon icon="arrowDown" />

          {/* subtitle */}
          <Typography
            text={subtitle}
            variant="h6"
            class="uppercase text-center"
          />
        </WrapperGradient>
      </div>
    );
  }
);
