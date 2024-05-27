import { Euler } from "three";

export const dist = 1.5;
export const positions = [-dist, 0, dist];
export const INITIAL_ROTATION = new Euler(0, 0, 0);

type RubiksSide = {
  // side & move name
  name: string;
  // color
  color: string;
  // Condition for a cubelet to be in this side
  isInSide: (position: { x: number; y: number; z: number }) => boolean;
  // Get the new coordinates of a cubelet of this side after clockwise rotation
  updatePosition: (position: { x: number; y: number; z: number }) => {
    x: number;
    y: number;
    z: number;
  };
  // Rotation increment corresponding to the move
  rotationIncrement: [number, number, number];
};

/* faces order: right left top bottom front back */
export const rubiksSides: RubiksSide[] = [
  {
    name: "R",
    color: "#0046ad", // blue
    isInSide: ({ x }: { x: number }) => x === dist,
    updatePosition: ({ x, y, z }: { x: number; y: number; z: number }) => ({
      x,
      y: z,
      z: -y,
    }),
    rotationIncrement: [-Math.PI / 2, 0, 0],
  },
  {
    name: "L",
    color: "#009b48", // green
    isInSide: ({ x }: { x: number }) => x === -dist,
    updatePosition: ({ x, y, z }: { x: number; y: number; z: number }) => ({
      x,
      y: -z,
      z: y,
    }),
    rotationIncrement: [Math.PI / 2, 0, 0],
  },
  {
    name: "U",
    color: "#FFFFFF", // white
    isInSide: ({ y }: { y: number }) => y === dist,
    updatePosition: ({ x, y, z }: { x: number; y: number; z: number }) => ({
      x: z,
      y,
      z: -x,
    }),
    rotationIncrement: [0, -Math.PI / 2, 0],
  },
  {
    name: "D",
    color: "#ffd500", // yellow
    isInSide: ({ y }: { y: number }) => y === -dist,
    updatePosition: ({ x, y, z }: { x: number; y: number; z: number }) => ({
      x: -z,
      y,
      z: x,
    }),
    rotationIncrement: [0, Math.PI / 2, 0],
  },
  {
    name: "F",
    color: "#b71234", // red
    isInSide: ({ z }: { z: number }) => z === dist,
    updatePosition: ({ x, y, z }: { x: number; y: number; z: number }) => ({
      x: -y,
      y: x,
      z,
    }),
    rotationIncrement: [0, 0, -Math.PI / 2],
  },
  {
    name: "B",
    color: "#ff5800", // orange
    isInSide: ({ z }: { z: number }) => z === -dist,
    updatePosition: ({ x, y, z }: { x: number; y: number; z: number }) => ({
      x: y,
      y: -x,
      z,
    }),
    rotationIncrement: [0, 0, Math.PI / 2],
  },
];
