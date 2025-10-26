import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-12 sm:py-20 md:py-32 bg-white">
      <div className="container text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-gray-800">Chi Sono</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
          <img
            src="/image.jpeg"
            alt="Federica Pugni"
            className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full shadow-xl object-cover flex-shrink-0"
          />
          <Card className="max-w-2xl p-4 sm:p-6 md:p-8 text-left shadow-lg w-full">
            <CardContent className="p-0">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                Sono Federica Pugni, un'Assistente Virtuale dedicata con una solida esperienza amministrativa. La mia passione per l'organizzazione e l'efficienza mi spinge a fornire un supporto a distanza impeccabile per liberi professionisti, piccole imprese e manager. Ho maturato competenze nella gestione di processi amministrativi, che mi permettono di alleggerire il carico di lavoro dei miei clienti, liberando il loro tempo prezioso per concentrarsi sul core business.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                La mia missione è semplificare la tua vita lavorativa, fornendo un supporto affidabile e professionale in ogni aspetto, dalla gestione della posta elettronica alla pianificazione degli appuntamenti, fino ai servizi più specializzati. Lavoro con precisione e attenzione ai dettagli, garantendo sempre risultati di alta qualità e contribuendo al successo delle tue attività.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;