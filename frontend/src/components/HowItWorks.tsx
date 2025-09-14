import { Card } from "@/components/ui/card";
import { Upload, Settings, BarChart3, Download } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Upload,
      title: "Carregue Seu CSV",
      description: "Simplesmente arraste e solte seu arquivo CSV de vendas. Suportamos formatos padrão com colunas para datas, valores, produtos e categorias."
    },
    {
      step: "02",
      icon: Settings,
      title: "Processamento Automático",
      description: "Nosso sistema automaticamente limpa, valida e processa seus dados, calculando métricas-chave e preparando visualizações."
    },
    {
      step: "03",
      icon: BarChart3,
      title: "Visualize Insights",
      description: "Explore seus dados através de gráficos interativos e métricas. Filtre por intervalos de datas, categorias ou critérios personalizados."
    },
    {
      step: "04",
      icon: Download,
      title: "Exportar e Compartilhar",
      description: "Baixe relatórios detalhados, exporte dados processados ou compartilhe painéis interativos com sua equipe."
    }
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Como{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Funciona
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Obtenha insights dos seus dados em quatro passos simples
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 text-center">
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-analytics-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                    <div className="inline-flex p-4 rounded-full bg-gradient-primary/10">
                      <step.icon className="h-8 w-8 text-analytics-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </Card>
              
              {/* Connector arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary opacity-30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;