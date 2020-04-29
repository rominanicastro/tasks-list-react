import {
  SAVE_TASK, FETCH_TASKS, UPDATE_TASK,
} from '../actions/types';

// set a default value for state parameter
const INITIAL_STATE = [
  {
    taskName: '',
    state: '',
  },
];

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SAVE_TASK:
      return [...state, action.payload];
    case FETCH_TASKS:
      // eslint-disable-next-line no-case-declarations
      const tasks = action.payload && action.payload.map((task) => task);
      return [...state, ...tasks];
    case UPDATE_TASK:
      return [...state.map((task) => {
        if (task.taskName === action.payload.taskName) {
          // eslint-disable-next-line no-param-reassign
          task.state = action.payload.state;
        }
        return task;
      })];
    default:
      return state;
  }
}
