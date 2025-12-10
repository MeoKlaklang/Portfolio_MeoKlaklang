import { useEffect, useRef } from "react";
import { Rive, Layout, Fit } from "@rive-app/webgl2";

export default function CatMovement() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const layout = new Layout({ fit: Fit.Contain });
    const rive = new Rive({
      src: "/cat_movement.riv",
      canvas: canvasRef.current,
      artboard: "Artboard",         // pas aan indien anders
      stateMachines: "State Machine 1", // pas aan indien anders
      autoplay: true,
      layout,
      autoBind: true,
    });

    return () => rive.cleanup();
  }, []);

  return <canvas ref={canvasRef} style={{ width: 200, height: 200 }} />;
}
