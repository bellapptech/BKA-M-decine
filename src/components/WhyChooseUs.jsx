import {
  CheckCircle,
  HeartPulse,
  Activity,
  ShieldPlus,
} from "lucide-react";

const pathologies = [
  "Lombalgies",
  "Hernies discales",
  "Mal de nerfs",
  "AVC",
  "HTA",
  "Arthrose",
  "Rhumatisme",
  "Goutte",
  "Fractures",
  "Douleurs articulaires",
];

const protocoles = [
  "Acupuncture",
  "Ventouses",
  "Électrostimulation",
  "Thermothérapie & Cryothérapie",
  "Sport thérapeutique assisté",
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="bg-black px-5 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.35em] text-orange-500">
            Pourquoi nous choisir
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-5xl">
            Une prise en charge complète
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            BKA Médecine combine médecine traditionnelle chinoise,
            techniques thérapeutiques modernes et accompagnement
            personnalisé pour améliorer durablement votre santé et
            votre mobilité.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-[2rem] border border-green-500/20 bg-white/5 p-8 backdrop-blur">
            <div className="mb-5 inline-flex rounded-2xl bg-green-500/10 p-4 text-green-500">
              <HeartPulse size={35} />
            </div>

            <h3 className="text-2xl font-black">
              Pathologies prises en charge
            </h3>

            <div className="mt-6 space-y-4">
              {pathologies.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-neutral-300"
                >
                  <CheckCircle
                    size={18}
                    className="text-orange-500"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-orange-500/20 bg-white/5 p-8 backdrop-blur">
            <div className="mb-5 inline-flex rounded-2xl bg-orange-500/10 p-4 text-orange-500">
              <Activity size={35} />
            </div>

            <h3 className="text-2xl font-black">
              Protocoles de soins
            </h3>

            <div className="mt-6 space-y-4">
              {protocoles.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-neutral-300"
                >
                  <CheckCircle
                    size={18}
                    className="text-green-500"
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-green-500/20 bg-white/5 p-8 backdrop-blur">
            <div className="mb-5 inline-flex rounded-2xl bg-green-500/10 p-4 text-green-500">
              <ShieldPlus size={35} />
            </div>

            <h3 className="text-2xl font-black">
              Accompagnement personnalisé
            </h3>

            <p className="mt-6 leading-8 text-neutral-300">
              Nous proposons un suivi thérapeutique adapté à chaque
              patient avec une approche naturelle visant à soulager
              les douleurs, restaurer la mobilité et améliorer la
              qualité de vie.
            </p>

            <div className="mt-8 rounded-2xl border border-orange-500/20 bg-black/40 p-5">
              <h4 className="text-lg font-bold text-orange-500">
                Objectif
              </h4>

              <p className="mt-3 text-neutral-400">
                Réduire la douleur, améliorer les mouvements et
                favoriser une récupération durable sans dépendance
                excessive aux médicaments.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}