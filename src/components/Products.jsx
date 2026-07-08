import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "237670103624";

const products = [
  {
    name: "Bio Gastric",
    image: "/assets/bkaproduct1.jpeg",
    desc: "Produit naturel BKA disponible pour accompagner le bien-être digestif.",
  },
  {
    name: "Thé Naturel",
    image: "/assets/bkaproduct2.jpeg",
    desc: "Mélange naturel à base de plantes pour soutenir l’équilibre du corps.",
  },
   {
    name: "Calcium Adulte Bio",
    image: "/assets/bkaproductnew.jpeg",
    desc: "naturel à base de plantes pour soutenir l’équilibre du corps.",
  },
  {
    name: "Arthrose / Rhumatisme / Goutte",
    image: "/assets/calciumadultbio.jpeg",
    desc: "Formule naturelle indiquée pour accompagner les douleurs articulaires, l’arthrose, le rhumatisme et la goutte.",
  },
  {
    name: "Nerf Sciatique / Crampes",
    image: "/assets/nerfsciantique.jpeg",
    desc: "Solution naturelle destinée à accompagner les douleurs du nerf sciatique, les crampes et les tensions nerveuses.",
  },
  {
    name: "Formules Traditionnelles",
    image: "/assets/product.jpeg",
    desc: "Découvrez notre thé a 42 vertus exceptionnelles une solution naturelle disponible sur demande selon vos besoins",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="font-bold uppercase tracking-[0.3em] text-red-600">
            Nos produits
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Produits naturels BKA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-600">
            Commandez directement via WhatsApp et recevez plus d’informations.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[2rem] bg-white shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-7">
                <h3 className="text-2xl font-black text-neutral-950">
                  {product.name}
                </h3>

                <p className="mt-3 leading-7 text-neutral-600">
                  {product.desc}
                </p>

                <a
                  href={`https://wa.me/${WHATSAPP}?text=Bonjour%20BKA,%20je%20suis%20intéressé%20par%20${encodeURIComponent(
                    product.name
                  )}`}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 font-bold text-white transition hover:bg-red-600"
                >
                  <MessageCircle size={18} />
                  Commander
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}