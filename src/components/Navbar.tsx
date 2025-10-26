import React from "react";
// Rimuoviamo Link da react-router-dom per i link interni alla pagina
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <a href="/" className="text-lg font-bold"> {/* Usiamo <a> per il link alla home */}
          Federica Pugni Virtual Assistance
        </a>
        <div className="flex items-center space-x-4">
          <a href="#services"> {/* Usiamo <a> per i link alle sezioni */}
            <Button variant="ghost">Servizi</Button>
          </a>
          <a href="#about">
            <Button variant="ghost">Chi Sono</Button>
          </a>
          <a href="#skills">
            <Button variant="ghost">Competenze</Button>
          </a>
          <a href="#testimonials">
            <Button variant="ghost">Testimonianze</Button>
          </a>
          <a href="#pricing">
            <Button variant="ghost">Tariffe</Button>
          </a>
          <a href="#contact">
            <Button variant="ghost">Contatti</Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;