import {
  Directive, ElementRef, Inject, InjectionToken, Optional, Renderer, forwardRef,
  HostBinding
} from '@angular/core';
import {ɵgetDOM as getDOM} from '@angular/platform-browser';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from './control_value_accessor';

export const NGRX_FORMS_DEFAULT_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgrxFormsDefaultValueAccessor),
  multi: true
};

/**
 * We must check whether the agent is Android because composition events
 * behave differently between iOS and Android.
 */
function _isAndroid(): boolean {
  const userAgent = getDOM() ? getDOM().getUserAgent() : '';
  return /android (\d+)/.test(userAgent.toLowerCase());
}

/**
 * Turn this mode on if you want form directives to buffer IME input until compositionend
 * @experimental
 */
export const COMPOSITION_BUFFER_MODE = new InjectionToken<boolean>('CompositionEventMode');

/**
 * The default accessor for writing a value and listening to changes that is used by the
 * {@link NgModel}, {@link FormControlDirective}, and {@link FormControlName} directives.
 *
 *  ### Example
 *  ```
 *  <input type="text" name="searchQuery" ngModel>
 *  ```
 *
 *  @stable
 */
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

  /** Whether the user is creating a composition string (IME events). */
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
