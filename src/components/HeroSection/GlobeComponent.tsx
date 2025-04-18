import React, { useRef, useEffect, useMemo } from "react";
import Globe from "react-globe.gl";

const GlobeComponent: React.FC = () => {
  const globeRef = useRef<any>(null);

  const arcsData = useMemo(() => {
    const N = 20;
    return Array.from({ length: N }, () => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [
        ["red", "white", "blue", "green"][Math.floor(Math.random() * 4)],
        ["red", "white", "blue", "green"][Math.floor(Math.random() * 4)],
      ],
    }));
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!globeRef.current) return;

      const controls = globeRef.current.controls?.();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enableZoom = false;
      }

      const renderer = globeRef.current.renderer?.();
      if (renderer?.setClearColor) {
        renderer.setClearColor(0x000000, 0); // Transparent background
      }

      const globeScene = globeRef.current.scene?.();
      if (globeScene?.scale?.set) {
        globeScene.scale.set(2, 2, 2); // Increase the globe size
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    return () => {
      if (globeRef.current) {
        try {
          const renderer = globeRef.current.renderer?.();
          const scene = globeRef.current.scene?.();

          if (renderer?.dispose) renderer.dispose();
          if (scene?.dispose) scene.dispose();
        } catch (err) {
          console.warn("WebGL cleanup error:", err);
        }
      }
    };
  }, []);

  return (
    <div className="h-screen w-full">
      <Globe
        ref={globeRef}
        globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        arcsData={arcsData}
        arcColor={"color"}
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 4000 + 500}
        showGlobe={true}
        showAtmosphere={true}
        backgroundColor="rgba(0, 0, 0, 0)" // Transparent background
      />
    </div>
  );
};

export default GlobeComponent;
