import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="text-lg font-bold">
          Il Tuo Nome VA
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="#services" className={cn(Button({ variant: "ghost" }))}>
            Servizi
          </Link>
          <Link to="#about" className={cn(Button({ variant: "ghost" }))}>
            Chi Sono
          </Link>
          <Link to="#contact" className={cn(Button({ variant: "ghost" }))}>
            Contatti
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;