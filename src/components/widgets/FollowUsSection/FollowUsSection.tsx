import { component$ } from '@builder.io/qwik';

import Video from '~/assets/videos/pexels-deeana-arts-14526902.mp4';

export const FollowUsSection = component$(() => {
  const videos = [Video];

  return (
    <section
      class={[
        'min-h-[100vh] w-full  flex overflow-hidden relative py-[20px]',
        "before:content-[''] before:bg-primary-gradient-mirror before:absolute before:inset-0 before:-scale-x-100",
      ]}
    >
      <div class="w-full flex gap-8 overflow-hidden absolute left-0 top-[200px]">
        {/* videos */}
        {videos.length &&
          videos.map((video, index) => {
            return (
              <div
                key={index}
                class="h-[440px] max-w-[250px] w-full overflow-hidden"
                style={{ marginBottom: `${index}em` }}
              >
                <video key={index} class="h-full w-full" muted loop controls>
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            );
          })}

        {/* chip */}
        <div></div>
      </div>
    </section>
  );
});
