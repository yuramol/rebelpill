import { component$ } from '@builder.io/qwik';
import 'animate.css';

import { Wrapper } from '~/components/common';
import { AdvantageItem } from './AdvantageItem';

export const AdvantageSection = component$(() => {
  return (
    <Wrapper class="mb-[500px]">
      <h5 class="text-center uppercase mb-20 md:mb-[124px]">
        We are cool and serious, look
      </h5>
      <div class="flex flex-col gap-16">
        <AdvantageItem
          title="Professional"
          number={1}
          animateClass="animate__slideInLeft"
          description="We speak the language of code fluently, so you can trust us as
            professionals. We work with..."
        />
        <AdvantageItem
          title="Reliable"
          number={2}
          animateClass="animate__slideInRight"
          rightPosition
          description="We have strict security protocols, so you can trust us to protect your intellectual property as if it were our own. Your peace of mind is our top priority."
        />
        <AdvantageItem
          title="Universal"
          number={3}
          animateClass="animate__slideInLeft"
          description="We are always in touch, you can easily monitor the progress of the work or you can simply trust us and not worry about anything. Any format is comfortable for us."
        />
        <AdvantageItem
          title="Accessible"
          number={4}
          animateClass="animate__slideInRight"
          rightPosition
          description="Stop obsessing over boring tasks. Leave them to us, we'll turn them into a fun task, and you can focus on unleashing your inner coding ninja."
        />
      </div>
    </Wrapper>
  );
});
