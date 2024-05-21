import { rubiksSides } from "../consts";
import { useState } from "react";
import { Vector3 } from "three";

export function Cubelet({
  position,
}: {
  position: { x: number; y: number; z: number };
}) {
  // On first render record the initial position of the cubelet
  const [initialPosition] = useState(position);
  return (
    <mesh position={new Vector3(position.x, position.y, position.z)}>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      {rubiksSides.map(({ color, isCubeletOnSide }, i) => (
        <meshBasicMaterial
          key={color}
          attach={`material-${i}`}
          color={isCubeletOnSide(initialPosition) ? color : "#000000"}
        />
      ))}
    </mesh>
  );
}
