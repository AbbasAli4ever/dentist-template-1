"use client";
import { AosProvider } from "@/components/animation/AosProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <AosProvider>{children}</AosProvider>;
}
