import { component$, Slot } from '@builder.io/qwik';

// Widgets
import { MainLayout } from '~/components/widgets';

export default component$(() => {
  return (
    <MainLayout>
      <Slot />
    </MainLayout>
  );
});
