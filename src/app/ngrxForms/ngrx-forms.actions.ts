import {Injectable} from "@angular/core";
import { Action } from '@ngrx/store';

@Injectable()

export class NgrxFormActions {
  static CREATE_GROUP = '[Group] Create Group';
  createGroup(name: string|number): Action {
    return {
      type: NgrxFormActions.CREATE_GROUP,
      payload: name
    };
  }

  static ADD_CONTROL = '[Control] Add Control';
  addControl(name: string|number, parentPath:[any]): Action {
    return {
      type: NgrxFormActions.ADD_CONTROL,
      payload:  {
        name: name,
        parentPath: parentPath
      }
    };
  }
}
