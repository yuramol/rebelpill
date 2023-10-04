interface IconArrowRightProps {
  class?: string;
}

export default (props: IconArrowRightProps) => {
  const { class: className } = props;
  return (
    <svg
      width="62"
      height="16"
      viewBox="0 0 62 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class={className}
    >
      <path
        d="M61.2071 8.70711C61.5976 8.31658 61.5976 7.68342 61.2071 7.29289L54.8431 0.928932C54.4526 0.538408 53.8195 0.538408 53.4289 0.928932C53.0384 1.31946 53.0384 1.95262 53.4289 2.34315L59.0858 8L53.4289 13.6569C53.0384 14.0474 53.0384 14.6805 53.4289 15.0711C53.8195 15.4616 54.4526 15.4616 54.8431 15.0711L61.2071 8.70711ZM0.5 9H60.5V7H0.5V9Z"
        fill="url(#paint0_angular_554_227)"
      />
      <defs>
        <radialGradient
          id="paint0_angular_554_227"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24.163 8.50138) rotate(178.712) scale(22.0569 0.388259)"
        >
          <stop offset="0.192908" stop-color="#FF5C00" />
          <stop offset="0.221469" stop-color="#FF010E" />
          <stop offset="0.285763" stop-color="#FC5B00" />
          <stop offset="0.672506" stop-color="#FF5C00" />
          <stop offset="0.698395" stop-color="#FF000D" />
        </radialGradient>
      </defs>
    </svg>
  );
};
