import { component$, useVisibleTask$ } from '@builder.io/qwik';

import Swiper from 'swiper';
import { EffectCoverflow } from 'swiper/modules';

import Video from '~/assets/videos/pexels-deeana-arts-14526902.mp4';

export const FollowUsSection = component$(() => {
  const videos = [Video, Video, Video, Video, Video, Video, Video];

  useVisibleTask$(() => {
    new Swiper('.followSwiper', {
      slidesPerView: 5,
      initialSlide: 1,
      loop: true,
      freeMode: true,
      modules: [EffectCoverflow],
      effect: 'coverflow',
      grabCursor: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows: true,
      },
    });
  });

  return (
    <section
      class={[
        'min-h-[100vh] w-full  flex overflow-hidden relative py-[20px]',
        "before:content-[''] before:bg-primary-gradient-mirror before:absolute before:inset-0 before:-scale-x-100",
      ]}
    >
      <div class="flex w-full items-center justify-center">
        <div class="followSwiper w-full h-full max-w-[1440px]">
          <div class="swiper-wrapper flex items-center">
            {Array.from({ length: 10 }).map((item, index) => (
              <div
                key={index}
                class="swiper-slide h-[530px] w-[350px] bg-dark mx-6"
                style={{
                  transform:
                    'translate3d(0px, 150px, 0px) rotateX(0deg) rotateY(0deg) scale(1) !important',
                  color: 'red',
                }}
              >
                {index}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
