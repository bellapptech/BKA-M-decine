import { motion } from "framer-motion";
import { MessageCircle, PhoneCall, CheckCircle } from "lucide-react";

const WHATSAPP = "237670103624";

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
  "Thermothérapie",
  "Cryothérapie",
  "Sport thérapeutique assisté",
];

export default function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/bka4.jpeg"
          alt="BKA Médecine"
          className="h-full w-full object-cover opacity-25"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-32 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="mb-5 font-bold uppercase tracking-[0.35em] text-orange-500">
            BKA MÉDECINE TRADITIONNELLE CHINOISE
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            Votre santé,
            <span className="text-green-500"> notre priorité.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
            Prise en charge naturelle et thérapeutique des douleurs,
            troubles fonctionnels et pathologies chroniques grâce à la
            médecine traditionnelle chinoise, la rééducation, le sport
            thérapeutique et les soins assistés.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href={`https://wa.me/${WHATSAPP}?text=Bonjour%20BKA%2C%20je%20souhaite%20prendre%20rendez-vous.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-green-600 px-8 py-4 font-black text-white transition hover:scale-105 hover:bg-green-700"
            >
              <MessageCircle />
              WhatsApp
            </a>

            <a
              href="tel:+237692516213"
              className="inline-flex items-center gap-3 rounded-full border border-orange-500 bg-orange-500/10 px-8 py-4 font-black text-orange-400 transition hover:bg-orange-500 hover:text-white"
            >
              <PhoneCall />
              Appeler
            </a>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            <div className="rounded-3xl border border-green-500/20 bg-white/5 p-5">
              <h2 className="text-4xl font-black text-green-500">10+</h2>
              <p className="mt-2 text-sm text-neutral-400">
                Années d'expérience
              </p>
            </div>

            <div className="rounded-3xl border border-orange-500/20 bg-white/5 p-5">
              <h2 className="text-4xl font-black text-orange-500">500+</h2>
              <p className="mt-2 text-sm text-neutral-400">
                Patients accompagnés
              </p>
            </div>

            <div className="rounded-3xl border border-green-500/20 bg-white/5 p-5">
              <h2 className="text-4xl font-black text-green-500">100%</h2>
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
            alt="Soins BKA"
            className="rounded-[3rem] border border-green-500/20 shadow-2xl"
          />

          <div className="absolute -bottom-8 -left-8 rounded-[2rem] bg-white p-6 text-black shadow-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-600">
              Bien-être
            </p>
            <h3 className="mt-2 text-2xl font-black text-green-700">
              Corps & Esprit
            </h3>
          </div>
        </motion.div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 pb-24 md:grid-cols-2">
        <div className="rounded-[2rem] border border-green-500/20 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-3xl font-black text-green-500">
            Pathologies prises en charge
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {pathologies.map((item) => (
              <div key={item} className="flex items-center gap-3 text-neutral-200">
                <CheckCircle className="text-orange-500" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-orange-500/20 bg-white/5 p-8 backdrop-blur">
          <h2 className="text-3xl font-black text-orange-500">
            Protocoles de soins
          </h2>

          <div className="mt-6 grid gap-4">
            {protocoles.map((item) => (
              <div key={item} className="flex items-center gap-3 text-neutral-200">
                <CheckCircle className="text-green-500" size={20} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}