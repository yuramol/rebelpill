import { component$, $, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Wrapper } from '~/components/common';
import { Button, Input } from '~/components/ui';

import { SITE } from '~/config.mjs';

export default component$(() => {
  // ! testing tabs
  const tabs = useSignal<1 | 2>(1);

  const onClick = $((e: any) => {
    tabs.value === 1
      ? (tabs.value = e.target.tabIndex)
      : (tabs.value = e.target.tabIndex);
  });

  return (
    <div class="flex flex-col">
      <Wrapper class="flex flex-col gap-10 my-10">
        <div class="flex flex-row gap-10 my-4">
          <Button
            tabIndex={1}
            text="START COOPERATING"
            variant={
              tabs.value === 1 ? 'squareSmallContained' : 'squareSmallOutlined'
            }
            onClick={onClick}
          />
          <Button
            tabIndex={2}
            text="learn more"
            variant={
              tabs.value === 2 ? 'squareSmallContained' : 'squareSmallOutlined'
            }
            onClick={onClick}
          />
        </div>

        <Button text="Send" variant="squareOutlined" />
        <Button text="LET'S work" variant="circular" />
      </Wrapper>

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
