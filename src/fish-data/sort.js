import { sort } from "../utils";

const generateSort = (points) => Object.entries(sort).map(
    ([sortedName, sortedPoints]) => ({
      name: sortedName,
      sequence: sortedPoints(points),
    }),
  );
export default generateSort;
