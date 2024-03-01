import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-day2bchild',
  templateUrl: './day2bchild.component.html',
  styleUrls: ['./day2bchild.component.scss'],
})
export class Day2bchildComponent {
  @Input() channelName!: string;

  constructor(private sharedService: SharedService){}
  // Output decorator is used when you want to send message out of the component. It is used together with the event emitter
  @Output() sendMessageEmitter = new EventEmitter();
  // The function that basically binds the target value to the emitter
  sendMessageToParent(event: any) {
    this.sendMessageEmitter.emit(event.target.value);
  }

  firstNum = 0;
  secondNum = 0;
  output = 0;

  // Same variables appear in day2
  // Motive is to showcase the use of services.

  // What would have been done without the use of services
  /*
  / calculate(){
  /   this.output = this.firstNum + this.secondNum;
   }*/

  /*With the use of services */
  calculate() {
    let sharedService = new SharedService();
    this.output = sharedService.calculate(this.firstNum, this.secondNum);
  }
}
