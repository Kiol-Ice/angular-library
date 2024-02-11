import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatDialog, MAT_DIALOG_DATA, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';

export interface DialogData {
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  messageFormControl = new FormControl('', [Validators.required]);
  matcher = new MyErrorStateMatcher();

  contactForm = this._formBuilder.group({
    email: this.emailFormControl,
    message: this.messageFormControl
  });

  onSubmit(): void {
    // Process checkout data here
    console.warn('Your message : ', this.contactForm.value);
    //this.contactForm.reset();
    this.openDialog(this.contactForm.value.email!, this.contactForm.value.message!)
  }

  openDialog(email: string, message: string): void {
    this.dialog.open(ContactDialog, {
      data: {
        email: email,
        message: message,
      },
    });
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'contact-dialog',
  templateUrl: 'contact-dialog.html',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent],
})
export class ContactDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
