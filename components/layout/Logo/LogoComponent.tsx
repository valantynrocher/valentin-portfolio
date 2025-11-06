const LogoComponent = ({ className = "" }: { className?: string }) => (
  <h2
    className={
      className + " text-2xl lg:text-3xl font-title text-[var(--bg-default)]"
    }
  >
    Valentin
    <br />
    Rocher
  </h2>
);

export default LogoComponent;
