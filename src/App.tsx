import { Canvas } from "@react-three/fiber";
import { Cubelet } from "./components/Cubelet";
import { OrbitControls } from "@react-three/drei";
import { Controls } from "./components/Controls";
import { positions } from "./consts";
import { MovesProvider } from "./context/movesContext";
import "./globals.css";

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
    <MovesProvider>
      <div className="h-full flex flex-col">
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={1} />
          <Scene />
        </Canvas>
        <Controls />
      </div>
    </MovesProvider>
  );
}

export default App;
