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
		<div className="w-full lg:w-2/5 mx-auto">
			<Card className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md">
				<CardContent className="p-8">
					{submitted ? (
						<div className="flex flex-col items-center justify-center gap-4 py-12">
							<h3 className="text-xl font-bold text-white">Inscription réussie !</h3>
							<p className="text-white/70 text-center">
								Merci de vous être inscrit. Vous pouvez maintenant vous connecter.
							</p>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="flex flex-col gap-6">
							{/* Titre */}
							<div className="mb-4">
								<h2 className="text-4xl font-bold text-white">Formulaire d'inscription</h2>
								<p className="text-white/70 text-sm mt-2">
									Rejoignez nos formations pour développer vos compétences numériques et professionnelles.
									Inscrivez-vous dès maintenant et choisissez la formation qui correspond à vos objectifs.
								</p>
							</div>

							{/* Post-nom + Prénom */}
							<div className="flex flex-col sm:flex-row gap-4">
								<div className="flex-1 flex flex-col gap-2">
									<Label className="text-white/80 text-sm">Prenom</Label>
									<Input placeholder="Prenom" required className="h-12 bg-white/5 border-white/20 text-white" />
								</div>

								<div className="flex-1 flex flex-col gap-2">
									<Label className="text-white/80 text-sm">Post-nom</Label>
									<Input placeholder="Post-nom" required className="h-12 bg-white/5 border-white/20 text-white" />
								</div>
							</div>

							{/* Formation */}
							<div className="flex flex-col gap-2">
								<Label className="text-white/80 text-sm">Formation</Label>
								<select
									id="formation"
									required
									className="bg-black border border-white/20 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-afrix-blue"
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
							</div>

							{/* Téléphone + Email */}
							<div className="flex flex-col sm:flex-row gap-4">
								<div className="flex-1 flex flex-col gap-2">
									<Label className="text-white/80 text-sm">Téléphone</Label>
									<Input
										type="tel"
										placeholder="+243..."
										required
										className="h-12 bg-white/5 border-white/20 text-white"
									/>
								</div>

								<div className="flex-1 flex flex-col gap-2">
									<Label className="text-white/80 text-sm">Email</Label>
									<Input
										type="email"
										placeholder="email@gmail.com"
										required
										className="h-12 bg-white/5 border-white/20 text-white"
									/>
								</div>
							</div>

							{/* Ville + Pays */}
							<div className="flex flex-col sm:flex-row gap-4">
								<Input placeholder="Ville" required className="h-12 bg-white/5 border-white/20 text-white" />
								<Input placeholder="Pays" required className="h-12 bg-white/5 border-white/20 text-white" />
							</div>

							{/* Ordinateur */}
							<div>
								<Label className="text-white/80 text-sm">Avez-vous un ordinateur ?</Label>

								<div className="flex flex-col gap-6 mt-3">
									<label className="flex items-center gap-3 cursor-pointer">
										<input
											type="radio"
											name="pc"
											value="oui"
											required
											className="w-5 h-5 accent-afrix-blue cursor-pointer"
										/>
										<span className="text-white text-sm">Oui</span>
									</label>

									<label className="flex items-center gap-3 cursor-pointer">
										<input
											type="radio"
											name="pc"
											value="non"
											required
											className="w-5 h-5 accent-afrix-blue cursor-pointer"
										/>
										<span className="text-white text-sm">Non</span>
									</label>
								</div>
							</div>

							{/* Modalité */}
							<div>
								<Label className="text-white/80 text-sm">Préférez-vous suivre la formation:</Label>

								<div className="flex flex-col gap-6 mt-3">
									<label className="flex items-center gap-3 cursor-pointer">
										<input
											type="radio"
											name="pc"
											value="oui"
											required
											className="w-5 h-5 accent-afrix-blue cursor-pointer"
										/>
										<span className="text-white text-sm">En presentiel (Afrix Global)</span>
									</label>

									<label className="flex items-center gap-3 cursor-pointer">
										<input
											type="radio"
											name="pc"
											value="non"
											required
											className="w-5 h-5 accent-afrix-blue cursor-pointer"
										/>
										<span className="text-white text-sm">En ligne</span>
									</label>
								</div>
							</div>

							{/* Pourquoi (textarea) */}
							<div className="flex flex-col gap-2">
								<Label className="text-white/80 text-sm">Pourquoi souhaitez-vous suivre cette formation ?</Label>
								<textarea
									rows={4}
									className="bg-white/5 border border-white/20 text-white rounded-md p-3"
									placeholder="Votre motivation..."
								/>
							</div>

							<Button className=" w-full md:w-full p-6  bg-afrix-blue  hover:bg-afrix-blue/80 cursor-pointer">S'inscrire</Button>
						</form>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
