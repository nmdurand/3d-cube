import { Canvas } from "@react-three/fiber";
import { Cubelet } from "./components/Cubelet";
import { OrbitControls } from "@react-three/drei";
import { Controls } from "./components/Controls";
import { MovesContext } from "./context/movesContext";
import { MovesProvider } from "./context/movesContext";
import { MovesHistory } from "./components/MovesHistory";
import "./globals.css";
import { useContext } from "react";

function Scene() {
  const { cubeData } = useContext(MovesContext);

  return (
    <mesh>
      {cubeData.map((cubeletData, index) => {
        return <Cubelet key={`cubelet-${index}`} cubeletData={cubeletData} />;
      })}
    </mesh>
  );
}

function App() {
  return (
    <MovesProvider>
      <div className="h-full flex flex-col">
        <MovesHistory />
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
