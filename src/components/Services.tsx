import { Button } from "@/components/ui/button";
import { ChevronDown, MessageCircle } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Podologia Completa",
      description: "Uma abordagem completa para cuidar de seus pés, incluindo cuidados, diagnóstico e tratamento personalizado. (Desbaste de calos e calosidades, corte técnico, hidratação, finalizando com massagem relaxante simples)."
    },
    {
      title: "Desbaste de calos e calosidades",
      description: "A eliminação de calos é feita através da remoção cuidadosa da camada de pele dura e áspera, aliviando o desconforto e a pressão ao caminhar."
    },
    {
      title: "Unha Infeccionada",
      description: "A terapia para unhas infeccionadas visa tratar e eliminar a inflamação de forma segura, com curativos adequados e alívio do incômodo."
    },
    {
      title: "Fissuras (Rachaduras)",
      description: "A solução para rachaduras envolve o tratamento para curar o tecido rachado e prevenir mais danos, melhorando assim o conforto e a aparência."
    },
    {
      title: "Verruga Plantar (HPV)",
      description: "Na extração de verrugas, é feito um procedimento seguro para remover a verruga plantar (ou HPV) e evitar sua recorrência."
    },
    {
      title: "Hidratação profunda de parafina quente - SPA",
      description: "É uma técnica que utiliza hidratação intensiva para nutrir profundamente a pele dos pés, ajudando a amaciar e aliviar a pele seca e rachada (Podologia simples: Corte técnico, polimento com broca, lixamento plantar, hodratação com parafina e massagem simples)."
    },
    {
      title: "Reflexologia Podal (Massagem relaxante e Anti-stress)",
      description: "Esta é uma massagem relaxante nos pés que tem como objetivo aliviar o estresse e promover o bem-estar através de pontos de pressão estratégicos, tratando enxaquecas, cólicas, insônia e etc."
    },
    {
      title: "Micoses de unhas (fungos)",
      description: "A terapia para fungos em unhas envolve a aplicação de tratamentos tópicos e laserterapia para eliminar a infecção fungica e recuperar a saúde da unha."
    },
    {
      title: "Pés Diabéticos",
      description: "Este é um cuidado especializado que se concentra em prevenir e tratar problemas nos pés que podem surgir em pessoas diabéticas, incluindo úlceras e infecções."
    },
    {
      title: "Tratamento de Órteses (Correção de unha)",
      description: "A solução envolve a colocação de dispositivos ortopédicos que ajudam a corrigir e aliviar a pressão da unha, melhorando a condição da lâmina."
    },
    {
      title: "Podopediatria",
      description: "Cuidados especializados para os pés de bebês, crianças e adolescentes, com técnicas suaves e preventivas para tratar alterações e garantir um crescimento saudável."
    }
  ];

  return (
    <section id="servicos" className="py-16 lg:py-24 bg-gradient-soft border-y border-border/40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Nossos Serviços
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-7 sm:p-8 rounded-2xl border border-border shadow-soft hover:shadow-medium transition-smooth space-y-4"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                {item.title}
              </h2>
              <div className="w-16 h-0.5 bg-primary"></div>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold px-8 py-6 rounded-md shadow-medium hover:scale-105 transition-smooth w-full sm:w-auto"
            asChild
          >
            <a
              href="https://wa.me/5511947578967?text=Ol%C3%A1,%20venho%20do%20site%20e%20gostaria%20de%20agendar%20um%20tratamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <ChevronDown className="w-5 h-5" />
              <span>AGENDAR TRATAMENTO</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;