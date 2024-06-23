import { Move } from "../context/move";
import { useContext } from "react";
import { MovesContext } from "../context/movesContext";

export function Controls() {
  const { dispatch } = useContext(MovesContext);

  const handleMove = (move: Move) => {
    dispatch({ type: "ADD_MOVE", move: move });
  };

  return (
    <div className="w-full p-10 flex justify-center gap-4 text-lg">
      {Object.values(Move).map((value) => (
        <button className="" key={value} onClick={() => handleMove(value)}>
          {value}
        </button>
      ))}
    </div>
  );
}
