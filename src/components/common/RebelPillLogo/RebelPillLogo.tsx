import { component$ } from '@builder.io/qwik';
import { RebelPillSvg } from './RebelPillSvg';

export const RebelPillLogo = component$(() => (
  <div class="flex flex-col justify-center items-center pt-[80px] pb-[14px] md:pt-[60px] md:pb-[44px]">
    <RebelPillSvg />
  </div>
));
