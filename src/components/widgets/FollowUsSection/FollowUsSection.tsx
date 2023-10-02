import { component$ } from '@builder.io/qwik';

import Video from '~/assets/videos/video.mp4';

export const FollowUsSection = component$(() => {
  const array = ['dj', 'djal', 'ss'];

  return (
    <section
      class={[
        'min-h-[100vh] w-full bg-primary-gradient flex overflow-hidden relative py-[20px]',
      ]}
    >
      <div
        class={[
          'w-full flex rotate-[-1.001deg] gap-8 overflow-hidden absolute left-0 top-[200px]',
        ]}
      >
        {array.map((item, index) => {
          return (
            <div
              key={index}
              class={[`h-[440px] max-w-[250px] w-full bg-green-200`]}
              style={{ marginBottom: `${index}em` }}
            >
              <video
                height={440}
                width={250}
                muted
                loop
                // autoPlay
                controls
              >
                <source src={Video} type="video/mp4" />
              </video>
            </div>
          );
        })}
      </div>
    </section>
  );
});
