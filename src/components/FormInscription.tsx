"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

export default function FormInscription() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full lg:w-3/5 mx-auto">
      <Card className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md">
        <CardContent className="p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center gap-4 py-12">
              <h3 className="text-xl font-bold text-white">
                Inscription réussie !
              </h3>
              <p className="text-white/70 text-center">
                Merci de vous être inscrit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Titre */}
              <div className="mb-4">
                <h2 className="text-4xl font-bold text-white">
                  Formulaire d'inscription
                </h2>
                <p className="text-white/70 text-sm mt-2">
                  Rejoignez nos formations pour développer vos compétences
                  numériques et professionnelles. Inscrivez-vous dès maintenant
                  et choisissez la formation qui correspond à vos objectifs.
                </p>
              </div>

              {/* Post-nom + Prénom */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <Label className="text-white/80 text-sm">Prenom</Label>
                  <Input
                    defaultValue="Prenom"
                    required
                    className="h-12 bg-black border border-white/20 text-white  rounded-md"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <Label className="text-white/80 text-sm">Post-nom</Label>
                  <Input
                    defaultValue="Post-nom"
                    required
                    className="h-12 bg-black border border-white/20 text-white rounded-md"
                  />
                </div>
              </div>

              {/* Formation */}
              <div className="relative">
                <select
                  id="formation"
                  required
                  className="w-full bg-black border border-white/20 text-white p-3 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-afrix-blue appearance-none"
                >
                  <option value="" className="text-black">
                    Choisissez une formation
                  </option>
                  <option value="formation1" className="text-white">
                    Initiation à l'informatique
                  </option>
                  <option value="formation2" className="text-white">
                    Kobo Collect et analyse des données
                  </option>
                  <option value="formation3" className="text-white">
                    Excel avancé et analyse statistique
                  </option>
                  <option value="formation4" className="text-white">
                    Cartographie et SIG
                  </option>
                  <option value="formation5" className="text-white">
                    Intelligence artificielle
                  </option>
                </select>

                {/* Flèche personnalisée */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-4 h-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {/* Téléphone + Email */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <Label className="text-white/80 text-sm">Téléphone</Label>
                  <Input
                    type="tel"
                    defaultValue="+243..."
                    required
                    className="h-12 bg-black border border-white/20 text-white rounded-md"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  <Label className="text-white/80 text-sm">Email</Label>
                  <Input
                    type="email"
                    defaultValue="email@gmail.com"
                    required
                    className="h-12 bg-black border border-white/20 text-white rounded-md"
                  />
                </div>
              </div>

              {/* Ville + Pays */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-2">
                  <Label className="text-white/80 text-sm">Ville</Label>
                  <Input
                    defaultValue="Ville"
                    required
                    className="h-12 bg-black border border-white/20 text-white rounded-md"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <Label className="text-white/80 text-sm">Pays</Label>
                  <Input
                    defaultValue="Pays"
                    required
                    className="h-12 bg-black border border-white/20 text-white rounded-md"
                  />
                </div>
              </div>

              {/* Ordinateur */}
              <div>
                <Label className="text-white/80 text-sm">
                  Avez-vous un ordinateur ?
                </Label>

                <div className="flex gap-6 mt-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="pc"
                      value="oui"
                      required
                      className="hidden peer"
                    />
                    <div className="w-5 h-5 bg-black border-1 border-white flex items-center justify-center peer-checked:bg-afrix-blue transition-colors duration-200">
                      <div className="w-2 h-2 bg-white hidden peer-checked:block rounded-sm"></div>
                    </div>
                    <span className="text-white text-sm">Oui</span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="pc"
                      value="non"
                      required
                      className="hidden peer"
                    />
                    <div className="w-5 h-5 bg-black border- border-white flex items-center justify-center peer-checked:bg-afrix-blue transition-colors duration-200">
                      <div className="w-2 h-2 bg-white hidden peer-checked:block rounded-sm"></div>
                    </div>
                    <span className="text-white text-sm">Non</span>
                  </label>
                </div>
              </div>

              {/* Modalité */}
              <div>
                <Label className="text-white/80 text-sm">
                  Préférez-vous suivre la formation :
                </Label>

                <div className="flex gap-6 mt-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="modalite"
                      value="presentiel"
                      required
                      className="hidden peer"
                    />
                    <div className="w-5 h-5 bg-black border-1 border-white flex items-center justify-center peer-checked:bg-afrix-blue transition-colors duration-200">
                      <div className="w-2 h-2 bg-white hidden peer-checked:block rounded-sm"></div>
                    </div>
                    <span className="text-white text-sm">
                      En présentiel (Afrix Global)
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="modalite"
                      value="enligne"
                      required
                      className="hidden peer"
                    />
                    <div className="w-5 h-5 bg-black border-1 border-white flex items-center justify-center peer-checked:bg-afrix-blue transition-colors duration-200">
                      <div className="w-2 h-2 bg-white hidden peer-checked:block rounded-sm"></div>
                    </div>
                    <span className="text-white text-sm">En ligne</span>
                  </label>
                </div>
              </div>

              {/* Pourquoi (textarea) */}
              <div className="flex flex-col gap-2">
                <Label className="text-white/80 text-sm">
                  Pourquoi souhaitez-vous suivre cette formation ?
                </Label>
                <textarea
                  rows={4}
                  defaultValue="Votre motivation..."
                  className="bg-black border border-white/20 text-white rounded-md p-3"
                />
              </div>

              <Button className="w-full md:w-full p-6 bg-afrix-blue hover:bg-afrix-blue/80 cursor-pointer">
                S'inscrire
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
