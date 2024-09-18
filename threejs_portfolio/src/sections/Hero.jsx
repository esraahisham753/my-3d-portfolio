import { Canvas } from "@react-three/fiber";
import {HackerRoom} from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import { Leva, useControls } from "leva";

const Hero = () => {
  const x = useControls('HackerRoom', {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10
    },
    rotationX: {
      value: 0.1,
      min: -10,
      max: 10
    },
    rotationY: {
      value: 0.1,
      min: -10,
      max: 10
    },
    rotationZ: {
      value: 0.1,
      min: -10,
      max: 10
    },
    scale: {
      value: 0.1,
      min: 0.1,
      max: 10
    }
  });

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
      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              scale={0.07}
              position={[0, 0, 0]}
              rotation={[0, 280, 0]}
            />
            <ambientLight intensity={1}/>
            <directionalLight intensity={0.5} position={[10, 10, 10]}/>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
