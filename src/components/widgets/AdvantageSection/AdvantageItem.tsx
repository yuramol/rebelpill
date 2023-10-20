import { $, component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { useCSSTransition } from 'qwik-transition';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import './style.css';
import { Icon } from '~/components/ui';

interface AdvantageItemProps {
  title: string;
  number: number;
  rightPosition?: boolean;
  description: string;
}

export const AdvantageItem = component$<AdvantageItemProps>(
  ({ number, title, rightPosition, description }) => {
    const onOff = useSignal(false);
    const newMaxHeight = useSignal(0);
    const { stage } = useCSSTransition(onOff, { timeout: 500 });

    const toggleIcon = $(() => {
      document
        .getElementById(`arrow-north-east-${number}`)
        ?.classList.toggle('open-collapse');
    });

    const handleCollapse = $(() => {
      toggleIcon();
      const el = document.getElementById(`accordion-content-${number}`);
      if (newMaxHeight.value === 0) {
        newMaxHeight.value = el?.scrollHeight as number;
      } else {
        newMaxHeight.value = 0;
      }
      onOff.value = !onOff.value;
    });

    useVisibleTask$(() => {
      gsap.registerPlugin(ScrollTrigger);
      const animation = gsap.to(`.advantage-item-gsap-${number}`, {
        scrollTrigger: {
          trigger: `.advantage-item-gsap-${number}`,
          start: '20px 90%',
        },
        x: 0,
        duration: 0.5,
        ease: 'circ.out',
      });

      return () => {
        animation.kill();
      };
    });

    return (
      <div
        class={`${`advantage-item-gsap-${number}`}  relative flex flex-col gap-5 ${
          rightPosition
            ? 'translate-x-[100%] md:ml-auto '
            : 'translate-x-[-100%] md:mr-auto '
        }`}
      >
        <div class="max-w-min">
          <p class="text-sm mb-5">{`00${number}`}</p>
          <div
            class="accordion-header cursor-pointer transition flex space-x-5 items-center h-16 mb-2"
            onClick$={handleCollapse}
          >
            <h1 class="text-h3 md:text-h1 uppercase font-semibold">{title}</h1>
            <div
              id={`arrow-north-east-${number}`}
              class="h-7 w-7 md:h-11 md:w-11 transition duration-500"
            >
              <Icon
                icon="arrowNorthEast"
                height="auto"
                width="auto"
                color="#ff5c00"
              />
            </div>
          </div>
          <div
            id={`accordion-content-${number}`}
            class="accordion-content pt-0 overflow-hidden max-h-0"
            style={{
              transition: 'max-height 0.5s ease-out',
              maxHeight:
                stage.value === 'enterTo' ? `${newMaxHeight.value}px` : 0,
            }}
          >
            <p class="pr-7 md:pr-0">{description}</p>
          </div>
        </div>
      </div>
    );
  }
);
