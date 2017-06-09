import {Injectable} from "@angular/core";
import { Action } from '@ngrx/store';

@Injectable()

export class NgrxFormActions {
  static ADD_GROUP = '[Group] ADD GROUP';
  addGroup(name: string|number): Action {
    return {
      type: NgrxFormActions.ADD_GROUP,
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

  // setValue (name, path?, value)

  // setStatus (name, path?, status)

  // setDisabled (name, path?, boolean)

  // setEnabled (name, path?, boolean)

  // setTouched() (name, path, boolean)

  // setDirty() (name, path)

  // setPristine (name, path)

  // setPending(name, path)

  // removeControl (name)

  //

}
