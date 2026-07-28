"use client";

import { FaWhatsapp } from "react-icons/fa6";

const whatsappNumber = "6285168157168";

const whatsappMessage = encodeURIComponent(
  "Halo Hypernusa, saya tertarik dengan NusaHelp dan ingin berkonsultasi mengenai bisnis saya."
);

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-999
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        transition
        duration-300
        hover:scale-110
        hover:shadow-2xl
      "
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}