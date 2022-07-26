import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Finance';
  public companies: any[] = [
    { id: 0, name: 'Available' },
    { id: 1, name: 'Ready' },
    { id: 2, name: 'Started' },
  ];
}
