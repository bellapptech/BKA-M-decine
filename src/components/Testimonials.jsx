import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Hortense Kamba",
    text: "Très performant, grâce à lui je ne bois plus d’antidouleur. Les douleurs ont disparu car je souffrais de la hernie discale et ma sciatique a totalement disparu. Très bon thérapeute, n’hésitez pas à passer dans son cabinet.",
  },
  {
    name: "Fredd Moses",
    text: "Très performant. Il m’a remis sur pied alors que je souffrais atrocement d’une hernie discale avec pincement du nerf sciatique. Aujourd’hui j’ai retrouvé la motricité de la jambe. Les douleurs ont considérablement diminué.",
  },
  {
    name: "Calvin Ngouana",
    text: "J’ai eu l’occasion de vous rencontrer au séminaire pour la première fois et seulement en attendant on guérit ! Vous avez très longue route. Que Dieu vous bénisse.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-black px-5 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-bold uppercase tracking-[0.35em] text-orange-500">
            Témoignages
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Ce que disent nos patients
          </h2>

          <p className="mt-6 text-neutral-400">
            Quelques retours réels des personnes accompagnées par BKA Médecine.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="rounded-[2rem] border border-green-500/20 bg-white/5 p-8 shadow-xl backdrop-blur transition hover:-translate-y-2 hover:border-orange-500/40"
            >
              <div className="mb-5 flex gap-1 text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="leading-8 text-neutral-300">
                “{item.text}”
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <h3 className="font-black text-green-500">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  Patient accompagné
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}