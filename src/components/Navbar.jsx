import { useState } from "react";
import { Menu, X } from "lucide-react";

const WHATSAPP = "237670103624";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Accueil", "#home"],
    ["À propos", "#about"],
    ["Services", "#services"],
    ["Produits", "#products"],
    ["Galerie", "#galerie"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        <a href="#home" className="flex items-center gap-3">
          <img
            src="/assets/bkalogo.jpeg"
            alt="BKA Logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-green-600"
          />

          <div>
            <h1 className="text-sm font-black uppercase tracking-wide text-white md:text-lg">
              BKA MÉDECINE
            </h1>

            <p className="text-xs text-neutral-300">
              Traditionnelle Chinoise
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold text-white lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="transition duration-300 hover:text-orange-400"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP}?text=Bonjour%20BKA%2C%20je%20souhaite%20prendre%20rendez-vous.`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-green-600 px-6 py-3 font-bold text-white transition duration-300 hover:scale-105 hover:bg-orange-500 lg:inline-flex"
        >
          WhatsApp
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/95 px-5 py-6 lg:hidden">
          <div className="flex flex-col gap-5 text-white">

            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 pb-3 font-bold transition hover:text-orange-400"
              >
                {label}
              </a>
            ))}

            <a
              href={`https://wa.me/${WHATSAPP}?text=Bonjour%20BKA%2C%20je%20souhaite%20prendre%20rendez-vous.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 rounded-full bg-green-600 px-5 py-4 text-center font-bold transition hover:bg-orange-500"
            >
              WhatsApp
            </a>

          </div>
        </div>
      )}
    </header>
  );
}