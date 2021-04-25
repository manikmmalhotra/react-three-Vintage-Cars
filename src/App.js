import { Canvas, useFrame } from "@react-three/fiber";
import "./App.scss";
import Header from "./components/header";
import { Section } from "./components/section";
import { Html, useProgress, useGLTF, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const Model = () => {
  const gltf = useGLTF("/scene.gltf", true);
  return <primitive object={gltf.scene} dispose={null} />;
};

function ModelCar({ scale, position }) {
  const ref = useRef();
  // var rotY = 0;
  // rotY = ref.current.rotation.y + 10;
  useFrame(() => (ref.current.rotation.y = Math.PI / 2));
  return (
    <mesh ref={ref} scale={scale} position={position}>
      <Model />
    </mesh>
  );
}
function Plane({ ...props }) {
  return (
    <mesh {...props} receiveShadow>
      <planeBufferGeometry args={[500, 500, 1, 1]} />
      <shadowMaterial transparent opacity={0.2} />
    </mesh>
  );
}
function App() {
  const d = 8.25;
  return (
    <>
      <Header />
      <div className="central">
        <div className="left">
          <div className="leftIcon">
            <GitHubIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
          <div className="leftbtm">
            <div className="spc"></div>
            <div className="lefttext">
              <h2>Vinatge Cars</h2> Iconic yet accessible, they are
              museum-quality cars that you really just want to take for a spin.
              These automotive legends have weathered the decades.
            </div>
          </div>
        </div>

        <div className="model">
          <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 0, 18] }}>
            <hemisphereLight
              skyColor={"black"}
              groundColor={0xffffff}
              intensity={1.5}
              position={[0, 50, 0]}
            />
            <directionalLight
              position={[-8, 20, 8]}
              shadow-camera-left={d * -1}
              shadow-camera-bottom={d * -1}
              shadow-camera-right={d}
              shadow-camera-top={d}
              shadow-camera-near={0.1}
              shadow-camera-far={1500}
              castShadow
            />
            <mesh position={[0, 0, -10]}>
              <circleBufferGeometry args={[20, 64]} />
              <meshBasicMaterial color="#d8e3e7" />
            </mesh>
            <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -4, 0]} />
            <Suspense fallback={null}>
              <ModelCar position={[1.5, -4, 0]} scale={[5, 5, 5]} />
            </Suspense>
            <OrbitControls />
          </Canvas>
        </div>
        <div className="rightside">
          <div className="rightup"></div>
          <div className="rightIcon">
            <ArrowBackIcon />
            <ArrowForwardIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
