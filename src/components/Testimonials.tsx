import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown, ExternalLink } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mariana Mercês",
      text: "Excelente atendimento da podóloga Dayane! Muito atenciosa, cuidadosa e profissional! A clínica é aconchegante, limpa e organizada. Tem minha indicação para qualquer pessoa! 😃",
      link: "https://share.google/W81tvY69ZkHnvhbSc"
    },
    {
      name: "Elton Silva",
      text: "Fui e sou muito bem atendido pela profissional de podologia Dayane. O ambiente é limpo, organizado e acolhedor, transmitindo confiança e cuidado com o cliente. O procedimento realizado é feito com muita técnica, atenção e cuidado, gerando bem estar, ótimo resultado e um conforto absurdo! Recomendo fortemente para quem busca um serviço de qualidade e com responsabilidade. Muito obrigado!",
      link: "https://share.google/Kk9wcoCUGLP4ZJ8AZ"
    },
    {
      name: "Raquel Kell",
      text: "Excelente profissional, espaço maravilhoso, acolhedor, super indico para quem tiver qualquer problema em unhas e nos pés, venha conhecer!",
      link: "https://share.google/b8ADLbisbFHrgMn7F"
    },
    {
      name: "Sabrina Oliveira",
      text: "A Dayane é uma excelente profissional! O procedimento feito em minha unha encravada foi impressionante, sempre com muita atenção e técnica. Recomendo de olhos fechados!",
      link: "https://share.google/FTcswisTbPToJTXgR"
    },
    {
      name: "Robert Brito",
      text: "Resolvido! micoses devido a natação 🥽 Obrigado Dayane!",
      link: "https://share.google/ATmn3WGNM4I9bpc3w"
    },
    {
      name: "Hermana Santos",
      text: "Gostei muito do atendimento da Dayane, muito atenciosa e uma excelente profissional.",
      link: "https://share.google/MChCAhRedwc6basBS"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-border/40" id="depoimentos">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-6">
          Depoimento de Clientes
        </h2>

        <div className="mb-6 flex justify-center">
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-6 rounded-md shadow-soft hover:scale-105 transition-smooth"
            asChild
          >
            <a
              href="https://wa.me/5511947578967?text=Ol%C3%A1,%20venho%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ChevronDown className="w-5 h-5" />
              <span>AGENDAR TRATAMENTO</span>
            </a>
          </Button>
        </div>

        <p className="text-muted-foreground text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Confira o que nossos clientes relatam sobre nossos serviços de podologia em Mogi das Cruzes.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {testimonials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card className="bg-white border border-border shadow-soft hover:shadow-medium transition-smooth h-full flex flex-col justify-between">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground/90 text-sm leading-relaxed mb-4">
                      "{item.text}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                    <span className="font-bold text-foreground">{item.name}</span>
                    <span className="text-primary flex items-center gap-1 group-hover:underline">
                      Google Review <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;