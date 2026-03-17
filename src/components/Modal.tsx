"use client";

import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 overflow-y-auto backdrop-blur-md">
      
      {/* Bouton fermer */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white text-3xl font-bold z-50"
      >
        ×
      </button>

      {/* Contenu */}
      <div className="min-h-screen flex items-start justify-center p-4 lg:p-8">
        {children}
      </div>
    </div>
  );
}