import { component$ } from '@builder.io/qwik';

import { Button, Input, Typography, WrapperGradient } from '~/components/ui';

export const Profit = component$(() => (
  <div class="flex flex-col w-full max-w-full md:max-w-[557px] h-auto xl:h-[534px] mt-[-1px] md:ml-[-1px]">
    <WrapperGradient
      rootClass="rounded-t-none rounded-b-[20px] md:rounded-[20px] before:rounded-b-[20px] before:md:rounded-[20px]  !bg-secondary-gradient"
      childClass="px-5 py-[30px] md:px-8 md:py-11 lg:px-[60px] lg:pt-[93px] lg:pb-[70px] xl:pb-[85px] rounded-es-[5px] rounded-ee-[5px] md:rounded-[5px]"
    >
      <div class="flex flex-col md:flex-row flex-wrap gap-[6px] md:gap-[10px] whitespace-nowrap mb-[30px] md:mb-[35px] text-center md:text-left">
        <Typography
          variant="h2"
          class="uppercase leading-[42px] text-h4 md:text-h2"
        >
          Profit
        </Typography>
        <Typography variant="description" class="uppercase font-light">
          * The calculation is approximate
        </Typography>
      </div>

      <div class="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-[18px] mb-5 md:mb-[100px] lg:mb-[154px]">
        <Typography variant="button" class="uppercase whitespace-nowrap">
          Your profit
        </Typography>
        <Input
          id="profitValue"
          disabled
          variant="outlined"
          extraClass="max-w-full md:max-w-[190px] h-[47px] w-full text-center text-base"
          wrapperClass="md:w-auto"
        />
      </div>

      <Button
        variant="contained-primary"
        text={`Let's go`}
        class="max-w-full"
      />
    </WrapperGradient>
  </div>
));
