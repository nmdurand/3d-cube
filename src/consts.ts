export const dist = 1.5;
export const positions = [-dist, 0, dist];

/* faces order: right down left up back front */
export const rubiksSides = [
  {
    position: "right",
    name: "blue",
    color: "#0046ad",
    isCubeletOnSide: ({ x }: { x: number }) => x === dist,
  },
  {
    position: "down",
    name: "green",
    color: "#009b48",
    isCubeletOnSide: ({ x }: { x: number }) => x === -dist,
  },
  {
    position: "left",
    name: "white",
    color: "#FFFFFF",
    isCubeletOnSide: ({ y }: { y: number }) => y === dist,
  },
  {
    position: "up",
    name: "yellow",
    color: "#ffd500",
    isCubeletOnSide: ({ y }: { y: number }) => y === -dist,
  },
  {
    position: "back",
    name: "red",
    color: "#b71234",
    isCubeletOnSide: ({ z }: { z: number }) => z === dist,
  },
  {
    position: "front",
    name: "orange",
    color: "#ff5800",
    isCubeletOnSide: ({ z }: { z: number }) => z === -dist,
  },
];
