import { Euler } from "three";
import { INITIAL_ROTATION, rubiksSides } from "./consts";

/*
 * Given a position/rotation state and a move name
 * return the new position and rotation
 */
function getNewPosition({
  position,
  rotation,
  moveName,
}: {
  position: { x: number; y: number; z: number };
  rotation: Euler;
  moveName: string;
}): {
  position: { x: number; y: number; z: number };
  rotation: Euler;
} {
  const side = rubiksSides.find(({ name }) => name === moveName);
  if (!side) {
    return { position, rotation };
  }
  const { isInSide, updatePosition, rotationIncrement } = side;
  if (isInSide(position)) {
    return {
      position: updatePosition(position),
      rotation: new Euler(
        rotation.x + rotationIncrement[0],
        rotation.y + rotationIncrement[1],
        rotation.z + rotationIncrement[2],
      ),
    };
  } else {
    return { position, rotation };
  }
}

/*
 * Given an initial position and a list of moves
 * return the final position and rotation of the cubelet
 * position is just needed for the calculations
 * (to check if cubelet will rotate or not with each move)
 * but we only need the final rotation to render the cube
 */
export function getCurrentPosition({
  initialPosition,
  moves,
}: {
  initialPosition: { x: number; y: number; z: number };
  moves: string[];
}): { position: { x: number; y: number; z: number }; rotation: Euler } {
  return moves.reduce(
    (acc, move) => getNewPosition({ ...acc, moveName: move }),
    { position: initialPosition, rotation: INITIAL_ROTATION },
  );
}
