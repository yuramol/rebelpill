import { component$ } from '@builder.io/qwik';

import { Input, Typography } from '~/components/ui';

export const RevenueModel = component$(() => {
  return (
    <div class="flex flex-col w-full max-w-[743px] max-h-full xl:max-h-[468px] py-[30px] px-5 md:px-8 md:py-11 lg:p-[60px] lg:pr-[96px] border border-[rgba(255, 255, 255, 0.50)] rounded-es-[5px] rounded-tl-[5px]">
      <Typography
        variant="h2"
        text="Revenue Model"
        class="uppercase mb-[47px] md:mb-[42px] text-h4 md:text-h2 text-center md:text-left"
      />

      <div class="flex flex-col">
        <div class="flex flex-col md:flex-row flex-wrap justify-between w-full gap-[30px] mb-[30px] md:mb-[66px]">
          <div class="flex flex-col gap-3 md:gap-[18px]">
            <Typography
              variant="button"
              class="uppercase text-sm md:text-base"
              text="Customer rate"
            />
            <div class="flex flex-row items-center gap-[14px]">
              <Input
                variant="outlined"
                extraClass="max-w-full md:max-w-[160px] h-[47px] text-center text-base"
              />
              <Typography
                variant="description"
                text="/ per hour"
                class="text-tiny font-light uppercase whitespace-nowrap"
              />
            </div>
          </div>
          <div class="flex flex-col gap-3 md:gap-[18px]">
            <Typography
              variant="button"
              class="uppercase text-sm md:text-base"
              text="Our rate"
            />
            <div class="flex flex-row items-center gap-[14px]">
              <Input
                variant="outlined"
                extraClass="max-w-full md:max-w-[160px] h-[47px] text-center text-base"
              />
              <Typography
                variant="description"
                text="/ per hour"
                class="text-tiny font-light uppercase whitespace-nowrap"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-row items-center gap-[10px] whitespace-nowrap">
          <Typography
            variant="button"
            text="Project duration"
            class="uppercase text-sm md:text-base"
          />
          <Typography
            variant="description"
            text="/ hours"
            class="text-tiny font-light uppercase"
          />
        </div>
      </div>
    </div>
  );
});
