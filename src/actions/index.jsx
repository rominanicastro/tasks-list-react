import { SAVE_TASK, FETCH_TASKS, REMOVE_TASK } from './types';

export const saveTask = (task) => async (dispatch) => {
  dispatch({ type: SAVE_TASK, payload: task });

  // set localStorage to get data after reload page
  let tasksArray = [];
  const listJSON = localStorage.getItem('tasks');
  if (listJSON !== null) {
    const list = JSON.parse(listJSON);
    tasksArray = list;
  }
  tasksArray = tasksArray.concat(task);
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

export const removeTask = (task) => async (dispatch) => {
  dispatch({ type: REMOVE_TASK, payload: task });

  // update localStorage just for get data after reload page
  let tasksArray = [];
  const listJSON = localStorage.getItem('tasks');
  tasksArray = JSON.parse(listJSON);
  const tasksUpdated = tasksArray.filter((taskItem) => taskItem !== task);
  localStorage.setItem('tasks', JSON.stringify(tasksUpdated));
};

export function fetchTasks() {
  const response = localStorage.getItem('tasks');
  const tasksList = JSON.parse(response);

  return {
    type: FETCH_TASKS,
    payload: tasksList,
  };
}
