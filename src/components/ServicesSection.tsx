import serviceInmuebles from "@/assets/service-inmuebles.jpg";
import serviceComercios from "@/assets/service-comercios.jpg";
import serviceCine from "@/assets/service-cine.jpg";
import serviceEventos from "@/assets/service-eventos.jpg";
import serviceVideoclips from "@/assets/service-videoclips.jpg";
import serviceObras from "@/assets/service-obras.jpg";

const services = [
  { title: "Inmuebles", image: serviceInmuebles },
  { title: "Comercios", image: serviceComercios },
  { title: "Cine", image: serviceCine },
  { title: "Eventos", image: serviceEventos },
  { title: "Video Clips", image: serviceVideoclips },
  { title: "Obras en Construcción", image: serviceObras },
];

const ServicesSection = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-center text-sm font-light uppercase tracking-[0.3em] text-muted-foreground">
          Servicios
        </p>
        <h2 className="mb-16 text-center font-display text-3xl text-foreground md:text-5xl">
          Lo que hacemos
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group relative overflow-hidden rounded-lg">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={`Servicio de drone para ${service.title}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/90 via-background/20 to-transparent p-6">
                <h3 className="font-display text-2xl text-foreground">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
