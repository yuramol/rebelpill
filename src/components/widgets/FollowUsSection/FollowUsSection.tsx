import { component$, useVisibleTask$ } from '@builder.io/qwik';

import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

import './style.css';

import Video from '~/assets/videos/pexels-deeana-arts-14526902.mp4';

export const FollowUsSection = component$(() => {
  const videos = [
    Video,
    Video,
    Video,
    Video,
    Video,
    Video,
    Video,
    Video,
    Video,
    Video,
  ];

  useVisibleTask$(() => {
    new Swiper('.followSwiper', {
      slidesPerView: 'auto',
      loop: true,
      // freeMode: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      modules: [Autoplay],
    });
  });

  return (
    <section
      class={[
        'w-full  flex overflow-hidden relative py-[120px] md:py-[170px]',
        "before:content-[''] before:bg-primary-gradient-mirror before:absolute before:inset-0 before:-scale-x-100",
      ]}
    >
      <div class="flex w-full items-center justify-center">
        <div class="followSwiper w-full h-full max-w-[1440px] rotate-[353deg]">
          <div class="swiper-wrapper flex items-center">
            {videos.map((video, index) => (
              <div
                key={index}
                class="swiper-slide adaptive-size mx-6"
                // style={{
                //   width:
                //     'clamp(10.625rem, calc(10.625rem + (15.625 - 10.625) * ((100vw - 20rem) / (81 - 20))), 15.625rem)',
                //   height:
                //     'clamp(18.75rem, calc(18.75rem + (27.5 - 18.75) * ((100vw - 20rem) / (81 - 20))), 27.5rem)',
                // }}
              >
                <div
                  class="w-full h-full overflow-hidden bg-dark"
                  style={{
                    transform: 'rotate(5deg)',
                  }}
                >
                  <video key={index} class="h-full w-full" muted loop controls>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
