import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    ref={ref}
    {...props}
  >
    <title>{"ionicons-v5-i"}</title>
    <path
      d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112Z"
      style={{
        fill: "none",
        stroke: "#808185",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32,
      }}
    />
    <circle
      cx={256}
      cy={256}
      r={80}
      style={{
        fill: "none",
        stroke: "#808185",
        strokeMiterlimit: 10,
        strokeWidth: 32,
      }}
    />
  </svg>
);

export const EyeOutline = memo(forwardRef(SvgComponent));
