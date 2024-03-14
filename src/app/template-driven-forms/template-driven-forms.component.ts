import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss'],
})
export class TemplateDrivenFormsComponent {
  @ViewChild('myForm', { static: true }) myForm: any;
  onSubmit(form: NgForm) {
    // This only lists the dom elements related to the form
    console.log(form);
    // Adding the formsModule only without binding the template variable in the form results with ngForm, angular infers the form tag and dynamically adds classes.

    // Binding the template reference variable with ngForm would result into printing an ngForm object with lots of properties

    // The control property under forms can only be populated if and only if we do have ngModel on each input and also the name property assigned.
    // This is used when 
    this.myForm.reset();
  }
}
