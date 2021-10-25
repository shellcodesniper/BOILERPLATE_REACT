import { combineReducers } from 'redux';

import counter from './counter';

const rootReducer = combineReducers({
  counter,
});

export type IRootState = ReturnType<typeof rootReducer>;

export default rootReducer;
