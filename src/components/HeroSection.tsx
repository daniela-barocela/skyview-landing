import heroBg from "@/assets/hero-bg.jpg";
import { getWhatsAppUrl } from "./WhatsAppButton";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Vista aérea de Buenos Aires"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="mb-4 animate-fade-in text-sm font-light tracking-[0.3em] text-foreground/70 md:text-base">
          MAPADRONE
        </p>
        <h1 className="mb-6 animate-fade-in-up font-display text-5xl leading-none text-foreground md:text-7xl lg:text-8xl">
          Imágenes que elevan
          <br />
          tu proyecto
        </h1>
        <p className="mb-10 animate-fade-in-delay font-body text-lg font-light text-foreground/80 md:text-xl" style={{ opacity: 0 }}>
          Filmación y fotografía aérea en 4K en Buenos Aires
        </p>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="animate-fade-in-delay-2 inline-flex items-center gap-3 border border-foreground/30 bg-foreground/5 px-8 py-4 font-body text-sm font-medium uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-all hover:border-foreground hover:bg-foreground/10"
          style={{ opacity: 0 }}
        >
          Consultar por WhatsApp
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in">
        <div className="h-12 w-px bg-gradient-to-b from-transparent to-foreground/40" />
      </div>
    </section>
  );
};

export default HeroSection;
