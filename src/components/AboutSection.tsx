import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800">Chi Sono</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <Avatar className="h-48 w-48 shadow-xl">
            <AvatarImage src="/federica pugni.JPG" alt="Federica Pugni" />
            <AvatarFallback className="text-6xl font-bold bg-blue-100 text-blue-600">FP</AvatarFallback>
          </Avatar>
          <Card className="max-w-2xl p-8 text-left shadow-lg">
            <CardContent className="p-0">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Sono Federica Pugni, un'Assistente Virtuale dedicata con una solida esperienza amministrativa. La mia passione per l'organizzazione e l'efficienza mi spinge a fornire un supporto a distanza impeccabile per liberi professionisti, piccole imprese e manager. Ho maturato competenze nella gestione di processi amministrativi, che mi permettono di alleggerire il carico di lavoro dei miei clienti, liberando il loro tempo prezioso per concentrarsi sul core business.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
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