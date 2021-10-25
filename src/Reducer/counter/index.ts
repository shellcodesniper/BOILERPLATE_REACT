import * as interfaces from './counter.interfaces';

const increaseType = 'COUNTER/INCREASE';

function increaseCountAction(count: number)
: interfaces.ICounterAction {
  return ({ type: increaseType, count });
}

const initialState: interfaces.ICounterState = {
  count: 0,
};

const counter = (
  state: interfaces.ICounterState = initialState,
  action: interfaces.ICounterAction,
): interfaces.ICounterState => {
  switch (action.type) {
    case increaseType:
      return {
        ...state,
        count: action.count,
      };

    default:
      return state;
  }
};

export {
  increaseType,
  increaseCountAction,
};

export default counter;
