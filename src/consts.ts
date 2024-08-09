import { Quaternion, Vector3 } from "three";

export const IDENTITY_QUATERNION = new Quaternion(0, 0, 0, 1);

export type Scalar = -1 | 0 | 1;
export const positions: Scalar[] = [-1, 0, 1];

/* faces order: right left top bottom front back */
export function getCubeletColors(position: Vector3): Array<string> {
  return [
    position.x === 1 ? "#0046ad" : "#000000", // blue,
    position.x === -1 ? "#009b48" : "#000000", // green,
    position.y === 1 ? "#FFFFFF" : "#000000", // white,
    position.y === -1 ? "#ffd500" : "#000000", // yellow,
    position.z === 1 ? "#b71234" : "#000000", // red,
    position.z === -1 ? "#ff5800" : "#000000", // orange,
  ];
}
