import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Preloader } from '~/components/widgets';

import { ContactSection } from '~/components/common';

import {
  HeroSection,
  StepsToSuccessSection,
  CleanSchemeSection,
  FollowUsSection,
  BenefitsSection,
} from '~/components/widgets';

import { SITE } from '~/config.mjs';

export default component$(() => {
  return (
    <div class="flex flex-col">
      <Preloader />
      <HeroSection />
      <CleanSchemeSection />
      <BenefitsSection />
      <StepsToSuccessSection />
      <ContactSection />
      <FollowUsSection />
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
