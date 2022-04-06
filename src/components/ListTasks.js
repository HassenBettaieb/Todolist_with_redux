import { useSelector } from "react-redux";
import Task from "./Task";

const ListTasks = () => {
  const tasks = useSelector((state) => state.taskList);
  const filtre = useSelector((state) => state.statutdone);
  return (
    <div>
      {filtre === "done"
        ? tasks
            .filter((task) => task.done === true)
            .map((task) => <Task task={task} key={task.id} />)
        : filtre === "undone"
        ? tasks
            .filter((task) => task.done === false)
            .map((task) => <Task task={task} key={task.id} />)
        : tasks.map((task) => <Task task={task} key={task.id} />)}
    </div>
  );
};
export default ListTasks;
