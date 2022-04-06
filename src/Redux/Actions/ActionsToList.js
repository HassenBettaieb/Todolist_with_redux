import { ADDTASK, DELETETASK, DONETASK, EDITTASK, FILTRETASK } from "../type";
export const addTask = (text) => {
  return {
    type: ADDTASK,
    payload: text,
  };
};
export const deleteTask = (id) => {
  return {
    type: DELETETASK,
    payload: id,
  };
};
export const doneTask = (id) => {
  return {
    type: DONETASK,
    payload: id,
  };
};
export const editTask = (id, text) => {
  return {
    type: EDITTASK,
    payload: { id, text },
  };
};
export const filtreTask = (statutdone) => {
  return {
    type: FILTRETASK,
    payload: statutdone,
  };
};
