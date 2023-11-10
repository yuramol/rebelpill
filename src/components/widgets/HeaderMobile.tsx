import { component$, useSignal, $ } from '@builder.io/qwik';

import { headerNav, scrollToElement } from './helpers';

const spanStyle =
  'block absolute h-1 w-full m-auto bg-dark opacity-100 left-0 rotate-0 transition-all duration-[250ms] ease-in-out ';

export default component$(() => {
  const isMenuOpen = useSignal(false);

  const toggleMenu = $(() => {
    isMenuOpen.value = !isMenuOpen.value;
  });

  return (
    <div class="relative w-[230px] flex md:hidden flex-col items-center">
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
              isMenuOpen.value ? 'rotate-[-45deg] top-[10px]' : 'top-[10px] '
            }`}
          ></span>
          <span
            class={`${spanStyle} ${
              isMenuOpen.value ? 'top-[10px] !w-0 left-[50%]' : 'top-[20px] '
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
          {headerNav.map(({ id, title }) => (
            <li
              key={id}
              class={[
                'p-[10px] bg-dark rounded-full group w-full  flex whitespace-nowrap justify-center items-center gap-5 shrink-0  shadow-[0px_0px_3px_0px_rgba(255,_255,_255,_0.3)] overflow-hidden relative z-[1] transition-padding duration-[0.4s]',
                'before:content-[""] before:h-full before:w-0 before:hover:w-full before:rounded-full before:absolute before:top-0 before:left-0 before:transition-all before:duration-[0.4s] before:z-[-1] before:bg-hover-gradient',
              ]}
              onClick$={() => {
                scrollToElement(id);
              }}
            >
              {title}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
});
