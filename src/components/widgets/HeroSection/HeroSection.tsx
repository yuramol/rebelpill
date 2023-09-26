import { component$ } from '@builder.io/qwik';

// Components
import { Wrapper } from '~/components/common';
import { Chip } from '~/components/ui';

export const HeroSection = component$(() => {
  // ! TODO mock data
  const mockChipsData = [
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
    <div class="h-screen w-full bg-primary-gradient bg-top flex overflow-hidden">
      <Wrapper class="flex flex-col items-center pt-[100px] gap-12 relative">
        {/* logo */}
        <div class="text-black text-base font-bold">REBELPILL</div>

        {/* title */}
        <div class="text-black text-h1 text-center font-extrabold">
          You're not a real coder <br class="hidden md:block" /> if it doesn't
          piss you off
        </div>

        {/* chips */}
        {mockChipsData.length &&
          mockChipsData.map((chip, index) => (
            <Chip key={index} text={chip.text} class={chip.class} />
          ))}
      </Wrapper>
    </div>
  );
});
