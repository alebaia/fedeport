import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail, Calendar, FileText, Share2, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Mail className="h-8 w-8 text-blue-600" />,
    title: "Gestione Email",
    description: "Filtro messaggi, risposte standard, organizzazione della posta in arrivo e in uscita.",
  },
  {
    icon: <Calendar className="h-8 w-8 text-green-600" />,
    title: "Gestione Contatti e Calendario",
    description: "Fissare appuntamenti, promemoria, coordinare meeting e mantenere aggiornati i contatti.",
  },
  {
    icon: <FileText className="h-8 w-8 text-purple-600" />,
    title: "Supporto Amministrativo",
    description: "Compilazione documenti, gestione file, inserimento dati e organizzazione digitale.",
  },
  {
    icon: <Share2 className="h-8 w-8 text-red-600" />,
    title: "Social Media & Marketing Leggero",
    description: "Programmazione post, gestione commenti e supporto nelle attività di marketing online (opzionale).",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-yellow-600" />,
    title: "Servizi Specializzati",
    description: "Booking viaggi, fatturazione, ricerca di informazioni e gestione clienti.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full py-20 md:py-32 bg-gray-50">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800">I Miei Servizi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;