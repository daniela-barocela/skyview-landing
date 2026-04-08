import { getWhatsAppUrl } from "./WhatsAppButton";

const FooterSection = () => {
  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-display text-2xl tracking-wider text-foreground">MAPADRONE</p>
          <p className="mt-1 font-body text-sm text-muted-foreground">Buenos Aires, Argentina</p>
        </div>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          WhatsApp: +54 9 11 0000-0000
        </a>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} MAPADRONE. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
