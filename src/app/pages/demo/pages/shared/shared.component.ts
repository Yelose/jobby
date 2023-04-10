import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss'],
})
export class SharedComponent {
  form = this.fb.group({
    input: ['', [Validators.required, Validators.minLength(3)]],
  });
  isInline: boolean = false;

  constructor(private fb: FormBuilder) {}
  onSubmit(): void {
    console.log('Submit!');
  }
  onPatchValue(): void {
    this.form.patchValue({ input: 'test' });
  }

  onToggleInline() {
    this.isInline = !this.isInline;
  }
}
