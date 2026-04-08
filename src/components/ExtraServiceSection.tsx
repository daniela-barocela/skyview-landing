import editing from "@/assets/editing.jpg";

const ExtraServiceSection = () => {
  return (
    <section className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 overflow-hidden rounded-lg lg:order-1">
            <img
              src={editing}
              alt="Edición de video profesional"
              loading="lazy"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-muted-foreground">
              Servicio adicional
            </p>
            <h2 className="mb-6 font-display text-3xl text-foreground md:text-5xl">
              Edición profesional
            </h2>
            <p className="font-body text-lg font-light leading-relaxed text-foreground/80">
              Diseño y edición de video horizontal y vertical para redes sociales.
              Adaptamos tu contenido a cada plataforma para maximizar el impacto visual.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraServiceSection;
