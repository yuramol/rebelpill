import type { IconCommonProps } from '../types';

export const PlusGradient = (style: IconCommonProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M10.5 3C10.8452 3 11.125 3.27982 11.125 3.625V9.875H17.375C17.7202 9.875 18 10.1548 18 10.5C18 10.8452 17.7202 11.125 17.375 11.125H11.125V17.375C11.125 17.7202 10.8452 18 10.5 18C10.1548 18 9.875 17.7202 9.875 17.375V11.125H3.625C3.27982 11.125 3 10.8452 3 10.5C3 10.1548 3.27982 9.875 3.625 9.875H9.875V3.625C9.875 3.27982 10.1548 3 10.5 3Z"
      fill="url(#paint0_linear_554_452)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_554_452"
        x1="18"
        y1="10.3333"
        x2="3.36463"
        y2="12.6434"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.289592" stop-color="#FC5B00" />
        <stop offset="0.959691" stop-color="#FF010E" />
      </linearGradient>
    </defs>
  </svg>
);
