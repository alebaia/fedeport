import React from "react";
import { Card, CardContent } from "@/components/ui/card"; // Manteniamo Card per la presentazione
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const emailAddress = "pugnifederica@gmail.com";
  const phoneNumber = "+39 392-6730517";
  const whatsappNumber = "393926730517"; // Numero senza spazi per il link WhatsApp

  return (
    <section id="contact" className="w-full py-12 sm:py-20 md:py-32 bg-gray-100">
      <div className="container text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-gray-800">Contattami</h2>
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
          <Card className="w-full max-w-md p-4 sm:p-6 md:p-8 shadow-lg">
            <CardContent className="p-0 space-y-4 sm:space-y-6">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Email</h3>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm sm:text-base md:text-lg text-gray-600 hover:text-blue-600 underline break-all"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 flex-shrink-0" />
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Telefono</h3>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base md:text-lg text-gray-600 hover:text-blue-600 underline"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;