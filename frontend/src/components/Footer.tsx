import { BarChart3 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-card border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                seer.dash
              </span>
            </div>
            <p className="text-muted-foreground">
              Transforme seus dados CSV em insights poderosos com painéis bonitos e interativos.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            
          </div>

          {/* Company */}
          <div className="space-y-4">
            
          </div>

          {/* Support */}
          <div className="space-y-4">
            
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 seer.dash. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;