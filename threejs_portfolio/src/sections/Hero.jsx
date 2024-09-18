import { Canvas } from "@react-three/fiber";
import { HackerRoom } from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index";
import Target from "../components/Target";

const Hero = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobil = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobil, isTablet);

  return (
    <section className="min-h-screen w-full flex flex-col relative">
      <div className="w-full flex flex-col gap-3 mx-auto sm:mt-36 mt-20 c-space">
        <p className="sm:text-3xl text-2xl text-white text-center font-medium font-generalsans ">
          Hi, I am Esraa <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>
      <div className="w-full h-full absolute inset-0 lg:mt-32">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
            <HackerRoom
              scale={sizes.deskScale}
              position={sizes.deskPosition}
              rotation={[0, Math.PI, 0]}
            />
            <group>
              <Target position={sizes.targetPosition} />
            </group>
            <ambientLight intensity={1} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
