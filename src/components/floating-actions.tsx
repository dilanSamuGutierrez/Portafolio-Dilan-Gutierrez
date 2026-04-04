"use client";

import { useEffect, useState } from "react";
import { FileDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FloatingActions() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 700);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-24 z-50 flex flex-col gap-3",
        // 📱 Mobile izquierda / 💻 Desktop derecha
        "left-4 md:left-auto md:right-4"
      )}
    >
      
      {/* WhatsApp */}
      <Link
        href="https://wa.me/573202725499"
        target="_blank"
        className={cn(
          "group relative flex items-center rounded-full border",
          "transition-all duration-300 ease-out overflow-hidden",
          "h-12",

          // Fondo fijo claro (clave)
          "bg-white dark:bg-[#F6E9B2]/90 text-black",

          isScrolling ? "w-12 justify-center" : "w-37.5 px-3",

          // Hover elegante
          "hover:border-[#3e5b99]",
          "hover:text-[#3e5b99]"
        )}
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
          alt="WhatsApp"
          className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110"
        />

        <span
          className={cn(
            "absolute left-12 text-sm whitespace-nowrap transition-all duration-300",
            isScrolling
              ? "opacity-0 translate-x-2"
              : "opacity-100 translate-x-0"
          )}
        >
          WhatsApp
        </span>
      </Link>

      {/* CV */}
      <a
        href="/files/cv.pdf"
        download
        className={cn(
          "group relative flex items-center rounded-full border",
          "transition-all duration-300 ease-out overflow-hidden",
          "h-12",

          "bg-white dark:bg-[#F6E9B2]/90 text-black",

          isScrolling ? "w-12 justify-center" : "w-42.5 px-3",

          "hover:border-[#3e5b99]",
          "hover:text-[#3e5b99]"
        )}
      >
        <FileDown className="w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110" />

        <span
          className={cn(
            "absolute left-12 text-sm whitespace-nowrap transition-all duration-300",
            isScrolling
              ? "opacity-0 translate-x-2"
              : "opacity-100 translate-x-0"
          )}
        >
          Descargar CV
        </span>
      </a>
    </div>
  );
}