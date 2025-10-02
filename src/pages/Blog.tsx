import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                Blog
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
                Conteúdo em breve
              </h1>
            </div>
            <Card className="bg-gradient-soft shadow-soft border-0">
              <CardContent className="p-6 text-center">
                <p className="text-lg text-foreground mb-4">
                  Saúde dos pés e prevenção ao pé diabético.
                </p>
                <Button asChild variant="outline">
                  <a
                    href="https://suzano.tv/2025/05/cuidar-da-saude-dos-pes-e-mais-que-estetica-e-prevencao-e-qualidade-de-vida-3/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ler matéria
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;