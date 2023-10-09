import { component$, useVisibleTask$ } from '@builder.io/qwik';
import Swiper from 'swiper';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

import { BenefitCard, Typography } from '~/components/ui';

// Import Swiper styles
import 'swiper/css';

export const benefits = [
  {
    title: 'We do your work',
    subtitle: 'You have more free time',
  },
  {
    title: 'You bring the client',
    subtitle: 'you increase your customer base',
  },
  {
    title: 'You earn money',
    subtitle: 'You have passive income',
  },
  {
    title: 'We do your work',
    subtitle: 'You have more free time',
  },
  {
    title: 'You bring the client',
    subtitle: 'you increase your customer base',
  },
  {
    title: 'You earn money',
    subtitle: 'You have passive income',
  },
  {
    title: 'We do your work',
    subtitle: 'You have more free time',
  },
  {
    title: 'You bring the client',
    subtitle: 'you increase your customer base',
  },
  {
    title: 'You earn money',
    subtitle: 'You have passive income',
  },
];

export const BenefitsSection = component$(() => {
  useVisibleTask$(() => {
    new Swiper('.swiper', {
      // See examples here: https://swiperjs.com/demos
      slidesPerView: 3,
      loop: true,
      centeredSlides: true,
      initialSlide: 1,
      autoplay: {
        disableOnInteraction: false,
        delay: 4000,
        pauseOnMouseEnter: true,
      },
      modules: [EffectCoverflow, Autoplay],
      effect: 'coverflow',
      grabCursor: true,
      coverflowEffect: {
        rotate: 0,
        stretch: -40,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
    });
  });

  return (
    <div class="py-[120px] overflow-hidden relative before:content-[''] before:h-[130px] before:w-[200px] before:md:h-[150px] before:md:w-[150px] before:bg-primary before:absolute before:rounded-[50%] before:blur-[125px] before:md:blur-[150px] before:left-1/2 before:bottom-[37%] before:transform before:-translate-x-1/2">
      <Typography
        variant="button"
        text="Benefits model"
        class="uppercase text-center mb-24"
      />
      <div class="swiper h-full w-[960px]">
        <div class="swiper-wrapper flex items-end">
          {benefits.map((benefit, index) => (
            <div key={index} class="swiper-slide swiper-slide-active ">
              <BenefitCard title={benefit.title} subtitle={benefit.subtitle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
