const WatchButtonIcon = () => (
  <svg
    width={100}
    height={100}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_16_1)">
      <g filter="url(#filter1_d_16_1)">
        <circle cx={98} cy={80} r={40} fill="white" />
      </g>
      <path
        d="M112.575 79.8097C113.221 80.1983 113.221 81.135 112.575 81.5236L91.5154 94.1891C90.8489 94.5899 90 94.1099 90 93.3321L90 68.0012C90 67.2235 90.8489 66.7434 91.5154 67.1443L112.575 79.8097Z"
        fill="#23BDEE"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_16_1"
        x={54}
        y={40}
        width={88}
        height={88}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_16_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_16_1"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_16_1"
        x={0}
        y={0}
        width={200}
        height={200}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={20} />
        <feGaussianBlur stdDeviation={30} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.239854 0 0 0 0 0.607896 0 0 0 0 0.725 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_16_1"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_16_1"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default WatchButtonIcon;
