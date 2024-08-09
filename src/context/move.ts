import { Quaternion, Vector3 } from "three";

export enum Move {
  R = "R",
  L = "L",
  U = "U",
  D = "D",
  F = "F",
  B = "B",
  M = "M",
}

type MoveDetails = {
  isImpacted: (position: Vector3) => boolean;
  rotationQuaternion: Quaternion;
};

export const movesDetails: Record<Move, MoveDetails> = {
  [Move.R]: {
    isImpacted: (position) => position.x === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      -Math.PI / 2,
    ),
  },
  [Move.L]: {
    isImpacted: (position) => position.x === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(-1, 0, 0),
      -Math.PI / 2,
    ),
  },
  [Move.U]: {
    isImpacted: (position) => position.y === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 1, 0),
      -Math.PI / 2,
    ),
  },
  [Move.D]: {
    isImpacted: (position) => position.y === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, -1, 0),
      -Math.PI / 2,
    ),
  },
  [Move.F]: {
    isImpacted: (position) => position.z === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, 1),
      -Math.PI / 2,
    ),
  },
  [Move.B]: {
    isImpacted: (position) => position.z === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, -1),
      -Math.PI / 2,
    ),
  },
  [Move.M]: {
    isImpacted: (position) => position.x === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      -Math.PI / 2,
    ),
  },
};
