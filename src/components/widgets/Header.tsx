import { $, component$ } from '@builder.io/qwik';

import { headerNav, useScrollPosition } from './helpers';
import { Link } from '@builder.io/qwik-city';

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
          class={`max-w-[705px] bg-dark w-full flex flex-row p-[10px] gap-[5px] rounded-full border border-gray-400`}
        >
          <ul class="flex flex-row gap-[5px] text-center text-white text-base">
            <li class="flex  items-center">
              <Link href="/">Home</Link>
            </li>
            {headerNav.map(({ id, title, href }) => (
              <li
                key={id}
                class={[
                  'py-[7px] px-5 bg-grey rounded-full group flex whitespace-nowrap justify-center items-center gap-5 shrink-0 overflow-hidden relative z-[1] transition-padding duration-[0.4s]',
                  'before:content-[""] before:h-full before:w-0 before:hover:w-full before:rounded-full before:absolute before:top-0 before:left-0 before:transition-all before:duration-[0.4s] before:z-[-1] before:bg-hover-gradient',
                ]}
              >
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
          <button onClick$={scrollToTop}>To top</button>
        </div>
      ) : null}
    </header>
  );
});
