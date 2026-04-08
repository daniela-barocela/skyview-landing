import droneEquipment from "@/assets/drone-equipment.jpg";

const DifferentialSection = () => {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-light uppercase tracking-[0.3em] text-muted-foreground">
              Diferencial
            </p>
            <h2 className="mb-8 font-display text-3xl text-foreground md:text-5xl">
              Equipamiento versátil
            </h2>
            <div className="space-y-6">
              <div className="border-l-2 border-foreground/20 pl-6">
                <p className="font-body text-lg font-light leading-relaxed text-foreground/80">
                  Contamos con diferentes equipos de vuelo para adaptarnos a cada necesidad.
                </p>
              </div>
              <div className="border-l-2 border-foreground/20 pl-6">
                <p className="font-body text-lg font-light leading-relaxed text-foreground/80">
                  También ofrecemos cámara en mano para ampliar los recursos visuales de cada proyecto.
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={droneEquipment}
              alt="Equipamiento profesional de drone"
              loading="lazy"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialSection;
