import { forwardRef } from "react";

import { Icon, IconProps } from "../icon";

export type NotificationSolidIconProps = IconProps;

export const NotificationSolidIcon = forwardRef<
  SVGSVGElement,
  NotificationSolidIconProps
>(function NotificationSolidIcon(props: NotificationSolidIconProps, ref) {
  return (
    <Icon
      data-testid="NotificationSolidIcon"
      aria-label="notification solid"
      viewBox="0 0 12 12"
      ref={ref}
      {...props}
    >
      <path d="M.996 8.004c.234-.094.434-.309.598-.645.172-.336.309-.789.41-1.359V3c0-.414.078-.801.234-1.16.156-.367.367-.684.633-.949.273-.273.594-.492.961-.656A2.966 2.966 0 0 1 5.004.001h1.992c.414 0 .805.078 1.172.234.367.164.684.383.949.656.273.266.488.582.645.949.156.359.234.746.234 1.16v3.012l.047.211c.101.508.23.91.387 1.207.164.289.355.48.574.574H12V9H0v-.996h.996zM6 12c-.414 0-.77-.137-1.066-.41a1.273 1.273 0 0 1-.434-.973v-.609h3v.61c0 .383-.148.707-.445.973-.289.274-.641.41-1.055.41z" />
    </Icon>
  );
});
