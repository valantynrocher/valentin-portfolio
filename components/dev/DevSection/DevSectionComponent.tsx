import { DevSectionProps } from "./props";

const DevSectionComponent = ({
  id,
  title,
  slotProps,
  classes,
  children,
}: DevSectionProps) => {
  return (
    <section
      id={id}
      className={`relative pt-20 ${classes?.section || ""}`}
      {...slotProps?.section}
    >
      <div className="px-14 lg:px-10 xl:px-20 flex flex-col h-full justify-center">
        {title ? (
          <h2 className="text-3xl text-center lg:text-4xl font-title mb-14 lg:mb-10 text-primary">
            {title}
          </h2>
        ) : null}

        {children}
      </div>
    </section>
  );
};

export default DevSectionComponent;
