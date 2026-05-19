import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Dumbbell,
  Leaf,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Médecine Traditionnelle Chinoise",
    icon: Stethoscope,
    desc: "Soins naturels pour l’équilibre du corps, la prévention et le bien-être global.",
  },
  {
    title: "Massage Thérapeutique Chinois",
    icon: HeartPulse,
    desc: "Massage pour soulager les douleurs, améliorer la circulation et détendre le corps.",
  },
  {
    title: "Rééducation Fonctionnelle",
    icon: ShieldCheck,
    desc: "Accompagnement pour retrouver mobilité, force, posture et capacité physique.",
  },
  {
    title: "Kung-Fu",
    icon: Dumbbell,
    desc: "Formation en arts martiaux pour la discipline, la force et la maîtrise de soi.",
  },
  {
    title: "Tai-Chi",
    icon: Leaf,
    desc: "Pratique douce pour l’équilibre, la respiration, la concentration et l’énergie.",
  },
  {
    title: "Formation & Coaching",
    icon: Sparkles,
    desc: "Encadrement personnalisé pour sportifs, débutants, élèves et passionnés.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-100 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-red-600">
            Nos services
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Soins, discipline et bien-être
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/30 transition group-hover:scale-110"  >
                  <Icon />
                </div>

                <h3 className="text-xl font-black text-neutral-950">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}