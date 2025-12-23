import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Wrench, Cog, Zap, Shield } from "lucide-react"

const products = [
  {
    icon: Wrench,
    title: "Repuestos Originales",
    description:
      "Amplio catálogo de repuestos originales Toyota para todos los modelos. Garantía y calidad certificada.",
  },
  {
    icon: Cog,
    title: "Sistema de Motor",
    description: "Filtros, bujías, correas, aceites y todo lo necesario para el mantenimiento del motor de tu Toyota.",
  },
  {
    icon: Zap,
    title: "Sistema Eléctrico",
    description: "Baterías, alternadores, sensores y componentes eléctricos de la más alta calidad.",
  },
  {
    icon: Shield,
    title: "Accesorios",
    description: "Personaliza tu Toyota con accesorios originales: luces, espejos, defensas y mucho más.",
  },
]

export function ProductsSection() {
  return (
    <section id="productos" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nuestros Productos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Todo lo que necesitas para mantener tu Toyota en perfectas condiciones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{product.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
