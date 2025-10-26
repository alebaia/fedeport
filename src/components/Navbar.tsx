import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils"; // cn non è più necessario qui

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="text-lg font-bold">
          Federica Pugni Virtual Assistance
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="#services">
            <Button variant="ghost">Servizi</Button>
          </Link>
          <Link to="#about">
            <Button variant="ghost">Chi Sono</Button>
          </Link>
          <Link to="#skills">
            <Button variant="ghost">Competenze</Button>
          </Link>
          <Link to="#testimonials">
            <Button variant="ghost">Testimonianze</Button>
          </Link>
          <Link to="#pricing"> {/* Nuovo link per la sezione Tariffe */}
            <Button variant="ghost">Tariffe</Button>
          </Link>
          <Link to="#contact">
            <Button variant="ghost">Contatti</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;