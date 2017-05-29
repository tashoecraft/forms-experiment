import { Action } from '@ngrx/store';
import { NgrxFormActions } from './ngrx-forms.actions';

export interface FormsState {
  [key: string]: any;
}

export const initialState: FormsState = {
};

export function formsReducer(state = initialState, action: Action): FormsState {
  switch (action.type) {

    case NgrxFormActions.CREATE_GROUP: {
      return {
        ...state,
        [action.payload]: {}
      }
    }

    case NgrxFormActions.ADD_CONTROL: {

    }

    default: {
      return state;
    }
  }
}
