import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ClipboardList, MessageSquare, Laptop, Globe } from "lucide-react";

const skills = [
  {
    icon: <ClipboardList className="h-8 w-8 text-blue-600" />,
    title: "Precisione e Organizzazione",
    description: "Garantisco un lavoro meticoloso e una gestione impeccabile delle tue attività, assicurando ordine e chiarezza in ogni processo.",
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-green-600" />,
    title: "Comunicazione Efficace",
    description: "Offro una comunicazione chiara, concisa e professionale, sia scritta che verbale, per una collaborazione fluida e senza intoppi.",
  },
  {
    icon: <Laptop className="h-8 w-8 text-purple-600" />,
    title: "Familiarità con Strumenti Digitali",
    description: "Padronanza dei principali software e piattaforme per l'ufficio moderno, inclusi Microsoft Office (Word, Excel, PowerPoint), Google Workspace (Gmail, Calendar, Drive), strumenti di comunicazione (Slack, Zoom) e software di gestione progetti (Asana, Trello).",
  },
  {
    icon: <Globe className="h-8 w-8 text-red-600" />,
    title: "Competenze Linguistiche",
    description: "Supporto disponibile anche in inglese e francese per le tue esigenze internazionali.",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-20 md:py-32 bg-white">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800">Le Mie Competenze e Qualità</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card key={index} className="flex flex-col items-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="mb-4">{skill.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;