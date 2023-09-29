import { component$, $, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Wrapper } from '~/components/common';
import { Button, Input } from '~/components/ui';
import { Icon } from '~/components/icons/Icon';

import { SITE } from '~/config.mjs';

// Components
import { Typography } from '~/components/ui';
import { CalculateSection } from '~/components/widgets/CalculateSection';

export default component$(() => {
  // ! testing tabs
  const tabs = useSignal<1 | 2>(1);

  const onClick = $((e: any) => (tabs.value = e.target.tabIndex));

  return (
    <div class="flex flex-col">
      <Wrapper class="flex flex-col gap-10 my-10">
        <CalculateSection />
        <div class="flex flex-row gap-10 my-4">
          <Button
            tabIndex={1}
            text="START COOPERATING"
            variant={
              tabs.value === 1 ? 'contained-secondary' : 'outlined-secondary'
            }
            onClick={onClick}
          />
          <Button
            tabIndex={2}
            text="learn more"
            variant={
              tabs.value === 2 ? 'contained-secondary' : 'outlined-secondary'
            }
            onClick={onClick}
          />
        </div>

        <Button text="Send" variant="outlined-primary" />
        <Button text="LET'S work" variant="contained-primary" />
      </Wrapper>
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
