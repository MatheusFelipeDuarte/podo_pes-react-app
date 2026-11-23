import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqList = [
    {
      question: "O que é podologia?",
      answer: "A podologia é uma área da saúde dedicada ao estudo, prevenção e tratamento dos pés e suas alterações."
    },
    {
      question: "Quais são os problemas de saúde comuns aos pés?",
      answer: "Alguns problemas comuns incluem unhas encravadas, calosidades, verrugas plantares, fungos nas unhas, fissuras nos calcanhares e alterações de pés diabéticos."
    },
    {
      question: "Quando devo procurar um podólogo?",
      answer: "Podologia é prevenção, realizar consultas preventivas em períodos estipulados (a cada 30 a 45 dias) é o melhor caminho."
    },
    {
      question: "Como identificar um bom podólogo?",
      answer: "Procure um profissional devidamente habilitado, com formação acadêmica e especializações em podologia, que siga rigorosas boas práticas de higiene e esterilização em autoclave e que tenha experiência na área. Entre em contato conosco 🙂"
    },
    {
      question: "Que tipo de tratamentos a podologia oferece?",
      answer: "A podologia oferece uma variedade de tratamentos, incluindo limpeza e higienização dos pés, corte correto das unhas, remoção de calosidades, tratamento de micoses nas unhas, desencravamento, órteses e reflexologia."
    },
    {
      question: "É seguro fazer um tratamento de podologia?",
      answer: "Sim, desde que realizado por um profissional qualificado e seguindo as boas práticas de higiene, biossegurança e esterilização."
    },
    {
      question: "Como prevenir problemas nos pés?",
      answer: "Para prevenir problemas nos pés, é importante manter uma higiene adequada, secar bem entre os dedos, usar calçados confortáveis e de tamanho adequado, evitar andar descalço em locais públicos e fazer um acompanhamento regular com um podólogo."
    },
    {
      question: "A podologia é indicada para pessoas com diabetes?",
      answer: "Sim, desde que seja acompanhado por um podólogo especialista em pés diabéticos. Somos especialistas em pés diabéticos pela Universidade Facuminas."
    },
    {
      question: "Quanto tempo dura uma consulta de podologia?",
      answer: "O tempo de uma consulta pode variar, mas geralmente dura entre 30 a 60 minutos, dependendo do tratamento necessário."
    },
    {
      question: "O tratamento podológico é doloroso?",
      answer: "Os tratamentos podológicos não causam dor, mas é possível que algumas pessoas sintam algum desconforto leve, caso já cheguem com inflamações ou dores prévias."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-border/40" id="faq">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h3 className="text-base sm:text-lg font-bold text-primary mb-1 uppercase tracking-wider">
          FAQ
        </h3>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-2">
          Perguntas Frequentes
        </h2>
        <h3 className="text-lg sm:text-xl font-medium text-muted-foreground mb-12">
          Tire todas suas dúvidas
        </h3>

        <div className="text-left space-y-3">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqList.map((item, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white border border-border rounded-xl px-5 sm:px-6 shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="text-left font-bold text-foreground text-base sm:text-lg py-5 hover:text-primary transition-smooth hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-sm sm:text-base pb-5 pt-1">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
