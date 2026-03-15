"use client";

import Image from "next/image";
import ImgAbout2 from "@/public/images/pub2.jpeg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "../../components/AnimatedCounter";
// import { Rocket, Globe } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full min-h-[80vh] flex flex-col justify-center gap-12  items-center px-[10%] md:px-40  bg-afrix-dark"
      style={{
        backgroundImage:
          "radial-gradient(circle at 10% 100%, rgba(244, 180, 0, 0.3), transparent 25%), radial-gradient(circle at 100% 0%, rgba(219, 68, 55, 0.3), transparent 35%)",
      }}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
        <span className="text-afrix-green">A PROPOS DE </span> NOUS
      </h2>

      <div className="w-full flex flex-col items-start md:flex-row  gap-16">
        <div className=" w-full lg:w-1/2  relative">
          <div className="w-full h-full rounded md:rounded-bl-[5rem] overflow-hidden ">
            {" "}
            <Image
              src={ImgAbout2}
              alt="portrait about"
              className="object-cover scale-x-[-1]"
            />
          </div>
          <div className=" grid place-content-center w-20 md:w-28  h-20 md:h-28 text-center text-white bg-afrix-green rounded-full absolute -bottom-6 md:-top-12 -right-4 md:-left-10  ">
            <h1 className="font-extrabold text-xl md:text-2xl">
              +
              <span>
                {" "}
                <AnimatedCounter target={100} />
              </span>
            </h1>
            <p className="font-semibold text-xs uppercase">Membres</p>
          </div>
        </div>

        <div className=" full md:w-1/2 md:flex flex-col justify-center  text-slate-200">
          <h2 className=" text-2xl md:text-4xl text-afrix-blue  font-semibold">
            Des Compétences Techniques au Service de l’Innovation
          </h2>
          <div className="my-4">
            <p className="my-4 font-semibold">
              Notre équipe s’appuie sur une solide expertise technique et des
              formations professionnelles en technologies modernes pour
              concevoir des solutions numériques fiables et performantes.
            </p>
            <p className="my-4">
              Grâce à notre engagement pour l’innovation et l’apprentissage
              continu, nous développons des solutions qui accompagnent
              efficacement la transformation digitale des entreprises.
            </p>
          </div>
          <Link href="#">
            <Button
              variant={"default"}
              size={"lg"}
              className="w-36 md:w-45 p-6   bg-afrix-blue  hover:bg-afrix-blue/80 cursor-pointer"
            >
              Savoir plus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
