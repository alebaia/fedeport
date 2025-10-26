import React from "react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Footer = () => {
  return (
    <footer className="w-full py-6 sm:py-8 bg-gray-800 text-white text-center">
      <div className="container px-4">
        <p className="text-xs sm:text-sm mb-2">
          &copy; {new Date().getFullYear()} Federica Pugni. Tutti i diritti riservati.
        </p>
        <MadeWithDyad />
      </div>
    </footer>
  );
};

export default Footer;