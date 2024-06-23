import { ReactNode, createContext, useReducer } from "react";
import { Move } from "./move";

type MovesAction = { type: "ADD_MOVE"; move: Move };
type MovesStateType = {
  current: Move[];
  dispatch: (action: MovesAction) => void;
};

export const MovesContext = createContext<MovesStateType>({
  current: [],
  dispatch: () => {},
});

function MovesReducer(
  movesState: MovesStateType,
  action: MovesAction,
): MovesStateType {
  console.log(">>> reducing", action);
  if (action.type === "ADD_MOVE") {
    return {
      ...movesState,
      current: [...movesState.current, action.move],
    };
  } else {
    return movesState;
  }
}

const initialState: MovesStateType = {
  current: [],
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
