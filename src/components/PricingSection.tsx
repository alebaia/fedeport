import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    title: "Pacchetto Base",
    price: "Su Richiesta",
    description: "Ideale per piccole esigenze e supporto occasionale.",
    features: [
      "5 ore di assistenza virtuale al mese",
      "Gestione email e calendario",
      "Supporto amministrativo leggero",
      "Flessibilità oraria",
    ],
    buttonText: "Scopri di più",
    link: "#contact",
  },
  {
    title: "Pacchetto Standard",
    price: "Su Richiesta",
    description: "Perfetto per professionisti e piccole imprese con necessità regolari.",
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
    title: "Progetto Personalizzato",
    price: "Preventivo",
    description: "Soluzioni su misura per progetti specifici o esigenze complesse.",
    features: [
      "Analisi dettagliata delle esigenze",
      "Piano di lavoro personalizzato",
      "Supporto dedicato per la durata del progetto",
      "Consulenza strategica",
    ],
    buttonText: "Richiedi un Preventivo",
    link: "#contact",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800">Tariffe e Pacchetti</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Offro soluzioni flessibili di <span className="font-semibold">assistenza virtuale</span> e <span className="font-semibold">supporto amministrativo online</span>, pensate per adattarsi alle tue esigenze. Scegli il pacchetto più adatto o richiedi un preventivo personalizzato per un <span className="font-semibold">supporto a distanza</span> su misura.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="flex flex-col p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</CardTitle>
                <CardDescription className="text-gray-600">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-extrabold text-blue-600 mb-6">{plan.price}</p>
                <ul className="space-y-3 text-gray-700">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6">
                <Link to={plan.link} className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg">
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;