import { component$, useVisibleTask$ } from '@builder.io/qwik';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { WorkSchemeItem, Wrapper } from '~/components/common';
import { Typography, WrapperGradient } from '~/components/ui';

export const CleanSchemeSection = component$(() => {
  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation = gsap.to('.clean-scheme-gsap', {
      scrollTrigger: {
        trigger: '.clean-scheme-gsap',
        start: '20px 60%',
      },
      scale: 1,
      duration: 1,
    });

    return () => {
      animation.kill();
    };
  });
  return (
    <section
      id="cleanSchemeSection"
      class={[
        'w-full bg-dark flex relative py-[150px]',
        "before:content-[''] before:h-[130px] before:w-[130px] before:md:h-[260px] before:md:w-[260px] before:bg-primary before:absolute before:rounded-[50%] before:blur-[125px] before:md:blur-[250px] before:top-[30%] before:md:top-0 before:left-[-25px] before:md:left-[-50px] before:md:bottom-0 before:md:m-auto",
      ]}
    >
      <Wrapper class="clean-scheme-gsap scale-75 min-h-[400px] flex flex-col items-center">
        <WrapperGradient
          rootClass="md:rounded-[300px] before:md:rounded-[300px] rounded-[20px] before:rounded-[20px]"
          childClass="gap-8 md:gap-14"
        >
          {/* title */}
          <Typography variant="h6">Clean scheme of work</Typography>

          {/* ellipse */}
          <div class="h-[30px] w-[30px] bg-primary-gradient rounded-full block md:hidden"></div>

          {/* body */}
          <div class="flex flex-col md:flex-row justify-center items-center md:gap-8 flex-wrap">
            <WorkSchemeItem text="Your rate" />

            {/* minus symbol */}
            <Typography variant="h4" class="font-medium">
              -
            </Typography>
            <WorkSchemeItem text="Our rate" />

            {/* equal symbol */}
            <Typography variant="h4" class="font-medium">
              =
            </Typography>
            <WorkSchemeItem text="Your passive income" />
          </div>
        </WrapperGradient>
      </Wrapper>
    </section>
  );
});
