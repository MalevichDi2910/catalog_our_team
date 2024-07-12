import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    ref={ref}
    {...props}
  >
    <path
      fill="#F8F8F8"
      d="M22.837 27.001a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 1 1 1.54 1.28l-4.47 5.36 4.32 5.36a1 1 0 0 1-.78 1.64Z"
    />
  </svg>
);

export const Back = memo(forwardRef(SvgComponent));
