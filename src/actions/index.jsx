import {
  SAVE_TASK, FETCH_TASKS, UPDATE_TASK,
} from './types';

const updateStorage = (task) => {
  // update localStorage just for get data after reload page
  let tasksArray = [];
  const listJSON = localStorage.getItem('tasks');
  tasksArray = JSON.parse(listJSON);
  const tasksUpdated = tasksArray.map((taskItem) => {
    if (taskItem.taskName === task.taskName) {
      // eslint-disable-next-line no-param-reassign
      taskItem.state = task.state;
    }
    return taskItem;
  });
  localStorage.setItem('tasks', JSON.stringify(tasksUpdated));
};

export const saveTask = (task) => async (dispatch) => {
  const taskObj = { taskName: task, state: 'pending' };
  dispatch({ type: SAVE_TASK, payload: taskObj });

  // set localStorage to get data after reload page
  let tasksArray = [];
  const listJSON = localStorage.getItem('tasks');
  if (listJSON !== null) {
    const list = JSON.parse(listJSON);
    tasksArray = list;
  }
  tasksArray = tasksArray.concat(taskObj);
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

export const removeTask = (task) => async (dispatch) => {
  const taskObj = { taskName: task, state: 'removed' };
  dispatch({ type: UPDATE_TASK, payload: taskObj });
  await updateStorage(taskObj);
};

export const resolveTask = (task) => async (dispatch) => {
  const taskObj = { taskName: task, state: 'resolved' };
  dispatch({ type: UPDATE_TASK, payload: taskObj });
  await updateStorage(taskObj);
};

export function fetchTasks() {
  const response = localStorage.getItem('tasks');
  let tasksList = [];
  if (response) {
    tasksList = JSON.parse(response);
  }

  return {
    type: FETCH_TASKS,
    payload: tasksList,
  };
}
