import {NgrxFormActions} from './ngrx-forms.actions';

export abstract class NgrxAbstractControl {
  _value: any;

  constructor() {}

}

export class NgrxFormControl extends NgrxAbstractControl {
  public store: any;
  constructor() {
    super();
  }
}

export class NgrxFormGroup extends NgrxAbstractControl {
  public controls: {[key: string]: NgrxAbstractControl};
  public store: any;
  public parentPath;
  private ngrxFormActions: NgrxFormActions;

  constructor(name: string|number, store, parentPath: undefined[] = []) {
    super();
    this.ngrxFormActions = new NgrxFormActions();

    store.dispatch(this.ngrxFormActions.createGroup(name));
    this.store = store;
    this.parentPath = parentPath;
    this.parentPath.push(name);
  }

  addControl(name: string, control?: NgrxAbstractControl): void {
    this.store.dispatch(this.ngrxFormActions.addControl(name, this.parentPath));
  }
}
