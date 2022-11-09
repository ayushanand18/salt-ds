import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type FlagSolidIconProps = IconProps;

export const FlagSolidIcon = forwardRef<SVGSVGElement, FlagSolidIconProps>(
  function FlagSolidIcon(props: FlagSolidIconProps, ref) {
    return (
      <Icon
        data-testid="FlagSolidIcon"
        aria-label="flag solid"
        viewBox="0 0 12 12"
        ref={ref}
        {...props}
      >
        <path d="M5.148.129A7.463 7.463 0 0 0 3.753 0C2.8 0 2.132.07 1.749.211c-.375.141-.578.223-.609.246L.999.551V12h1V7.184a3.75 3.75 0 0 1 .512-.176c.219-.07.637-.105 1.254-.105.437 0 .867.066 1.289.199.43.125.863.234 1.301.328.445.094.902.184 1.371.27.469.078.953.117 1.453.117.297 0 .578-.016.844-.047s.508-.059.727-.082c.125-.016.34-.047.644-.094a36.8 36.8 0 0 0 .605-.094V.504c-.094.016-.293.043-.605.082-.305.031-.52.055-.644.07-.227.023-.477.055-.75.094a7.702 7.702 0 0 1-.867.047c-.469 0-.922-.047-1.359-.141-.43-.094-.859-.184-1.289-.27-.437-.094-.883-.18-1.336-.258z" />
      </Icon>
    );
  }
);
