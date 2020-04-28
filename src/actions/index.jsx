import { SAVE_TASK, FETCH_TASKS } from './types';

export const saveTask = (task) => async (dispatch) => {
  dispatch({ type: SAVE_TASK, payload: task });
  let tasksArray = [];
  const listJSON = localStorage.getItem('tasks');
  if (listJSON !== null) {
    const list = JSON.parse(listJSON);
    tasksArray = list;
  }
  tasksArray = tasksArray.concat(task);
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

export function fetchTasks() {
  const response = localStorage.getItem('tasks');
  const tasksList = JSON.parse(response);

  return {
    type: FETCH_TASKS,
    payload: tasksList,
  };
}
