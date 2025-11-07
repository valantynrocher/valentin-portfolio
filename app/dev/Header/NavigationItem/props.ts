import { MouseEventHandler, PropsWithChildren } from "react";

export interface NavigationItemProps extends PropsWithChildren {
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
  classes?: {
    root?: string;
    link?: string;
  };
}
