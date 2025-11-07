import Button from "@/components/ui/Button";
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
      <Button
        component="a"
        color="primary"
        href="https://www.linkedin.com/in/valentin-rocher/"
        target="_blank"
        withPadding={false}
        className={
          classes.link +
          "flex text-center items-center justify-center h-6! w-6! lg:h-8! lg:w-8!"
        }
      >
        <FaLinkedin size={16} />
      </Button>
      <Button
        component="a"
        color="primary"
        href="https://github.com/valantynrocher"
        target="_blank"
        withPadding={false}
        className={
          classes.link +
          "flex text-center items-center justify-center h-6! w-6! lg:h-8! lg:w-8!"
        }
      >
        <FaGithub size={16} />
      </Button>
      <Button
        component="a"
        color="primary"
        href="mailto:valentinrocher@mailo.com"
        target="_blank"
        withPadding={false}
        className={
          classes.link +
          "flex text-center items-center justify-center h-6! w-6! lg:h-8! lg:w-8!"
        }
      >
        <MdEmail size={16} />
      </Button>
    </div>
  );
};

export default SocialLinks;
