import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss'],
})
export class LifecycleHooksComponent implements OnInit {
  isChild = false;
  channelName = '';

  constructor() {
    console.log('Parent constructor is called');
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

  ngOnInit(): void {
    console.log('Parent ngOnInit is called');
  }
}
