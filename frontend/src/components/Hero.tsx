import { Button } from "@/components/ui/button";
import { Upload, TrendingUp, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-analytics-primary/10 via-analytics-secondary/5 to-analytics-accent/10 pointer-events-none"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-analytics-primary/10 text-analytics-primary px-4 py-2 rounded-full text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              Transforme Seus Dados Hoje
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Transforme Seus{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Dados CSV
              </span>{" "}
              em Poderosos{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Insights
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl">
              Carregue seu CSV de vendas e visualize instantaneamente seus dados com painéis interativos, 
              métricas em tempo real e gráficos bonitos. Sem necessidade de programação.
            </p>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative">
          <div className="relative z-10 animate-float">
            <img 
              src={heroImage} 
              alt="Prévia do Painel de Análises" 
              className="rounded-2xl shadow-elegant border border-white/10"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-analytics-primary/20 rounded-full blur-2xl animate-glow"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-analytics-secondary/20 rounded-full blur-3xl animate-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;