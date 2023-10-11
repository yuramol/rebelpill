import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { SITE } from '~/config.mjs';

import { CalculateSection } from '~/components/widgets/CalculateSection';

import {
  HeroSection,
  StepsToSuccessSection,
  CleanSchemeSection,
  FollowUsSection,
  BenefitsSection,
  ContactSection,
} from '~/components/widgets';

export default component$(() => {
  return (
    <div class="flex flex-col">
      <HeroSection />
      <CleanSchemeSection />
      <BenefitsSection />
      <CalculateSection />
      <StepsToSuccessSection />
      <ContactSection />
      <FollowUsSection />
      <Carousel />
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
