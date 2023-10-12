import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Link } from '@builder.io/qwik-city';
import { component$, useVisibleTask$ } from '@builder.io/qwik';

import './style.css';

import { Icon, Typography } from '~/components/ui';
import Video from '~/assets/videos/pexels-deeana-arts-14526902.mp4';

const TIKTOKLINK = 'https://www.tiktok.com/@it.dropshipper?_t=8gRRRNlxGoo&_r=1';

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
    new Swiper('.swiper-follow', {
      slidesPerView: 'auto',
      loop: true,
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
        <div class="swiper-follow w-full h-full max-w-[1440px] rotate-[353deg]">
          <div class="swiper-wrapper flex items-center">
            {videos.map((video, index) => (
              <div key={index} class="swiper-slide adaptive-size mx-6">
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
      <div class="absolute z-10 left-[50%] md:left-[70%] bottom-[10%] md:bottom-[18%] rotate-[-4deg] translate-x-[-50%] translate-y-0">
        <Link
          href={TIKTOKLINK}
          target="_blank"
          rel="noopener noreferrer"
          class="flex flex-row items-center gap-2"
        >
          <Icon icon="tikTok" />
          <Typography variant="body1" class="whitespace-nowrap uppercase">
            Follow us on Tik tok
          </Typography>
        </Link>
      </div>
    </section>
  );
});
