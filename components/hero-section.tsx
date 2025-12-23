import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center bg-secondary">
      <div className="absolute inset-0 bg-[url('/toyota-vehicles-parts-workshop.jpg')] bg-cover bg-center opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">Repuestos y Accesorios Toyota</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 text-pretty leading-relaxed">
            Especialistas en repuestos originales y accesorios de alta calidad para tu vehículo Toyota. Experiencia,
            confianza y garantía en Cali.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg">
              Ver Catálogo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg bg-white/10 border-white text-white hover:bg-white hover:text-secondary"
            >
              Contáctanos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
