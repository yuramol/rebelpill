import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';

import Pill from '~/assets/images/Pill.png?jsx';

import { BottomTop, FinalLogo, StartTop } from './svg';

import styles from './style.css?inline';

export const Preloader = component$(() => {
  useVisibleTask$(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.classList.add('active');
    }
    setTimeout(() => {
      if (preloader) {
        preloader.style.display = 'none';
      }
    }, 3000);
  });

  useStyles$(styles);

  return (
    <div class="preloader px-5" id="preloader">
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
  );
});
