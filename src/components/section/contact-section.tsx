import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      {/* Label */}
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">
          Contacto
        </span>
      </div>

      {/* Background effect */}
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl  text-[#3e5b99] dark:text-[#F6E9B2]">
          ¿Trabajamos juntos?
        </h2>

        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Soy desarrollador enfocado en crear soluciones web modernas, funcionales
          y bien estructuradas. Estoy abierto a oportunidades laborales donde
          pueda aportar, aprender y crecer profesionalmente. Si crees que puedo
          encajar en tu equipo, no dudes en contactarme.
        </p>

        {/* Button */}
        <Link
          href="mailto:dilansamugutierrez@gmail.com"
          className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-background transition-all duration-300 hover:bg-primary/80 hover:scale-105"
        >
          Enviar mensaje
        </Link>
      </div>
    </div>
  );
}