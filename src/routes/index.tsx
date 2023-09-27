import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import { AdvantageSection } from '~/components/widgets/AdvantageSection';

import { SITE } from '~/config.mjs';

export default component$(() => {
  return (
    <div>
      <AdvantageSection />
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
