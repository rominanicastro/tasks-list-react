import { SAVE_TASK, FETCH_TASKS, REMOVE_TASK } from '../actions/types';

const INITIAL_STATE = [];
// set a default value for state parameter
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_TASK:
      return [...state, action.payload];
    case FETCH_TASKS:
      // eslint-disable-next-line no-case-declarations
      const tasks = action.payload && action.payload.map((task) => task);
      return [...state, ...tasks];
    case REMOVE_TASK:
      return [...state.filter((task) => task !== action.payload)];
    default:
      return state;
  }
}
