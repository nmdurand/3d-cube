import { ReactNode, createContext, useReducer } from "react";
import { Move, movesDetails } from "./move";
import { positions, IDENTITY_QUATERNION, getCubeletColors } from "../consts";
import { Quaternion, Vector3 } from "three";

export type CubeletData = {
  // Initial position of the cubelet
  initialPosition: Vector3;
  // history of transforms for cubelet positions
  transforms: Array<Quaternion>;
  // Colors of the cubelet
  colors: string[];
};

// All cubelets are registered in a single array
type CubeData = Array<CubeletData>;

type MovesAction = { type: "ADD_MOVE"; move: Move };
type MovesStateType = {
  cubeData: CubeData;
  moveHistory: Move[];
  dispatch: (action: MovesAction) => void;
};

const initialCubeData: Array<CubeletData> = positions.flatMap((x) =>
  positions.flatMap((y) =>
    positions.map((z) => {
      const initialPosition = new Vector3(x, y, z);
      return {
        initialPosition,
        transforms: [IDENTITY_QUATERNION],
        colors: getCubeletColors(initialPosition),
      };
    }),
  ),
);

export const MovesContext = createContext<MovesStateType>({
  cubeData: initialCubeData,
  moveHistory: [],
  dispatch: () => {},
});

function normalizePosition(position: Vector3): Vector3 {
  return new Vector3(
    Math.round(position.x),
    Math.round(position.y),
    Math.round(position.z),
  );
}

function updateCubeData({
  cubeData,
  move,
}: {
  cubeData: CubeData;
  move: Move;
}): CubeData {
  const { isImpacted, rotationQuaternion } = movesDetails[move];
  return cubeData.map((cubelet) => {
    const currentTransform = cubelet.transforms[cubelet.transforms.length - 1];
    const currentPosition = normalizePosition(
      cubelet.initialPosition.clone().applyQuaternion(currentTransform),
    );

    const newTransform = isImpacted(currentPosition)
      ? rotationQuaternion.clone().multiply(currentTransform)
      : currentTransform;
    return {
      ...cubelet,
      transforms: [...cubelet.transforms, newTransform],
    };
  });
}

function MovesReducer(
  movesState: MovesStateType,
  action: MovesAction,
): MovesStateType {
  if (action.type === "ADD_MOVE") {
    const newCubeData = updateCubeData({
      cubeData: movesState.cubeData,
      move: action.move,
    });
    return {
      ...movesState,
      moveHistory: [...movesState.moveHistory, action.move],
      cubeData: newCubeData,
    };
  } else {
    return movesState;
  }
}

const initialState: MovesStateType = {
  cubeData: initialCubeData,
  moveHistory: [],
  dispatch: () => {},
};

export function MovesProvider({ children }: { children: ReactNode }) {
  const [moves, dispatch] = useReducer(MovesReducer, initialState);
  return (
    <MovesContext.Provider
      value={{
        ...moves,
        dispatch,
      }}
    >
      {children}
    </MovesContext.Provider>
  );
}
