import {
  component$,
  useSignal,
  useStyles$,
  useVisibleTask$,
} from '@builder.io/qwik';

import Pill from '~/assets/images/Pill.webp?jsx';

import { BottomTop, FinalLogo, StartTop } from './svg';

import styles from './style.css?inline';

export const Preloader = component$(() => {
  const isPageLoaded = useSignal(false);
  const isVisibility = useSignal(false);

  useVisibleTask$(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('active');
    }
    setTimeout(() => {
      isVisibility.value = true;
    }, 3000);
    setTimeout(() => {
      isPageLoaded.value = true;
    }, 3600);
  });

  useStyles$(styles);

  return (
    <>
      {!isPageLoaded.value ? (
        <div
          class={`preloader px-5 opacity-100 ${
            isVisibility.value ? 'opacity-0' : ''
          }`}
          id="preloader"
        >
          <div class="preloader_start">
            <div class="preloader_start-top">
              <StartTop />
            </div>
            <div class="preloader_start-bottom">
              <BottomTop />
            </div>
          </div>
          <div class="preloader_final">
            <div class="preloader_final-logo">
              <FinalLogo />
            </div>
            <div class="preloader_final-pill">
              <Pill />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
});
