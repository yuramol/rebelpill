import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Icon } from '~/components/icons/Icon';
import { Input } from '~/components/ui';
import { HeroSection } from '~/components/widgets';

import { SITE } from '~/config.mjs';

export default component$(() => {
  return (
    <div class="bg-green-500">
      <HeroSection />

      <Icon icon="close" width={40} />
      <Icon icon="burger" width={40} />
      <Icon icon="arrow" />
      <Icon icon="arrowUp" />
      <Icon icon="arrowShort" />
      <Icon icon="arrowDown" />
      <Icon icon="arrowNorthEast" />
      <Icon icon="arrowGradient" />
      <Icon icon="check" />
      <Icon icon="plus" />
      <Icon icon="plusGradient" />
      <Icon icon="play" />
      <Icon icon="heart" />
      <div class="flex flex-col">
        <div class="flex flex-row">
          <div class="w-[400px] h-[400px] bg-primary-gradient">
            <h1 class="text-dark text-h2 font-bold">Text</h1>
          </div>
          <div class="w-[400px] h-[400px] bg-secondary-gradient">
            <h1 class="text-dark text-h1">Text</h1>
          </div>
          <div class="w-[400px] h-[400px] bg-stroke-gradient">
            <h1 class="text-dark text-h3">Text</h1>
          </div>
        </div>
        <div class="flex gap-4 bg-slate-500 p-10 ">
          <Input label="Input" variant="outlined" />
          <Input label="Input" />
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: 'description',
      content: SITE.description,
    },
  ],
};
