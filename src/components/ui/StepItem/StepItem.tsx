import { component$, useVisibleTask$ } from '@builder.io/qwik';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import { Icon, Typography } from '~/components/ui';

export interface StepItemProps {
  step: number;
  title: string;
  isActive?: boolean;
}

export const StepItem = component$<StepItemProps>(
  ({ step, title, isActive }) => {
    const activeStyles =
      isActive &&
      'before:content-[""] before:h-[59px] before:w-[173px] before:absolute before:bg-primary before:blur-[40px] before:left-0 before:bottom-[-50px] before:right-0 before:m-auto';

    useVisibleTask$(() => {
      gsap.registerPlugin(ScrollTrigger);
      const animationStep = gsap.to('.step-item-gsap', {
        scrollTrigger: {
          trigger: '.step-item-gsap',
          start: '20px 70%',
        },
        opacity: 1,
        stagger: 0.4,
        duration: 1,
      });
      const animationGradient = gsap.to('.gradient-gsap', {
        scrollTrigger: {
          trigger: '.step-item-gsap',
        },
        opacity: 1,
        duration: 1,
        delay: 1.6,
      });
      const animationText = gsap.to('.lets-do-it-gsap', {
        scrollTrigger: {
          trigger: '.step-item-gsap',
        },
        opacity: 1,
        duration: 1,
        delay: 2.2,
      });

      return () => {
        animationStep.kill();
        animationGradient.kill();
        animationText.kill();
      };
    });
    return (
      <div
        class={[
          `step-item-gsap opacity-0 h-[208px] sm:h-[284px] ${
            isActive ? 'bg-black' : 'bg-step-gradient'
          } rounded p-8 flex flex-col justify-between relative overflow-hidden`,
        ]}
      >
        <div class="flex flex-col gap-3">
          <Typography
            variant="description"
            class="text-primary"
          >{`/0${step}`}</Typography>
          <Typography variant="h5" class="uppercase">
            {title}
          </Typography>
        </div>

        {isActive && (
          <>
            <a
              href="#form-section"
              class="lets-do-it-gsap absolute bottom-10 opacity-0 w-max flex items-center gap-2"
            >
              <Typography variant="description" class="uppercase">
                Let's do it
              </Typography>
              <Icon
                icon="arrowNorthEast"
                height="13px"
                width="13px"
                fill="white"
              />
            </a>
            <div class={[activeStyles, 'gradient-gsap opacity-0']}></div>
          </>
        )}
      </div>
    );
  }
);
