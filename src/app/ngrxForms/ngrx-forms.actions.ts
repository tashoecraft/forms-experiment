import {Injectable} from "@angular/core";
import { Action } from '@ngrx/store';

@Injectable()

export class NgrxFormActions {
  static ADD_GROUP = '[GROUP] ADD GROUP';
  addGroup(name: string|number): Action {
    return {
      type: NgrxFormActions.ADD_GROUP,
      payload: name
    };
  }

  static ADD_CONTROL = '[CONTROL] ADD CONTROL';
  addControl(name: string|number, path: [string]): Action {
    return {
      type: NgrxFormActions.ADD_CONTROL,
      payload:  {
        name: name,
        path: path
      }
    };
  }

  static SET_VALUE = '[CONTROL] SET VALUE';
  setValue(name: string, value: any, path: [string]): Action {
    return {
      type: NgrxFormActions.SET_VALUE,
      payload: {
        name: name,
        value: value,
        path: path
      }
    }
  }

  static SET_STATUS = '[CONTROL] SET STATUS';
  setStatus(name: string, status: string, path: [string]): Action {
    return {
      type: NgrxFormActions.SET_STATUS,
      payload: {
        name: name,
        status: status,
        path: path
      }
    }
  }

  static SET_DISABLED = '[CONTROL] SET DISABLED';
  setDisabled(name: string, disabled: boolean,  path: [string]): Action {
    return {
      type: NgrxFormActions.SET_DISABLED,
      payload: {
        name: name,
        disabled: disabled,
        path: path
      }
    }
  }

  static SET_ENABLED = '[CONTROL] SET ENABLED';
  setEnabled(name: string, enabled: boolean,  path: [string]): Action {
    return {
      type: NgrxFormActions.SET_ENABLED,
      payload: {
        name: name,
        enabled: enabled,
        path: path
      }
    }
  }

  static SET_TOUCHED = '[CONTROL] SET TOUCHED';
  setTouched(name: string, touched: boolean,  path: [string]): Action {
    return {
      type: NgrxFormActions.SET_TOUCHED,
      payload: {
        name: name,
        touched: touched,
        path: path
      }
    }
  }

  static SET_DIRTY = '[CONTROL] SET DIRTY';
  setDirty(name: string, dirty: boolean,  path: [string]): Action {
    return {
      type: NgrxFormActions.SET_DIRTY,
      payload: {
        name: name,
        dirty: dirty,
        path: path
      }
    }
  }

  static SET_PRISTINE = '[CONTROL] SET PRISTINE';
  setPristine(name: string, pristine: boolean,  path: [string]): Action {
    return {
      type: NgrxFormActions.SET_PRISTINE,
      payload: {
        name: name,
        pristine: pristine,
        path: path
      }
    }
  }

  static SET_PENDING = '[CONTROL] SET PENDING';
  setPending(name: string, pending: boolean,  path: [string]): Action {
    return {
      type: NgrxFormActions.SET_PENDING,
      payload: {
        name: name,
        pending: pending,
        path: path
      }
    }
  }

  static REMOVE_CONTROL = '[CONTROL] REMOVE_CONTROL';
  removeControl(name: string, path?: [string]): Action {
    return {
      type: NgrxFormActions.REMOVE_CONTROL,
      payload: {
        name: name,
        path: path
      }
    }
  }

}
