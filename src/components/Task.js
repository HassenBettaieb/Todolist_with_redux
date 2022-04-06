import { useDispatch } from "react-redux";
import { deleteTask, doneTask } from "../Redux/Actions/ActionsToList";
import Edit from "./Edit";
const Task = ({ task }) => {
  const dispatch = useDispatch();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <p style={{ textDecoration: task.done && "line-through" }}>
        {task.description}
      </p>
      <button onClick={() => dispatch(doneTask(task.id))}>DONE</button>
      <Edit task={task} />
      <button onClick={() => dispatch(deleteTask(task.id))}>DELELT</button>
    </div>
  );
};
export default Task;
