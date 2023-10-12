import { component$, useVisibleTask$ } from '@builder.io/qwik';

import './style.css';
import { BottomTop, FinalLogo, FinalPill, StartTop } from './svg';

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
          <FinalPill />
        </div>
      </div>
    </div>
  );
});
