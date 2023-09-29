import type { CSSProperties } from '@builder.io/qwik';
import type { JSX } from '@builder.io/qwik/jsx-runtime';

export type IconsNames =
  | 'burger'
  | 'close'
  | 'arrow'
  | 'arrowUp'
  | 'arrowDown'
  | 'arrowShort'
  | 'arrowNorthEast'
  | 'arrowGradient'
  | 'check'
  | 'plus'
  | 'plusGradient'
  | 'play'
  | 'heart'
  | 'home';

export type IconsNamesMapType = {
  [key in IconsNames]: (style: IconCommonProps) => JSX.Element;
};

export interface IconProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  fill?: string;
  icon: IconsNames;
  size?: string | number;
  style?: CSSProperties & { pathColor?: string; circleOpacity?: number };
}

export type IconCommonProps = {
  width?: number | string;
  height?: number | string;
  circleOpacity?: number;
  pathColor?: string;
  style?: CSSProperties & { pathColor?: string; circleOpacity?: number };
  color?: string;
};
