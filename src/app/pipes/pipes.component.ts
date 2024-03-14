import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent {
  amount = 223.4567;
  channelName = 'Tasha Accounts';
  mark = 0.8945;
  today = new Date();
  name = 'Kihahu Mutaga';
}
