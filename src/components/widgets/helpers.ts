import { $ } from '@builder.io/qwik';

export const headerNav = [
  { id: 'cleanSchemeSection', title: 'How it works' },
  { id: 'contactSection', title: 'Start making money!' },
  { id: 'calculateSection', title: 'Calculate profit' },
];

export const scrollToElement = $((elementId: string) => {
  const element = document.getElementById(elementId);
  element?.scrollIntoView();
});
