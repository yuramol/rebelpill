import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import { Link } from "@builder.io/qwik-city";
import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";

import styles from "./style.css?inline";

import { Icon, Typography } from "~/components/ui";

const TIKTOKLINK = "https://www.tiktok.com/@it.dropshipper?_t=8gRRRNlxGoo&_r=1";

export const FollowUsSection = component$(() => {
  useVisibleTask$(() => {
    new Swiper(".swiper-follow", {
      slidesPerView: "auto",
      loop: true,
      initialSlide: 1,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      modules: [Autoplay],
    });
  });

  useStyles$(styles);

  return (
    <section
      class={[
        "w-full  flex overflow-hidden relative py-[120px] md:py-[170px]",
        "before:content-[''] before:bg-primary-gradient-mirror before:absolute before:inset-0 before:-scale-x-100",
      ]}
    >
      <div class="flex w-full items-center justify-center">
        <div class="swiper-follow w-full h-full max-w-[1440px] rotate-[353deg]">
          <div class="swiper-wrapper flex items-center">
            {Array.from({ length: 9 }).map((item, index) => (
              <div key={index} class="swiper-slide adaptive-size mx-6">
                <div
                  class="w-full h-full overflow-hidden bg-dark"
                  style={{
                    transform: "rotate(5deg)",
                  }}
                >
                  <blockquote
                    class="tiktok-embed"
                    cite="https://www.tiktok.com/@it.dropshipper/video/7276546441470922026"
                    data-video-id="7276546441470922026"
                    style="max-width: 605px;min-width: 325px;"
                  >
                    {" "}
                    <section>
                      {" "}
                      <a
                        target="_blank"
                        title="@it.dropshipper"
                        href="https://www.tiktok.com/@it.dropshipper?refer=embed"
                      >
                        @it.dropshipper
                      </a>{" "}
                      Fill the form and start your passive income in a few days!
                      Unlock your full earning potential and achieve financial
                      freedom. Stop you 9-5&#47;5-2 slavery. Join to the IT
                      Dropshipping rebelion!{" "}
                      <a
                        title="itdropshipping"
                        target="_blank"
                        href="https://www.tiktok.com/tag/itdropshipping?refer=embed"
                      >
                        #itdropshipping
                      </a>{" "}
                      <a
                        title="rebelpill"
                        target="_blank"
                        href="https://www.tiktok.com/tag/rebelpill?refer=embed"
                      >
                        #rebelpill
                      </a>{" "}
                      <a
                        title="sidehustle"
                        target="_blank"
                        href="https://www.tiktok.com/tag/sidehustle?refer=embed"
                      >
                        #sidehustle
                      </a>{" "}
                      <a
                        title="tiktech"
                        target="_blank"
                        href="https://www.tiktok.com/tag/tiktech?refer=embed"
                      >
                        #tiktech
                      </a>{" "}
                      <a
                        title="itprofessional"
                        target="_blank"
                        href="https://www.tiktok.com/tag/itprofessional?refer=embed"
                      >
                        #itprofessional
                      </a>{" "}
                      <a
                        target="_blank"
                        title="♬ original sound - It Dropshipper"
                        href="https://www.tiktok.com/music/original-sound-7276546465445530410?refer=embed"
                      >
                        ♬ original sound - It Dropshipper
                      </a>{" "}
                    </section>{" "}
                  </blockquote>{" "}
                  <script async src="https://www.tiktok.com/embed.js"></script>
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
