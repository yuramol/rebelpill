import { component$ } from '@builder.io/qwik';

import { Typography } from '~/components/ui';
import { RevenueModel } from './RevenueModel';
import { Profit } from './Profit';
import { Wrapper } from '~/components/common';

export const CalculateSection = component$(() => {
  return (
    <Wrapper class="flex flex-col items-center justify-center w-full bg-dark">
      <Typography variant="button" class="mb-20">
        Calculate your profit
      </Typography>
      <div class="flex flex-col md:flex-row w-full items-center justify-center">
        <RevenueModel />
        <Profit />
      </div>
    </Wrapper>
  );
});
