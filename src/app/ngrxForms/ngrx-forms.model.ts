import {NgrxFormActions} from './ngrx-forms.actions';


export abstract class NgrxAbstractControl {
  // path to root?


  // constructor(validator: ValidatorFn, asyncValidator: AsyncValidatorFn)
  // validator : ValidatorFn How to do validations? possibly with effects, Do we need separate asyncValidators then?
  // asyncValidator : AsyncValidatorFn
  // get() value: Selector to value in store
  // setValue: dispatch action to update value in store
  // parent : FormGroup|FormArray
  // status : string: VALID | INVALID | PENDING, selector to relevant place in store
  // valid : boolean: selector to status, if VALID, return boolean
  // invalid : boolean ^ opposite
  // pending : boolean: Somehow detect if async validator hasn't finished, will need to keep track of observables that are running
  // disabled : boolean :
  // set() disabled : dispatch to store to update,
  // enabled : boolean : default true
  // errors : ValidationErrors| : collection of current errors, selector to store

  // private _pristine: boolean = true:
  // private _touched: boolean = false;
  // private _parent: FormGroup|FormArray;: if there is a parent, then this will be the link between them

  // setTouched () dispatch action to mark this control, and any ancestors as 'touched'
  // setUnTouched() ^ opposite
  // setDirty ^ just dirty
  // setPristine ^
  // setPending ^
  // set() disable -> check latest

  // abstract
  // setValue
  // patchValue
  // reset -> set to Original state


  // get (name: string) returns control with provided name
  // get root(): return root formGorup/array of form

}

export class NgrxFormControl extends NgrxAbstractControl {
  // What is a formControl besides a wrapper for abstract control without extras?
}

export class NgrxFormGroup extends NgrxAbstractControl {
  // addControl (Control) -> adds control to list of controls, dispatches action to add control
  // removeControl (Name) -> removes control from controls, dispathes actoin to remove control

  // controls: selector to this formGroups controls
  // registerControl() 'need?'
  // addControl(name: string, control: AbstractControl) -> dispatch to add control to this formGroups controls
  // removeControl(name: string) : void -> remove control from formGroup
  // setControl(name: string, control: AbstractControl) -> replaces an existing control of same name, or just adds
  // contains(controlName: string) : boolean -> whether control exists on group
  // setValue(value: {[key: string]: any}, -> allows bulk update of controls values
  // patchValue(value: {[key: string]: any}, {onlySelf, emitEvent}?: {onlySelf?: boolean, emitEvent?: boolean}) : void -> same except it doens't need all
  // reset(value?: any, {onlySelf, emitEvent}?: {onlySelf?: boolean, emitEvent?: boolean}) : void -> goes through all descendants and resets them
  // getRawValue() : any

}

export class NgrxFormArray extends NgrxAbstractControl {
  // mostly whats above, will come back
}
