import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Actions/ActionsToList";
import Filtre from "./Filtre";
const Add = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        placeholder="enter a task"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => dispatch(addTask(text))}>ADD</button>
      <Filtre />
    </div>
  );
};
export default Add;
