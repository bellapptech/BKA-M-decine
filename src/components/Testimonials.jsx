import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean Claude",
    text: "Très satisfait des soins et du suivi. Les massages thérapeutiques m’ont énormément aidé.",
  },
  {
    name: "Brigitte M.",
    text: "Professionnalisme, accueil chaleureux et véritable amélioration de mon état physique.",
  },
  {
    name: "Patrick N.",
    text: "Excellent centre pour le Tai-Chi, le Kung-Fu et le bien-être général.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-red-600">
            Témoignages
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Ce que disent nos clients
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-[2rem] bg-neutral-100 p-8 shadow-lg"
            >
              <div className="mb-5 flex gap-1 text-red-500">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>

              <p className="leading-8 text-neutral-600">
                “{item.text}”
              </p>

              <h3 className="mt-6 text-lg font-black">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}