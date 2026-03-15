"use client";

import image from "@/public/images/herosection/hero_section_image.webp";
import Image from "next/image";
import LogoAfrix from "@/public/images/image_herosection1.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full h-screen bg-afrix-dark pt-30 overflow-hidden "
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 100%, rgba(244, 180, 0, 0.05), transparent 35%), radial-gradient(circle at 100% 0%, rgba(219, 68, 55, 0.3), transparent 35%)",
      }}
    >
      <div className="container mx-auto  px-4 flex flex-col lg:flex-row items-center gap-8 lg:gap-[5vw] relative md:static top-40">
        {/* Left side */}
        <div className=" w-full lg:w-1/2 mb-8 lg:mb-0 z-2 md:z-0">
          <h1 className="text-4xl text-center md:text-start sm:text-5xl md:text-6xl lg:text-[6vw] font-bold italic leading-tight text-white">
            We Train. <br />
            We Create. <br />
            We Connect.
          </h1>

          {/* buttons hero section  */}
          <div className="flex justify-center md:justify-start gap-x-8 mt-8">
            <Link href="#">
              {" "}
              <Button
                variant={"default"}
                size={"lg"}
                className="w-36 md:w-45 p-6  bg-afrix-blue  hover:bg-afrix-blue/80 cursor-pointer"
              >
                Savoir plus
              </Button>
            </Link>

            <Link href="/contact">
              <Button className="w-36 md:w-45 p-6 bg-transparent border border-afrix-blue hover:bg-afrix-blue cursor-pointer">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>

        {/* Right side - Container with relative positioning */}

        <div className="relative -top-36 md:top-0 w-[90%] md:w-[80%]  lg:w-1/2 flex items-center justify-center min-h-87.5 sm:min-h-100 lg:min-h-[35vw]">
          <div className="grid place-items-center w-150 h-150 z-1 md:z-0">
            <Image src={LogoAfrix} alt="logo afrix" />
          </div>
          <div className="absolute  md:top-12 w-full md:w-auto h-auto  z-2 md:z-0">
            <Image src={image} alt="Image hero section" />
          </div>
        </div>
      </div>
    </section>
  );
}
