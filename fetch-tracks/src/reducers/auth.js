import {ActionTypes} from '../core/constants';

const initialState = {};

export default function(state = initialState, {type, user}) {
  switch (type) {
    case ActionTypes.ME_SET:
      return {...state, user};
  }

  return state;
}
