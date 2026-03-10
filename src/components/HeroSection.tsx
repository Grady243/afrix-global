"use client";

import image from "@/public/images/herosection.png";
import Image from "next/image";
import LogoAfrix from "@/public/images/logo-afrix3.png";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// const phrases = [
//   "We Train. We Create. We Connect.",
//   "Formation. Innovation. Croissance.",
//   "Compétences. Réseau. Opportunités.",
//   "Apprendre. Créer. Connecter.",
// ];

// function useSequentialPhrases(phrases: string[], speed = 50, pause = 2000) {
//   const [displayedText, setDisplayedText] = useState("");
//   const [phraseIndex, setPhraseIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentPhrase = phrases[phraseIndex];

//     let timeout: NodeJS.Timeout;

//     if (!isDeleting && charIndex < currentPhrase.length) {
//       timeout = setTimeout(() => {
//         setDisplayedText(currentPhrase.slice(0, charIndex + 1));
//         setCharIndex(charIndex + 1);
//       }, speed);
//     } else if (!isDeleting && charIndex === currentPhrase.length) {
//       timeout = setTimeout(() => {
//         setIsDeleting(true);
//       }, pause);
//     } else if (isDeleting && charIndex > 0) {
//       timeout = setTimeout(() => {
//         setDisplayedText(currentPhrase.slice(0, charIndex - 1));
//         setCharIndex(charIndex - 1);
//       }, speed / 2);
//     } else if (isDeleting && charIndex === 0) {
//       setIsDeleting(false);
//       setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//     }

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, phraseIndex, phrases, speed, pause]);

//   return displayedText;
// }

export default function HeroSection() {
  // const animatedText = useSequentialPhrases(phrases);

  return (
    <section
      className="relative flex flex-col items-center justify-center w-full h-screen bg-afrix-dark pt-30 overflow-hidden "
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 100%, rgba(244, 180, 0, 0.05), transparent 35%), radial-gradient(circle at 100% 0%, rgba(219, 68, 55, 0.3), transparent 35%)",
      }}
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-[5vw]">
        {/* Left side */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] font-bold italic leading-tight text-white min-h-[3em]">
            {animatedText}
            <span className="animate-pulse ml-1">|</span>
          </h1> */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6vw] font-bold italic leading-tight text-white">
            We Train. <br />
            We Create. <br />
            We Connect.
          </h1>

          {/* buttons hero section  */}
          <div className="space-x-8 mt-8">
            <Link href="#">
              {" "}
              <Button
                variant={"default"}
                size={"lg"}
                className="w-45 p-6  bg-afrix-blue  hover:bg-afrix-blue/80 cursor-pointer"
              >
                Savoir plus
              </Button>
            </Link>

            <Link href="/contact">
              <Button className="w-45 p-6 bg-transparent border-2 border-afrix-blue hover:bg-afrix-blue cursor-pointer">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>

        {/* Right side - Container with relative positioning */}

        <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-87.5 sm:min-h-100 lg:min-h-[35vw]">
          {/* Main circle container */}
          {/* <div className=" grid place-items-center w-150 h-150 rounded-full border-2 border-afrix-yellow">
            <div className="grid place-items-center w-[70%] h-[70%] rounded-full border-80 border-afrix-yellow">
              <div className="grid place-items-center w-[70%] h-[70%] rounded-full border-2 border-afrix-yellow">
                <div className="grid place-items-center w-[70%] h-[70%] rounded-full border-2 border-afrix-yellow">
                  <div className="grid place-items-center w-[70%] h-[70%] rounded-full border-2 border-afrix-yellow">
                    <div className="grid place-items-center w-[70%] h-[70%] rounded-full border-2 border-afrix-yellow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className=" grid place-items-center w-150 h-150">
            <Image src={LogoAfrix} alt="logo afrix" />
          </div>
          <div className="absolute top-12 right-0">
            <Image src={image} alt="Image hero section" />
          </div>
        </div>
      </div>
    </section>
  );
}
