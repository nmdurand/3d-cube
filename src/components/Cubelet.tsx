import { Vector3 } from "three";
import { CubeletData } from "../context/movesContext";

export function Cubelet({ cubeletData }: { cubeletData: CubeletData }) {
  const { initialPosition, transforms, colors } = cubeletData;
  const key = `${initialPosition.x}-${initialPosition.y}-${initialPosition.z}`;
  const currentTransform = transforms[transforms.length - 1];

  return (
    <mesh
      quaternion={[
        currentTransform.x,
        currentTransform.y,
        currentTransform.z,
        currentTransform.w,
      ]}
    >
      <mesh
        position={
          new Vector3(initialPosition.x, initialPosition.y, initialPosition.z)
        }
      >
        <boxGeometry attach="geometry" args={[1, 1, 1]} />
        {colors.map((color, i) => (
          <meshBasicMaterial
            key={`${key}-${i}`}
            attach={`material-${i}`}
            color={color}
          />
        ))}
      </mesh>
    </mesh>
  );
}
