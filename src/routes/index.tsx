import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { SITE } from '~/config.mjs';

export default component$(() => {
  return (
    <div class="flex flex-row">
      <div class="w-[400px] h-[400px] bg-primary-gradient">
        <h1 class="text-dark">Text</h1>
      </div>
      <div class="w-[400px] h-[400px] bg-secondary-gradient">
        <h1 class="text-dark">Text</h1>
      </div>
      <div class="w-[400px] h-[400px] bg-stroke-gradient">
        <h1 class="text-dark">Text</h1>
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
