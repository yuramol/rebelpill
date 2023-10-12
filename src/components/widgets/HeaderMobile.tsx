import { component$, useSignal, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { headerNav, useScrollPosition } from './helpers';

const spanStyle =
  'block absolute h-1 w-full m-auto bg-dark opacity-100 left-0 rotate-0 transition-all duration-[250ms] ease-in-out ';

export default component$(() => {
  const isMenuOpen = useSignal(false);
  const scrollTop = useScrollPosition();

  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  return (
    <>
      <header class="sticky flex flex-col md:hidden bottom-5 right-0 z-[1000] items-center w-full justify-center rounded transition-all">
        {scrollTop > 800 ? (
          <div class="relative w-[230px] flex flex-col items-center">
            <button
              class="flex w-[60px] h-[60px] bg-white px-2 rounded-full"
              onClick$={toggleMenu}
            >
              <span class="block m-auto w-[35px] h-[20px] relative  rotate-0 transition duration-500 ease-in-out">
                <span
                  class={`${spanStyle} ${
                    isMenuOpen.value ? 'top-[10px] !w-0 left-[50%] ' : 'top-0 '
                  }`}
                ></span>
                <span
                  class={`${spanStyle} ${
                    isMenuOpen.value ? 'rotate-45 top-[10px]' : 'top-[10px] '
                  }`}
                ></span>
                <span
                  class={`${spanStyle} ${
                    isMenuOpen.value
                      ? 'rotate-[-45deg] top-[10px]'
                      : 'top-[10px] '
                  }`}
                ></span>
                <span
                  class={`${spanStyle} ${
                    isMenuOpen.value
                      ? 'top-[10px] !w-0 left-[50%]'
                      : 'top-[20px] '
                  }`}
                ></span>
              </span>
            </button>
            <nav
              class={`w-full absolute bottom-[70px] transition duration-500 ${
                isMenuOpen.value
                  ? 'translate-y-0 opacity-1 visible'
                  : 'translate-y-5 opacity-0 invisible'
              }`}
            >
              <ul class="flex flex-col gap-[6px] text-center text-white text-base">
                {headerNav.map(({ id, title, href }) => (
                  <li
                    key={id}
                    class={[
                      'p-[10px] bg-dark rounded-full group w-full  flex whitespace-nowrap justify-center items-center gap-5 shrink-0  shadow-[0px_0px_3px_0px_rgba(255,_255,_255,_0.3)] overflow-hidden relative z-[1] transition-padding duration-[0.4s]',
                      'before:content-[""] before:h-full before:w-0 before:hover:w-full before:rounded-full before:absolute before:top-0 before:left-0 before:transition-all before:duration-[0.4s] before:z-[-1] before:bg-hover-gradient',
                    ]}
                  >
                    <Link href={href}>{title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
});
