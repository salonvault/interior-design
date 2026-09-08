declare module "threejs-components/build/backgrounds/liquid1.min.js" {
  type LiquidBackgroundApp = {
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

  const LiquidBackground: (
    canvas: HTMLCanvasElement,
  ) => LiquidBackgroundApp;

  export default LiquidBackground;
}
