import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Federica ha trasformato la gestione della mia agenda. Ora ho molto più tempo per concentrarmi sui miei clienti. Altamente raccomandata!",
    author: "Marco Rossi",
    title: "Libero Professionista",
  },
  {
    quote: "Il supporto amministrativo di Federica è stato impeccabile. Precisa, organizzata e sempre disponibile. Un vero valore aggiunto per la mia piccola impresa.",
    author: "Laura Bianchi",
    title: "Titolare Piccola Impresa",
  },
  {
    quote: "Grazie a Federica, la mia casella di posta è finalmente sotto controllo. La sua efficienza e professionalità sono eccezionali.",
    author: "Giulia Verdi",
    title: "Manager",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="w-full py-20 md:py-32 bg-gray-100">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800">Dicono di Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 text-left shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <CardContent className="p-0">
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-lg text-gray-700 leading-relaxed mb-4 italic">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;