import {
  MessageCircle,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const WHATSAPP = "237670103624";
const FACEBOOK = "https://www.facebook.com/share/v/1bCvkYGzyo/";
const TIKTOK = "https://vt.tiktok.com/ZSxrxgrPP/";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/assets/bkalogo.jpeg"
              alt="BKA Logo"
              className="h-14 w-14 rounded-full object-cover ring-2 ring-red-600"
            />

            <div>
              <h2 className="text-xl font-black">
                BKA Médecine
              </h2>

              <p className="text-sm text-neutral-400">
                Traditionnelle Chinoise
              </p>
            </div>
          </div>

          <p className="mt-5 leading-7 text-neutral-400">
            Centre spécialisé en médecine traditionnelle chinoise,
            massage thérapeutique, arts martiaux et bien-être naturel.
          </p>

          {/* SOCIALS */}
          <div className="mt-6 flex items-center gap-4">

            <a
              href={FACEBOOK}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-xl font-bold transition hover:scale-110"
            >
              f
            </a>

            <a
              href={TIKTOK}
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-black text-black transition hover:scale-110"
            >
              ♪
            </a>

          </div>
        </div>

        {/* CENTER */}
        <div>
          <h3 className="mb-5 text-xl font-black">
            Navigation
          </h3>

          <div className="space-y-3 text-neutral-400">
            <a href="#home" className="block transition hover:text-red-500">
              Accueil
            </a>

            <a href="#about" className="block transition hover:text-red-500">
              À propos
            </a>

            <a href="#services" className="block transition hover:text-red-500">
              Services
            </a>

            <a href="#products" className="block transition hover:text-red-500">
              Produits
            </a>

            <a href="#gallery" className="block transition hover:text-red-500">
              Galerie
            </a>

            <a href="#contact" className="block transition hover:text-red-500">
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h3 className="mb-5 text-xl font-black">
            Contact
          </h3>

          <div className="space-y-4 text-neutral-400">

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 transition hover:text-green-400"
            >
              <MessageCircle size={18} />
              +237 670 103 624
            </a>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              +237 692 516 213
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              Ndogbong, Cameroun
            </div>

            <div className="flex items-center gap-3">
              <Clock size={18} />
              Lundi à Samedi : 8h00 - 17h00
            </div>

          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} BKA Médecine Traditionnelle Chinoise.
        Tous droits réservés.
      </div>
    </footer>
  );
}