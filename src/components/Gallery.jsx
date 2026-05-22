import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

const images = [
  "/assets/bkagallery.jpeg",
  "/assets/bkagallery1.jpeg",
  "/assets/bkagallery2.jpeg",
  "/assets/bkagallery3.jpeg",
  "/assets/bkagallery4.jpeg",
  "/assets/bkagallery5.jpeg",
  "/assets/bkagallery6.jpeg",
  "/assets/bkagallery7.jpeg",
  "/assets/bkagallery8.jpeg",
  "/assets/bkagallery9.jpeg",
  "/assets/bkagallery10.jpeg",
  "/assets/bkagallery11.jpeg",
  "/assets/bkagallery12.jpeg",
  "/assets/bkagallery13.jpeg",
  "/assets/bkagallery14.jpeg",
];

export default function Galerie() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="galerie"
      className="relative overflow-hidden bg-black px-5 py-24 text-white"
    >
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-bold uppercase tracking-[0.35em] text-orange-500">
            Galerie
          </p>

          <h2 className="mt-5 text-4xl font-black md:text-6xl">
            Notre cabinet, nos soins et nos activités
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-400">
            Découvrez l’univers BKA : médecine traditionnelle chinoise,
            rééducation, ventouses, produits naturels, Kung-Fu et accompagnement.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-green-500/20 bg-white/5 p-3 shadow-2xl backdrop-blur">
            <div className="relative h-[360px] overflow-hidden rounded-[2rem] bg-black sm:h-[500px] lg:h-[620px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={images[current]}
                  initial={{ opacity: 0, x: 80, scale: 0.96 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -80, scale: 0.96 }}
                  transition={{ duration: 0.65 }}
                  className="absolute inset-0"
                >
                  <img
                    src={images[current]}
                    alt={`Galerie BKA ${current + 1}`}
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 rounded-2xl bg-black/60 px-4 py-3 backdrop-blur">
                    <Images className="text-orange-500" />
                    <div>
                      <h3 className="font-black text-white">BKA en images</h3>
                      <p className="text-sm text-neutral-300">
                        Photo {current + 1} / {images.length}
                      </p>
                    </div>
                  </div>

                  <div className="hidden rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-neutral-200 sm:block">
                    Slide automatique
                  </div>
                </div>
              </div>

              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white backdrop-blur transition hover:bg-orange-500 sm:left-5 sm:p-4"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-3 text-white backdrop-blur transition hover:bg-green-600 sm:right-5 sm:p-4"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${
                  current === index
                    ? "w-10 bg-orange-500"
                    : "w-2.5 bg-white/30 hover:bg-green-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}