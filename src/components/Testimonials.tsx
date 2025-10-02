import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Heart, ExternalLink } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Mercês",
      rating: 5,
      text: "Excelente atendimento da podóloga Dayane! Muito atenciosa, cuidadosa e profissional! A clínica é aconchegante, limpa e organizada. Tem minha indicação para qualquer pessoa! 😃",
      link: "https://share.google/W81tvY69ZkHnvhbSc"
    },
    {
      name: "Elton Silva",
      rating: 5,
      text: "Fui e sou muito bem atendido pela profissional de podologia Dayane. O ambiente é limpo, organizado e acolhedor, transmitindo confiança e cuidado com o cliente. O procedimento realizado é feito com muita técnica, atenção e cuidado, gerando bem estar, ótimo resultado e um conforto absurdo! Recomendo fortemente para quem busca um serviço de qualidade e com responsabilidade. Muito obrigado!",
      link: "https://share.google/Kk9wcoCUGLP4ZJ8AZ"
    },
    {
      name: "Raquel Kell",
      rating: 5,
      text: "Excelente profissional, espaço maravilhoso, acolhedor, super indico para quem tiver qualquer problema em unhas e nos pés, venha conhecer",
      link: "https://share.google/b8ADLbisbFHrgMn7F"
    },
    {
      name: "Sabrina Oliveira",
      rating: 5,
      text: "A Dayane é uma excelente profissional! O procedimento feito em minha unha encravada foi impressionante, sempre com muita atenção e técnica. Recomendo de olhos fechados!",
      link: "https://share.google/FTcswisTbPToJTXgR"
    },
    {
      name: "Robert Brito",
      rating: 5,
      text: "Resolvido! micoses devido a natação 🥽 Obrigado Dayane",
      link: "https://share.google/ATmn3WGNM4I9bpc3w"
    },
    {
      name: "Hermana Santos",
      rating: 5,
      text: "Gostei muito do atendimento da Dayane, muito atenciosa e uma excelente profissional.",
      link: "https://share.google/MChCAhRedwc6basBS"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-primary-soft text-primary">
            <Heart className="w-4 h-4 mr-2" />
            Depoimentos
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            O Que Nossos
            <span className="text-primary"> Pacientes Dizem</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A satisfação e saúde dos nossos pacientes são nossa maior recompensa. 
            Veja alguns depoimentos reais de quem confia no nosso trabalho.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <a
              key={index}
              href={testimonial.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-gradient-soft shadow-soft hover:shadow-medium transition-smooth border-0 group h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Quote className="w-8 h-8 text-primary/20" />
                      <ExternalLink className="w-4 h-4 text-primary/60 group-hover:text-primary transition-smooth" />
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">Ver avaliação no Google</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-hero p-8 rounded-2xl shadow-medium text-white max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center gap-1 mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-white text-white" />
                ))}
              </div>
              <span className="text-2xl font-bold">5.0/5</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Avaliação Média dos Pacientes</h3>
            <p className="text-white/90">
              Baseada em avaliações verificadas de pacientes reais no Google
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;