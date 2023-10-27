import { component$, useVisibleTask$ } from '@builder.io/qwik';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Wrapper } from '~/components/common';
import { Typography } from '~/components/ui';

import Pill from '~/assets/images/Pill.png?jsx';
import PillHuge from '~/assets/images/PillHuge.png?jsx';
import Laptop from '../../../assets/images/Laptop.png';
import VRGlasses from '../../../assets/images/VRGlasses.png';
import VRGlassesMobile from '../../../assets/images/VRGlassesMobile.png';

export const StopSufferingSection = component$(() => {
  useVisibleTask$(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray('.panel-gsap');
    const container = document.querySelector('.containerR');
    const laptopImage = document.querySelector('.laptop-image-gsap');
    const title = document.querySelector('.title-gsap');
    const secondTitle = document.querySelector('.second-title-gsap');
    const pill = document.querySelector('.pill-gsap');
    const smallPill = document.querySelector('.small-pill-gsap');

    const coords = smallPill?.getBoundingClientRect();

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.containerR',
        pin: true,
        scrub: true,
        end: () => `+=${(container as HTMLElement)?.offsetWidth}`,
      },
    });

    tl.to(laptopImage, {
      duration: 1,
      opacity: 1,
      ease: 'none',
    })
      .to(title, {
        duration: 1,
        opacity: 0,
        scale: 0.75,
        ease: 'none',
      })
      .to(laptopImage, {
        duration: 1,
        scale: 2,
        ease: 'none',
      })
      .to(pill, {
        duration: 1,
        top: (coords?.top || 0) - 110 + window.scrollY,
        left: (coords?.left || 0) + 50 + window.scrollX,
        scale: 0.2,
        ease: 'none',
      })
      .to(secondTitle, {
        duration: 0.5,
        display: 'block',
        opacity: 1,
        scale: 1,
        ease: 'none',
      });

    ScrollTrigger.create({
      trigger: '.containerR',
      start: 'top top',
      end: '+=66%',
    });

    sections.forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel as string,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      });
    });
  });

  return (
    <section class="relative bg-dark w-full">
      {/* section 1 */}
      <div class="containerR w-full h-screen bg-dark relative">
        <Wrapper class="relative w-full flex flex-col justify-center items-center h-full">
          <div class="absolute top-0 left-4">
            <Typography
              variant="description"
              class="second-title-gsap pt-[150px] pr-[15px] Pill2:pr-[60px] Pill3:pr-[80px] relative uppercase !text-h1 z-20 opacity-0"
            >
              it's time to take you to the next level.
              <span class="small-pill-gsap !inline-block absolute w-[100px] mt-[72px] Pill1:mt-16 Pill2:mt-14 Pill3:mt-12 Pill4:mt-10 Pill5:mt-8 Pill6:mt-7 Pill7:mt-5 ml-0 smContactForm:mt-2 smContactForm:ml-3"></span>
            </Typography>
          </div>
          <div class="pill-gsap absolute w-full flex justify-center left-[50%] right-[50%] translate-x-[-50%] translate-y-0 px-10 z-10 scale-100">
            <Pill />
          </div>
          <Typography
            variant="description"
            class="title-gsap uppercase z-10 text-center !text-logo opacity-100 scale-100"
          >
            Stop suffering dude
          </Typography>
        </Wrapper>
        <img
          src={Laptop}
          width={100}
          height={100}
          class="laptop-image-gsap w-full h-full object-cover absolute top-0 left-0 right-0 bottom-0 opacity-0 scale-100"
          alt="VR Glasses"
        />
      </div>

      {/* section 2 */}
      <div class="panel-gsap w-full h-screen bg-dark">
        <Wrapper class="w-full flex flex-col justify-center items-center md:items-start md:justify-normal gap-5 sm:gap-0 md:pt-[100px] h-full px-4 md:px-[25px] lg:px-[40px] xl:px-[100px] text-center md:text-start">
          <Typography variant="description" class="uppercase !text-h1">
            This <span class="text-primary">platform</span> is full of
            specialists
          </Typography>
          <Typography
            variant="description"
            class="uppercase !font-light !text-h1"
          >
            Who are willing to do your work
          </Typography>
          <Typography
            variant="description"
            class="uppercase !font-bold !text-logo"
          >
            For two or three times
          </Typography>
          <Typography
            variant="description"
            class="uppercase font-light !text-logoLg"
          >
            Less money<span class="text-primary">.</span>
          </Typography>
        </Wrapper>
      </div>
      {/* section 3 */}
      <div class={`panel-gsap w-full h-screen bg-cover`}>
        <img
          src={VRGlassesMobile}
          width={100}
          height={100}
          class="block md:hidden w-full h-full object-cover"
          alt="VR Glasses"
        />
        <img
          src={VRGlasses}
          width={100}
          height={100}
          class="hidden md:block  w-full h-full object-cover"
          alt="VR Glasses"
        />
      </div>
      {/* section 4 */}
      <div class="panel-gsap w-full h-screen bg-dark">
        <Wrapper class="w-full flex flex-col justify-center items-center h-full px-0 gap-2 md:gap-5">
          <div class="absolute w-full flex justify-center left-[50%] right-[50%] translate-x-[-50%]">
            <PillHuge />
          </div>
          <Typography
            variant="body1"
            class="uppercase z-10 text-center !font-bold !text-secondSectionTitle "
          >
            You can essentially earn
          </Typography>
          <Typography
            variant="description"
            class="uppercase z-10 text-center !text-secondSectionSubtitle"
          >
            passively and squeeze
          </Typography>
          <Typography
            variant="description"
            class="uppercase z-10 text-center !font-medium !text-secondSectionDescription"
          >
            your income indefinitely
          </Typography>
        </Wrapper>
      </div>
    </section>
  );
});
