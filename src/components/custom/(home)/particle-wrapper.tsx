"use client";
import { useEffect, useState } from "react";
import { Confetti } from "@/components/custom/(home)/particles";

export default function ConfettiClientWrapper(props: any) {
  // Only render Confetti after the component is mounted on the client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <Confetti {...props} />;
}
