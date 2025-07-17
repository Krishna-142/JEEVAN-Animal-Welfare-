'use client';

import { useEffect, useState } from "react";
import Navbar from "@/app/_components/Navbar/Navbar";
import { FocusCards } from "@/app/_components/ui/focus-cards";

export default function GalleryPage() {
  const [cards, setCards] = useState<{ src: string; title: string }[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/gallery");
        const data = await res.json();

        if (data.success) {
          setCards(data.images);
        } else {
          console.error("API returned error:", data.error);
        }
      } catch (error) {
        console.error("Failed to fetch gallery images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <main className="min-h-screen bg-white text-[#000000] font-sans">
      <Navbar />
      <h1 className="text-3xl font-bold text-center mt-6 mb-10 text-gray-800">
        Sneak Peek Into the Lives We Saved
      </h1>
      <FocusCards cards={cards} />
    </main>
  );
}
