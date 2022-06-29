import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  showError: string = '';
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(null, [
        Validators.minLength(5),
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+$/),
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      description: new FormControl('', [Validators.maxLength(50)]),
    });
  }

  ngOnInit(): void {}
  handleSubmit() {
    if (this.form.invalid) {
      this.showError = 'show-error';
    } else {
      this.showError = '';
      console.log(this.form);
    }
  }
}
