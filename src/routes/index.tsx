import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Input } from '~/components/ui';

import { SITE } from '~/config.mjs';

export default component$(() => {
  return (
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

      <div class="flex gap-4 bg-slate-500 p-10 ">
        <Input label="Input" variant="outlined" icon={true} />
        <Input
          label="Input"
          // error="1"
          // icon={true}
          // helperText="This new error test 23.40d.303;f033;"
          // className
        />
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
