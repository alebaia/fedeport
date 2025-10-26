import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-gray-100">
      <div className="container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800">Contattami</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          <Card className="w-full max-w-md p-8 shadow-lg">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-semibold">Invia un Messaggio</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name" className="sr-only">Nome</Label>
                  <Input id="name" placeholder="Il tuo nome" className="h-12 text-base" />
                </div>
                <div>
                  <Label htmlFor="email" className="sr-only">Email</Label>
                  <Input id="email" type="email" placeholder="La tua email" className="h-12 text-base" />
                </div>
                <div>
                  <Label htmlFor="message" className="sr-only">Messaggio</Label>
                  <Textarea id="message" placeholder="Il tuo messaggio" rows={5} className="text-base" />
                </div>
                <Button type="submit" className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700">
                  Invia Messaggio
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="flex flex-col space-y-6 text-left">
            <div className="flex items-center space-x-4">
              <Mail className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                <p className="text-lg text-gray-600">pugnifederica@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Telefono</h3>
                <p className="text-lg text-gray-600">+39 392-6730517</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;