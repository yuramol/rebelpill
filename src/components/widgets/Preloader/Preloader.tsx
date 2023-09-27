import { component$ } from '@builder.io/qwik';

import './style.css';
// import { WelcomeSvg } from './WelcomeSvg';
import { RebelPillSvg } from './RebelPillSvg';
import { RebelPillMobileSvg } from './RebelPillMobileSvg';
import { WelcomeMobileSvg } from './WelcomeMobileSvg';

export const Preloader = component$(() => {
  return (
    <div class="fixed top-0 left-0 w-full h-[100vh] overflow-hidden z-[1000] bg-dark flex justify-center items-center">
      <div class="text-center text-white font-bold text-[140px] leading-[114px] uppercase">
        {/* <WelcomeSvg /> */}
        <WelcomeMobileSvg />

        {/* <RebelPillSvg /> */}
        {/* <RebelPillMobileSvg /> */}
      </div>
      {/* <div class="super h-[265px] w-[620px]"></div> */}
    </div>
  );
});
