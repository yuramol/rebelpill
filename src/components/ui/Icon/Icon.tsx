import { component$ } from '@builder.io/qwik';

import { IconsMap } from './helpers';
import type { IconProps } from './types';

export const Icon = component$<IconProps>(
  ({ icon, height, width, color, size, ...props }) => {
    const Render = IconsMap[icon];

    const computedColor = color ?? 'currentColor';

    return (
      <Render
        height={height || size}
        width={width || size}
        color={computedColor}
        fill={computedColor}
        {...props}
      />
    );
  }
);

export * from './types';
