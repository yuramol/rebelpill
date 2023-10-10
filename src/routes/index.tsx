import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { ContactSection } from '~/components/common';

import {
  HeroSection,
  StepsToSuccessSection,
  CleanSchemeSection,
  FollowUsSection,
  BenefitsSection,
} from '~/components/widgets';
import { AdvantageSection } from '~/components/widgets/AdvantageSection';

import { SITE } from '~/config.mjs';

export default component$(() => {
  return (
    <div class="flex flex-col">
      <HeroSection />
      <CleanSchemeSection />
      <AdvantageSection />
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
