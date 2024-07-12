import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={""}
    height={""}
    viewBox={"0 0 220 220"}
    fill="none"
    ref={ref}
    {...props}
  >
    <g filter="url(#a)">
      <rect width={24} height={24} x={10} y={8} fill="#4C4C4C" rx={4} />
      <g fill="#fff" clipPath="url(#b)">
        <path d="M26.667 25.333h-9.334a.667.667 0 1 0 0 1.334h9.334a.666.666 0 1 0 0-1.334ZM17.333 24h.06l2.78-.253c.305-.03.59-.165.807-.38l6-6a1.28 1.28 0 0 0-.047-1.807l-1.826-1.827a1.333 1.333 0 0 0-1.774-.046l-6 6c-.215.217-.35.502-.38.806l-.286 2.78a.667.667 0 0 0 .666.727Zm6.847-9.333 1.82 1.82-1.333 1.3L22.88 16l1.3-1.333Zm-5.933 5.94L22 16.88l1.8 1.8-3.733 3.733-2 .187.18-1.993Z" />
      </g>
    </g>
    <defs>
      <clipPath id="b">
        <path fill="#fff" d="M14 12h16v16H14z" />
      </clipPath>
      <filter
        id="a"
        width={44}
        height={44}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={2} />
        <feGaussianBlur stdDeviation={5} />
        <feColorMatrix values="0 0 0 0 0.429167 0 0 0 0 0.429167 0 0 0 0 0.429167 0 0 0 0.25 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5918_2450"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_5918_2450"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export const Edit = memo(forwardRef(SvgComponent));
