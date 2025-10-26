import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
// Rimuoviamo Link da react-router-dom

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full py-20 md:py-32 lg:py-48 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center">
      <div className="container text-center z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
          La Tua Assistente Virtuale Dedicata
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-200">
          Supporto amministrativo, organizzativo e tecnico a distanza per liberi professionisti e piccole imprese.
        </p>
        <a href="#contact"> {/* Modificato da Link a <a> */}
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 hover:text-blue-700 transition-all duration-300 shadow-lg opacity-0 animate-fade-in-up animation-delay-400">
            Contattami Ora <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;