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
      d="M18.79 24.29c.39.39 1.02.39 1.41 0l3.59-3.59a.994.994 0 0 0 0-1.41L20.2 15.7a.997.997 0 0 0-1.41 1.41L20.67 19H12c-.55 0-1 .45-1 1s.45 1 1 1h8.67l-1.88 1.88c-.39.39-.38 1.03 0 1.41ZM27 11H13a2 2 0 0 0-2 2v3c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1H14c-.55 0-1-.45-1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V13c0-1.1-.9-2-2-2Z"
    />
  </svg>
);

export const Exit = memo(forwardRef(SvgComponent));
