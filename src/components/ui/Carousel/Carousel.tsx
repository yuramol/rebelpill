import { component$, useVisibleTask$ } from '@builder.io/qwik';
import Swiper from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export const Carousel = component$(() => {
  useVisibleTask$(() => {
    new Swiper('.swiper', {
      // See examples here: https://swiperjs.com/demos
      slidesPerView: 3,
      loop: true,
      centeredSlides: true,
      modules: [EffectCoverflow, Pagination],
      effect: 'coverflow',
      grabCursor: true,
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

  return (
    <>
      <div class="swiper w-full h-96">
        <div class="swiper-wrapper">
          {Array.from({ length: 20 }).map((item, index) => (
            <div
              key={index}
              class="swiper-slide"
              style={{
                background: 'yellow',
                width: 300,
                height: 300,
                border: '3px solid white',
                textAlign: 'center',
                lineHeight: '240px',
                boxSizing: 'border-box',
              }}
            >
              {index}
            </div>
          ))}
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
      </div>
    </>
  );
});
