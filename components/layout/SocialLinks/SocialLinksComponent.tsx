import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const SocialLinks = (props: {
  classes?: {
    root?: string;
    link?: string;
    icon?: string;
  };
}) => {
  const classes = {
    root: props.classes?.root || "",
    icon: props.classes?.icon || "",
    link: props.classes?.link || "",
  };
  return (
    <div className={classes.root + " flex gap-[15px] lg:gap-[30px]"}>
      <a
        href="https://www.linkedin.com/in/valentin-rocher/"
        target="_blank"
        className={
          classes.link +
          " pointer-events-auto flex h-6 w-6 items-center justify-center bg-[var(--bg-default)] lg:h-8 lg:w-8"
        }
      >
        <FaLinkedin
          size={16}
          className={
            classes.icon + " lg:size-[20px] text-[var(--text-primary)]"
          }
        />
      </a>
      <a
        href="https://github.com/valantynrocher"
        target="_blank"
        className={
          classes.link +
          " pointer-events-auto flex h-6 w-6 items-center justify-center bg-[var(--bg-default)] lg:h-8 lg:w-8"
        }
      >
        <FaGithub
          size={16}
          className={
            classes.icon + " lg:size-[20px] text-[var(--text-primary)]"
          }
        />
      </a>
      <a
        href="mailto:valentinrocher@mailo.com"
        className={
          classes.link +
          " pointer-events-auto flex h-6 w-6 items-center justify-center bg-[var(--bg-default)] lg:h-8 lg:w-8"
        }
      >
        <MdEmail
          size={16}
          className={
            classes.icon + " lg:size-[20px] text-[var(--text-primary)]"
          }
        />
      </a>
    </div>
  );
};

export default SocialLinks;
