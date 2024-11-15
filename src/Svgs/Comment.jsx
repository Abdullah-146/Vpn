import React from "react";

const Comment = () => {
  return (
    <div className="flex-1 ">
      <svg
      width={1015}
      height={850}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_770_4132)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M329.942 596.718C302.117 596.718 278.512 576.288 274.521 548.75L250.753 384.75C245.858 350.979 272.049 320.718 306.174 320.718H374.539C398.485 320.718 417.716 301.757 431.753 282.358C447.376 260.766 472.784 246.718 501.473 246.718C530.162 246.718 555.57 260.766 571.193 282.358C585.23 301.757 604.461 320.718 628.406 320.718H708.772C742.896 320.718 769.087 350.979 764.193 384.75L740.425 548.75C736.434 576.288 712.829 596.718 685.004 596.718H329.942Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_770_4132"
          x="0.163086"
          y="0.718262"
          width="1014.62"
          height="850"
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
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="125" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.70976 0 0 0 0 0.71187 0 0 0 0 0.7625 0 0 0 0.24 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_770_4132"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_770_4132"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
    </div>
  );
};

export default Comment;
