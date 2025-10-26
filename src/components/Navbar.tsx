import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: "Servizi" },
    { href: "#about", label: "Chi Sono" },
    { href: "#skills", label: "Competenze" },
    { href: "#testimonials", label: "Testimonianze" },
    { href: "#pricing", label: "Tariffe" },
    { href: "#contact", label: "Contatti" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <a href="/" className="text-base sm:text-lg font-bold truncate">
          Federica Pugni Virtual Assistance
        </a>

        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              <Button variant="ghost" size="sm" className="text-sm lg:text-base">
                {link.label}
              </Button>
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <div className="container py-4 flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick}>
                <Button variant="ghost" className="w-full justify-start text-left">
                  {link.label}
                </Button>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;