import { component$ } from '@builder.io/qwik';
import 'animate.css';

import { Wrapper } from '~/components/common';
import { AdvantageItem } from './AdvantageItem';
import { advantageItems } from './helpers';

export const AdvantageSection = component$(() => {
  return (
    <Wrapper class="mb-[500px]">
      <h5 class="text-center uppercase mb-20 md:mb-[124px]">
        We are cool and serious, look
      </h5>
      <div class="flex flex-col gap-16">
        {advantageItems.map(
          ({ title, animateClass, description, rightPosition }, index) => (
            <AdvantageItem
              key={`${title}-${index}`}
              title={title}
              number={index + 1}
              animateClass={animateClass}
              description={description}
              rightPosition={rightPosition}
            />
          )
        )}
      </div>
    </Wrapper>
  );
});
