import { component$ } from '@builder.io/qwik';

import { Button, Input, Typography } from '~/components/ui';

export const Profit = component$(() => {
  return (
    <div class="flex flex-col w-full max-w-full md:max-w-[557px] h-auto xl:h-[534px] px-5 py-[30px] md:px-8 md:py-11 lg:px-[60px] lg:pt-[93px] lg:pb-[70px] xl:pb-[85px] border border-[rgba(255, 255, 255, 0.50)] rounded-es-[5px] rounded-ee-[5px] md:rounded-[5px]">
      <div class="flex flex-col md:flex-row flex-wrap gap-[6px] md:gap-[10px] whitespace-nowrap mb-[30px] md:mb-[35px] text-center md:text-left">
        <Typography
          variant="h2"
          text="Profit"
          class="uppercase leading-[42px] text-h4 md:text-h2"
        />
        <Typography
          variant="description"
          text="* The calculation is approximate"
          class="uppercase font-light"
        />
      </div>

      <div class="flex flex-col">
        <div class="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-[18px] mb-5 md:mb-[100px] lg:mb-[154px]">
          <Typography
            variant="button"
            text="Your profit"
            class="uppercase whitespace-nowrap"
          />
          <Input
            variant="outlined"
            extraClass="max-w-full md:max-w-[160px] h-[47px] w-full text-center text-base"
            wrapperClass="md:w-auto"
          />
        </div>
        <Button
          variant="contained-primary"
          text={`Let's go`}
          class="max-w-full"
        />
      </div>
    </div>
  );
});
