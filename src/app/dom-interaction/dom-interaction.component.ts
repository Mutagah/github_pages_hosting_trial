import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom-interaction',
  templateUrl: './dom-interaction.component.html',
  styleUrls: ['./dom-interaction.component.scss'],
})
export class DomInteractionComponent implements OnInit {
  /* @ViewChild seeks to solve the issue of using an event every time so as to access a DOM element when using a template variable.
  @ViewChild accepts two parameters the first one is selector which is mandatory
   >>In this case it is the template reference variable name
    NB: When we pass the template reference variable directly, we get access to the element but when accessing it through ViewChild, we can access the element through its reference. In this case the ".nativeElement method"
    >>Using @ViewChild, we can also access components
   */
  @ViewChild('myInput', { static: true }) myCustomInput: any;

  ngOnInit(): void {
    // With this the input element is focused when we click on it
    this.myCustomInput.nativeElement.focus();
  }
  sendInput(input: any, channel: any) {
    // Accessing the value of the input via a template Variable
    // Input is the element itself in this case the input element
    console.log(input.value);
    console.log(channel.innerText);
  }
}
