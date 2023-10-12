import { component$, useStyles$, useVisibleTask$ } from '@builder.io/qwik';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import { BenefitCard, Typography } from '~/components/ui';

// Import Swiper styles
import 'swiper/css';
import styles from './style.css?inline';

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
    new Swiper('.swiper-benefit', {
      // See examples here: https://swiperjs.com/demos
      loop: true,
      slidesPerView: 'auto',
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      centeredSlides: true,
      modules: [Autoplay],
    });
  });

  useStyles$(styles);

  return (
    <div class="py-[120px] overflow-hidden relative before:content-[''] before:h-[130px] before:w-[200px] before:md:h-[150px] before:md:w-[150px] before:bg-primary before:absolute before:rounded-[50%] before:blur-[125px] before:md:blur-[150px] before:left-1/2 before:bottom-[37%] before:transform before:-translate-x-1/2">
      <Typography variant="button" class="uppercase text-center mb-24">
        Benefits model
      </Typography>
      <div class="swiper-benefit h-full max-w-[1100px]">
        <div class="swiper-wrapper flex items-end">
          {benefits.map((benefit, index) => (
            <div key={index} class="swiper-slide swiper-slide-benefit">
              <BenefitCard title={benefit.title} subtitle={benefit.subtitle} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
