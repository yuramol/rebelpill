import { component$, Slot } from '@builder.io/qwik';

import Header from '~/components/widgets/Header';
import Footer from '../Footer';

export const MainLayout = component$(() => {
  return (
    <div class="flex flex-col min-h-screen">
      <main class="flex flex-col flex-auto min-h-full w-full h-full overflow-hidden pb-4">
        <Slot />
      </main>
      <Header />
      <Footer />
    </div>
  );
});
