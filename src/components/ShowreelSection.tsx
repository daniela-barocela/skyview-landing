const showreelSrc = `${import.meta.env.BASE_URL}showreel.mp4`;

const ShowreelSection = () => {
  return (
    <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-center text-sm font-light uppercase tracking-[0.3em] text-muted-foreground">
          Showreel
        </p>
        <h2 className="mb-12 text-center font-display text-3xl text-foreground md:text-5xl">
          Capturamos perspectivas únicas con
          <br className="hidden md:block" />
          tecnología de vuelo estabilizado
        </h2>
        <div className="video-container">
          <video
            className="absolute inset-0 h-full w-full object-contain bg-black"
            controls
            playsInline
            preload="metadata"
            aria-label="Showreel MAPADRONE"
          >
            <source src={showreelSrc} type="video/mp4" />
            Tu navegador no reproduce video HTML5.
          </video>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;
