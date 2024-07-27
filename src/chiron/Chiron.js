import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import BugattiChiron from "./Bugatti_chiron"
import Lights from "../components/Lights";

const Chiron = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 12.25], fov: 12.25 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0} />
      <Lights />
      <OrbitControls
        enableZoom={true}
        zoomSpeed={0.6}
        minDistance={5}
        maxDistance={20}
        enablePan={true}
        rotateSpeed={0.5}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.1}
      />
      <Suspense fallback={null}>
        <BugattiChiron position={[0, -0.75, 0]} />
      </Suspense>
      <ContactShadows blur={1} scale={20} resolution={256} color={"#000000"} />
    </Canvas>
  );
};

export default Chiron;
