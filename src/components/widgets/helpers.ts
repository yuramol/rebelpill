import { $, useOnDocument, useSignal } from '@builder.io/qwik';

export const headerNav = [
  { id: 1, title: 'How it works', href: '/' },
  { id: 2, title: 'Start making money!', href: '/' },
  { id: 3, title: 'Calculate profit', href: '/' },
];

export function useScrollPosition() {
  const position = useSignal<any>(0);
  useOnDocument(
    'scroll',
    $(() => {
      const scrollY = document.documentElement.scrollTop;
      position.value = scrollY;
      console.log(position.value);
    })
  );

  return position.value;
}
