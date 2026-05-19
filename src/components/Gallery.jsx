import { motion } from "framer-motion";

const gallery = [
  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
  "/assets/bka2.jpeg",
  "/assets/bka3.jpeg",
  "/assets/bka4.jpeg",
  "/assets/bka5.jpeg",
  "/assets/bka6.jpeg",
  "/assets/bka7.jpeg",
  "/assets/bka8.jpeg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="bg-black px-5 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-red-500">
            Galerie
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            BKA en images
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Découvrez quelques images de soins, formations,
            rééducation, arts martiaux et accompagnement.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[2rem]"
            >
              <img
                src={image}
                alt="BKA Gallery"
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden rounded-[2rem] border border-white/10">
          <video
            className="w-full"
            autoPlay
            muted
            loop
            playsInline
            controls
          >
            <source src="/assets/vid1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}