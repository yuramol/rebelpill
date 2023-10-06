import { component$, $, useSignal } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ContactSection, Wrapper } from '~/components/common';

import {
  HeroSection,
  StepsToSuccessSection,
  CleanSchemeSection,
} from '~/components/widgets';

import { Button, Input, Typography, Carousel } from '~/components/ui';

import { SITE } from '~/config.mjs';

export default component$(() => {
  // ! testing tabs
  const tabs = useSignal<1 | 2>(1);

  const onClick = $((e: any) => (tabs.value = e.target.tabIndex));

  return (
    <div class="flex flex-col">
      <StepsToSuccessSection />
      <CleanSchemeSection />
      <HeroSection />
      <Carousel />
      <Wrapper class="flex flex-col gap-10 my-10">
        <ContactSection />
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
