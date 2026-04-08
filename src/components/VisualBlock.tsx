import visualBlock from "@/assets/visual-block.jpg";

const VisualBlock = () => {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      <img
        src={visualBlock}
        alt="Vista aérea panorámica"
        loading="lazy"
        width={1920}
        height={800}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="relative z-10 px-6 text-center">
        <h2 className="font-display text-4xl text-foreground md:text-6xl lg:text-7xl">
          Perspectivas que
          <br />
          transforman
        </h2>
      </div>
    </section>
  );
};

export default VisualBlock;
