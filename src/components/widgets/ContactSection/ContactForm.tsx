import { $, component$ } from '@builder.io/qwik';

import { Button, Input, Typography } from '~/components/ui';

import { AddSocialModal } from './AddSocialModal';
import { itProfessions } from './helpers';
import { ThankModal } from './ThankModal';

interface ContactFormProps {
  tab: number;
}

export const ContactForm = component$<ContactFormProps>(({ tab }) => {
  const toggleSocialModal = $(() => {
    document.getElementById('add-social-modal')?.classList.toggle('hidden');
  });

  const toggleThankModal = $(() => {
    document.getElementById('thank-modal')?.classList.toggle('hidden');
  });

  return (
    <div class="max-w-[596px] w-full flex flex-col items-center">
      <div class="w-full flex flex-col gap-[60px] smContactForm:gap-[50px] mb-10">
        <Input id="name" label="NAME" required />
        <Input id="email" label="E-MAIL" />
        {tab === 1 ? (
          <>
            <Input
              id="profession"
              label="YOUR PROFESSION?"
              variant="select"
              selectOptions={itProfessions}
              icon="play"
            />
            <Input
              id="description"
              label="Do you have any ideas, or questions"
              variant="textarea"
            />
          </>
        ) : null}
      </div>

      {tab === 1 ? (
        <Button
          variant="text"
          text="Add a link to my social network"
          class="mb-10 smContactForm:mb-5"
          onClick={toggleSocialModal}
        />
      ) : null}
      <Button variant="outlined-primary" text="SEND" class="mb-5" />
      <div class="flex w-full items-start">
        <div class="flex flex-row items-center gap-[6px] mb-5">
          <div class="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
            <input
              class="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
              type="checkbox"
              id="checkboxNoLabel"
              value=""
              aria-label="..."
            />
          </div>
          <Typography
            variant="description"
            class="uppercase smContactForm:text-[12px] font-extralight"
          >
            I agree to receive communications
          </Typography>
        </div>
      </div>
      <AddSocialModal toggleModal={toggleSocialModal} />
      <ThankModal toggleModal={toggleThankModal} />
    </div>
  );
});
