import { GlobalActions, GlobalActionTypes } from '../actions/global.actions';

export interface State {
  data: any;
  loading: boolean;
}

export const initialState: State = {
  data: null,
  loading: false
};

export function reducer(state = initialState, action: GlobalActions): State {
  switch (action.type) {

    case GlobalActionTypes.LoadGlobals:
      return {
        ...state,
        loading: true
      };

    case GlobalActionTypes.LoadGlobalsSuccess:
      return {
        ...state,
        data: action.payload.data,
        loading: false
      };

    case GlobalActionTypes.LoadGlobalsFailure:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

export const getGlobalData = (state: State) => state.data;
export const getGlobalDataLoading = (state: State) => state.loading;
