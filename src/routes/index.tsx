import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Preloader } from '~/components/widgets';

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
import { RebelPillLogo } from '~/components/common';

export default component$(() => {
  return (
    <div class="flex flex-col">
      <Preloader />
      <HeroSection />
      <CleanSchemeSection />
      <BenefitsSection />
      <CalculateSection />
      <StepsToSuccessSection />
      <ContactSection />
      <FollowUsSection />
      <RebelPillLogo />
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
