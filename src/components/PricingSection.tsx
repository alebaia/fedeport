import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
// Rimuoviamo Link da react-router-dom

const pricingPlans = [
  {
    title: "Pacchetto Base",
    price: "109€", // Prezzo aggiornato
    description: "Ideale per piccole esigenze e supporto occasionale, include 3 ore di prova.",
    features: [
      "10 ore di assistenza virtuale al mese",
      "Gestione email e calendario",
      "Supporto amministrativo leggero",
      "Flessibilità oraria",
    ],
    buttonText: "Scopri di più",
    link: "#contact",
  },
  {
    title: "Pacchetto Standard",
    price: "159€",
    description: "Perfetto per professionisti e piccole imprese con necessità regolari, include 3 ore di prova.",
    features: [
      "15 ore di assistenza virtuale al mese",
      "Gestione completa email e calendario",
      "Supporto amministrativo e organizzativo",
      "Reportistica mensile",
    ],
    buttonText: "Contattami",
    link: "#contact",
  },
  {
    title: "Pacchetto Plus",
    price: "259€",
    description: "Per chi cerca un supporto completo e continuativo, include 3 ore di prova.",
    features: [
      "25 ore di assistenza virtuale al mese",
      "Gestione avanzata email, calendario e contatti",
      "Supporto amministrativo e organizzativo completo",
      "Gestione base social media (opzionale)",
      "Reportistica dettagliata e consulenza",
    ],
    buttonText: "Richiedi un Preventivo",
    link: "#contact",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-12 sm:py-20 md:py-32 bg-white">
      <div className="container text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-gray-800">Tariffe e Pacchetti</h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 max-w-3xl mx-auto">
          Offro soluzioni flessibili di <span className="font-semibold">assistenza virtuale</span> e <span className="font-semibold">supporto amministrativo online</span>, pensate per adattarsi alle tue esigenze. Scegli il pacchetto più adatto o richiedi un preventivo personalizzato per un <span className="font-semibold">supporto a distanza</span> su misura.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="flex flex-col p-4 sm:p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.title}</CardTitle>
                <CardDescription className="text-sm sm:text-base text-gray-600">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl sm:text-4xl font-extrabold text-blue-600 mb-4 sm:mb-6">{plan.price}</p>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start sm:items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-4 sm:pt-6">
                <a href={plan.link} className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm sm:text-base md:text-lg">
                    {plan.buttonText}
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;