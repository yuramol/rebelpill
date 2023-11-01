import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

import { headerNav } from './helpers';
import { Icon } from '../ui/Icon';
import HeaderMobile from './HeaderMobile';

export default component$(() => {
  const scrollPosition = useSignal<any>(0);

  useOnDocument(
    'scroll',
    $(() => {
      const scrollY = document.documentElement.scrollTop;
      scrollPosition.value = scrollY;
    })
  );

  const scrollToTop = $(() =>
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  );

  return (
    <header
      id="header"
      class={`sticky flex flex-col  bottom-5 right-0 z-[1000] items-center w-full justify-center rounded transition-all duration-500 ${
        scrollPosition.value > 800
          ? 'opacity-100 visible scale-100'
          : 'opacity-0 invisible scale-75'
      }`}
    >
      <div class="max-w-[704px] hidden md:flex bg-dark w-full flex-row  p-[10px] gap-[5px] rounded-full border border-gray-400 ">
        <ul class="flex flex-row w-full justify-between gap-[5px] text-center text-white text-base">
          <li
            class={[
              'w-[45px] h-[45px] flex items-center justify-center cursor-pointer',
              'bg-lightGrey rounded-full group flex whitespace-nowrap justify-center items-center gap-5 shrink-0 overflow-hidden relative z-[1] transition-padding duration-[0.4s]',
              'before:content-[""] before:h-full before:w-0 before:hover:w-full before:rounded-full before:absolute before:top-0 before:left-0 before:transition-all before:duration-[0.4s] before:z-[-1] before:bg-hover-gradient',
            ]}
            onClick$={scrollToTop}
          >
            <Link href="/">
              <Icon icon="home" />
            </Link>
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
          <li
            class={[
              'w-[45px] h-[45px] flex items-center justify-center cursor-pointer',
              'bg-grey rounded-full group flex whitespace-nowrap justify-center items-center gap-5 shrink-0 overflow-hidden relative z-[1] transition-padding duration-[0.4s]',
              'before:content-[""] before:h-full before:w-0 before:hover:w-full before:rounded-full before:absolute before:top-0 before:left-0 before:transition-all before:duration-[0.4s] before:z-[-1] before:bg-hover-gradient',
            ]}
            onClick$={scrollToTop}
          >
            <Icon icon="arrowUp" />
          </li>
        </ul>
      </div>
      <HeaderMobile />
    </header>
  );
});
