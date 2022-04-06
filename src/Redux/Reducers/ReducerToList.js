import { ADDTASK, DELETETASK, FILTRETASK, DONETASK, EDITTASK } from "../type";

const intialState = {
  taskList: [
    { id: 1, description: "JavaScript Project", done: false },
    { id: 2, description: "Redux", done: false },
    { id: 3, description: "React Components ", done: false },
  ],
  statutdone: "",
};

const todoList = (state = intialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        taskList: [
          ...state.taskList,
          { id: Math.random(), description: action.payload, done: false },
        ],
      };
    case DELETETASK:
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.payload),
      };
    case DONETASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };
    case EDITTASK:
      return {
        ...state,
        taskList: state.taskList.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.text }
            : task
        ),
      };
    case FILTRETASK:
      return {
        ...state,
        statutdone: action.payload,
      };

    default:
      return state;
  }
};
export default todoList;
