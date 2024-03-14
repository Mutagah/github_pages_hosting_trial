import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-day2',
  templateUrl: './day2.component.html',
  styleUrls: ['./day2.component.scss'],
})
export class Day2Component {
  title = 'Directives, Services and Dependency Injection';
  luckyNumber: number = 0;
  highlightColor = 'white';
  isStyleApplied = false;

  // The message from child component
  msgFromChild = '';

  constructor(private sharedService: SharedService, private router: Router) {}
  receiveMessage(msg: string) {
    this.msgFromChild = msg;
  }

  // Used in the parent to child component communication
  channelNameInParent: string = 'Tasha Accounts';

  // Used in the ngFor directive
  names = [
    'Wesley Wanyama',
    'Stephen Brian Mbithuka',
    'Jeremy Richard',
    'Reuben Muli',
    'Michael Owen',
    'Kihahu Mutaga',
    'Stephanie Achieng',
    'Emilly Wanjiku',
  ];
  // Used in the conditional rendering with ngIf directive
  isApproved = false;
  approve(status: boolean) {
    this.isApproved = status;
  }

  // Used in the NgClass directive
  highlight(color: string) {
    this.highlightColor = color;
  }

  // Used in the NgStyle directive
  toggleStyle() {
    this.isStyleApplied = !this.isStyleApplied;
  }

  firstNum = 0;
  secondNum = 0;
  output = 0;

  // Same variables appear in day2bchild
  // Motive is to showcase the use of services

  // What would have been done without the use of services
  /*

  calculate(){
    this.output = this.firstNum + this.secondNum;
  }*/

  /*With the use of services */

  calculate() {
    /* When instatiating a new service on each and every code */
    // let sharedService = new SharedService();
    // this.output = sharedService.calculate(this.firstNum, this.secondNum);

    /* When using the dependency injection
    
    NB: We have configured sharedService as a private variable of SharedService type */
    this.output = this.sharedService.calculate(this.firstNum, this.secondNum);
  }

  // Programmatic routing
  goToPreviousPage() {
    this.router.navigate(['day1']);
  }
  goToNextPage() {
    this.router.navigate(['day3']);
  }
}
