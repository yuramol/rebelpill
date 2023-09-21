import { component$, Slot } from '@builder.io/qwik';

// Widgets
import Footer from '~/components/widgets/Footer';
import Header from '~/components/widgets/Header';

export const MainLayout = component$(() => {
  return (
    <div class="flex flex-col overflow-hidden">
      <Header />
      <main class="w-full flex flex-col flex-auto overflow-hidden py-4">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
