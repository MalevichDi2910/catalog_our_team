import * as React from "react";
import { SVGProps, Ref, forwardRef, memo } from "react";
const SvgComponent = (
  props: SVGProps<SVGSVGElement> & { stroke?: string },
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={28}
    fill="none"
    ref={ref}
    {...props}
  >
    <rect width={30} height={28} fill="#F8F8F8" rx={4} />
    <path
      stroke="var(--color-primary-300)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.85 8A3.848 3.848 0 0 0 8 11.845c0 3.846 4.55 7.342 7 8.155 2.45-.813 7-4.309 7-8.155A3.848 3.848 0 0 0 18.15 8 3.847 3.847 0 0 0 15 9.634 3.844 3.844 0 0 0 11.85 8Z"
    />
  </svg>
);
export const Like = memo(forwardRef(SvgComponent));
