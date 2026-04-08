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
          {/* Reemplazar src con URL del video real */}
          <div className="video-placeholder">
            <div className="flex flex-col items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border border-foreground/20">
                <svg className="ml-1 h-8 w-8 text-foreground/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-sm text-muted-foreground">Video showreel — Reemplazar con video real</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;
