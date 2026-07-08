import { MapPin, ShieldCheck, HeartPulse } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">
        
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
        
          <img
            src="/assets/bka4.jpeg"
            alt="BKA"
            className="mt-10 h-72 w-full rounded-3xl object-cover shadow-xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-red-600">
            À propos
          </p>

          <h2 className="text-3xl font-black leading-tight text-neutral-950 md:text-5xl">
            Une approche naturelle pour renforcer le corps et l’esprit.
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            BKA Médecine Traditionnelle Chinoise accompagne les personnes
            vers un meilleur équilibre grâce aux soins thérapeutiques,
            aux pratiques traditionnelles chinoises, aux arts martiaux
            et aux produits naturels.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">

            <div className="rounded-3xl bg-neutral-100 p-6">
              <HeartPulse className="mb-4 text-red-600" />

              <h3 className="text-lg font-black">
                Bien-être & Santé
              </h3>

              <p className="mt-2 text-sm leading-7 text-neutral-600">
                Soins thérapeutiques, récupération physique,
                massage et accompagnement personnalisé.
              </p>
            </div>

            <div className="rounded-3xl bg-black p-6 text-white">
              <ShieldCheck className="mb-4 text-red-500" />

              <h3 className="text-lg font-black">
                Discipline & Force
              </h3>

              <p className="mt-2 text-sm leading-7 text-neutral-300">
                Kung-Fu, Tai-Chi et formation pour la maîtrise du corps,
                de l’énergie et de l’esprit.
              </p>
            </div>

          </div>

          <div className="mt-8 flex items-center gap-4 rounded-3xl border border-neutral-200 p-5">
            <MapPin className="text-red-600" />

            <div>
              <h4 className="font-black">
                Adresse
              </h4>

              <p className="text-neutral-600">
                Entrée Campus 2, Ndogbong, Cameroun
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}