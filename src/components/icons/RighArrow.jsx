import React from "react";

const RighArrow = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width="70"
      height="71"
      viewBox="0 0 70 71"
      fill="none"
    >
      <g filter="url(#filter0_d_8_1776)">
        <path
          d="M35 56.9131C46.598 56.9131 56 47.5111 56 35.9131C56 24.3151 46.598 14.9131 35 14.9131C23.402 14.9131 14 24.3151 14 35.9131C14 47.5111 23.402 56.9131 35 56.9131Z"
          fill="white"
        />
      </g>
      <path
        d="M41.986 35.5789L38.35 30.7879C38.2972 30.7053 38.2244 30.6374 38.1384 30.5903C38.0525 30.5432 37.956 30.5186 37.858 30.5186C37.76 30.5186 37.6635 30.5432 37.5775 30.5903C37.4915 30.6374 37.4188 30.7053 37.366 30.7879C37.2339 30.979 37.1632 31.2057 37.1632 31.4379C37.1632 31.6702 37.2339 31.8969 37.366 32.0879L39.807 35.3049H25.075C24.8745 35.3619 24.6981 35.4827 24.5725 35.649C24.4469 35.8153 24.3789 36.018 24.3789 36.2264C24.3789 36.4348 24.4469 36.6376 24.5725 36.8039C24.6981 36.9702 24.8745 37.091 25.075 37.1479H39.809L37.368 40.3649C37.2359 40.556 37.1652 40.7827 37.1652 41.0149C37.1652 41.2472 37.2359 41.4739 37.368 41.6649C37.4208 41.7475 37.4935 41.8155 37.5795 41.8625C37.6655 41.9096 37.762 41.9343 37.86 41.9343C37.958 41.9343 38.0545 41.9096 38.1404 41.8625C38.2264 41.8155 38.2992 41.7475 38.352 41.6649L41.988 36.8739C42.1185 36.6831 42.1882 36.4573 42.1879 36.2261C42.1875 35.9949 42.1171 35.7693 41.986 35.5789Z"
        fill="#616161"
      />
      <defs>
        <filter
          id="filter0_d_8_1776"
          x="0"
          y="0.913086"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="7" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.137255 0 0 0 0 0.184314 0 0 0 0 0.619608 0 0 0 0.11 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_8_1776"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_8_1776"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default RighArrow;
