import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  presentDate = new Date();
  registerForm!: FormGroup;
  isSubmit = false;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClose(data?: any): void {
    this.dialogRef.close({ data });
    this.isSubmit = false;
  }

  submit(): void {
    this.isSubmit = true;

    if (this.registerForm.valid) {
      this.onClose({ ...this.registerForm.value });
    }
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      birthOfDate: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
    });
  }
}
