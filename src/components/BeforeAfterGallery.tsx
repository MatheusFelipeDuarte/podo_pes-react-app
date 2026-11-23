import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

const BeforeAfterGallery = () => {
  const slides = [
    {
      title: "Desencravamento de Unha (Onicocriptose)",
      beforeLabel: "Antes",
      afterLabel: "Depois",
      description: "Remoção técnica da espícula causadora de dor e inflamação lateral, com alívio imediato e sem necessidade de anestesia invasiva."
    },
    {
      title: "Desbaste de Calosidades e Helomas",
      beforeLabel: "Antes",
      afterLabel: "Depois",
      description: "Desbaste seguro e indolor de camadas hiperqueratósicas na região plantar, devolvendo conforto instantâneo ao pisar."
    },
    {
      title: "Tratamento de Fissuras e Rachaduras",
      beforeLabel: "Antes",
      afterLabel: "Depois",
      description: "Assepsia, hidratação oclusiva profunda e fechamento de fissuras abertas nos calcanhares."
    },
    {
      title: "Aplicação de Órtese Corretiva",
      beforeLabel: "Antes",
      afterLabel: "Depois",
      description: "Correção gradual da curvatura da lâmina ungueal que pressionava as dobras laterais do dedo."
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
            <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20 text-center flex flex-col justify-center items-center min-h-[220px]">
              <span className="text-xs font-black uppercase tracking-wider bg-destructive text-white px-4 py-1.5 rounded-full mb-4">
                {slides[currentIndex].beforeLabel}
              </span>
              <p className="text-foreground font-semibold text-lg">Quadro com dor e incômodo</p>
              <p className="text-xs text-muted-foreground mt-2">Pele espessada, inflamação ou pressão anormal</p>
            </div>

            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center flex flex-col justify-center items-center min-h-[220px]">
              <span className="text-xs font-black uppercase tracking-wider bg-primary text-white px-4 py-1.5 rounded-full mb-4">
                {slides[currentIndex].afterLabel}
              </span>
              <p className="text-foreground font-semibold text-lg flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Alívio e restauração total
              </p>
              <p className="text-xs text-muted-foreground mt-2">Pés saudáveis, lisos e livres de dor</p>
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
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === i ? "bg-primary w-6" : "bg-border"
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
