import { rubiksSides } from "../consts";
import { useState } from "react";
import { Euler, Vector3 } from "three";
import { getCurrentPosition } from "../utils";

// For testing purposes
const MOVES = ["B"];

export function Cubelet({
  position,
}: {
  position: { x: number; y: number; z: number };
}) {
  // On first render record the initial position of the cubelet
  const [initialPosition] = useState(position);

  const { rotation: currentRotation } = getCurrentPosition({
    initialPosition,
    moves: MOVES,
  });

  return (
    <mesh
      rotation={
        new Euler(currentRotation.x, currentRotation.y, currentRotation.z)
      }
    >
      <mesh
        position={
          new Vector3(initialPosition.x, initialPosition.y, initialPosition.z)
        }
      >
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        {rubiksSides.map(({ color, isInSide }, i) => (
          <meshBasicMaterial
            key={color}
            attach={`material-${i}`}
            color={isInSide(initialPosition) ? color : "#000000"}
          />
        ))}
      </mesh>
    </mesh>
  );
}
