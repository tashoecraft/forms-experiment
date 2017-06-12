import { Action } from '@ngrx/store';
import { NgrxFormActions } from './ngrx-forms.actions';

export interface Forms {
  [key: string]: any;
}

export const initialState: Forms = {
};

export function formsReducer(state = initialState, action: Action): Forms {
  switch (action.type) {

    case NgrxFormActions.ADD_GROUP: {
      return state;
    }

    case NgrxFormActions.ADD_CONTROL: {
      // must check whether controlName exists at path,
      // if so override? or throw error
      return state;
    }

    /*
      removeControl (name, path)
      traverse and find
        remove control from parents controls
      walk back and recaulcate status/attributes
     */

    /*
      setValue (name, path, value)
        traverse tree from root (use some library where smarter people have worked this out
          use path to find name
            insure it matches
              else throw error
          setValue of control to passed value

          return new state

     */

    /*
      setStatus
        traverse down path from root
          set controlValue to updated status
        walk back up
          recalculating status for each parent it passes
           (Should exit quickly when possible)
     */

    /*
      setDisabled
        Same as setStatus
          but set disabled to true instead
     */

    /*
      setEnabled
        ^ same as setDisabled but opposite
     */

    /*
      setTouched
        traverse and find name
          set touched
        walk back and set touched to parent
     */

    /*
      setDirty
        traverse and find name
          set Dirty
      walk back and set dirty to parent
     */

    /*
    setPristine
      traverse and find
      walk back and recalculate
     */

    /*
      setPending(name, path)
      traverse and find
      walk back and update status to pending
     */

    /*
      NOTES
      Lots of traversing down tree and then walking back up.
      Each time we do that, we need to recalculate status
         or attributes (touched, pristine, dirty, etc)

     */


    default: {
      return state;
    }
  }
}

/*
   SELECTORS
   NOTES
    If you add an existing formGroup to another, then all
    selectors need to be redone as the path to root has change
    which will all probably be merely variables on controls
      ex add Group to existing form, go through controls if group has them, update path.

*/


