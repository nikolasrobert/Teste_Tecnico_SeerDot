import { Card } from "@/components/ui/card";
import { Upload, BarChart3, Table, Zap, Shield, Download } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "Upload Fácil de CSV",
      description: "Arraste e solte seus arquivos CSV ou navegue para carregar. Suporta formatos padronizados de dados de vendas.",
      color: "text-analytics-primary"
    },
    {
      icon: BarChart3,
      title: "Painéis Interativos",
      description: "Gráficos e dashboards bonitos em tempo real que se atualizam automaticamente com seus dados mais recentes.",
      color: "text-analytics-primary"
    },
    {
      icon: Table,
      title: "Visualização de Tabela de Dados",
      description: "Visualize seus dados brutos em um formato de tabela limpo e pesquisável com opções de classificação e filtragem.",
      color: "text-analytics-primary"
    },
    {
      icon: Zap,
      title: "Super Rápido",
      description: "Processe milhares de linhas em segundos com nosso mecanismo otimizado de análise de dados.",
      color: "text-analytics-primary"
    },
    {
      icon: Shield,
      title: "Seguro e Privado",
      description: "Seus dados são processados com segurança e nunca armazenados permanentemente em nossos servidores.",
      color: "text-analytics-primary"
    },
    {
      icon: Download,
      title: "Exportar Relatórios",
      description: "Baixe seus insights como relatórios PDF ou exporte dados processados de volta para CSV.",
      color: "text-analytics-primary"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Recursos Poderosos para{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Análise de Dados
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para transformar seus dados CSV em insights acionáveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-primary/10`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;