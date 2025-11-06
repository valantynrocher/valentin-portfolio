import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";

export interface DevSectionProps extends PropsWithChildren {
  id: string;
  title?: string;
  slotProps?: {
    section: Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
      "id" | "className"
    >;
  };
  classes?: {
    section?: string;
  };
}
