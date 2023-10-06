import { $, component$, useSignal } from '@builder.io/qwik';
import { Icon } from '~/components/icons';
import { Button, Typography } from '~/components/ui';
import { ContactForm } from './ContactForm';

export const ContactSection = component$(() => {
  const tabs = useSignal<1 | 2>(1);

  const toggleTab = $((e: any) => (tabs.value = e.target.tabIndex));

  return (
    <div class="mb-[800px]  flex flex-col  items-start smContactForm:items-center">
      <div class=" w-full flex flex-col mdContactForm:flex-row items-start smContactForm:items-center justify-between gap-5 mb-10 smContactForm:mb-[90px]">
        <div class="w-full flex flex-row justify-start smContactForm:justify-center mdContactForm:justify-start  items-center gap-10">
          <Typography
            variant="h4"
            text="Well, let's try it"
            class="uppercase whitespace-nowrap md:text-h3"
          />
          <div class="rotate-180 mdContactForm:rotate-45">
            <Icon icon="arrowNorthEast" width={32} height={32} />
          </div>
        </div>
        <div class="flex flex-col smContactForm:flex-row gap-5 items-start smContactForm:items-center whitespace-nowrap">
          <Typography variant="body1" text="I want to..." class="mr-5" />
          <div class="flex flex-row h-[46px] smContactForm:h-[42px] gap-[10px] smContactForm:gap-5">
            <Button
              tabIndex={1}
              text="Start cooperating"
              variant={
                tabs.value === 1 ? 'contained-secondary' : 'outlined-secondary'
              }
              class="uppercase min-w-[175px]  smContactForm:min-w-[220px] !text-caption smContactForm:text-sm font-normal smContactForm:font-bold"
              onClick={toggleTab}
            />
            <Button
              tabIndex={2}
              text="Learn more"
              variant={
                tabs.value === 2 ? 'contained-secondary' : 'outlined-secondary'
              }
              class="uppercase min-w-[175px]   smContactForm:min-w-[220px] !text-caption smContactForm:text-sm font-normal smContactForm:font-bold"
              onClick={toggleTab}
            />
          </div>
        </div>
      </div>
      <ContactForm tab={tabs.value} />
    </div>
  );
});
