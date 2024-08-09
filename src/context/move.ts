import { Quaternion, Vector3 } from "three";

export enum Move {
  R = "R",
  R2 = "R2",
  "R'" = "R'",
  r = "r",
  "r'" = "r'",
  L = "L",
  L2 = "L2",
  "L'" = "L'",
  l = "l",
  "l'" = "l'",
  U = "U",
  U2 = "U2",
  "U'" = "U'",
  u = "u",
  "u'" = "u'",
  D = "D",
  D2 = "D2",
  "D'" = "D'",
  d = "d",
  "d'" = "d'",
  F = "F",
  F2 = "F2",
  "F'" = "F'",
  f = "f",
  "f'" = "f'",
  B = "B",
  B2 = "B2",
  "B'" = "B'",
  b = "b",
  "b'" = "b'",
  M = "M",
  M2 = "M2",
  "M'" = "M'",
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
  [Move.R2]: {
    isImpacted: (position) => position.x === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      -Math.PI,
    ),
  },
  [Move["R'"]]: {
    isImpacted: (position) => position.x === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      Math.PI / 2,
    ),
  },
  [Move.r]: {
    isImpacted: (position) => position.x === 1 || position.x === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      -Math.PI / 2,
    ),
  },
  [Move["r'"]]: {
    isImpacted: (position) => position.x === 1 || position.x === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      Math.PI / 2,
    ),
  },
  [Move.L]: {
    isImpacted: (position) => position.x === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(-1, 0, 0),
      -Math.PI / 2,
    ),
  },
  [Move.L2]: {
    isImpacted: (position) => position.x === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(-1, 0, 0),
      Math.PI / 2,
    ),
  },
  [Move["L'"]]: {
    isImpacted: (position) => position.x === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(-1, 0, 0),
      Math.PI / 2,
    ),
  },
  [Move.l]: {
    isImpacted: (position) => position.x === -1 || position.x === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(-1, 0, 0),
      -Math.PI / 2,
    ),
  },
  [Move["l'"]]: {
    isImpacted: (position) => position.x === -1 || position.x === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(-1, 0, 0),
      Math.PI / 2,
    ),
  },
  [Move.U]: {
    isImpacted: (position) => position.y === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 1, 0),
      -Math.PI / 2,
    ),
  },
  [Move.U2]: {
    isImpacted: (position) => position.y === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 1, 0),
      -Math.PI,
    ),
  },
  [Move["U'"]]: {
    isImpacted: (position) => position.y === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 1, 0),
      Math.PI / 2,
    ),
  },
  [Move.u]: {
    isImpacted: (position) => position.y === 1 || position.y === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 1, 0),
      -Math.PI / 2,
    ),
  },
  [Move["u'"]]: {
    isImpacted: (position) => position.y === 1 || position.y === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 1, 0),
      Math.PI / 2,
    ),
  },
  [Move.D]: {
    isImpacted: (position) => position.y === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, -1, 0),
      -Math.PI / 2,
    ),
  },
  [Move.D2]: {
    isImpacted: (position) => position.y === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, -1, 0),
      -Math.PI,
    ),
  },
  [Move["D'"]]: {
    isImpacted: (position) => position.y === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, -1, 0),
      Math.PI / 2,
    ),
  },
  [Move.d]: {
    isImpacted: (position) => position.y === -1 || position.y === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, -1, 0),
      -Math.PI / 2,
    ),
  },
  [Move["d'"]]: {
    isImpacted: (position) => position.y === -1 || position.y === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, -1, 0),
      Math.PI / 2,
    ),
  },
  [Move.F]: {
    isImpacted: (position) => position.z === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, 1),
      -Math.PI / 2,
    ),
  },
  [Move.F2]: {
    isImpacted: (position) => position.z === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, 1),
      -Math.PI,
    ),
  },
  [Move["F'"]]: {
    isImpacted: (position) => position.z === 1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, 1),
      Math.PI / 2,
    ),
  },
  [Move.f]: {
    isImpacted: (position) => position.z === 1 || position.z === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, 1),
      -Math.PI / 2,
    ),
  },
  [Move["f'"]]: {
    isImpacted: (position) => position.z === 1 || position.z === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, 1),
      Math.PI / 2,
    ),
  },
  [Move.B]: {
    isImpacted: (position) => position.z === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, -1),
      -Math.PI / 2,
    ),
  },
  [Move.B2]: {
    isImpacted: (position) => position.z === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, -1),
      -Math.PI,
    ),
  },
  [Move["B'"]]: {
    isImpacted: (position) => position.z === -1,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, -1),
      Math.PI / 2,
    ),
  },
  [Move.b]: {
    isImpacted: (position) => position.z === -1 || position.z === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, -1),
      -Math.PI / 2,
    ),
  },
  [Move["b'"]]: {
    isImpacted: (position) => position.z === -1 || position.z === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(0, 0, -1),
      Math.PI / 2,
    ),
  },
  [Move.M]: {
    isImpacted: (position) => position.x === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      -Math.PI / 2,
    ),
  },
  [Move.M2]: {
    isImpacted: (position) => position.x === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      -Math.PI,
    ),
  },
  [Move["M'"]]: {
    isImpacted: (position) => position.x === 0,
    rotationQuaternion: new Quaternion().setFromAxisAngle(
      new Vector3(1, 0, 0),
      Math.PI / 2,
    ),
  },
};
