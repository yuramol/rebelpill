import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import { Image } from '@unpic/qwik';

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
          <Image
            src="/src/assets/images/Pill.webp"
            layout="constrained"
            width={616}
            height={264}
            alt="Rebel Pill"
          />
          {/* <FinalPill /> */}
        </div>
      </div>
    </div>
  );
});
