import { useEffect, useRef } from "react";
import { Rive, Layout, Fit } from "@rive-app/webgl2";

export default function CatMovement() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const base = import.meta.env.BASE_URL;
    const rive = new Rive({
      src: `${base}cat_movement.riv`,
      canvas: canvasRef.current,
      autoplay: true,
      layout: new Layout({ fit: Fit.Contain }),

      onLoad: () => console.log("✅ Rive loaded"),
      onLoadError: (e) => console.error("❌ Rive load error:", e),
    });

    return () => rive.cleanup();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      style={{ width: 200, height: 400, display: "block" }}
    />
  );
}
