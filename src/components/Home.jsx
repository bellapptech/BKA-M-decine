import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";

const WHATSAPP = "237670103624";

export default function Home() {
  return (
    <section
      id="home"
      className="luxury-bg relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/bka4.jpeg"
          alt="BKA"
          className="h-full w-full object-cover opacity-30"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pt-28 md:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-5 font-bold uppercase tracking-[0.4em] text-red-500">
            BKA MÉDECINE TRADITIONNELLE CHINOISE
          </p>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Votre santé,
            <span className="text-red-600"> notre priorité.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
            Massage thérapeutique chinois, rééducation fonctionnelle,
            Tai-Chi, Kung-Fu, accompagnement et produits naturels
            pour le bien-être du corps et de l’esprit.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 font-black text-white transition hover:scale-105 hover:bg-red-700"
            >
              <MessageCircle />
              WhatsApp
            </a>

            <a
              href="tel:+237692516213"
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 font-black text-white backdrop-blur transition hover:bg-white hover:text-black"
            >
              <PhoneCall />
              Appeler
            </a>

          </div>

          <div className="mt-16 grid grid-cols-3 gap-6">

            <div>
              <h2 className="text-4xl font-black text-red-500">
                10+
              </h2>

              <p className="mt-2 text-sm text-neutral-400">
                Années d'expérience
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-red-500">
                500+
              </h2>

              <p className="mt-2 text-sm text-neutral-400">
                Patients accompagnés
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-black text-red-500">
                100%
              </h2>

              <p className="mt-2 text-sm text-neutral-400">
                Approche naturelle
              </p>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden md:block"
        >
          <img
            src="/assets/bka2.jpeg"
            alt="BKA"
            className="rounded-[3rem] border border-white/10 shadow-2xl"
          />

          <div className="absolute -bottom-8 -left-8 rounded-[2rem] bg-white p-6 shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-600">
              Bien-être
            </p>

            <h3 className="mt-2 text-2xl font-black">
              Corps & Esprit
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
}