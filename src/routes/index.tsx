import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { ContactSection } from '~/components/common';

import {
  HeroSection,
  StepsToSuccessSection,
  CleanSchemeSection,
  BenefitsSection,
} from '~/components/widgets';

import { Carousel } from '~/components/ui';

import { SITE } from '~/config.mjs';

export default component$(() => {
  return (
    <div class="flex flex-col">
      <HeroSection />
      <CleanSchemeSection />
      <BenefitsSection />
      <StepsToSuccessSection />
      <Carousel />
      <ContactSection />
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
