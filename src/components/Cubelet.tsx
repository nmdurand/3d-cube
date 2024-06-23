import { rubiksSides } from "../consts";
import { useContext, useState } from "react";
import { Euler, Vector3 } from "three";
import { getCurrentPosition } from "../utils";
import { MovesContext } from "../context/movesContext";

export function Cubelet({
  position,
}: {
  position: { x: number; y: number; z: number };
}) {
  // On first render record the initial position of the cubelet
  const [initialPosition] = useState(position);

  const { current: currentMoves } = useContext(MovesContext);

  console.log(">>> moves", currentMoves);
  const { rotation: currentRotation } = getCurrentPosition({
    initialPosition,
    moves: currentMoves,
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
