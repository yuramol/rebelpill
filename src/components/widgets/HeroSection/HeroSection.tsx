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

    return () => {
      animationLogo.kill();
      animationTitle.kill();
    };
  });

  return (
    <section class="h-screen w-full bg-primary-gradient bg-top flex overflow-hidden">
      <Wrapper class="flex flex-col items-center pt-[60px] md:pt-24 gap-12 relative">
        <div class="flex flex-col items-center gap-12">
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
        {chips.length &&
          chips.map((chip, index) => (
            <Chip key={index} text={chip.text} class={chip.class} />
          ))}
      </Wrapper>
    </section>
  );
});
