/* tslint:disable:no-forward-ref */

import {
  Directive, ElementRef, Inject, InjectionToken, Optional, Renderer, forwardRef,
  HostBinding
} from '@angular/core';
import {ɵgetDOM as getDOM} from '@angular/platform-browser';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const NGRX_FORMS_DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgrxFormsDefaultValueAccessorDirective),
  multi: true
};

@Directive({
  selector:
    '[ngrxFormControl]',
  providers: [NGRX_FORMS_DEFAULT_VALUE_ACCESSOR]
})
export class NgrxFormsDefaultValueAccessorDirective implements ControlValueAccessor {
  onChange = (_: any) => {};
  onTouched = () => {};

  @HostBinding('input') _handleInput(value: any): void {
      this.onChange(value);
    }

  constructor(
    private _renderer: Renderer, private _elementRef: ElementRef) {}

  writeValue(value: any): void {
    const normalizedValue = value == null ? '' : value;
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

}
