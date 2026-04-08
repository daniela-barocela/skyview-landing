import { getWhatsAppUrl } from "./WhatsAppButton";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 font-display text-4xl text-foreground md:text-6xl lg:text-7xl">
          Profesionalizá
          <br />
          tu proyecto
        </h2>
        <p className="mb-12 font-body text-lg font-light text-foreground/70 md:text-xl">
          Concretá tus ideas con nosotros
        </p>
        <a
          href={getWhatsAppUrl("Hola! Quiero solicitar un presupuesto para el servicio de drones.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-foreground px-10 py-5 font-body text-sm font-medium uppercase tracking-[0.2em] text-foreground transition-all hover:bg-foreground hover:text-primary-foreground"
        >
          Solicitar presupuesto
        </a>
      </div>
    </section>
  );
};

export default CTASection;
