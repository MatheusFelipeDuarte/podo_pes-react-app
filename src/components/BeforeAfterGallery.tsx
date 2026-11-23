import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import onicoAntes from "@/assets/pes/1-Onicocriptose-antes.jpeg";
import onicoDepois from "@/assets/pes/1-Onicocriptose-depois.jpeg";
import desbasteAntes from "@/assets/pes/2-Desbaste-antes.jpeg";
import desbasteDepois from "@/assets/pes/2-Desbaste-depois.jpeg";
import rachadurasAntes from "@/assets/pes/3-Rachaduras-antes.jpeg";
import rachadurasDepois from "@/assets/pes/3-Rachaduras-depois.jpeg";
import orteseAntes from "@/assets/pes/4-Ortese-antes.jpeg";
import orteseDepois from "@/assets/pes/4-Ortese-depois.jpeg";
import diabetesAntes from "@/assets/pes/5-Diabetes-antes.jpeg";
import diabetesDepois from "@/assets/pes/5-Diabetes-depois.jpeg";
import micoseAntes from "@/assets/pes/6-Micose-antes.jpeg";
import micoseDepois from "@/assets/pes/6-Micose-depois.jpeg";

const BeforeAfterGallery = () => {
  const slides = [
    {
      title: "Desencravamento de Unha (Onicocriptose)",
      description: "Remoção técnica da espícula causadora de dor e inflamação lateral, com alívio imediato e sem necessidade de anestesia invasiva.",
      beforeImage: onicoAntes,
      afterImage: onicoDepois,
      beforeLabel: "Antes",
      afterLabel: "Depois"
    },
    {
      title: "Desbaste de Calosidades e Helomas",
      description: "Desbaste seguro e indolor de camadas hiperqueratósicas na região plantar, devolvendo conforto instantâneo ao pisar.",
      beforeImage: desbasteAntes,
      afterImage: desbasteDepois,
      beforeLabel: "Antes",
      afterLabel: "Depois"
    },
    {
      title: "Tratamento de Fissuras e Rachaduras",
      description: "Assepsia, hidratação oclusiva profunda e fechamento de fissuras abertas nos calcanhares.",
      beforeImage: rachadurasAntes,
      afterImage: rachadurasDepois,
      beforeLabel: "Antes",
      afterLabel: "Depois"
    },
    {
      title: "Aplicação de Órtese Corretiva",
      description: "Correção gradual da curvatura da lâmina ungueal que pressionava as dobras laterais do dedo.",
      beforeImage: orteseAntes,
      afterImage: orteseDepois,
      beforeLabel: "Antes",
      afterLabel: "Depois"
    },
    {
      title: "Pé Diabético",
      description: "Pé de pessoa com diabete (pé de risco), neuropatia diabética, falta de sensibilidade nos pés, prevenção de amputações.",
      beforeImage: diabetesAntes,
      afterImage: diabetesDepois,
      beforeLabel: "Antes",
      afterLabel: "Depois"
    },
    {
      title: "Onicomicose",
      description: "Tratamento especializado para eliminação de fungos e bactérias, restaurando a estrutura, espessura e crescimento saudável das unhas.",
      beforeImage: micoseAntes,
      afterImage: micoseDepois,
      beforeLabel: "Antes",
      afterLabel: "Depois"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-soft border-b border-border/40" id="resultados">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">
          Resultados: Antes e Depois
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Confira a evolução real de procedimentos realizados na clínica Espaço Pés com técnicas modernas e indolores.
        </p>

        <div className="relative bg-white rounded-3xl p-6 sm:p-10 border border-border shadow-medium">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary-soft px-3 py-1 rounded-full">
              Caso {currentIndex + 1} de {slides.length}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2">
              {slides[currentIndex].title}
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl mx-auto">
              {slides[currentIndex].description}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 my-8">
            <div className="relative rounded-2xl overflow-hidden border border-destructive/20 bg-muted shadow-soft aspect-[4/3] group">
              <img
                src={slides[currentIndex].beforeImage}
                alt={`Antes - ${slides[currentIndex].title}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-xs font-black uppercase tracking-wider bg-destructive text-white px-4 py-1.5 rounded-full shadow-md">
                {slides[currentIndex].beforeLabel}
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-muted shadow-soft aspect-[4/3] group">
              <img
                src={slides[currentIndex].afterImage}
                alt={`Depois - ${slides[currentIndex].title}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-4 left-1/2 -translate-x-1/2 z-10 text-xs font-black uppercase tracking-wider bg-primary text-white px-4 py-1.5 rounded-full shadow-md">
                {slides[currentIndex].afterLabel}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-border hover:bg-muted shadow-sm transition-smooth"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${currentIndex === i ? "bg-primary w-6" : "bg-border"
                    }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-border hover:bg-muted shadow-sm transition-smooth"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
