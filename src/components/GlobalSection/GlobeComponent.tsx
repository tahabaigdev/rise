import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

const GlobeComponent: React.FC = () => {
  const globeRef = useRef<any>(null);
  const [arcsData, setArcsData] = useState<any[]>([]);

  useEffect(() => {
    const N = 20;
    const genArcs = Array.from({ length: N }, () => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [
        ["red", "white", "blue", "green"][Math.floor(Math.random() * 4)],
        ["red", "white", "blue", "green"][Math.floor(Math.random() * 4)],
      ],
    }));
    setArcsData(genArcs);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enableZoom = false; // Disable zooming (scroll zoom)
      }

      const renderer = globeRef.current.renderer();
      if (renderer) {
        renderer.setClearColor(0x000000, 0); // Transparent background
      }

      // Access the globe's internal 3D object (scene) and scale it
      const globeScene = globeRef.current.scene();
      if (globeScene) {
        globeScene.scale.set(2, 2, 2); // Increase the globe size (x2)
      }
    }
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
