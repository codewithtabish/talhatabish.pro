"use client";

import { Button } from "@/components/ui/button";
import type {
  GlobalOptions as ConfettiGlobalOptions,
  CreateTypes as ConfettiInstance,
  Options as ConfettiOptions,
} from "canvas-confetti";
import confetti from "canvas-confetti";
import type { ReactNode, ComponentPropsWithoutRef } from "react";
import React, {
  createContext,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";

type Api = {
  fire: (options?: ConfettiOptions) => void;
};

type Props = React.ComponentPropsWithRef<"canvas"> & {
  options?: ConfettiOptions;
  globalOptions?: ConfettiGlobalOptions;
  manualstart?: boolean;
  children?: ReactNode;
};

export type ConfettiRef = Api | null;

const ConfettiContext = createContext<Api>({} as Api);

// Helper for a longer, full-page confetti effect
const fireFullPageConfetti = (instance: any) => {
  const defaults = {
    spread: 360,
    ticks: 160, // makes it last longer
    gravity: 0.7,
    decay: 0.94,
    startVelocity: 20,
    zIndex: 9999,
  };

  // Fire from left, center, right
  instance({ ...defaults, particleCount: 80, origin: { x: 0.1, y: 0.6 } });
  instance({ ...defaults, particleCount: 120, origin: { x: 0.5, y: 0.5 } });
  instance({ ...defaults, particleCount: 80, origin: { x: 0.9, y: 0.6 } });

  // Fire a few more bursts for a longer effect
  setTimeout(() => {
    instance({ ...defaults, particleCount: 60, origin: { x: 0.2, y: 0.4 } });
    instance({ ...defaults, particleCount: 60, origin: { x: 0.8, y: 0.4 } });
  }, 400);

  setTimeout(() => {
    instance({ ...defaults, particleCount: 40, origin: { x: 0.5, y: 0.7 } });
  }, 800);
};

const ConfettiComponent = forwardRef<ConfettiRef, Props>((props, ref) => {
  const {
    options,
    // --- FIX: useWorker: false to avoid OffscreenCanvas error ---
    globalOptions = { resize: true, useWorker: false },
    manualstart = false,
    children,
    ...rest
  } = props;
  const instanceRef = useRef<ConfettiInstance | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Set canvas size ONCE before creating confetti instance
  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    }
  }, []);

  // Setup confetti instance
  useEffect(() => {
    if (canvasRef.current && !instanceRef.current) {
      instanceRef.current = confetti.create(canvasRef.current, {
        ...globalOptions,
        resize: true,
      });
    }
    return () => {
      instanceRef.current?.reset();
      instanceRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [globalOptions]);

  // Remove window resize handler to avoid resizing after OffscreenCanvas
  // If you want to support resizing, you must destroy and recreate the confetti instance on resize

  const fire = useCallback(
    async (_opts = {}) => {
      try {
        if (instanceRef.current) {
          fireFullPageConfetti(instanceRef.current);
        }
      } catch (error) {
        console.error("Confetti error:", error);
      }
    },
    [],
  );

  const api = useMemo(() => ({ fire }), [fire]);

  useImperativeHandle(ref, () => api, [api]);

  // Fire confetti automatically on mount (page load)
  useEffect(() => {
    // Always fire on mount, ignore manualstart
    fire();
    // If you want to only fire once per session, you can add logic here
  }, [fire]);

  return (
    <ConfettiContext.Provider value={api}>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9999,
          ...rest.style,
        }}
        // width/height set by JS to match window size
        {...rest}
      />
      {children}
    </ConfettiContext.Provider>
  );
});

ConfettiComponent.displayName = "Confetti";

export const Confetti = ConfettiComponent;

// Optional: Button to trigger confetti manually
interface ConfettiButtonProps extends ComponentPropsWithoutRef<typeof Button> {
  options?: ConfettiOptions &
    ConfettiGlobalOptions & { canvas?: HTMLCanvasElement };
  children?: React.ReactNode;
}

const ConfettiButtonComponent = ({
  options,
  children,
  ...props
}: ConfettiButtonProps) => {
  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      // Fire a full-page confetti burst on button click
      fireFullPageConfetti(confetti);
    } catch (error) {
      console.error("Confetti button error:", error);
    }
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
};

ConfettiButtonComponent.displayName = "ConfettiButton";

export const ConfettiButton = ConfettiButtonComponent;
