import { Component } from '@angular/core';

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
}
