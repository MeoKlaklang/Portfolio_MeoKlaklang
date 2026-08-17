import { useEffect, useRef } from "react";
import { Rive, Layout, Fit, Alignment } from "@rive-app/webgl2";

export default function CatMovement() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const base = import.meta.env.BASE_URL;
    const rive = new Rive({
      src: `${base}cat_movement.riv`,
      canvas: canvasRef.current,
      autoplay: true,
      layout: new Layout({
        fit: Fit.Contain,
        alignment: Alignment.Center, // ✅ cat perfect in het midden
      }),

      onLoad: () => console.log("✅ Rive loaded"),
      onLoadError: (e) => console.error("❌ Rive load error:", e),
    });

    return () => rive.cleanup();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={400}
      style={{
        width: 600,          
        height: 400,
        display: "block",
        margin: "0 auto",    
      }}
    />
  );
}
