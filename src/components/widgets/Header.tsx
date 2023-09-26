import { $, component$ } from '@builder.io/qwik';

import './style.css';
import { useScrollPosition } from './helpers';

export default component$(() => {
  const scrollTop = useScrollPosition();

  const scrollToTop = $(() =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  );

  return (
    <header class="sticky hidden md:flex bottom-5 right-0 z-[1000000] justify-center w-full ">
      {scrollTop > 800 ? (
        <div
          class={`max-w-[705px] bg-dark w-full flex flex-row p-[10px] rounded-full border border-gray-400`}
        >
          <button onClick$={scrollToTop}>Naverx</button>
        </div>
      ) : null}
    </header>
  );
});
