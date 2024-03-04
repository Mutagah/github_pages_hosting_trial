import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  Input,
  DoCheck,
  AfterContentInit,
  ContentChild,
  AfterViewChecked,
  AfterViewInit,
  AfterContentChecked,
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks-child',
  templateUrl: './lifecycle-hooks-child.component.html',
  styleUrls: ['./lifecycle-hooks-child.component.scss'],
})
export class LifecycleHooksChildComponent
  implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit,  AfterContentChecked,AfterViewInit,AfterViewChecked
{
  /* ContentChild decorator is used to query for the first element or the directive matching the selector from the content DOM of the component.
  We are using the ContentChild decorator because the targeted data, would otherwise be accessed by ng-content directive.
  */
  @ContentChild('projectedContent') projectedContent: any;
  counter = 0;
  interval: any;
  @Input() channelName = '';
  // Constructor are called first
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
    console.log('Child Docheck is called');
  }
  // Will only be called once after the first doCheck and the variable cannot be accessed till the content is initialized
  ngAfterContentInit(): void {
    console.log('In After Content Init');
    console.log('After Content Init-' + this.projectedContent);
  }
  // Called after ngAfterContentInit() and every subsequent ngDoCheck
  ngAfterContentChecked(): void {
    console.log('In After Content Checked');
  }
  // Called once after the first ngAfterContentChecked
  ngAfterViewInit(): void {
    console.log('In After View Init');
  }
  // Called once ngAfterViewInit and after every subsequent ngAfterContentChecked
  ngAfterViewChecked(): void {
    console.log('In After View Checked');
  }
}
