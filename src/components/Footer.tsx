import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-card text-card-foreground text-center">
      <div className="container">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Federica Pugni. Tutti i diritti riservati.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;