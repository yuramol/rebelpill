import { component$, useVisibleTask$ } from '@builder.io/qwik';

import gsap from 'gsap';

import { Wrapper } from '~/components/common';
import { Chip, Typography } from '~/components/ui';
import { chips } from './helpers';

export const HeroSection = component$(() => {
  useVisibleTask$(() => {
    const animationLogo = gsap.to('.hero-logo', {
      scale: 1,
      duration: 0.6,
      delay: 3.7,
      opacity: 1,
      ease: 'linear',
    });

    const animationTitle = gsap.to('.hero-title', {
      scale: 1,
      duration: 0.3,
      delay: 4,
      opacity: 1,
      ease: 'linear',
    });

    const animatioChipOne = gsap.to('.chip-gsap-1', {
      duration: 3,
      delay: 3.8,
      transform: 'rotate(-6deg) translateY(0)',
      ease: 'bounce.out',
    });
    const animatioChipTwo = gsap.to('.chip-gsap-2', {
      duration: 3.2,
      delay: 3.8,
      transform: 'rotate(6deg) translateY(0)',
      ease: 'bounce.out',
    });
    const animatioChipThree = gsap.to('.chip-gsap-3', {
      duration: 3.4,
      delay: 3.8,
      transform: 'rotate(6deg) translateY(0)',
      ease: 'bounce.out',
    });
    const animatioChipFour = gsap.to('.chip-gsap-4', {
      duration: 3.6,
      delay: 3.8,
      transform: 'rotate(-6deg) translateY(0)',
      ease: 'bounce.out',
    });
    const animatioChipFive = gsap.to('.chip-gsap-5', {
      duration: 3.8,
      delay: 3.8,
      transform: 'rotate(-6deg) translateY(0)',
      ease: 'bounce.out',
    });

    return () => {
      animationLogo.kill();
      animationTitle.kill();
      animatioChipOne.kill();
      animatioChipTwo.kill();
      animatioChipThree.kill();
      animatioChipFour.kill();
      animatioChipFive.kill();
    };
  });

  return (
    <section class="h-screen w-full bg-primary-gradient bg-top flex overflow-hidden">
      <Wrapper class="flex flex-col items-center pt-[60px] md:pt-24 gap-4 md:gap-12 relative">
        <div class="flex flex-col items-center gap-6 min-[480px]:gap-12">
          <Typography
            variant="h5"
            class="hero-logo scale-[300%] opacity-0 text-black !font-semibold uppercase"
          >
            REBELPILL
          </Typography>
          <Typography
            variant="h1"
            class="hero-title scale-75 opacity-0  text-black text-center uppercase"
          >
            You're <span class="font-extrabold">not a real coder </span>
            <br />
            If it doesn't piss you off
          </Typography>
        </div>

        {/* chips */}
        {chips.length ? (
          <div class="flex flex-wrap justify-center">
            {chips.map(({ title }, index) => (
              <Chip
                key={index}
                text={title}
                class={`chip-gsap-${
                  index + 1
                } relative w-auto translate-y-[-1200px] rotate-[160deg] whitespace-nowrap m-4 min-[480px]:m-5 min-[739px]:m-6 min-[830px]:m-8 min-[1130px]-m-10`}
              />
            ))}
          </div>
        ) : null}
      </Wrapper>
    </section>
  );
});
