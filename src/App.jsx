import { motion } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";


const WHATSAPP = "237670103624";

export default function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Navbar />
      <Home />
      <About />
      <Services />
      <WhyChooseUs />
      <Products />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      <a
  href={`https://wa.me/${WHATSAPP}`}
  className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white shadow-2xl transition hover:scale-110"
>
  <MessageCircle />
</a>

<button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition hover:scale-110"
>
  <ArrowUp />
</button>
    </motion.div>





  );
}