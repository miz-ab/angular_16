import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-custom-input-field',
  templateUrl: './custom-input-field.component.html',
  styleUrls: ['./custom-input-field.component.scss']
})
export class CustomInputFieldComponent {

  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  //@Input() control!: FormControl;
  @Input() control: FormControl | null | undefined;
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() errorMessage: string = 'Invalid input';

}
