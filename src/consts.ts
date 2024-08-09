import { Quaternion, Vector3 } from "three";
import { Move } from "./context/move";

export const IDENTITY_QUATERNION = new Quaternion(0, 0, 0, 1);

export type Scalar = -1 | 0 | 1;
export const positions: Scalar[] = [-1, 0, 1];

type RubiksSide = {
  move: Move;
  // color
  color: string;
  // Condition for a cubelet to be in this side
  isInSide: (position: Vector3) => boolean;
  // Rotation quaternion corresponding to the move
  rotationQuaternion: Quaternion;
};

/* faces order: right left top bottom front back */
export const rubiksSides: RubiksSide[] = [
  {
    move: Move.R,
    color: "#0046ad", // blue
    isInSide: (position) => position.x === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      -Math.PI / 2,
    ),
  },
  {
    move: Move.L,
    color: "#009b48", // green
    isInSide: (position) => position.x === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(-1, 0, 0),
      -Math.PI / 2,
    ),
  },
  {
    move: Move.U,
    color: "#FFFFFF", // white
    isInSide: (position) => position.y === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 1, 0),
      -Math.PI / 2,
    ),
  },
  {
    move: Move.D,
    color: "#ffd500", // yellow
    isInSide: (position) => position.y === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, -1, 0),
      -Math.PI / 2,
    ),
  },
  {
    move: Move.F,
    color: "#b71234", // red
    isInSide: (position) => position.z === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, 1),
      -Math.PI / 2,
    ),
  },
  {
    move: Move.B,
    color: "#ff5800", // orange
    isInSide: (position) => position.z === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, -1),
      -Math.PI / 2,
    ),
  },
];
