import { component$, useVisibleTask$ } from '@builder.io/qwik';
import 'animate.css';
import './style.css';
import { Icon } from '~/components/ui';

interface AdvantageItemProps {
  title: string;
  number: number;
  rightPosition?: boolean;
  description: string;
  animateClass: string;
}

export const AdvantageItem = component$<AdvantageItemProps>(
  ({ number, title, rightPosition, description, animateClass }) => {
    useVisibleTask$(() => {
      const accordionHeader = document.querySelectorAll('.accordion-header');
      accordionHeader.forEach((header) => {
        header.addEventListener('click', function () {
          const accordionContent = header.parentElement?.querySelector(
            '.accordion-content'
          ) as HTMLElement;
          const accordionMaxHeight = accordionContent.style.maxHeight;

          if (accordionMaxHeight == '0px' || accordionMaxHeight.length == 0) {
            accordionContent.style.maxHeight = `${
              accordionContent.scrollHeight + 32
            }px`;
          } else {
            accordionContent.style.maxHeight = `0px`;
          }
        });
      });
    });

    return (
      <div
        class={`animate__animated transition-all relative flex flex-col gap-5 ${
          rightPosition ? 'md:ml-auto ' : 'md:mr-auto '
        } ${animateClass}`}
      >
        <div class="transition ">
          <p class="text-sm mb-5">{`00${number}`}</p>
          <div class="accordion-header cursor-pointer transition flex space-x-5 items-center h-16">
            <h1 class="text-h3 md:text-h1 uppercase font-semibold">{title}</h1>
            <div class="h-7 w-7 md:h-11 md:w-11">
              <Icon
                icon="arrowNorthEast"
                height="auto"
                width="auto"
                color="#ff5c00"
              />
            </div>
          </div>
          <div class="accordion-content pt-0 overflow-hidden max-h-0">
            <p class="pr-7 md:pr-0">{description}</p>
          </div>
        </div>
      </div>
    );
  }
);
