import { component$ } from '@builder.io/qwik';

import { Typography } from '~/components/ui';
import { RevenueModel } from './RevenueModel';
import { Profit } from './Profit';

export const CalculateSection = component$(() => {
  return (
    <div class="flex flex-col items-center justify-center w-full bg-dark">
      <Typography variant="button" text="Calculate your profit" class="mb-20" />
      <div class="flex flex-col md:flex-row w-full items-center">
        <RevenueModel />
        <Profit />
      </div>
    </div>
  );
});
