import { MessageCircle, Phone, MapPin } from "lucide-react";

const WHATSAPP = "237670103624";
const CALL = "+237692516213";

export default function Contact() {
  return (
    <section id="contact" className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

        <div>
          <p className="font-bold uppercase tracking-[0.3em] text-red-600">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Prenez rendez-vous
          </h2>

          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Contactez BKA Médecine Traditionnelle Chinoise
            pour une consultation, un massage thérapeutique,
            une formation ou une commande de produits naturels.
          </p>

          <div className="mt-10 space-y-5">

            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="flex items-center gap-4 rounded-[2rem] bg-green-600 p-5 font-bold text-white shadow-lg transition hover:bg-green-700"
            >
              <MessageCircle />
              WhatsApp : +237 670 103 624
            </a>

            <a
              href={`tel:${CALL}`}
              className="flex items-center gap-4 rounded-[2rem] bg-red-600 p-5 font-bold text-white shadow-lg transition hover:bg-red-700"
            >
              <Phone />
              Appel : +237 692 516 213
            </a>

            <div className="flex items-center gap-4 rounded-[2rem] bg-neutral-100 p-5 font-bold text-neutral-900">
              <MapPin className="text-red-600" />
              Entrée Campus 2, Ndogbong, Cameroun
            </div>

          </div>
        </div>

        <div className="rounded-[2rem] bg-neutral-100 p-8 shadow-xl">

          <h3 className="mb-6 text-2xl font-black">
            Envoyer un message
          </h3>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Votre nom"
              className="w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 outline-none focus:border-red-600"
            />

            <input
              type="text"
              placeholder="Téléphone"
              className="w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 outline-none focus:border-red-600"
            />

            <textarea
              placeholder="Votre message"
              className="min-h-[150px] w-full rounded-2xl border border-neutral-200 bg-white px-5 py-4 outline-none focus:border-red-600"
            />

            <a
              href={`https://wa.me/${WHATSAPP}?text=Bonjour%20BKA,%20je%20souhaite%20prendre%20rendez-vous.`}
              className="block rounded-full bg-black px-7 py-4 text-center font-black text-white transition hover:bg-red-600"
            >
              Envoyer via WhatsApp
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}