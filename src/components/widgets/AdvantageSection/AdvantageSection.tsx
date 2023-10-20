import { component$ } from '@builder.io/qwik';

import { Wrapper } from '~/components/common';
import { AdvantageItem } from './AdvantageItem';
import { advantageItems } from './helpers';

export const AdvantageSection = component$(() => {
  return (
    <section>
      <Wrapper class="pb-[180px] pt-[80px] md:pt-[90px] md:pb-[205px]">
        <h5 class="text-center uppercase mb-20 md:mb-[124px]">
          We are cool and serious, look
        </h5>
        <div class="flex flex-col gap-16 overflow-hidden">
          {advantageItems.map(
            ({ title, description, rightPosition }, index) => (
              <AdvantageItem
                key={`${title}-${index}`}
                title={title}
                number={index + 1}
                description={description}
                rightPosition={rightPosition}
              />
            )
          )}
        </div>
      </Wrapper>
    </section>
  );
});
