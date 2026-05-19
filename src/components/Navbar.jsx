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
    ["Galerie", "#gallery"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/assets/bkalogo.jpeg"
            alt="BKA Logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-red-600"
          />
          <div>
            <h1 className="text-sm font-black uppercase text-white md:text-lg">
              BKA Médecine
            </h1>
            <p className="text-xs text-neutral-300">Traditionnelle Chinoise</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-white md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="hover:text-red-400">
              {label}
            </a>
          ))}
        </nav>

        <a
          href={`https://wa.me/${WHATSAPP}`}
          className="hidden rounded-full bg-red-600 px-5 py-3 font-bold text-white md:inline-flex"
        >
          WhatsApp
        </a>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5 font-bold text-white">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}

            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="rounded-full bg-red-600 px-5 py-3 text-center"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}