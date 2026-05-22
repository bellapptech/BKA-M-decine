import { motion } from "framer-motion";
import {
  Activity,
  Dumbbell,
  Flame,
  Snowflake,
  Zap,
  HandHeart,
  ShieldPlus,
  Wind,
  CircleDot,
} from "lucide-react";

const services = [
  {
    icon: HandHeart,
    title: "Massage thérapeutique chinois",
    text: "Soulagement des douleurs musculaires, tensions, fatigue et blocages corporels.",
  },
  {
    icon: CircleDot,
    title: "Acupuncture",
    text: "Stimulation des points énergétiques pour favoriser l’équilibre et la récupération.",
  },
  {
    icon: Wind,
    title: "Ventouses",
    text: "Technique traditionnelle pour améliorer la circulation et libérer les tensions.",
  },
  {
    icon: Zap,
    title: "Électrostimulation",
    text: "Activation musculaire assistée pour accompagner la rééducation fonctionnelle.",
  },
  {
    icon: Flame,
    title: "Thermothérapie",
    text: "Utilisation de la chaleur pour détendre les muscles et réduire certaines douleurs.",
  },
  {
    icon: Snowflake,
    title: "Cryothérapie",
    text: "Application du froid pour aider à calmer l’inflammation et les douleurs.",
  },
  {
    icon: Dumbbell,
    title: "Sport thérapeutique assisté",
    text: "Exercices encadrés pour restaurer la mobilité, la force et l’équilibre.",
  },
  {
    icon: Activity,
    title: "Rééducation fonctionnelle",
    text: "Accompagnement progressif après douleurs, AVC, fracture ou perte de mobilité.",
  },
  {
    icon: ShieldPlus,
    title: "Suivi personnalisé",
    text: "Programme adapté selon votre état, vos douleurs et vos objectifs de récupération.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-black px-5 py-24 text-white">
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-bold uppercase tracking-[0.35em] text-orange-500">
            Nos services
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Des soins complets pour votre bien-être
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Une approche naturelle, moderne et personnalisée pour soulager les douleurs,
            améliorer la mobilité et accompagner la récupération.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur transition hover:-translate-y-2 hover:border-orange-500/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-orange-500/10 opacity-0 transition group-hover:opacity-100"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex rounded-2xl bg-green-500/10 p-4 text-green-500 transition group-hover:bg-orange-500/10 group-hover:text-orange-500">
                    <Icon size={36} />
                  </div>

                  <h3 className="text-2xl font-black">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-8 text-neutral-400">
                    {service.text}
                  </p>

                  <div className="mt-8 h-1 w-16 rounded-full bg-orange-500 transition group-hover:w-28 group-hover:bg-green-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}