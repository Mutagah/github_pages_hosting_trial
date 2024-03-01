import { Component } from '@angular/core';

@Component({
  selector: 'app-first-trial',
  templateUrl: './first-trial.component.html',
  styleUrls: ['./first-trial.component.scss']
})
export class FirstTrialComponent {
  title = 'Angular Revision';

  //property binding > Used when you want to assign dynamic values. 
  surName :string = "Kihahu"
  firstName :string = "Mutaga"


  interpolationOfData(){
    return "data binding practice via interpolation"
  }

  // Event binding
  changeInputValue(){
    this.surName = "Mwangi"
    this.firstName = "Ndungu"
  }

  returnInputValue(){
    this.surName = "Kihahu"
    this.firstName = "Mutaga"
  }

  // Two way Data Binding
  twoWayBinding(event : any){
    this.surName= event.target.value
  }
  
}
