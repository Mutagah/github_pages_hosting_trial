import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  Input,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks-child',
  templateUrl: './lifecycle-hooks-child.component.html',
  styleUrls: ['./lifecycle-hooks-child.component.scss'],
})
export class LifecycleHooksChildComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck
{
  // Constructor are called first
  counter = 0;
  interval: any;
  @Input() channelName = '';
  constructor() {
    console.log('Child Constructor is called');
  }
  ngOnInit(): void {
    console.log('Child OnInit is called');
    // With this, setInterval function will continue to run even if the component is destroyed.
    // This is reffered to as a memory leak.
    this.interval = setInterval(() => {
      this.counter = this.counter + 1;
      console.log(this.counter);
    }, 1000);
  }
  /*Ideal for cleaning any activities */
  ngOnDestroy(): void {
    // Cleans up the counter activity
    clearInterval(this.interval);
    console.log('child onDestroy is called');
  }
  // After every change in the input element, ngOnChanges also runs
  ngOnChanges(changes: SimpleChanges): void {
    // changes in this case is a variable of type SimpleChanges that can be used to make use of previous and current values.
    console.log('Child onChanges is called');
  }
  ngDoCheck(): void {
      console.log("Child Docheck is called")
  }
}
