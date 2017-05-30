
import {NgModule, APP_BOOTSTRAP_LISTENER, Injectable, Inject} from '@angular/core';
import {Dispatcher, Store, Action} from '@ngrx/store';
import {Observable, Observer} from 'rxjs/Rx';
import { NgrxFormsDefaultValueAccessorDirective } from './ngrx-forms.dafault_value_accessor';

export function provideFormsConnector() {
  return {
    deps: [Dispatcher, Store ],
    multi: true
  };
}

@NgModule({
  declarations: []
})
export class NgrxFormModule {

  static connectForms() {
    return {
      ngModule: NgrxFormModule,
      provders: [
        Forms
      ]
    };
  }
}

@Injectable()
export class Forms  {
  constructor(
    @Inject(Store) public store: Observer<Action>) {}
}
