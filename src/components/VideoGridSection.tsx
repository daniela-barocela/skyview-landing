const videos = [
  { title: "Toma cenital urbana", description: "Buenos Aires desde las alturas" },
  { title: "Seguimiento dinámico", description: "Tracking shots profesionales" },
  { title: "Reveal cinematográfico", description: "Tomas de apertura dramáticas" },
];

const VideoGridSection = () => {
  return (
    <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-light uppercase tracking-[0.3em] text-muted-foreground">
          Portfolio
        </p>
        <h2 className="mb-16 text-center font-display text-3xl text-foreground md:text-5xl">
          Nuestro trabajo
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {videos.map((video) => (
            <div key={video.title}>
              <div className="video-container mb-4">
                <div className="video-placeholder">
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/20">
                      <svg className="ml-0.5 h-6 w-6 text-foreground/60" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <span className="text-xs text-muted-foreground">Reemplazar</span>
                  </div>
                </div>
              </div>
              <h3 className="font-display text-xl text-foreground">{video.title}</h3>
              <p className="mt-1 font-body text-sm text-muted-foreground">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGridSection;
