
import { ThingActions, ThingActionTypes } from '../actions/thing.actions';

export interface State {
  data: any;
  loading: boolean;
}

export const initialState: State = {
  data: null,
  loading: false
};

export function reducer(state = initialState, action: ThingActions): State {
  switch (action.type) {

    case ThingActionTypes.LoadThings:
      return {
        ...state,
        loading: true
      };

    case ThingActionTypes.LoadThingsSuccess:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };

    case ThingActionTypes.LoadThingsFailure:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}


export const getThingsData = (state: State) => state.data;
export const getThingsDataLoading = (state: State) => state.loading;
