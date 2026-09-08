"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type LiquidApp = {
  loadImage: (source: string) => void;
  setRain: (enabled: boolean) => void;
  dispose?: () => void;
  liquidPlane: {
    material: {
      metalness: number;
      roughness: number;
    };
    uniforms: {
      displacementScale: { value: number };
    };
  };
};

export default function LiquidEffectAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const appRef = useRef<LiquidApp | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!canvas || reducedMotion) return;

    let cancelled = false;

    async function createLiquidBackground() {
      try {
        const { default: LiquidBackground } = await import(
          "threejs-components/build/backgrounds/liquid1.min.js"
        );

        if (cancelled || !canvas) return;

        const app = LiquidBackground(canvas) as LiquidApp;
        app.loadImage("/images/rest-room.png");
        app.liquidPlane.material.metalness = 0.72;
        app.liquidPlane.material.roughness = 0.28;
        app.liquidPlane.uniforms.displacementScale.value = 3.6;
        app.setRain(false);
        appRef.current = app;
      } catch (error) {
        console.error("Liquid background could not be initialized.", error);
      }
    }

    void createLiquidBackground();

    return () => {
      cancelled = true;
      appRef.current?.dispose?.();
      appRef.current = null;
    };
  }, []);

  return (
    <section className="liquid-feature" aria-labelledby="liquid-feature-title">
      <Image
        src="/images/rest-room.png"
        alt="Contemporary restroom with refined stone and warm interior detailing"
        fill
        sizes="100vw"
        className="liquid-feature-fallback"
      />
      <canvas
        ref={canvasRef}
        className="liquid-feature-canvas"
        aria-hidden="true"
      />
      <div className="liquid-feature-shade" aria-hidden="true" />
      <div className="liquid-feature-copy container">
        <h2 id="liquid-feature-title">
          Living <em>Future.</em>
        </h2>
      </div>
    </section>
  );
}
