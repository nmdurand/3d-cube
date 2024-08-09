import { useContext } from "react";
import { MovesContext } from "../context/movesContext";

export function MovesHistory() {
  const { movesHistory } = useContext(MovesContext);

  return (
    <div className="min-h-10 w-full text-center text-xl font-bold">
      <span>{movesHistory}</span>
    </div>
  );
}
