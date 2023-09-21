import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Icon } from '~/components/icons/Icon';

import { SITE } from '~/config.mjs';

export default component$(() => {
  return (
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
