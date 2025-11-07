import Link from "next/link";
import { NavigationItemProps } from "./props";

const NavigationItemComponent = ({
  href,
  children,
  onClick,
  classes,
}: NavigationItemProps) => {
  return (
    <li className={classes?.root || undefined}>
      <Link
        href={href}
        onClick={onClick}
        className={`hover:text-accent text-lg md:text-sm lg:text-lg ${
          classes?.link || undefined
        }`}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavigationItemComponent;
