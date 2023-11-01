import type { QRL } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';

import { Button, Typography } from '~/components/ui';

interface ThankModalProps {
  toggleModal: QRL<() => void>;
}

export const ThankModal = component$<ThankModalProps>(({ toggleModal }) => (
  <div
    class="fixed z-10 overflow-y-auto top-0 w-full left-0 hidden"
    id="thank-modal"
  >
    <div class="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-900 opacity-75" />
      </div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">
        &#8203;
      </span>
      <div
        class="inline-block align-center sm:align-middle p-[37px] max-w-[550px] w-full bg-dark rounded-lg text-left overflow-hidden shadow-xl transform transition-all"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
      >
        <div class="flex flex-col items-center gap-10 text-center">
          <Typography variant="button" class="uppercase ">
            Thanks for connecting with us!
          </Typography>

          <Typography variant="body1">
            Your request has landed safely in our inbox. 📬 Sit back, relax, and
            keep an eye on your email – our reply will soon be on 💌
          </Typography>
          <Button
            text="Okay"
            variant="contained-secondary"
            class="uppercase w-full max-w-[437px] h-[60px] bg-darkSecondary text-white rounded-full"
            onClick={toggleModal}
          />
        </div>
      </div>
    </div>
  </div>
));
