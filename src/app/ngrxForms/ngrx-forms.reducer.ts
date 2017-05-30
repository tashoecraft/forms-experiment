import { Action } from '@ngrx/store';
import { NgrxFormActions } from './ngrx-forms.actions';
import * as _ from 'lodash';

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
        [action.payload.name]: action.payload.group
      };
    }

    case NgrxFormActions.ADD_CONTROL: {
      let clone = _.merge({}, state);
      let path = action.payload.parentPath[0];

      if (!clone[path]) {
        clone[path] = {};
      }

      if (!clone[path].controls) {
        clone[path].controls = {};
      }

      clone[path].controls[action.payload.name] = {};

      return Object.assign({}, clone);
    }

    default: {
      return state;
    }
  }
}
