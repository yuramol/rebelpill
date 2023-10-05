import { component$, useVisibleTask$ } from '@builder.io/qwik';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export const Carousel = component$(() => {
  useVisibleTask$(() => {
    new Swiper('.swiper', {
      slidesPerView: 4,
      loop: true,
      autoplay: { delay: 500 },
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        clickable: true,
      },
      freeMode: { momentumBounceRatio: 3 },
      hashNavigation: true,
      modules: [Navigation, Pagination],
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
