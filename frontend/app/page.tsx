"use client";

import { useRef } from "react";
import BookSection from "@/components/BookSection";
import LogosSection from "@/components/LogosSection";
import PostersSection from "@/components/PostersSection";
import TopSection from "@/components/TopSection";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex min-h-screen flex-col">
      <TopSection scrollRef={scrollRef} />
      <PostersSection scrollRef={scrollRef} />
      <LogosSection />
      <BookSection />
      <Footer />
    </main>
  );
}
