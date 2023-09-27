import type { DocumentHead } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import { Icon } from '~/components/icons/Icon';
import { Input } from '~/components/ui';

import { SITE } from '~/config.mjs';

// Components
import { Typography } from '~/components/ui';

export default component$(() => {
  return (
    <div class="flex flex-col">
      <div class="flex flex-row m-5 gap-4">
        <Typography text="H1" variant="h1" class="text-red-300" />
        <Typography text="H2" variant="h2" class="text-violet-300" />
        <Typography text="H3" variant="h3" class="text-pink-300" />
        <Typography text="H4" variant="h4" class="text-green-300" />
        <Typography text="H5" variant="h5" class="text-green-300" />
        <Typography text="H6" variant="h6" class="text-green-300" />
        <Typography text="BUTTON" variant="button" class="text-green-300" />
        <Typography text="BODY1" variant="body1" class="text-green-300" />
        <Typography
          text="DESCRIPTION"
          variant="description"
          class="text-green-300"
        />
        <Typography
          text="DEFAULT"
          variant={undefined}
          class="text-yellow-300"
        />
      </div>

      <hr />

      <div class="bg-green-500">
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
          <div class="flex gap-4 bg-slate-500 p-10 ">
            <Input label="Input" variant="outlined" />
            <Input label="Input" />
          </div>
          <div class="w-[400px] h-[400px] bg-stroke-gradient">
            <h1 class="text-dark text-h3">Text</h1>
          </div>
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
