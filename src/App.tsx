import { Canvas } from "@react-three/fiber";
import { Cubelet } from "./components/Cubelet";
import { OrbitControls } from "@react-three/drei";
import { positions } from "./consts";
import "./App.css";

const cubeletPositions = positions.flatMap((x) =>
  positions.flatMap((y) => positions.map((z) => ({ x, y, z }))),
);

function Scene() {
  return (
    <mesh>
      {cubeletPositions.map((position) => (
        <Cubelet
          key={`${position.x}+${position.y}+${position.z}`}
          position={position}
        />
      ))}
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={1} />
      <Scene />
    </Canvas>
  );
}

export default App;
