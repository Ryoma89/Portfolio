'use client'
import { Menu } from "lucide-react";
import React, { useState, MouseEvent } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator"
import Image from "next/image";


const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const headerHeight = 96;
    const sectionPosition = section!.offsetTop - headerHeight;
    window.scrollTo({ top: sectionPosition, behavior: "smooth" });
  }

  return (
    <header className="p-5 fixed w-full bg-white z-50">
    <div className="flex justify-between items-center xl:max-w-[1280px] xl:mx-auto">
      <h1>
        <Image width={212} height={56} src="/Logo.png" alt="Ryoma's Portfolio" className="h-14" />
      </h1>
      <nav>
        <div className="sm:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button onClick={() => setOpen(true)}>
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetDescription className="mt-5 text-lg text-black">
                  <li className="py-3">
                    <a href="#About" className="hover:opacity-70" onClick={(e) => { scrollToSection(e, 'About'); setOpen(false); }}>About</a>
                  </li>
                  <Separator />
                  <li className="py-3">
                    <a href="#Works" className="hover:opacity-70" onClick={(e) => { scrollToSection(e, 'Works'); setOpen(false); }}>Works</a>
                  </li>
                  <Separator />
                  <li className="py-3">
                    <a href="#Skills" className="hover:opacity-70" onClick={(e) => { scrollToSection(e, 'Skills'); setOpen(false); }}>Skills</a>
                  </li>
                  <Separator />
                  <li className="py-3">
                    <a href="#Contact" className="hover:opacity-70" onClick={(e) => { scrollToSection(e, 'Contact'); setOpen(false); }}>Contact</a>
                  </li>
                  <Separator />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <ul className="hidden sm:flex sm:items-center">
          <li className="mr-2 md:mr-5 lg:mr-7">
            <a href="#About" className="hover:opacity-70 lg:text-lg xl:text-xl" onClick={(e) => scrollToSection(e, 'About')}>About</a>
          </li>
          <li className="mr-2 md:mr-5 lg:mr-7">
            <a href="#Works" className="hover:opacity-70 lg:text-lg xl:text-xl" onClick={(e) => scrollToSection(e, 'Works')}>Works</a>
          </li>
          <li className="mr-2 md:mr-5 lg:mr-7">
            <a href="#Skills" className="hover:opacity-70 lg:text-lg xl:text-xl" onClick={(e) => scrollToSection(e, 'Skills')}>Skills</a>
          </li>
          <li className="mr-2 md:mr-5 lg:mr-7">
            <a href="#Contact" className="hover:opacity-70 lg:text-lg xl:text-xl" onClick={(e) => scrollToSection(e, 'Contact')}>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  );
};

export default Header;
