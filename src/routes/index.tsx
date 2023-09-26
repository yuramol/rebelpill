import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { SITE } from '~/config.mjs';

import { Input } from '~/components/ui';

export default component$(() => {
  return (
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
      <div class="h-[1000px] bg-slate-400"></div>
      <div class="h-[800px] bg-slate-600"></div>
      <div class="h-[600px] bg-slate-800"></div>
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
