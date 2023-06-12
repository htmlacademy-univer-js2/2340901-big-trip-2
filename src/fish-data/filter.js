import { filter } from "../utils";

const generateFilter = (tasks) => Object.entries(filter).map(
  ([filterName, filterTasks]) => ({
    name: filterName,
    count: filterTasks(tasks).length,
  }),
);
export default generateFilter;
