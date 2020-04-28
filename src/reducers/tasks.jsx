import { SAVE_TASKS, FETCH_TASKS } from '../actions/types';

const INITIAL_STATE = [
  'First task to complete',
];
// set a default value for state parameter
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_TASKS:
      return [...state, action.payload];
    case FETCH_TASKS:
      const tasks = action.payload.data.map((task) => task.name);
      return [...state, ...tasks];
    default:
      return state;
  }
}
