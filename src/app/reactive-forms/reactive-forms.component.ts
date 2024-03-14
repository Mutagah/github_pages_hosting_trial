import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss'],
})
export class ReactiveFormsComponent implements OnInit {
  /* How we construct our reaactive form
  1. Create a variable of the type FormGroup
  */
  myForm!: FormGroup;

  ngOnInit(): void {
    // Creating an instance of the FormGroup
    this.myForm = new FormGroup({
      /*
       Creating the form controls, while stating the form values and the validators.
       1. Defaulting a value will be sth like as shown in the firstName key
       2. If you do not want to specify a value you can use the null or an empty string
       */
      firstName: new FormControl('Mutaga', Validators.required),
      // When we have more than one validations, we can pass an array of validators as our second argurment
      email: new FormControl(null,[Validators.required,Validators.email]),
      
    });
  }
  

  onSubmit() {
      this.myForm.reset()
  }
}
