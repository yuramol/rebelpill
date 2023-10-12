import { component$ } from '@builder.io/qwik';

// Components
import { Icon, Typography } from '~/components/ui';

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
            variant="description"
            class="text-primary"
          >{`/0${step}`}</Typography>
          <Typography variant="h5" class="uppercase">
            {title}
          </Typography>
        </div>

        {/*  footer */}
        {isActive && (
          <a href="#form-section" class="w-max flex items-center gap-2">
            <Typography variant="description" class="uppercase">
              Let's do it
            </Typography>
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
