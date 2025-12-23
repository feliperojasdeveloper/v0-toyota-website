import { CheckCircle } from "lucide-react"

const features = [
  "Más de 15 años de experiencia en el sector automotriz",
  "Repuestos 100% originales y certificados",
  "Asesoría especializada para tu vehículo",
  "Garantía en todos nuestros productos",
  "Envíos a toda Colombia",
  "Precios competitivos y formas de pago flexibles",
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Expertos en Toyota</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              En <strong>Toyota Kit Imports</strong>, nos especializamos en ofrecer repuestos y accesorios de la más
              alta calidad para vehículos Toyota. Nuestra misión es garantizar el óptimo rendimiento y durabilidad de tu
              vehículo.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contamos con un equipo de profesionales altamente capacitados que te brindarán la asesoría necesaria para
              encontrar exactamente lo que necesitas.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-base leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden bg-muted">
            <img src="/toyota-service-workshop-professional.jpg" alt="Toyota Kit Workshop" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
