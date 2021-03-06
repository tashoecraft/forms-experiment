import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IdlePreload, IdlePreloadModule } from '@angularclass/idle-preload';
import { MaterialModule } from '@angular/material';

import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';

import { rootReducer } from './reducers';
import { StoreDevToolsModule } from './features/store-devtools.module';
import { UserEffects } from './user/user.effects';
import { NgrxFormModule } from "./ngrxForms/ngrx-forms.module";
import {formsReducer} from "./ngrxForms/ngrx-forms.reducer";

const STORE_DEV_TOOLS_IMPORTS = [];
if (ENV === 'development' && !AOT &&
  ['monitor', 'both'].includes(STORE_DEV_TOOLS) // set in constants.js file in project root
) STORE_DEV_TOOLS_IMPORTS.push(...[
  StoreDevtoolsModule.instrumentStore({
    monitor: useLogMonitor({
      visible: true,
      position: 'right'
    })
  })
]);

export const APP_IMPORTS = [
  BrowserAnimationsModule,
  EffectsModule.run(UserEffects),
  MaterialModule,
  ReactiveFormsModule,
  RouterStoreModule.connectRouter(),
  StoreModule.provideStore(rootReducer),
  NgrxFormModule.connectForms(),
  STORE_DEV_TOOLS_IMPORTS,
  StoreDevToolsModule
];

