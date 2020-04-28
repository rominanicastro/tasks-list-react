import { SAVE_TASKS, FETCH_TASKS } from './types';

export function saveComment(task) {
  return {
    type: SAVE_TASKS,
    payload: task,
  };
}

export function fetchComments() {
  const response = localStorage.getItem('tasks');

  return {
    type: FETCH_TASKS,
    payload: response,
  };
}
