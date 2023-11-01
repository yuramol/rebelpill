import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Preloader, StopSufferingSection } from '~/components/widgets';

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
import { AdvantageSection } from '~/components/widgets/AdvantageSection';
import { Divider } from '~/components/ui';

export default component$(() => {
  return (
    <div class="flex flex-col">
      <Preloader />
      <HeroSection />
      <StopSufferingSection />
      <CleanSchemeSection />
      <AdvantageSection />
      <Divider />
      <BenefitsSection />
      <Divider />
      <CalculateSection />
      <Divider />
      <StepsToSuccessSection />
      <Divider />
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
