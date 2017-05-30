/* tslint:disable:no-forward-ref */

import {
  Directive, ElementRef, Renderer, forwardRef,
  HostBinding, Input, OnInit
} from '@angular/core';
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
export class NgrxFormsDefaultValueAccessorDirective implements ControlValueAccessor, OnInit {
  onChange = (_: any) => {};
  onTouched = () => {};

  // @HostBinding('input') _handleInput(value: any): void {
  //     this.onChange(value);
  //   }

  @Input() ngrxFormControl;

  constructor(
    private _renderer: Renderer, private _elementRef: ElementRef) {}

  ngOnInit() {
    console.log(this.ngrxFormControl);
  }

  writeValue(value: any): void {
    const normalizedValue = value == null ? '' : value;
    this.ngrxFormControl.store.dispatch()
  }

  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
  }

}
