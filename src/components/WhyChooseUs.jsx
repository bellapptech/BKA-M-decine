import { motion } from "framer-motion";
import { BadgeCheck, Leaf, Users, Dumbbell } from "lucide-react";

const points = [
  {
    title: "Expertise professionnelle",
    icon: BadgeCheck,
    text: "Un accompagnement sérieux basé sur l’expérience, la discipline et le suivi personnalisé.",
  },
  {
    title: "Approche naturelle",
    icon: Leaf,
    text: "Médecine traditionnelle chinoise, produits naturels et techniques douces pour le bien-être.",
  },
  {
    title: "Suivi personnalisé",
    icon: Users,
    text: "Chaque personne reçoit une attention adaptée selon ses besoins et son objectif.",
  },
  {
    title: "Santé & arts martiaux",
    icon: Dumbbell,
    text: "Une combinaison unique entre soins thérapeutiques, rééducation, Kung-Fu et Tai-Chi.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-neutral-950 px-5 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-red-500">
            Pourquoi nous choisir
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Une prise en charge complète
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {points.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-2 hover:bg-white/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600">
                  <Icon />
                </div>

                <h3 className="text-xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-neutral-400">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}