import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-day2bchild',
  templateUrl: './day2bchild.component.html',
  styleUrls: ['./day2bchild.component.scss']
})
export class Day2bchildComponent {

  @Input() channelName!: string

  // Output decorator is used when you want to send message out of the component. It is used together with the event emitter
  @Output() sendMessageEmitter = new EventEmitter()
  // The function that basically binds the target value to the emitter
  sendMessageToParent(event: any){
    this.sendMessageEmitter.emit(event.target.value);
  }

}
