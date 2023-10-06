import { component$ } from '@builder.io/qwik';

// Components
import { Typography } from '~/components/ui';
import { Icon } from '~/components/icons';

export interface StepItemProps {
  step: number;
  title: string;
  isActive?: boolean;
}

export const StepItem = component$<StepItemProps>(
  ({ step, title, isActive }) => {
    const activeStyles =
      isActive &&
      'before:content-[""] before:h-[59px] before:w-[173px] before:absolute before:bg-primary before:blur-[40px] before:left-0 before:bottom-[-50px] before:right-0 before:m-auto';

    return (
      <div
        class={[
          `h-[208px] sm:h-[284px] ${
            isActive ? 'bg-black' : 'bg-step-gradient'
          } rounded p-8 flex flex-col justify-between relative overflow-hidden`,
          activeStyles,
        ]}
      >
        {/* header */}
        <div class="flex flex-col gap-3">
          <Typography
            text={`/0${step}`}
            variant="description"
            class="text-primary"
          />
          <Typography text={title} variant="h5" class="uppercase" />
        </div>

        {/*  footer */}
        {isActive && (
          <a href="#form-section" class="w-max flex items-center gap-2">
            <Typography
              text="Let's do it"
              variant="description"
              class="uppercase"
            />
            <Icon
              icon="arrowNorthEast"
              height="13px"
              width="13px"
              fill="white"
            />
          </a>
        )}
      </div>
    );
  }
);
