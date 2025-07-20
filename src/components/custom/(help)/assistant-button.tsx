'use client';

import { Mic } from "lucide-react";
import { useCallback, useState } from "react";

export default function AssistantButton() {
  const [error, setError] = useState<string | null>(null);

  const handleClick = useCallback(() => {
    // @ts-ignore
    if (window.vapiWidgetReady && window.VapiWidget) {
      // @ts-ignore
      window.VapiWidget.open();
      setError(null);
    } else {
      setError("Voice assistant is still loading. Please try again in a moment.");
    }
  }, []);

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-pink-500 shadow-lg p-4 hover:scale-110 transition-transform"
        aria-label="Ask the AI Assistant"
      >
        <Mic className="animate-pulse text-white" size={32} />
      </button>
      {error && (
        <div className="fixed bottom-24 right-8 z-50 bg-red-600 text-white px-4 py-2 rounded shadow">
          {error}
        </div>
      )}
    </>
  );
}
