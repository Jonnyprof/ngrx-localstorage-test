import { UserActions, UserActionTypes } from '../actions/user.actions';

export interface State {
  profile: any;
  loading: boolean;
}

export const initialState: State = {
  profile: null,
  loading: false
};

export function reducer(state = initialState, action: UserActions): State {
  switch (action.type) {

    case UserActionTypes.LoadUsers:
      return {
        ...state,
        loading: true
      };

    case UserActionTypes.LoadUsersSuccess:
      return {
        ...state,
        profile: action.payload.data,
        loading: false
      };

    case UserActionTypes.LoadUsersFailure:
      return {
        ...state,
        loading: false
      };

    default:
      return state;
  }
}

export const getProfile = (state: State) => state.profile;
export const getProfileLoading = (state: State) => state.loading;
