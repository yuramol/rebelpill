import { component$ } from '@builder.io/qwik';

// Components
import { Wrapper } from '~/components/common';
import { Chip, Typography } from '~/components/ui';

export const HeroSection = component$(() => {
  const chips = [
    {
      text: 'your salary hits the ceiling',
      class: 'absolute left-11 bottom-60 -rotate-6',
    },
    {
      text: 'endless meetings',
      class: 'absolute left-45 bottom-60 -rotate-6',
    },
    {
      text: 'annoying PMs and customers',
      class: 'absolute right-20 bottom-64',
    },
    {
      text: 'Unsolved bugs',
      class: 'absolute right-20 bottom-24 -rotate-6',
    },
    {
      text: 'boring projects',
      class: 'absolute right-[30%] bottom-20 rotate-6',
    },
  ];

  return (
    <section class="h-screen w-full bg-primary-gradient bg-top flex overflow-hidden">
      <Wrapper class="flex flex-col items-center pt-24 gap-12 relative">
        {/* logo */}
        <Typography variant="h5" class="text-black !font-semibold uppercase">
          REBELPILL
        </Typography>

        {/* title */}
        <div>
          <Typography variant="h1" class="text-black text-center uppercase">
            You're not a real coder
          </Typography>
          <Typography variant="h1" class="text-black text-center uppercase">
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
