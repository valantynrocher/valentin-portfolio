"use client";
import React, { useEffect, useState } from "react";
import { DynamicWordsProps } from "./props";

// Étape 2 : Utiliser React.FC (Function Component) et typer les props
const DynamicWords: React.FC<DynamicWordsProps> = ({ words }) => {
  // --- ÉTAT (STATE) ---
  // (Pas de changement ici, TypeScript infère les types)
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // --- VITESSES ---
  const typingSpeed = 120;
  const deletingSpeed = 80;
  const pauseDuration = 2000;

  // --- LOGIQUE (EFFECT) ---
  useEffect(() => {
    const currentWord = words[wordIndex];

    const handleTick = () => {
      if (isDeleting) {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }
    };

    let timer: NodeJS.Timeout; // Étape 3 : Typer le timer

    if (!isDeleting && displayedText === currentWord) {
      // Fini de taper -> pause -> commencer à supprimer
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayedText === "") {
      // Fini de supprimer -> mot suivant -> commencer à taper
      setIsDeleting(false);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    } else {
      // En cours...
      timer = setTimeout(handleTick, isDeleting ? deletingSpeed : typingSpeed);
    }

    // Nettoyer le timer
    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  // --- RENDU (JSX) ---
  return (
    <span className="relative">
      {/* 1. L'animation visuelle */}
      <span aria-hidden="true">
        <span className="text-accent">{displayedText}</span>
        <span className="animate-blinking text-accent">|</span>
      </span>

      {/* 2. Le contenu pour SEO et Accessibilité */}
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
};

export default DynamicWords;
