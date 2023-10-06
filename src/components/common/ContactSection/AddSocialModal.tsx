import type { QRL } from '@builder.io/qwik';
import { $, component$, useSignal, useStore } from '@builder.io/qwik';

import { Button, Input, Typography } from '~/components/ui';

interface ContactFormProps {
  toggleModal: QRL<() => void>;
}

export const AddSocialModal = component$<ContactFormProps>(
  ({ toggleModal }) => {
    const isHovered = useSignal(false);
    const socialInputs = useStore([
      { placeholder: 'FOR EXAMPLE, INSTAGRAM', id: 1 },
    ]);

    const handleAddRow = $(() => {
      isHovered.value = !isHovered.value;
      socialInputs.push({
        placeholder: ' ',
        id: socialInputs.length + 1,
      });
    });

    return (
      <div
        class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
        id="modal"
      >
        <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div
            class="inline-block align-center sm:align-middle py-10 px-[30px] max-w-[530px] w-full bg-dark rounded-lg text-left overflow-hidden shadow-xl transform transition-all"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="flex flex-col items-center">
              <Typography
                variant="h6"
                text="Added social networks will speed up the processing of your application"
                class="uppercase mb-10"
              />
              <div class="w-full flex flex-col mb-10">
                {socialInputs.map(({ placeholder, id }, index) => (
                  <div key={id} class="flex flex-row items-center gap-5">
                    <Typography
                      variant="body1"
                      text={`0${index + 1}`}
                      class="pt-4"
                    />
                    <Input placeholder={placeholder ?? ' '} />
                  </div>
                ))}
              </div>
              {socialInputs.length < 3 ? (
                <Button
                  variant="text"
                  text="Add a row"
                  class="mb-10"
                  onClick={handleAddRow}
                />
              ) : null}
              <div class="flex flex-row h-[46px] smContactForm:h-[42px] gap-[10px] smContactForm:gap-5">
                <Button
                  tabIndex={1}
                  text="Done"
                  variant="contained-secondary"
                  class="uppercase min-w-[175px]  smContactForm:min-w-[220px] !text-caption smContactForm:text-sm font-normal smContactForm:font-bold"
                />
                <Button
                  tabIndex={2}
                  text="Cancel"
                  variant="outlined-secondary"
                  class="uppercase min-w-[175px]   smContactForm:min-w-[220px] !text-caption smContactForm:text-sm font-normal smContactForm:font-bold"
                  onClick={toggleModal}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
